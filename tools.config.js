// tools.config.js
// ─────────────────────────────────────────────
//  MYLE — Tools Registry
//
//  HOW TO ADD A NEW TOOL:
//  1. Drop your HTML file into the /tools/ folder
//  2. Add one entry to the array below
//  3. Save → It updates the dashboard automatically!
// ─────────────────────────────────────────────

export const tools = [
  {
    id: 'pul101-flashcards',
    title: 'PUL 101 Flashcards',
    subtitle: 'Legal Concepts',
    course: 'PUL 101',
    type: 'flashcards',       // flashcards | quiz | notes | case-law
    file: 'tools/pul101_flashcards.html',
    cards: 24,                // optional stat shown on card
    added: '2026-06-01',
  },
  {
    id: 'case-law-chieftaincy',
    title: 'Case Law Practice',
    subtitle: 'Chieftaincy Law',
    course: 'PUL 101',
    type: 'case-law',
    file: 'tools/case_law_practice.html',
    cases: 12,
    added: '2026-06-01',
  },
];

// Type → icon + label mapping optimized for Brown palette accents
export const typeConfig = {
  'flashcards': { icon: 'fa-layer-group', label: 'Flashcards', color: '#A78B71' }, // Warm Taupe
  'quiz':       { icon: 'fa-pen-to-square', label: 'Quiz',       color: '#C97D60' }, // Terracotta
  'case-law':   { icon: 'fa-scale-balanced', label: 'Case Law',   color: '#8C6D53' }, // Coffee Wood
  'notes':      { icon: 'fa-file-lines', label: 'Notes',      color: '#B0A295' }, // Stone Grey
};
