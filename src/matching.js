// Transparent, deterministic mock matching for the UI prototype.
// Replace these helpers with a backend match-explanation DTO when real matching is integrated.

const seekerProfiles = {
  student: {
    name: 'Arif Hasan',
    topics: ['NLP', 'Retrieval-Augmented Generation', 'LLMs', 'Research tools'],
    skills: ['Python', 'FastAPI', 'Vector Search'],
    availability: '4–6 hrs / week',
    goal: 'Join a practical, reproducible research team and build reliable research tools.',
  },
  faculty: {
    name: 'Nadia Rahman',
    topics: ['Medical AI', 'Computer Vision', 'Explainable AI', 'Healthcare research'],
    skills: ['PyTorch', 'Computer Vision', 'Research Design'],
    availability: '5–7 hrs / week',
    goal: 'Find motivated collaborators for explainable healthcare AI research.',
  },
};

const topicFamilies = {
  ai: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 'computer vision', 'explainable', 'nlp', 'llm', 'retrieval augmented', 'rag', 'bioinformatics'],
  health: ['medical', 'health', 'pharmacy', 'clinical', 'drug discovery', 'epidemiology', 'bioinformatics'],
  data: ['data', 'vector', 'retrieval', 'search', 'sql', 'python', 'statistics', 'dataset', 'ml ops', 'pipeline'],
  experience: ['research design', 'research methods', 'literature review', 'survey', 'evaluation', 'mixed methods'],
  product: ['hci', 'ux', 'accessibility', 'usability', 'react', 'research tools'],
  sensors: ['iot', 'sensor', 'embedded', 'signal processing', 'time series', 'climate'],
};

const clean = (value = '') => String(value).toLowerCase().replace(/[^a-z0-9+ ]/g, ' ').replace(/\s+/g, ' ').trim();
const includesTerm = (text, term) => clean(text).includes(clean(term));
const unique = (items) => [...new Set(items)];

function topicSignal(candidateTopics, seekerTopics) {
  const candidate = candidateTopics || [];
  const exact = candidate.filter((topic) => seekerTopics.some((mine) => clean(topic) === clean(mine) || includesTerm(topic, mine) || includesTerm(mine, topic)));
  if (exact.length) {
    return {
      score: Math.min(98, 89 + exact.length * 3),
      detail: {
        en: `Direct topic overlap: ${unique(exact).slice(0, 2).join(', ')}. This is the clearest shared research signal.`,
        bn: `সরাসরি গবেষণার বিষয় মিলে যায়: ${unique(exact).slice(0, 2).join(', ')}। এটিই সবচেয়ে শক্তিশালী মিলের সংকেত।`,
      },
    };
  }
  const candidateText = candidate.join(' ');
  const sharedFamilies = Object.entries(topicFamilies).filter(([, terms]) => terms.some((term) => includesTerm(candidateText, term)) && terms.some((term) => seekerTopics.some((topic) => includesTerm(topic, term))));
  if (sharedFamilies.length) {
    const labels = { ai: 'AI/ML', health: 'health research', data: 'data/retrieval', experience: 'research methods', product: 'research tools/UX', sensors: 'sensing/data systems' };
    const familyNames = sharedFamilies.map(([key]) => labels[key]);
    return {
      score: Math.min(84, 69 + sharedFamilies.length * 5),
      detail: {
        en: `Adjacent research areas connect through ${familyNames.join(' and ')}. The topics are related, but not identical.`,
        bn: `${familyNames.join(' ও ')}-এর মাধ্যমে কাছাকাছি গবেষণার ক্ষেত্রের সংযোগ আছে। বিষয়গুলো সম্পর্কিত, তবে এক নয়।`,
      },
    };
  }
  return {
    score: 43,
    detail: {
      en: 'There is no strong direct topic overlap in the current mock profiles. The match may still be useful for an interdisciplinary project.',
      bn: 'বর্তমান নমুনা প্রোফাইলে সরাসরি বিষয়গত মিল কম। আন্তঃবিভাগীয় প্রজেক্টে তবুও সহযোগিতার সম্ভাবনা থাকতে পারে।',
    },
  };
}

function skillSignal(candidateSkills, seekerSkills) {
  const candidate = candidateSkills || [];
  const exact = candidate.filter((skill) => seekerSkills.some((mine) => clean(skill) === clean(mine)));
  if (exact.length) {
    return {
      score: Math.min(98, 86 + exact.length * 5),
      detail: {
        en: `Shared skills: ${unique(exact).slice(0, 3).join(', ')}. This can reduce ramp-up time and support hands-on contribution.`,
        bn: `দুজনেরই আছে এমন দক্ষতা: ${unique(exact).slice(0, 3).join(', ')}। এতে দ্রুত কাজ শুরু এবং বাস্তব অবদান রাখা সহজ হতে পারে।`,
      },
    };
  }
  const seekerHasEngineering = seekerSkills.some((s) => /python|fastapi|react|vector|sql|docker/i.test(s));
  const candidateHasResearch = candidate.some((s) => /statistics|research|literature|survey|evaluation|mixed methods|computer vision|pytorch/i.test(s));
  const candidateHasEngineering = candidate.some((s) => /python|fastapi|react|vector|sql|docker|data|matlab|iot/i.test(s));
  const seekerHasResearch = seekerSkills.some((s) => /research|statistics|survey|design|literature/i.test(s));
  if ((seekerHasEngineering && candidateHasResearch) || (seekerHasResearch && candidateHasEngineering)) {
    return {
      score: 82,
      detail: {
        en: `The skill sets look complementary: your profile covers ${seekerHasEngineering ? 'engineering/tooling' : 'research methods'}, while this profile adds ${candidateHasResearch ? 'research or domain methods' : 'technical implementation'}.`,
        bn: `দক্ষতাগুলো পরস্পরকে সম্পূরক করতে পারে: আপনার প্রোফাইলে ${seekerHasEngineering ? 'ইঞ্জিনিয়ারিং/টুলিং' : 'গবেষণা পদ্ধতি'} আছে, আর এই প্রোফাইলে ${candidateHasResearch ? 'গবেষণা বা ডোমেইন-ভিত্তিক পদ্ধতি' : 'প্রযুক্তিগত বাস্তবায়ন'} যোগ হতে পারে।`,
      },
    };
  }
  return {
    score: 58,
    detail: {
      en: 'The listed skills are different. A useful collaboration would depend on whether the project needs this distinct expertise.',
      bn: 'তালিকাভুক্ত দক্ষতাগুলো আলাদা। প্রজেক্টে এই বিশেষ দক্ষতার প্রয়োজন আছে কি না, তার ওপর সহযোগিতার উপযোগিতা নির্ভর করবে।',
    },
  };
}

function availabilitySignal(value = '', mode = 'student') {
  const text = clean(value);
  if (text.includes('open')) return { score: 94, detail: { en: 'The researcher explicitly indicates openness to collaboration. Confirm the actual weekly schedule before starting.', bn: 'গবেষক সহযোগিতায় আগ্রহী বলে উল্লেখ করেছেন। কাজ শুরুর আগে প্রকৃত সাপ্তাহিক সময় নিশ্চিত করুন।' } };
  const numbers = (text.match(/\d+/g) || []).map(Number);
  const expected = mode === 'faculty' ? [5, 7] : [4, 6];
  if (numbers.length) {
    const candidateMin = numbers[0];
    const candidateMax = numbers.length > 1 ? numbers[1] : numbers[0];
    const overlap = Math.max(0, Math.min(candidateMax, expected[1]) - Math.max(candidateMin, expected[0]));
    const touches = candidateMax >= expected[0] && candidateMin <= expected[1];
    const score = touches ? Math.min(96, 84 + overlap * 5 + (candidateMin === expected[0] && candidateMax === expected[1] ? 4 : 0)) : 58;
    return {
      score,
      detail: {
        en: `Listed availability is ${value}. It ${touches ? 'overlaps with' : 'does not clearly overlap with'} the demo profile’s ${expected[0]}–${expected[1]} hours per week preference; confirm exact meeting times and workload.`,
        bn: `উল্লেখ করা সময় ${value}। এটি নমুনা প্রোফাইলের সপ্তাহে ${expected[0]}–${expected[1]} ঘণ্টার পছন্দের সময়ের সঙ্গে ${touches ? 'মিলে যায়' : 'স্পষ্টভাবে মেলে না'}; নির্দিষ্ট মিটিং ও কাজের সময় নিশ্চিত করুন।`,
      },
    };
  }
  return { score: 66, detail: { en: 'Availability information is limited. Ask about weekly hours and timing before treating this as a strong match.', bn: 'সময় দেওয়ার তথ্য সীমিত। ভালো ম্যাচ হিসেবে ধরার আগে সাপ্তাহিক সময় ও সময়সূচি জেনে নিন।' } };
}

function goalSignal(person, mode) {
  if (mode === 'faculty') {
    if (person.role === 'Student' && (person.tags || []).some((tag) => /interdisciplinary|team|mentor|first collaboration/i.test(tag))) {
      return { score: 91, detail: { en: 'The profile signals interest in joining collaborative work, which aligns with recruiting student contributors.', bn: 'প্রোফাইলে দলগত গবেষণায় যোগ দেওয়ার আগ্রহ আছে, যা শিক্ষার্থী সহযোগী নেওয়ার লক্ষ্যের সঙ্গে মেলে।' } };
    }
    if (person.role === 'Student') return { score: 84, detail: { en: 'A student collaborator may bring hands-on implementation or domain support. Confirm their preferred role.', bn: 'একজন শিক্ষার্থী বাস্তবায়ন বা ডোমেইন-ভিত্তিক সহায়তা দিতে পারেন। তাঁর পছন্দের ভূমিকা নিশ্চিত করুন।' } };
    return { score: 78, detail: { en: 'Potential faculty-to-faculty collaboration; align research scope and mentoring expectations directly.', bn: 'শিক্ষক-শিক্ষক সহযোগিতার সম্ভাবনা আছে; গবেষণার পরিধি ও মেন্টরিংয়ের প্রত্যাশা সরাসরি মিলিয়ে নিন।' } };
  }
  if (person.role === 'Faculty' && /open to student|mentor|proposal|interdisciplinary/i.test(`${person.availability} ${(person.tags || []).join(' ')}`)) {
    return { score: 94, detail: { en: 'The faculty profile is open to student collaboration or mentoring, matching the demo goal of joining a guided research project.', bn: 'শিক্ষক প্রোফাইলে শিক্ষার্থী সহযোগিতা বা মেন্টরিংয়ের আগ্রহ আছে—নির্দেশনাসহ গবেষণায় যোগ দেওয়ার নমুনা লক্ষ্যের সঙ্গে এটি মেলে।' } };
  }
  if (person.role === 'Student') {
    return { score: 88, detail: { en: 'The profile indicates an active interest in team-based or interdisciplinary work, so a peer collaboration is plausible.', bn: 'প্রোফাইলে দলগত বা আন্তঃবিভাগীয় কাজের আগ্রহ দেখা যাচ্ছে, তাই সহ-শিক্ষার্থীর সঙ্গে সহযোগিতার সম্ভাবনা আছে।' } };
  }
  return { score: 73, detail: { en: 'The profile could add useful perspective, but the collaboration goal should be clarified in a first conversation.', bn: 'প্রোফাইলটি উপকারী দৃষ্টিভঙ্গি যোগ করতে পারে, তবে প্রথম আলোচনায় সহযোগিতার লক্ষ্য পরিষ্কার করা উচিত।' } };
}

export function getMockResearcherMatch(person, mode = 'student') {
  const seeker = seekerProfiles[mode] || seekerProfiles.student;
  const topic = topicSignal(person.interests, seeker.topics);
  const skills = skillSignal(person.skills, seeker.skills);
  const availability = availabilitySignal(person.availability, mode);
  const goal = goalSignal(person, mode);
  const score = Math.round(topic.score * 0.35 + skills.score * 0.30 + availability.score * 0.20 + goal.score * 0.15);
  const ordered = [topic, skills, availability, goal].sort((a, b) => b.score - a.score);
  return {
    score,
    summary: {
      en: `${person.name} is suggested because ${ordered[0].detail.en.charAt(0).toLowerCase()}${ordered[0].detail.en.slice(1)}`,
      bn: `${person.name}-কে প্রস্তাব করা হয়েছে, কারণ ${ordered[0].detail.bn}`,
    },
    factors: [
      { key: 'topic', score: topic.score, detail: topic.detail },
      { key: 'skills', score: skills.score, detail: skills.detail },
      { key: 'availability', score: availability.score, detail: availability.detail },
      { key: 'goal', score: goal.score, detail: goal.detail },
    ],
    caveat: {
      en: 'This is a transparent rule-based mock score, not an AI result or a judgement of research ability. Review the person’s profile and confirm fit directly.',
      bn: 'এটি নিয়মভিত্তিক নমুনা স্কোর—AI-এর ফলাফল বা গবেষণার সক্ষমতার মূল্যায়ন নয়। প্রোফাইল দেখে সরাসরি উপযুক্ততা নিশ্চিত করুন।',
    },
    seeker: seeker.name,
  };
}

export function getMockOpportunityMatch(item, mode = 'student') {
  const seeker = seekerProfiles[mode] || seekerProfiles.student;
  const topic = topicSignal([item.topic, item.title, item.description], seeker.topics);
  const skills = skillSignal(item.skills, seeker.skills);
  const availability = availabilitySignal(item.commitment, mode);
  const goal = mode === 'faculty'
    ? (item.role === 'Faculty-led'
      ? { score: 82, detail: { en: 'The faculty-led structure aligns with the demo mentor profile and allows selection of student contributors.', bn: 'শিক্ষক-নেতৃত্বাধীন কাঠামোটি নমুনা মেন্টর প্রোফাইলের সঙ্গে মানানসই এবং শিক্ষার্থী সহযোগী বাছাইয়ের সুযোগ দেয়।' } }
      : { score: 78, detail: { en: 'A student-led team may benefit from faculty guidance; check whether the project is seeking a mentor or technical collaborator.', bn: 'শিক্ষার্থী-নেতৃত্বাধীন দলটি শিক্ষক মেন্টরিং পেতে পারে; প্রজেক্টটি মেন্টর নাকি প্রযুক্তিগত সহযোগী খুঁজছে তা যাচাই করুন।' } })
    : (item.role === 'Student-led'
      ? { score: 92, detail: { en: 'The student-led format supports peer collaboration and gives you a chance to shape the project with other students.', bn: 'শিক্ষার্থী-নেতৃত্বাধীন কাঠামো সহ-শিক্ষার্থীদের সহযোগিতা এবং প্রজেক্ট গঠনে অংশ নেওয়ার সুযোগ দেয়।' } }
      : { score: 88, detail: { en: 'The faculty-led format offers a route to guided research and clearer supervision expectations.', bn: 'শিক্ষক-নেতৃত্বাধীন কাঠামো নির্দেশনাসহ গবেষণা এবং স্পষ্ট তত্ত্বাবধানের সুযোগ দিতে পারে।' } });
  const score = Math.round(topic.score * 0.35 + skills.score * 0.30 + availability.score * 0.20 + goal.score * 0.15);
  return {
    score,
    summary: {
      en: `This opportunity is suggested because its topic, required skills and working format align with the ${mode === 'faculty' ? 'faculty' : 'student'} demo profile.`,
      bn: `বিষয়, প্রয়োজনীয় দক্ষতা এবং কাজের ধরন নমুনা ${mode === 'faculty' ? 'শিক্ষক' : 'শিক্ষার্থী'} প্রোফাইলের সঙ্গে মেলে বলে এই সুযোগটি প্রস্তাব করা হয়েছে।`,
    },
    factors: [
      { key: 'topic', score: topic.score, detail: topic.detail },
      { key: 'skills', score: skills.score, detail: skills.detail },
      { key: 'availability', score: availability.score, detail: availability.detail },
      { key: 'goal', score: goal.score, detail: goal.detail },
    ],
    caveat: {
      en: 'Mock recommendation only. Check the project scope, ethics requirements, expected contribution and supervisor availability before applying.',
      bn: 'এটি শুধু নমুনা সুপারিশ। আবেদনের আগে প্রজেক্টের পরিধি, নৈতিকতার শর্ত, প্রত্যাশিত অবদান এবং সুপারভাইজারের প্রাপ্যতা যাচাই করুন।',
    },
    seeker: seeker.name,
  };
}
