export const researchers = [
  { id: 'r1', name: 'Nadia Rahman', title: 'Assistant Professor · CSE', role: 'Faculty', department: 'CSE', interests: ['Medical AI', 'Computer Vision', 'Explainable AI'], skills: ['PyTorch', 'Computer Vision', 'Research Design'], experience: '12 publications', availability: 'Open to student collaborators', fit: 96, initials: 'NR', color: 'sage', verified: true, bio: 'Works on interpretable machine learning for healthcare and responsible AI systems.', tags: ['Mentor', 'Medical AI'], collaborations: 18, rating: '4.9', ratingCount: 14 },
  { id: 'r2', name: 'Arif Hasan', title: 'Student Researcher · CSE', role: 'Student', department: 'CSE', interests: ['NLP', 'Retrieval-Augmented Generation', 'LLMs'], skills: ['Python', 'FastAPI', 'Vector Search'], experience: '2 projects', availability: '4–6 hrs / week', fit: 93, initials: 'AH', color: 'blue', verified: true, bio: 'Building practical language technology, document search and reliable AI assistants.', tags: ['Looking for a team'], collaborations: 3, rating: '4.8', ratingCount: 2 },
  { id: 'r3', name: 'Samia Karim', title: 'Student Researcher · Pharmacy', role: 'Student', department: 'Pharmacy', interests: ['Drug Discovery', 'Bioinformatics', 'Medical Data'], skills: ['R', 'Statistics', 'Literature Review'], experience: '1 project', availability: '6–8 hrs / week', fit: 91, initials: 'SK', color: 'rose', verified: true, bio: 'Interested in data-driven biomedical research and cross-disciplinary health projects.', tags: ['Interdisciplinary'], collaborations: 2, rating: '5.0', ratingCount: 1 },
  { id: 'r4', name: 'Mahmudul Islam', title: 'Associate Professor · EEE', role: 'Faculty', department: 'EEE', interests: ['IoT', 'Signal Processing', 'Embedded AI'], skills: ['MATLAB', 'IoT', 'Time-series Analysis'], experience: '21 publications', availability: 'Open to proposals', fit: 88, initials: 'MI', color: 'amber', verified: true, bio: 'Researches low-cost sensing systems and edge intelligence for real-world environments.', tags: ['Interdisciplinary'], collaborations: 11, rating: '4.7', ratingCount: 9 },
  { id: 'r5', name: 'Tasmia Jahan', title: 'Student Researcher · SWE', role: 'Student', department: 'SWE', interests: ['Human-Computer Interaction', 'Accessibility', 'UX Research'], skills: ['Figma', 'Usability Testing', 'React'], experience: '3 projects', availability: '3–5 hrs / week', fit: 86, initials: 'TJ', color: 'lilac', verified: true, bio: 'Designs inclusive digital experiences and studies how people use research tools.', tags: ['UX research'], collaborations: 5, rating: '4.9', ratingCount: 4 },
  { id: 'r6', name: 'Fahim Chowdhury', title: 'Student Researcher · Public Health', role: 'Student', department: 'Public Health', interests: ['Epidemiology', 'Health Informatics', 'Survey Research'], skills: ['SPSS', 'Survey Design', 'Data Cleaning'], experience: '1 project', availability: '5 hrs / week', fit: 84, initials: 'FC', color: 'mint', verified: false, bio: 'Interested in evidence-based public health interventions and health data systems.', tags: ['First collaboration'], collaborations: 1, rating: '—', ratingCount: 0 },
  { id: 'r7', name: 'Dr. Rafiq Ahmed', title: 'Professor · Business', role: 'Faculty', department: 'Business', interests: ['Digital Innovation', 'Responsible AI', 'Technology Adoption'], skills: ['Mixed Methods', 'Econometrics', 'Research Strategy'], experience: '34 publications', availability: 'Open to interdisciplinary work', fit: 80, initials: 'RA', color: 'blue', verified: true, bio: 'Studies how emerging technology changes organizational behavior and public outcomes.', tags: ['Research lead'], collaborations: 24, rating: '4.8', ratingCount: 20 },
  { id: 'r8', name: 'Nusrat Sultana', title: 'Student Researcher · CSE', role: 'Student', department: 'CSE', interests: ['Data Engineering', 'ML Operations', 'Climate Data'], skills: ['SQL', 'Python', 'Docker'], experience: '2 projects', availability: 'Weekend + 4 hrs / week', fit: 79, initials: 'NS', color: 'rose', verified: true, bio: 'Enjoys building reproducible data pipelines and reliable research infrastructure.', tags: ['Data engineering'], collaborations: 4, rating: '4.6', ratingCount: 3 },
];

export const seedOpportunities = [
  { id: 'o1', title: 'Explainable AI for Early Kidney Risk Prediction', creator: 'Nadia Rahman', role: 'Faculty-led', department: 'CSE × Public Health', topic: 'Medical AI', description: 'Explore interpretable ML models using de-identified clinical features and compare how explanations affect model usefulness.', skills: ['Python', 'Machine Learning', 'Statistics'], openings: 2, commitment: '5–7 hrs / week', duration: '12 weeks', stage: 'Data exploration', deadline: 'Nov 28, 2026', status: 'Open', fit: 96, color: 'sage', applicants: 8, verified: true, type: 'Research project' },
  { id: 'o2', title: 'Bangla Research Paper Search Assistant', creator: 'Arif Hasan', role: 'Student-led', department: 'CSE', topic: 'NLP', description: 'Prototype a transparent semantic search tool for Bangla and English research documents with citation-aware retrieval.', skills: ['Python', 'FastAPI', 'Embeddings'], openings: 1, commitment: '4–6 hrs / week', duration: '8 weeks', stage: 'Prototype', deadline: 'Dec 02, 2026', status: 'Open', fit: 93, color: 'blue', applicants: 5, verified: true, type: 'Student team' },
  { id: 'o3', title: 'Low-cost Urban Air Quality Sensor Network', creator: 'Mahmudul Islam', role: 'Faculty-led', department: 'EEE × CSE', topic: 'IoT', description: 'Build a sensor data pipeline and compare local readings with publicly available reference datasets.', skills: ['IoT', 'Data Engineering', 'Time Series'], openings: 3, commitment: '6 hrs / week', duration: '1 semester', stage: 'Planning', deadline: 'Dec 05, 2026', status: 'Open', fit: 88, color: 'amber', applicants: 4, verified: true, type: 'Research project' },
  { id: 'o4', title: 'Accessible Research Collaboration Tools', creator: 'Tasmia Jahan', role: 'Student-led', department: 'SWE × CSE', topic: 'HCI', description: 'Run usability sessions and prototype accessible flows that help student researchers find collaborators.', skills: ['UX Research', 'Figma', 'React'], openings: 2, commitment: '3–5 hrs / week', duration: '6 weeks', stage: 'Recruiting', deadline: 'Nov 30, 2026', status: 'Open', fit: 86, color: 'lilac', applicants: 3, verified: true, type: 'Student team' },
  { id: 'o5', title: 'Public Health Survey Data Quality Study', creator: 'Fahim Chowdhury', role: 'Student-led', department: 'Public Health × Business', topic: 'Public Health', description: 'Create a repeatable data cleaning and missingness analysis workflow for a student-led survey study.', skills: ['Statistics', 'R', 'Survey Design'], openings: 1, commitment: '5 hrs / week', duration: '10 weeks', stage: 'Planning', deadline: 'Dec 10, 2026', status: 'Open', fit: 82, color: 'mint', applicants: 2, verified: false, type: 'Student team' },
  { id: 'o6', title: 'Reliable Evaluation for Retrieval-Augmented Generation', creator: 'Nadia Rahman', role: 'Faculty-led', department: 'CSE', topic: 'LLMs', description: 'Compare groundedness and retrieval quality metrics for research question answering systems.', skills: ['Python', 'LLMs', 'Evaluation'], openings: 2, commitment: '6 hrs / week', duration: '10 weeks', stage: 'Literature review', deadline: 'Dec 12, 2026', status: 'Open', fit: 89, color: 'blue', applicants: 6, verified: true, type: 'Research project' },
  { id: 'o7', title: 'Student Research Team: Climate Data Dashboard', creator: 'Nusrat Sultana', role: 'Student-led', department: 'CSE × EEE', topic: 'Climate Data', description: 'Create a clean data ingestion and visualization workflow for local climate and weather datasets.', skills: ['SQL', 'Python', 'Data Visualization'], openings: 2, commitment: '4 hrs / week', duration: '8 weeks', stage: 'Recruiting', deadline: 'Dec 15, 2026', status: 'Open', fit: 80, color: 'rose', applicants: 2, verified: true, type: 'Student team' },
  { id: 'o8', title: 'Responsible Technology Adoption in Higher Education', creator: 'Dr. Rafiq Ahmed', role: 'Faculty-led', department: 'Business × CSE', topic: 'Responsible AI', description: 'Study how students and faculty evaluate responsible use of AI in learning and research workflows.', skills: ['Survey Design', 'Mixed Methods', 'Data Analysis'], openings: 2, commitment: '3–4 hrs / week', duration: '1 semester', stage: 'Recruiting', deadline: 'Dec 08, 2026', status: 'Open', fit: 76, color: 'amber', applicants: 7, verified: true, type: 'Research project' },
];

export const seedProjects = [
  { id: 'p1', title: 'Explainable AI for Early Kidney Risk Prediction', lead: 'Nadia Rahman', members: 4, progress: 68, status: 'In progress', next: 'Model comparison review', date: 'Nov 20', color: 'sage', deliverables: 3, topic: 'Medical AI' },
  { id: 'p2', title: 'Bangla Research Paper Search Assistant', lead: 'Arif Hasan', members: 3, progress: 42, status: 'In progress', next: 'Retrieval baseline', date: 'Nov 22', color: 'blue', deliverables: 2, topic: 'NLP' },
  { id: 'p3', title: 'Accessible Research Collaboration Tools', lead: 'Tasmia Jahan', members: 3, progress: 90, status: 'Near completion', next: 'Final usability report', date: 'Nov 18', color: 'lilac', deliverables: 4, topic: 'HCI' },
];

export const seedRequests = [
  { id: 'q1', name: 'Samia Karim', initials: 'SK', color: 'rose', title: 'Join Kidney Risk Prediction project', detail: 'Pharmacy · Medical data', message: 'I can help with clinical context and literature review.', status: 'Pending', direction: 'incoming' },
  { id: 'q2', name: 'Arif Hasan', initials: 'AH', color: 'blue', title: 'Collaborate on Bangla paper search', detail: 'CSE · NLP', message: 'Looking for a teammate to help validate retrieval quality.', status: 'Pending', direction: 'incoming' },
  { id: 'q3', name: 'Nadia Rahman', initials: 'NR', color: 'sage', title: 'Invitation to AI evaluation study', detail: 'Faculty · CSE', message: 'Your profile matches the model evaluation role.', status: 'Accepted', direction: 'outgoing' },
];

export const seedActivities = [
  { id: 'a1', icon: 'check', color: 'sage', title: 'Milestone marked complete', detail: 'Literature mapping · Kidney Risk project', time: '2 hours ago' },
  { id: 'a2', icon: 'users', color: 'blue', title: 'New collaborator suggestion', detail: 'Samia Karim · 91% research fit', time: 'Yesterday' },
  { id: 'a3', icon: 'message', color: 'lilac', title: 'Feedback window opened', detail: 'Accessible Research Tools', time: 'Yesterday' },
  { id: 'a4', icon: 'file', color: 'amber', title: 'Contribution confirmed', detail: 'Dataset review · 2 collaborators confirmed', time: 'Nov 12' },
];

export const seedMessages = [
  { id: 'm1', name: 'Nadia Rahman', initials: 'NR', color: 'sage', role: 'Faculty · CSE', last: 'Can you share the comparison plan before Friday?', time: '10:42 AM', unread: true, messages: [{ from: 'them', text: 'The dataset review looks good. Next we should agree on the baseline models.', time: 'Yesterday, 4:12 PM' }, { from: 'me', text: 'I will prepare a comparison table for the meeting.', time: 'Yesterday, 4:25 PM' }, { from: 'them', text: 'Can you share the comparison plan before Friday?', time: 'Today, 10:42 AM' }] },
  { id: 'm2', name: 'Samia Karim', initials: 'SK', color: 'rose', role: 'Student · Pharmacy', last: 'I added the clinical terminology notes.', time: 'Yesterday', unread: false, messages: [{ from: 'them', text: 'I added the clinical terminology notes.', time: 'Yesterday, 2:10 PM' }] },
  { id: 'm3', name: 'Tasmia Jahan', initials: 'TJ', color: 'lilac', role: 'Student · SWE', last: 'The usability test script is ready.', time: 'Nov 13', unread: false, messages: [{ from: 'them', text: 'The usability test script is ready.', time: 'Nov 13, 11:18 AM' }] },
];

export const seedFeedback = [
  { id: 'f1', person: 'Tasmia Jahan', initials: 'TJ', color: 'lilac', project: 'Accessible Research Collaboration Tools', role: 'Student teammate', due: 'Nov 21, 2026', status: 'Pending', criteria: ['Communication', 'Reliability', 'Teamwork', 'Contribution'] },
  { id: 'f2', person: 'Nadia Rahman', initials: 'NR', color: 'sage', project: 'Explainable AI for Early Kidney Risk Prediction', role: 'Faculty mentor', due: 'Nov 25, 2026', status: 'Ready', criteria: ['Guidance', 'Communication', 'Fair credit', 'Availability'] },
];

export const seedAdminReports = [
  { id: 'rep1', subject: 'Potential duplicate opportunity', by: 'Student report', target: 'Bangla Research Paper Search Assistant', reason: 'Two postings appear to describe the same project.', priority: 'Normal', status: 'Open', date: 'Nov 15, 2026' },
  { id: 'rep2', subject: 'Feedback disputed', by: 'Private report', target: 'Project feedback · HCI study', reason: 'Reviewer states the feedback does not reflect a completed collaboration.', priority: 'High', status: 'Under review', date: 'Nov 14, 2026' },
  { id: 'rep3', subject: 'Affiliation needs verification', by: 'Automated check', target: 'Researcher profile · Business', reason: 'Current faculty affiliation could not be confirmed.', priority: 'Normal', status: 'Open', date: 'Nov 13, 2026' },
];

export const seedVerifications = [
  { id: 'v1', name: 'Dr. Sharmeen Akter', initials: 'SA', color: 'rose', kind: 'Faculty affiliation', dept: 'Public Health', submitted: '2 hours ago', docs: 'University email + department confirmation', status: 'Pending' },
  { id: 'v2', name: 'Raihan Kabir', initials: 'RK', color: 'blue', kind: 'Student affiliation', dept: 'CSE', submitted: 'Yesterday', docs: 'University email', status: 'Pending' },
  { id: 'v3', name: 'Dr. Tanvir Hossain', initials: 'TH', color: 'sage', kind: 'Faculty affiliation', dept: 'EEE', submitted: 'Nov 13, 2026', docs: 'University email + department confirmation', status: 'Pending' },
];

export const seedAdminUsers = [
  { id: 'u1', name: 'Nadia Rahman', initials: 'NR', color: 'sage', email: 'nadia.r@example.edu', role: 'Faculty', dept: 'CSE', status: 'Verified', joined: 'Jan 2026' },
  { id: 'u2', name: 'Arif Hasan', initials: 'AH', color: 'blue', email: 'arif.h@example.edu', role: 'Student', dept: 'CSE', status: 'Verified', joined: 'Feb 2026' },
  { id: 'u3', name: 'Samia Karim', initials: 'SK', color: 'rose', email: 'samia.k@example.edu', role: 'Student', dept: 'Pharmacy', status: 'Verified', joined: 'Mar 2026' },
  { id: 'u4', name: 'Raihan Kabir', initials: 'RK', color: 'amber', email: 'raihan.k@example.edu', role: 'Student', dept: 'CSE', status: 'Needs review', joined: 'Nov 2026' },
  { id: 'u5', name: 'Dr. Rafiq Ahmed', initials: 'RA', color: 'lilac', email: 'rafiq.a@example.edu', role: 'Faculty', dept: 'Business', status: 'Verified', joined: 'Jan 2026' },
];

export const seedAudit = [
  { id: 'au1', action: 'Affiliation review requested', actor: 'Verification service', target: 'Raihan Kabir', time: 'Today, 11:24 AM', status: 'Information' },
  { id: 'au2', action: 'Opportunity published', actor: 'Arif Hasan', target: 'Bangla Research Paper Search Assistant', time: 'Today, 9:08 AM', status: 'Success' },
  { id: 'au3', action: 'Feedback appeal opened', actor: 'Researcher', target: 'HCI study · Feedback record', time: 'Yesterday, 4:31 PM', status: 'Review' },
  { id: 'au4', action: 'Profile affiliation confirmed', actor: 'Admin reviewer', target: 'Nadia Rahman', time: 'Nov 13, 2026', status: 'Success' },
];

export const departments = ['All departments', 'CSE', 'SWE', 'EEE', 'Pharmacy', 'Public Health', 'Business'];
export const topics = ['Medical AI', 'NLP', 'Computer Vision', 'Explainable AI', 'Data Engineering', 'IoT', 'HCI', 'Public Health', 'Responsible AI'];
