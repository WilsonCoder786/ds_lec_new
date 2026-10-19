# Lab 01 — Quick start

## PowerPoint (main deliverable)

Open folder: **`pptx/`**

| File | Who | Purpose |
|------|-----|---------|
| `Lab01_A_Lecture_Detailed.pptx` | Class | ~58 easy, story-based student lecture slides |
| `Lab01_B_Teacher_Understanding.pptx` | You only | Prep, hints, marking (do not project) |
| `Lab01_C_Viva_Questions.pptx` | Class end / viva | Q → A with model answers |

**Prep order:** B → A (teach) → C (exit ticket / viva)

### Rebuild slides after edits

```bash
cd pptx-build
npm install
node build-deck-a.js
node build-deck-b.js
node build-deck-c.js
```

## Supporting files (markdown / script)

| File | Use |
|------|-----|
| `02_lab-manual.md` | Student manual text |
| `03_teacher-notes.md` | Timing & marking |
| `04_lecture-script-roman-urdu.md` | Speak while showing Deck A |
| `starter/Program.cs` | First project entry |

PDF copies (optional) may exist under `pdf/` — prefer **PowerPoint** for teaching.
