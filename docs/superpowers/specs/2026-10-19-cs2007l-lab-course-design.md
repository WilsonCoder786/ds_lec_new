# CS-2007L Data Structures Lab — Course Delivery Design

**Date:** 2026-10-19  
**Course:** Data Structures Lab (C#), CS-2007L, 1(0-3)  
**Institution context:** DHA Suffa University (aligned to official 2026 outline + Lab Manual 1)

## Goals

Build a complete teach + self-study package for the lab course:

- Student-facing English materials (manuals, lecture slides)
- Teacher prep (understanding slides, notes)
- Viva question slides
- Roman Urdu lecture/talking scripts (English technical terms kept)

## Decisions (locked)

| Decision | Choice |
|----------|--------|
| Role | Teaching + self-study |
| Package | Slides + lab manual + teacher notes + lecture scripts |
| Language | English (students) / Roman Urdu + EN terms (teacher scripts) |
| Syllabus fidelity | Same topics/order as official outline; polish pacing & tasks |
| Approach | Mirror + Upgrade (keep Lab 1 structure; upgrade delivery) |
| Build order | Lab 1 complete template first, then Labs 2–14 |

## Per-lab deliverables (template)

```
CS-2007L/LabXX/
  slides/
    A_lecture.md                 # projected in class
    B_teacher-understanding.md   # private prep
    C_viva-bank.md               # exit ticket / viva / quiz warm-up
  02_lab-manual.md
  03_teacher-notes.md
  04_lecture-script-roman-urdu.md
  starter/                       # optional skeleton
```

## Three slide decks

1. **A — Lecture:** ~20–25 slides, one idea each, live demo cues, no code dumps.
2. **B — Teacher understanding:** why, pitfalls, hint ladders, marking traps (Roman Urdu ok).
3. **C — Viva bank:** question → model answer, CLO-tagged, easy→hard.

## Lab 1 session (3 hours)

| Time | Block |
|------|--------|
| 0:00–0:15 | Hook + CLOs |
| 0:15–0:35 | Toolchain live |
| 0:35–0:55 | Debugger (Example 2) |
| 0:55–1:15 | Types + records (Ex 3–4) |
| 1:15–1:35 | Six ops (Ex 5) |
| 1:35–1:50 | Tradeoff (Ex 6) |
| 1:50–2:40 | Graded Tasks 1–4 |
| 2:40–2:55 | Extension / homework pointer |
| 2:55–3:00 | Exit ticket + AI disclosure |

## Rollout after Lab 1

1. Freeze Lab 1 quality bar from this package.
2. Replicate same mould for Labs 2–14 per weekly outline.
3. Add mid/final/CCP packs later.

## Out of scope (for now)

- PowerPoint/Google Slides binary files (markdown outlines first)
- Video recording
- Changing official CLO weights or week topic order
