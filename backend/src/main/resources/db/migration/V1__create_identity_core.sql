
-- =========================================================
-- V1: CREATE IDENTITY CORE
-- ResearchConnect DIU
-- PostgreSQL 18+
-- =========================================================


-- =========================================================
-- 1. GLOBAL ROLES
-- =========================================================

CREATE TABLE roles (
    code VARCHAR(30) PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT ck_roles_allowed_code
        CHECK (code IN ('STUDENT', 'FACULTY', 'ADMIN'))
);

INSERT INTO roles (code, description)
VALUES
    ('STUDENT', 'Student researcher account'),
    ('FACULTY', 'Faculty researcher account'),
    ('ADMIN', 'Platform administrator');


-- =========================================================
-- 2. USERS
-- =========================================================

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    email VARCHAR(320) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,

    account_status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',

    email_verified_at TIMESTAMPTZ NOT NULL,
    last_login_at TIMESTAMPTZ,

    version BIGINT NOT NULL DEFAULT 0,

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT uq_users_email
        UNIQUE (email),

    CONSTRAINT ck_users_email_normalized
        CHECK (email = LOWER(BTRIM(email))),

    CONSTRAINT ck_users_account_status
        CHECK (
            account_status IN (
                'ACTIVE',
                'SUSPENDED',
                'DEACTIVATED'
            )
        ),

    CONSTRAINT ck_users_version
        CHECK (version >= 0)
);


-- =========================================================
-- 3. USER ROLES
-- =========================================================

CREATE TABLE user_roles (
    user_id UUID NOT NULL,
    role_code VARCHAR(30) NOT NULL,

    granted_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    granted_by UUID,

    CONSTRAINT pk_user_roles
        PRIMARY KEY (user_id, role_code),

    CONSTRAINT fk_user_roles_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_user_roles_role
        FOREIGN KEY (role_code)
        REFERENCES roles(code)
        ON DELETE RESTRICT,

    CONSTRAINT fk_user_roles_granted_by
        FOREIGN KEY (granted_by)
        REFERENCES users(id)
        ON DELETE SET NULL
);

CREATE INDEX idx_user_roles_role_user
    ON user_roles (role_code, user_id);


-- =========================================================
-- 4. AFFILIATIONS
-- =========================================================

CREATE TABLE affiliations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    institution_code VARCHAR(30) NOT NULL DEFAULT 'DIU',

    institution_name VARCHAR(150) NOT NULL
        DEFAULT 'Daffodil International University',

    department_name VARCHAR(150),
    program_name VARCHAR(150),

    affiliation_type VARCHAR(20) NOT NULL,

    verification_status VARCHAR(20) NOT NULL DEFAULT 'PENDING',

    is_current BOOLEAN NOT NULL DEFAULT TRUE,

    verified_at TIMESTAMPTZ,
    verified_by UUID,

    submitted_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    version BIGINT NOT NULL DEFAULT 0,

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_affiliations_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_affiliations_verifier
        FOREIGN KEY (verified_by)
        REFERENCES users(id)
        ON DELETE SET NULL,

    CONSTRAINT ck_affiliations_type
        CHECK (
            affiliation_type IN ('STUDENT', 'FACULTY')
        ),

    CONSTRAINT ck_affiliations_verification
        CHECK (
            verification_status IN (
                'PENDING',
                'VERIFIED',
                'REJECTED',
                'EXPIRED'
            )
        ),

    CONSTRAINT ck_affiliations_verified_at
        CHECK (
            verification_status <> 'VERIFIED'
            OR verified_at IS NOT NULL
        ),

    CONSTRAINT ck_affiliations_version
        CHECK (version >= 0)
);


-- One current affiliation per user per affiliation type.
-- A user may have both current student and faculty affiliations.

CREATE UNIQUE INDEX uq_affiliations_current_user_type
    ON affiliations (user_id, affiliation_type)
    WHERE is_current = TRUE;


-- User affiliation history.

CREATE INDEX idx_affiliations_user_history
    ON affiliations (user_id, created_at DESC);


-- Admin verification queue.

CREATE INDEX idx_affiliations_pending_review
    ON affiliations (created_at ASC)
    WHERE verification_status = 'PENDING';


-- Verified researcher directory filtering.

CREATE INDEX idx_affiliations_verified_discovery
    ON affiliations (
        institution_code,
        affiliation_type,
        department_name,
        user_id
    )
    WHERE verification_status = 'VERIFIED'
      AND is_current = TRUE;


-- =========================================================
-- 5. RESEARCHER PROFILES
-- =========================================================

CREATE TABLE researcher_profiles (
    user_id UUID PRIMARY KEY,

    display_name VARCHAR(120) NOT NULL,
    biography TEXT,

    profile_visibility VARCHAR(20) NOT NULL DEFAULT 'PRIVATE',

    version BIGINT NOT NULL DEFAULT 0,

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_researcher_profiles_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT ck_profile_visibility
        CHECK (
            profile_visibility IN (
                'PRIVATE',
                'CAMPUS',
                'PUBLIC'
            )
        ),

    CONSTRAINT ck_researcher_profile_version
        CHECK (version >= 0)
);


CREATE INDEX idx_researcher_profiles_visibility_name
    ON researcher_profiles (
        profile_visibility,
        display_name,
        user_id
    );


-- =========================================================
-- 6. VERIFICATION RECORDS
-- =========================================================

CREATE TABLE verification_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,
    affiliation_id UUID,

    claim_type VARCHAR(40) NOT NULL,
    verification_method VARCHAR(50) NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',

    reviewer_id UUID,
    decision_reason TEXT,

    reviewed_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_verification_records_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_verification_records_affiliation
        FOREIGN KEY (affiliation_id)
        REFERENCES affiliations(id)
        ON DELETE SET NULL,

    CONSTRAINT fk_verification_records_reviewer
        FOREIGN KEY (reviewer_id)
        REFERENCES users(id)
        ON DELETE SET NULL,

    CONSTRAINT ck_verification_claim_type
        CHECK (
            claim_type IN (
                'STUDENT_AFFILIATION',
                'FACULTY_AFFILIATION'
            )
        ),

    CONSTRAINT ck_verification_status
        CHECK (
            status IN (
                'PENDING',
                'VERIFIED',
                'REJECTED',
                'EXPIRED'
            )
        )
);


CREATE INDEX idx_verification_records_user_history
    ON verification_records (user_id, created_at DESC);


CREATE INDEX idx_verification_records_pending_queue
    ON verification_records (created_at ASC)
    WHERE status = 'PENDING';


CREATE INDEX idx_verification_records_reviewer
    ON verification_records (reviewer_id);


-- =========================================================
-- END OF V1
-- =========================================================
