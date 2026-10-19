# Lab 1 — Teacher Notes

**Lab:** CS-2007L Week 1 · Introduction to C# Environment & Basic Data Organization  
**Duration:** 3 hours  
**Decks:** `slides/A_lecture.md` (project) · `B_teacher-understanding.md` (prep) · `C_viva-bank.md` (viva)  
**Script:** `04_lecture-script-roman-urdu.md`

## Before the lab (night before)

1. Read Deck B completely (~30–40 min).  
2. Rehearse Example 2 debugger path once on your machine.  
3. Confirm `.NET 8` on demo PC: `dotnet --version`.  
4. Print or pin rubric (2 + 3 + 2 + 3 = 10).  
5. Decide AI policy for this week (allowed with disclosure / not allowed) and announce once.

## Materials to open

| Order | File |
|-------|------|
| 1 | Deck B (private) |
| 2 | Deck A + Roman Urdu script |
| 3 | Lab manual / examples |
| 4 | Deck C for last 5 minutes |

## 3-hour timeline (with buffers)

| Clock | Block | Deck A slides | Notes |
|-------|--------|---------------|--------|
| 0:00–0:15 | Hook + outcomes | 1–3 | Keep short; energy high |
| 0:15–0:35 | Toolchain live | 4–8 | Every student must `dotnet run` once |
| 0:35–0:55 | Debugger | 9–11 | You drive; they follow |
| 0:55–1:15 | Types + records | 12–15 | Board drawing for heap |
| 1:15–1:35 | Six ops | 16–18 | Emphasize insert O(n) |
| 1:35–1:50 | Tradeoff | 19–20 | Release build reminder |
| 1:50–2:40 | Tasks 1–4 | 21 | Circulate; Task 4 = debugger |
| 2:40–2:55 | Wrap / homework | 22 | Tasks 5–6 + Q1–Q3 |
| 2:55–3:00 | Exit ticket | Deck C | 1–2 random Qs |

## Circulation priorities during Tasks 1–4

1. Students stuck on `dotnet` PATH  
2. Task 4 (force debugger use — not “guess the bug”)  
3. Task 2 `TryParse` loop  
4. Task 3 written parts (don’t let them skip)  

## Marking shortcuts

- **Excellent demo:** builds + shows breakpoint confidently  
- **Satisfactory:** runs with prompts  
- **Needs improvement:** cannot build or never opens debugger  

AI disclosure missing when AI was used → CLO-3 marks suffer.

## Pitfalls this week

- Top-level statements vs `Main` confusion → insist `--use-program-main` / “Do not use top-level statements”  
- Students pasting all examples without reading Observe notes  
- Example 6 timed in Debug → weird numbers  
- Task 5 early use of `List<T>` — redirect to arrays  

## Homework announcement (exact)

“Assignment block Labs 1–4 → Assignment 1. Lab 1 post-lab Q1–Q3 is part of that. Quiz 1 covers Labs 1–3.”

## After lab

- Note who only finished Tasks 1–2 (follow up)  
- Save any good student questions for next year’s Deck B  
- Prep Lab 2: frequency count + Big-O reading from theory lectures 4–6  
