
-- =========================================================
-- V2: CREATE AUTHENTICATION CHALLENGES
-- ResearchConnect DIU
-- PostgreSQL
-- =========================================================

-- Security:
-- Never store plaintext OTP or raw signup tokens.
-- HMAC-SHA-256 verifier: 32 bytes.
-- Signup-token digest: 32 bytes.
-- HMAC secrets must remain outside source control.

-- OTP policy:
-- 6 digits
-- 5 minutes expiry
-- 60 seconds resend cooldown
-- Maximum 5 failed attempts
-- Signup token: 10 minutes

-- =========================================================
-- 1. EMAIL OTP CHALLENGES
-- =========================================================

CREATE TABLE email_otp_challenges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    email VARCHAR(320) NOT NULL,

    account_type VARCHAR(20) NOT NULL,

    otp_verifier BYTEA NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',

    failed_attempts SMALLINT NOT NULL DEFAULT 0,

    expires_at TIMESTAMPTZ NOT NULL,
    resend_available_at TIMESTAMPTZ NOT NULL,

    verified_at TIMESTAMPTZ,
    closed_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT ck_email_otp_challenges_email_normalized
        CHECK (email = LOWER(BTRIM(email))),

    CONSTRAINT ck_email_otp_challenges_account_type
        CHECK (account_type IN ('STUDENT', 'FACULTY')),

    CONSTRAINT ck_email_otp_challenges_verifier_length
        CHECK (OCTET_LENGTH(otp_verifier) = 32),

    CONSTRAINT ck_email_otp_challenges_status
        CHECK (
            status IN (
                'PENDING',
                'VERIFIED',
                'EXPIRED',
                'LOCKED',
                'SUPERSEDED',
                'CONSUMED'
            )
        ),

    CONSTRAINT ck_email_otp_challenges_failed_attempts
        CHECK (failed_attempts >= 0),

    CONSTRAINT ck_email_otp_challenges_expiry
        CHECK (expires_at > created_at),

    CONSTRAINT ck_email_otp_challenges_resend_time
        CHECK (resend_available_at >= created_at),

    CONSTRAINT ck_email_otp_challenges_verified_time
        CHECK (
            verified_at IS NULL
            OR (
                verified_at >= created_at
                AND verified_at < expires_at
            )
        ),

    CONSTRAINT ck_email_otp_challenges_closed_time
        CHECK (
            closed_at IS NULL
            OR (
                closed_at >= created_at
                AND (
                    verified_at IS NULL
                    OR closed_at >= verified_at
                )
            )
        ),

    CONSTRAINT ck_email_otp_challenges_state_timestamps
        CHECK (
            (
                status = 'PENDING'
                AND verified_at IS NULL
                AND closed_at IS NULL
            )
            OR
            (
                status = 'VERIFIED'
                AND verified_at IS NOT NULL
                AND closed_at IS NULL
            )
            OR
            (
                status = 'CONSUMED'
                AND verified_at IS NOT NULL
                AND closed_at IS NOT NULL
            )
            OR
            (
                status IN ('EXPIRED', 'LOCKED', 'SUPERSEDED')
                AND closed_at IS NOT NULL
            )
        )
);


-- Only one active challenge per email at a time.
-- Resending must supersede the previous challenge first.

CREATE UNIQUE INDEX uq_email_otp_challenges_active_email
    ON email_otp_challenges (email)
    WHERE status IN ('PENDING', 'VERIFIED');


-- Pending OTP expiry cleanup.

CREATE INDEX idx_email_otp_challenges_pending_expiry
    ON email_otp_challenges (expires_at)
    WHERE status = 'PENDING';


-- Email challenge history.

CREATE INDEX idx_email_otp_challenges_email_created
    ON email_otp_challenges (email, created_at DESC);


-- =========================================================
-- 2. SINGLE-USE SIGNUP TOKENS
-- =========================================================

CREATE TABLE signup_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    challenge_id UUID NOT NULL,

    token_digest BYTEA NOT NULL,

    issued_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMPTZ NOT NULL,

    consumed_at TIMESTAMPTZ,
    revoked_at TIMESTAMPTZ,

    CONSTRAINT uq_signup_tokens_challenge
        UNIQUE (challenge_id),

    CONSTRAINT uq_signup_tokens_token_digest
        UNIQUE (token_digest),

    CONSTRAINT fk_signup_tokens_challenge
        FOREIGN KEY (challenge_id)
        REFERENCES email_otp_challenges(id)
        ON DELETE RESTRICT,

    CONSTRAINT ck_signup_tokens_digest_length
        CHECK (OCTET_LENGTH(token_digest) = 32),

    CONSTRAINT ck_signup_tokens_expiry
        CHECK (expires_at > issued_at),

    CONSTRAINT ck_signup_tokens_consumed_time
        CHECK (
            consumed_at IS NULL
            OR consumed_at >= issued_at
        ),

    CONSTRAINT ck_signup_tokens_revoked_time
        CHECK (
            revoked_at IS NULL
            OR revoked_at >= issued_at
        ),

    CONSTRAINT ck_signup_tokens_terminal_state
        CHECK (
            consumed_at IS NULL
            OR revoked_at IS NULL
        ),

    CONSTRAINT ck_signup_tokens_consumed_before_expiry
        CHECK (
            consumed_at IS NULL
            OR consumed_at < expires_at
        )
);


-- Outstanding token expiry cleanup.

CREATE INDEX idx_signup_tokens_outstanding_expiry
    ON signup_tokens (expires_at)
    WHERE consumed_at IS NULL
      AND revoked_at IS NULL;


-- =========================================================
-- 3. DOCUMENTATION
-- =========================================================

COMMENT ON TABLE email_otp_challenges IS
    'Signup OTP challenges. Stores only an HMAC-SHA-256 verifier.';

COMMENT ON COLUMN email_otp_challenges.resend_available_at IS
    'Earliest time when another OTP resend is permitted.';

COMMENT ON COLUMN email_otp_challenges.failed_attempts IS
    'Failed OTP verification counter. Configured maximum is enforced by the application.';

COMMENT ON COLUMN email_otp_challenges.account_type IS
    'Requested account type. Email verification does not prove university affiliation.';

COMMENT ON TABLE signup_tokens IS
    'Single-use signup tokens. Stores only a digest/HMAC, never the raw token.';

COMMENT ON COLUMN signup_tokens.token_digest IS
    '32-byte digest/HMAC of the high-entropy signup token.';


-- =========================================================
-- END OF V2
-- =========================================================
