// Static page content. Move to a CMS/JSON source if it needs to be edited without a deploy.

const performerScores: [string, string][] = [
  ['Praveena Kurada', '100'],
  ['Pravallika Chirla', '97'],
  ['Jakkamsetti Jahnavi', '96.67'],
  ['Praneeth Ratnala', '96.67'],
  ['Chandu Pilla', '96.33'],
  ['Jaya Sai Satish Tippana', '96'],
  ['Veera Venkata Sesha Anupriya Vallem', '95'],
  ['Manoj Kalivarapu', '93'],
  ['Preethi Kaur', '91'],
  ['Rekha L', '89.33'],
  ['Anika Prasad', '89'],
]

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export const performers = performerScores.map(([name, score], i) => ({
  name,
  score,
  rank: i + 1,
  initials: initials(name),
}))

export const podiumColors = ['#DFF1FB', '#ECE4FB', '#E2E5FC']

const languages = [
  'Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Go', 'C', 'C#', 'Rust',
  'Ruby', 'Kotlin', 'Swift', 'PHP', 'Bash', 'Assembly', 'Elixir', 'R', 'PowerShell',
]

const tools = [
  'React', 'Vue.js', 'Angular', 'Node.js', 'npm', 'HTML5', 'CSS3', 'jQuery', 'Redux', 'Git',
  'Docker', 'Kubernetes', 'Jenkins', 'Django', 'Laravel', 'GraphQL', 'Firebase', 'Figma',
  'MongoDB', 'AWS', 'Azure', 'OpenAI', 'Power BI', 'Tableau', 'Salesforce', 'Shopify',
  'HubSpot', 'IBM', 'Ansible', 'iOS', 'Unity', 'Unreal',
]

const sqlEngines = ['MySQL', 'PostgreSQL', 'SQLite', 'SQL Server', 'Oracle']

export const marqueeRows = [
  { label: 'Languages', items: languages, duration: 50, reverse: false, bg: '#E2E5FC', fg: '#2B37A8' },
  { label: 'Tools', items: tools, duration: 70, reverse: true, bg: '#ECE4FB', fg: '#5634B0' },
  { label: 'SQL engines', items: sqlEngines, duration: 30, reverse: false, bg: '#DFF1FB', fg: '#1A6E9C' },
]

export const signals = [
  { name: 'Identity', count: 6, color: '#A3ADF7', desc: 'Confirms the registered student is the one taking the exam.' },
  { name: 'Camera', count: 6, color: '#ECE4FB', desc: 'Monitors the webcam feed for the whole exam.' },
  { name: 'Browser', count: 10, color: '#A9D8F2', desc: 'Detects activity outside the exam window.' },
  { name: 'Media', count: 3, color: '#C9B8F2', desc: 'Monitors audio and connected media devices.' },
  { name: 'Recording', count: 2, color: '#DCE5F2', desc: 'Webcam and screen merged into one reviewable video.' },
]

export const aiStages = [
  {
    stage: 'Create',
    bg: '#ECE4FB',
    fg: '#5634B0',
    items: [
      { title: 'Syllabus-weighted papers', body: 'Balanced assessments without picking every question.' },
      { title: 'Coding question authoring', body: 'Starter and reference code, validated before publishing.' },
    ],
  },
  {
    stage: 'Deliver',
    bg: '#E2E5FC',
    fg: '#2B37A8',
    items: [
      { title: 'Résumé-based interviews', body: 'Personal questions for each student, not one script.' },
      { title: 'Computer-vision proctoring', body: 'Identity checks and monitoring in the browser.' },
    ],
  },
  {
    stage: 'Evaluate',
    bg: '#DFF1FB',
    fg: '#1A6E9C',
    items: [
      { title: 'Consistent interview scoring', body: 'Same criteria across the batch, with feedback for each student.' },
      { title: 'Insight reports', body: 'Strengths, weak topics and what to improve next.' },
    ],
  },
]

// TODO: questions 8 and 9 are placeholders pending client input.
export const faqs: [string, string][] = [
  ['What types of assessments can we run?', 'Three formats: technical and aptitude MCQs, hands-on coding assessments and spoken AI interviews. All three share the same scheduling, proctoring and reporting workflow.'],
  ['Do we need to write all the questions ourselves?', 'No. You can start from over a million platform questions and 17,000+ coding problems, use a saved template, or add your own.'],
  ['Does proctoring need any software installed?', 'No. Proctoring runs in the student’s browser.'],
  ['How do you verify a student’s identity?', 'Identity checks run through the webcam, with six identity signals tracked during the exam.'],
  ['Does every student get the same AI interview?', 'No. Questions are generated from each student’s résumé, and follow-ups depend on their answers.'],
  ['Which programming languages can students use?', '18 programming languages and 5 SQL engines: MySQL, PostgreSQL, SQLite, SQL Server and Oracle.'],
  ['Can we upload our own question bank?', 'Yes. You can create or bulk-upload MCQ, coding and AI interview questions.'],
  ['How many students can take an assessment at once?', 'Answer to be added by the Evalent team.'],
  ['What happens if a student’s connection drops?', 'Answer to be added by the Evalent team.'],
  ['Who can see results, and when?', 'College Admins publish results when they are ready. Students then see their scores and improvement areas, and Super Admins see readiness across the institution.'],
  ['What support is available?', 'Our team supports setup and live assessments Monday to Friday, 9:00–18:00.'],
]
