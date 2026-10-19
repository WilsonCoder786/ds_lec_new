/**
 * Deck C — Viva / exit-ticket PowerPoint — Lab 1
 * Pattern: Question slide → Answer slide (detailed, student-friendly)
 */
const PptxGenJS = require("pptxgenjs");
const { theme, addFooter, titleBar, callout } = require("./theme");
const path = require("path");

const FOOTER = "CS-2007L · Lab 1 · Easy Viva Practice";

const BANK = [
  {
    clo: "CLO-1 · Easy",
    q: "What is the difference between the C# compiler and the CLR?",
    a: "Compiler (build time): translates your .cs source into IL (often a .dll) and reports compile errors.\n\nCLR (run time): loads IL, JIT-compiles it to machine code, runs the program, and manages memory (garbage collection).\n\nShort line: Compiler translates. CLR runs.",
  },
  {
    clo: "CLO-1 · Easy",
    q: "What does `dotnet build` produce, and where is it stored?",
    a: "It produces a compiled IL assembly (and related build outputs).\n\nYou will find outputs mainly under the bin/ folder (with temporary files in obj/).\n\nDo NOT submit bin/ or obj/ — they are generated.",
  },
  {
    clo: "CLO-1 · Easy",
    q: "What is the difference between the SDK and the runtime?",
    a: "SDK (Software Development Kit): tools to create and build projects (`dotnet new`, `dotnet build`).\n\nRuntime: the engine needed to execute programs (includes the CLR).\n\nThis lab needs the .NET 8 SDK so you can develop.",
  },
  {
    clo: "CLO-1 · Easy",
    q: "In value-type assignment, what is copied?",
    a: "The value itself is copied into an independent variable.\n\nExample:\nint a = 10; int b = a; b = 99;\n→ a stays 10, b is 99.\n\nThey do not share storage.",
  },
  {
    clo: "CLO-1 · Medium",
    q: "After `int[] y = x; y[0] = 9;`, what is `x[0]`? Why?",
    a: "x[0] is also 9.\n\nReason: array assignment copies the reference (address), not a new array.\nBoth names point to the same object on the heap.\n\nTo get independence, use Clone() (extra memory).",
  },
  {
    clo: "CLO-1 · Easy",
    q: "Differentiate data, field, record, and file using attendance.",
    a: "Data: a raw value, e.g. \"Karachi\" or 3.14\nField: a named attribute/column, e.g. Age\nRecord: one entity’s fields together — one attendance row\nFile: many records stored together on disk — attendance.csv",
  },
  {
    clo: "CLO-1 · Medium",
    q: "Why does inserting into an array typically cost O(n)?",
    a: "An array has fixed length. Inserting usually means creating a larger array and copying/shifting elements so there is room for the new value.\n\nThe amount of copying grows with the number of elements n → O(n).",
  },
  {
    clo: "CLO-1 · Easy",
    q: "What is the typical cost of deleting at an index in an array?",
    a: "O(n).\n\nElements after the gap must shift left (or you copy into a smaller new array). Work grows with n.",
  },
  {
    clo: "CLO-1 · Medium",
    q: "When does Merge produce a correctly sorted result?",
    a: "When BOTH input arrays are already sorted.\n\nThen merge runs in O(n + m).\n\nIf inputs are unsorted, the code may still run, but the output order will be wrong — the precondition failed.",
  },
  {
    clo: "CLO-1 · Easy",
    q: "Syntax error vs logic error — give one example each.",
    a: "Syntax/compile: build fails. Example: misspelled variable → CS0103.\n\nLogic: program runs but answer is wrong. Example: loop uses i < n instead of i <= n so the last value is skipped.\n\nDebugger is mainly for logic errors.",
  },
  {
    clo: "CLO-2 · Medium",
    q: "Where would you set a breakpoint to debug SumToN, and what do you watch?",
    a: "Breakpoint on sum += i (or the loop line).\n\nWatch Locals: i and sum.\nStep with F10.\nCount how many times the body runs for n = 5.\nIf it never reaches i = 5, the condition is wrong.",
  },
  {
    clo: "CLO-2 · Medium",
    q: "What is the symptom of `i <= values.Length` in Average?",
    a: "A runtime exception: IndexOutOfRangeException.\n\nValid indices are 0 .. Length-1. When i becomes Length, the access is illegal.\n\nFix direction: i < values.Length.",
  },
  {
    clo: "CLO-2 · Medium",
    q: "Why can Maximum fail on an all-negative array if max starts at 0?",
    a: "No negative number is greater than 0, so the max variable never updates and stays 0 — which is wrong.\n\nExample: {-7,-3,-9} should return -3.\n\nThis is a logic error. Initialize max to values[0].",
  },
  {
    clo: "CLO-2 · Medium",
    q: "Why can Average return 5 instead of 5.5 for {4,5,6,7}?",
    a: "Integer division: total and Length are ints, so 22/4 becomes 5 (fraction discarded).\n\nFix: cast — (double)total / values.Length\n\nKind: logic error (no crash).",
  },
  {
    clo: "CLO-1 · Medium",
    q: "Why was HashSet faster in the tradeoff demo? What did it cost?",
    a: "After building the HashSet, membership tests are roughly O(1) each.\nLinear scan is O(n) per query.\n\nCost: extra memory — a second structure storing the elements (time–space tradeoff).",
  },
  {
    clo: "CLO-1 · Hard",
    q: "When would you accept a slower algorithm to save memory?",
    a: "On memory-limited devices (IoT / edge sensors), embedded systems, or when the dataset is so large that an extra HashSet will not fit.\n\nYou may choose linear scan / streaming even if slower — but results must still be correct.",
  },
  {
    clo: "CLO-3 · Easy",
    q: "Why do we write XML documentation comments?",
    a: "They document intent for humans and IDEs (tooltips).\nThey support CLO-3: responsible, professional, readable code.\n\nExample: /// <summary>…</summary>",
  },
  {
    clo: "CLO-3 · Medium",
    q: "If you used AI, what must you prove in disclosure + viva?",
    a: "Disclose tool + what you used it for.\nState what you changed or rejected.\nExplain how you verified (tests, debugger, expected output).\nBe able to explain every submitted line.\n\nUndisclosed AI use is an integrity issue.",
  },
];

async function build() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "LAYOUT_16x9", width: 10, height: 5.625 });
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "CS-2007L";
  pptx.title = "Lab 1 Easy Viva Practice";
  const f = theme().font;
  const c0 = theme().colors;
  const total = 2 + BANK.length * 2 + 2; // title, how-to, Q/A pairs, tips, end
  let n = 0;

  function foot(slide) {
    addFooter(pptx, slide, n, total, FOOTER);
  }

  {
    n++;
    const s = pptx.addSlide();
    s.background = { color: c0.navy };
    s.addText("Lab 1 · Easy Viva Practice", {
      x: 0.5, y: 1.6, w: 9, h: 0.7, fontSize: 32, bold: true, color: c0.white, align: "center", fontFace: f,
    });
    s.addText("Short questions · Clear answers · No panic", {
      x: 0.5, y: 2.5, w: 9, h: 0.4, fontSize: 18, color: "B8C9D9", align: "center", fontFace: f,
    });
    s.addText("Think first → then reveal the model answer", {
      x: 0.5, y: 4.5, w: 9, h: 0.35, fontSize: 14, color: c0.teal, align: "center", fontFace: f,
    });
  }

  {
    n++;
    const s = pptx.addSlide();
    s.background = { color: c0.light };
    titleBar(pptx, s, "How to use this deck", "Teacher tips");
    foot(s);
    const tips = [
      "Project QUESTION only first — students think aloud",
      "Then click to ANSWER — compare with their words",
      "Pick 2 random Qs as 3-minute exit ticket",
      "For formal viva: mix CLO-1 + one CLO-2 debug Q + CLO-3",
      "Don’t read answers robotically — ask follow-ups (“show on your laptop”)",
    ];
    tips.forEach((t, i) => {
      s.addText(`${i + 1}.  ${t}`, {
        x: 0.5, y: 1.25 + i * 0.55, w: 9, h: 0.45, fontSize: 16, color: c0.ink, fontFace: f,
      });
    });
  }

  BANK.forEach((item, idx) => {
    // Question
    {
      n++;
      const s = pptx.addSlide();
      s.background = { color: c0.light };
      titleBar(pptx, s, `Question ${idx + 1}`, item.clo);
      foot(s);
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y: 1.5, w: 9.0, h: 2.6, fill: { color: c0.white }, line: { color: c0.line }, rectRadius: 0.12,
      });
      s.addText(item.q, {
        x: 0.8, y: 1.9, w: 8.4, h: 1.8, fontSize: 22, bold: true, color: c0.navy, align: "center", fontFace: f, valign: "middle",
      });
      s.addText("Take a breath · Answer in simple English · Give a tiny example if you can", {
        x: 0.5, y: 4.3, w: 9, h: 0.35, fontSize: 13, italic: true, color: c0.muted, align: "center", fontFace: f,
      });
    }
    // Answer
    {
      n++;
      const s = pptx.addSlide();
      s.background = { color: c0.light };
      titleBar(pptx, s, `Easy answer ${idx + 1}`, item.clo);
      foot(s);
      callout(pptx, s, 0.4, 1.15, 9.2, 3.5, "Say it like this (simple & clear)", item.a, c0.white);
    }
  });

  {
    n++;
    const s = pptx.addSlide();
    s.background = { color: c0.light };
    titleBar(pptx, s, "Suggested exit-ticket sets", "Pick one set (2 questions)");
    foot(s);
    callout(pptx, s, 0.4, 1.2, 4.4, 3.2, "Set A (basics)", "Q1 Compiler vs CLR\n+ Q5 value/reference array", c0.white);
    callout(pptx, s, 5.1, 1.2, 4.4, 3.2, "Set B (ops + tradeoff)", "Q7 Insert O(n)\n+ Q15 HashSet cost", c0.white);
  }

  {
    n++;
    const s = pptx.addSlide();
    s.background = { color: c0.navy };
    s.addText("Viva tip for students", {
      x: 0.5, y: 1.8, w: 9, h: 0.5, fontSize: 28, bold: true, color: c0.white, align: "center", fontFace: f,
    });
    s.addText("Short clear sentences  ·  Give an example  ·  Say the cost if asked\nIf unsure: explain what you WOULD test next", {
      x: 0.8, y: 2.6, w: 8.4, h: 1.0, fontSize: 16, color: "B8C9D9", align: "center", fontFace: f,
    });
  }

  const out = path.join(__dirname, "..", "pptx", "Lab01_C_Viva_Questions.pptx");
  await pptx.writeFile({ fileName: out });
  console.log("Wrote", out, "slides≈", n);
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
