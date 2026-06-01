# MYLE — My Learning Hub
> Free study tools · University of Nigeria, Enugu Campus · 100L Law

## How to add a new study tool

1. Generate an HTML file with Claude from your lecture notes
2. Save it to `/tools/your_file.html`
3. Open `dashboard.html` and find the `tools` array near the bottom in the `<script>` tag
4. Add one entry:
```js
{
  id: 'unique-id',
  title: 'Tool Title',
  subtitle: 'Brief description',
  course: 'PUL 101',
  type: 'quiz',           // flashcards | quiz | case-law | notes
  file: 'tools/your_file.html',
  count: 20,
  countLabel: 'questions',
  added: '2026-06-XX',
},
```
5. Push to Git — Netlify deploys automatically

## Deploy
- Hosted on Netlify: https://myleapp.netlify.app
- Auto-deploys on `git push`

## Termux push command
```bash
git add . && git commit -m "add: new tool" && git push
```
