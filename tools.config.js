// tools.config.js
export const tools = [
  {
    id: 'literary-concepts',
    title: 'Literary Concepts',
    subtitle: 'Units 1–3 · Concept of Literature, Oral Forms & Genres',
    course: 'LIT 100L',
    type: 'flashcards',
    file: 'tools/literary_concepts.html',
    count: 40,
    countLabel: 'cards',
    added: '2026-06-02',
  },
  {
    id: 'pul101-flashcards',
    title: 'PUL 101 Flashcards',
    subtitle: 'Legal Concepts',
    course: 'PUL 101',
    type: 'flashcards',
    file: 'tools/pul101_flashcards.html',
    count: 24,
    countLabel: 'cards',
    added: '2026-06-01',
  },
  {
    id: 'case-law-chieftaincy',
    title: 'Case Law Practice',
    subtitle: 'Chieftaincy Law',
    course: 'PUL 101',
    type: 'case-law',
    file: 'tools/case_law_practice.html',
    count: 12,
    countLabel: 'cases',
    added: '2026-06-01',
  },
];

export const typeConfig = {
  flashcards: { icon: 'fa-layer-group', label: 'Flashcards', color: '#A78B71' },
  quiz:       { icon: 'fa-pen-to-square', label: 'Quiz',       color: '#C97D60' },
  'case-law': { icon: 'fa-scale-balanced', label: 'Case Law',   color: '#8C6D53' },
  notes:      { icon: 'fa-file-lines', label: 'Notes',      color: '#B0A295' },
};