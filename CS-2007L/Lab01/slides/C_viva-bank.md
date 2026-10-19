# Lab 1 — Viva / Exit-Ticket Slides (Deck C)

**Use:** last 5 minutes, random viva, Quiz 1 warm-up.  
**Format:** Question slide → Answer slide.  
**Tag:** CLO + difficulty.

Tip: Class mein sirf Question project karo; Answer speaker notes / next click.

---

## Q1 — Compiler vs CLR?  
**CLO-1 · Easy**

**Answer:**  
Compiler translates C# source into IL (e.g. `.dll`).  
CLR loads IL, JIT-compiles to machine code, runs it, and manages memory (GC).

---

## Q2 — `dotnet build` produces what, where?  
**CLO-1 · Easy**

**Answer:**  
Compiled assembly (IL) under `bin/` (and intermediates in `obj/`).  
Those folders are generated — do not submit them.

---

## Q3 — Value-type assignment copies what?  
**CLO-1 · Easy**

**Answer:**  
The **value** itself. Changing the copy does not change the original  
(e.g. `int b = a; b = 99;` leaves `a` unchanged).

---

## Q4 — `int[] y = x; y[0] = 9;` — what is `x[0]`?  
**CLO-1 · Medium**

**Answer:**  
`x[0]` is also `9`. Assignment copied the **reference**; both names point to one array on the heap.

---

## Q5 — Field vs record vs file (attendance)  
**CLO-1 · Easy**

**Answer:**  
- Field: column `Age`  
- Record: one student’s attendance row  
- File: `attendance.csv` on disk  
- Data: a raw value like `3.14` or `"Karachi"`

---

## Q6 — Why is array insert typically O(n)?  
**CLO-1 · Medium**

**Answer:**  
Later elements must shift right (or you allocate a new larger array and copy). Work grows with the number of elements.

---

## Q7 — Typical cost of delete at an index?  
**CLO-1 · Easy**

**Answer:**  
O(n) — elements after the gap must shift left (or copy into a smaller array).

---

## Q8 — When does Merge work correctly?  
**CLO-1 · Medium**

**Answer:**  
When **both** input arrays are already sorted. Merge then runs in O(n + m).

---

## Q9 — Syntax error vs logic error  
**CLO-1 · Easy**

**Answer:**  
Syntax/compile: build fails (e.g. misspelled name → CS0103).  
Logic: program runs but wrong result (e.g. `i < n` instead of `i <= n`).  
Debugger helps find logic errors.

---

## Q10 — Where do you breakpoint in SumToN?  
**CLO-2 · Medium**

**Answer:**  
On `sum += i` (or the loop condition). Watch `i` and `sum`; count how many times the body runs for `n = 5`.

---

## Q11 — Symptom of `i <= values.Length` in Average?  
**CLO-2 · Medium**

**Answer:**  
**Runtime** error: `IndexOutOfRangeException` when `i == Length` (valid indices are `0 .. Length-1`).

---

## Q12 — Why does Maximum fail on all-negative arrays?  
**CLO-2 · Medium**

**Answer:**  
`max` starts at `0`. No negative value is `> 0`, so it returns 0 instead of the true maximum (e.g. `-3`).  
**Logic** error. Fix: initialize `max` to `values[0]`.

---

## Q13 — Why is HashSet faster? What did it cost?  
**CLO-1 · Medium (C4)**

**Answer:**  
HashSet answers membership in roughly O(1) after building the set.  
Cost: **extra memory** storing another copy of the elements (time–space tradeoff).

---

## Q14 — When accept slower code to save memory?  
**CLO-1 · Hard**

**Answer:**  
Memory-limited devices (IoT / edge sensors), embedded constraints, or huge datasets where an extra HashSet will not fit. Prefer linear scan or streaming algorithms.

---

## Q15 — XML comments link to which CLO?  
**CLO-3 · Easy**

**Answer:**  
CLO-3 — responsible, documented, professional practice (and AI disclosure habits).

---

## Q16 — If you used AI, what must you prove?  
**CLO-3 · Medium**

**Answer:**  
Disclose tool + purpose; show what you changed/rejected; verify with tests/debugger/expected output; explain every submitted line in viva.

---

## Exit-ticket set (pick 2 random)

- Q1 or Q2  
- Q4 or Q6  
- Q11 or Q13  

## Quiz 1 warm-up pack (Labs 1–3 later)

Keep Q1–Q9 + Q13; add Lab 2 Big-O items when ready.
