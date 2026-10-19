/**
 * Deck B — Teacher understanding (detailed prep) — Lab 1
 */
const PptxGenJS = require("pptxgenjs");
const { theme, addFooter, titleBar, callout } = require("./theme");
const path = require("path");

const TOTAL = 28;
const FOOTER = "CS-2007L · Lab 1 · Teacher Prep (Deck B) · PRIVATE";

function page(pptx, n, title, subtitle) {
  const c = theme().colors;
  const slide = pptx.addSlide();
  slide.background = { color: c.light };
  titleBar(pptx, slide, title, subtitle);
  addFooter(pptx, slide, n, TOTAL, FOOTER);
  return { slide, c };
}

async function build() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "LAYOUT_16x9", width: 10, height: 5.625 });
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "CS-2007L";
  pptx.title = "Lab 1 Teacher Understanding — PRIVATE";
  const f = theme().font;
  let n = 0;

  {
    n++;
    const c = theme().colors;
    const s = pptx.addSlide();
    s.background = { color: "3B1F0B" };
    s.addText("PRIVATE — DO NOT PROJECT", {
      x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 14, color: "FBBF24", align: "center", fontFace: f,
    });
    s.addText("Lab 1 · Teacher Understanding", {
      x: 0.5, y: 2.0, w: 9, h: 0.7, fontSize: 32, bold: true, color: c.white, align: "center", fontFace: f,
    });
    s.addText("Aapki prep · Roman Urdu + English terms\nHints, pitfalls, marking — students ko spoiler mat dena", {
      x: 0.8, y: 2.9, w: 8.4, h: 0.9, fontSize: 16, color: "E7C9A8", align: "center", fontFace: f,
    });
    s.addText("Deck B", {
      x: 0.5, y: 4.6, w: 9, h: 0.35, fontSize: 14, color: "FBBF24", align: "center", fontFace: f,
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Lab 1 — 6 cheezein stick honi chahiye", "Agar yeh clear → Quiz 1 soft");
    const items = [
      "C# pipeline: compiler vs CLR",
      "Value vs reference (array assign)",
      "Data / field / record / file",
      "6 ops + insert/delete O(n) intuition",
      "Debugger se logic bug",
      "HashSet = memory dekar time bachana",
    ];
    items.forEach((it, i) => {
      s.addText(`${i + 1}.  ${it}`, {
        x: 0.55, y: 1.25 + i * 0.5, w: 9, h: 0.4, fontSize: 17, color: c.ink, fontFace: f,
      });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "CLO marks map (/10 lab task)", "Marking fair + consistent");
    const rows = [
      ["Demo run + debugger", "CLO-2", "2"],
      ["Task completion", "CLO-2", "3"],
      ["Quality + AI disclosure", "CLO-3", "2"],
      ["Viva concepts", "CLO-1", "3"],
    ];
    rows.forEach((r, i) => {
      const y = 1.3 + i * 0.7;
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.4, y, w: 9.2, h: 0.58, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.06,
      });
      s.addText(r[0], { x: 0.6, y: y + 0.15, w: 5.5, h: 0.3, fontSize: 15, color: c.ink, fontFace: f });
      s.addText(r[1], { x: 6.3, y: y + 0.15, w: 1.4, h: 0.3, fontSize: 14, color: c.teal, fontFace: f });
      s.addText(r[2], { x: 8.0, y: y + 0.15, w: 1.3, h: 0.3, fontSize: 16, bold: true, color: c.navy, align: "right", fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "SDK vs Runtime — 30 second answer", "Students aksar mix karte hain");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "Bolne layak lines",
      "SDK = develop/build tools (dotnet new, build).\nRuntime = program chalane ka engine (CLR).\n\nAgar “dotnet not recognized”:\n1) SDK install check\n2) Terminal band karke kholo (PATH)\n3) Kabhi PC restart\n\nLab need: .NET 8.0.x SDK.", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Implicit usings — confusion fix", ".NET 8 feature, magic nahi");
    s.addText("Auto: System, IO, Linq, Collections.Generic", {
      x: 0.5, y: 1.3, w: 9, h: 0.4, fontSize: 16, bold: true, color: c.navy, fontFace: f,
    });
    s.addText("Explicit chahiye: Diagnostics (Stopwatch), Globalization", {
      x: 0.5, y: 1.9, w: 9, h: 0.4, fontSize: 16, color: c.ink, fontFace: f,
    });
    callout(pptx, s, 0.4, 2.6, 9.2, 1.8, "Teaching tip",
      "Pehle student ko CS0103 dikhao, phir using add karke “aha” moment do.\nCopy-paste using bandal avoid — samajh ke likhein.", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Board drawing — value vs reference", "2 minutes draw = 20 minutes confusion save");
    callout(pptx, s, 0.4, 1.2, 4.4, 3.2, "Value",
      "Box a: 10\nBox b: copy 10 → then 99\n\na alag rehta hai.\n\nKey word: VALUE COPY", c.white);
    callout(pptx, s, 5.1, 1.2, 4.4, 3.2, "Reference",
      "Arrow first ──┐\nArrow second ─┴→ [1,2,3] heap\n\nsecond[0]=99 → first bhi 99\n\nKey words: REFERENCE, HEAP", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "String trap", "Reference type lekin immutable");
    s.addText("Students expect array-like sharing. Galat.", {
      x: 0.5, y: 1.3, w: 9, h: 0.4, fontSize: 16, color: c.warn, fontFace: f,
    });
    callout(pptx, s, 0.4, 1.9, 9.2, 2.5, "Line jo yaad rakho",
      "s2 += \"!\" naya string object banata hai.\ns1 purana “DSU” rehta hai.\n\nViva: “string reference hai, lekin change in-place nahi hota.”", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Insert/Delete — naya array kyun?", "Task 5 arrays-only rule yahan se link");
    const pts = [
      "int[] length fixed hoti hai",
      "Insert = Length+1 allocate + copy/shift → O(n)",
      "Isi liye List<T> baad mein — abhi manually samjho",
      "Task 5 mein List dikhe to redirect: course rule = arrays",
    ];
    pts.forEach((p, i) => {
      s.addText(`•  ${p}`, { x: 0.55, y: 1.3 + i * 0.65, w: 9, h: 0.5, fontSize: 17, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Merge precondition trap", "Algorithm “toota” nahi — input galat tha");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "Teacher line",
      "Merge sirf tab sorted output deta hai jab DONO inputs pehle se sorted hon.\n\nAgar student unsorted merge kare:\n– Code crash nahi hoga\n– Output order galat hoga\n\nViva sawal: “Merge kab sahi hai?” → both sorted, O(n+m).", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Stopwatch coaching", "Release mode yaad dilao");
    const tips = [
      "dotnet run -c Release",
      "Debug timing se confuse na hon",
      "Task 6: 3 runs, median",
      "Same found-count dono methods se — warna bug",
    ];
    tips.forEach((t, i) => {
      s.addText(`${i + 1}.  ${t}`, { x: 0.55, y: 1.35 + i * 0.65, w: 9, h: 0.5, fontSize: 18, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Task 4 — Bug 1 (runtime)", "i <= values.Length");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "Deep dive",
      "Valid indices: 0 .. Length-1\nJab i == Length → IndexOutOfRangeException\n\nSymptom: crash on Average\nKind: RUNTIME\nFix direction: i < values.Length\n\nDebugger: breakpoint loop pe, last i dekho.", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Task 4 — Bug 2 (logic)", "int / int truncation");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "Deep dive",
      "{4,5,6,7} sum=22, 22/4 in ints = 5 (not 5.5)\n\nSymptom: wrong average, no crash\nKind: LOGIC\nFix: (double)total / values.Length\n\nHint ladder pehle: “Average fractional kyun nahi?”", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Task 4 — Bug 3 (logic)", "max = 0 negative arrays pe fail");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "Deep dive",
      "Test {-7,-3,-9}: expected max -3\nAgar max=0 se start → koi v > 0 nahi → return 0\n\nKind: LOGIC\nFix: max = values[0] (empty later)\n\nYe bug students miss karte hain agar sirf positive test chalaen — force negative test.", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Hints ladder (spoiler control)", "Order matter karta hai");
    const steps = [
      "Expected vs actual likho",
      "Kaun sa test fail / crash?",
      "Breakpoint: last index kya hai?",
      "Average fractional missing?",
      "Negative-only max seed?",
    ];
    steps.forEach((st, i) => {
      s.addText(`${i + 1}.  ${st}`, { x: 0.55, y: 1.3 + i * 0.55, w: 9, h: 0.45, fontSize: 17, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Task 5 marking checklist", "Arrays only");
    const items = [
      "No List<T>",
      "TryParse + no crash",
      "Duplicate ID reject",
      "Remove by ID",
      "XML comments on their methods",
      "Menu 0–6 basic path works",
    ];
    items.forEach((it, i) => {
      const x = 0.4 + (i % 2) * 4.7;
      const y = 1.25 + Math.floor(i / 2) * 1.0;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y, w: 4.4, h: 0.85, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.08,
      });
      s.addText("☑  " + it, { x: x + 0.2, y: y + 0.25, w: 4.0, h: 0.4, fontSize: 15, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Task 6 coaching points", "Industry 5.0 story use karo");
    const pts = [
      "No-duplicate data → worst case (ids[i]=i*3)",
      "n = 5k,10k,20k,40k",
      "Nested ~ O(n²) feel; HashSet faster + extra space",
      "Conclusion must pick: (a) cloud (b) edge + why",
      "AI disclosure required (None bhi OK if true)",
    ];
    pts.forEach((p, i) => {
      s.addText(`•  ${p}`, { x: 0.5, y: 1.25 + i * 0.55, w: 9, h: 0.45, fontSize: 16, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Common errors quick card", "Circulate with this in mind");
    const rows = [
      ["dotnet not recognised", "PATH / reopen terminal"],
      ["CS0103", "Typo / using"],
      ["CS5001 no entry point", "Need Main / --use-program-main"],
      ["FormatException", "TryParse"],
      ["IndexOutOfRange", "Bound < Length"],
    ];
    rows.forEach((r, i) => {
      const y = 1.2 + i * 0.6;
      s.addText(r[0], { x: 0.5, y, w: 4.5, h: 0.4, fontSize: 14, bold: true, color: c.navy, fontFace: f });
      s.addText(r[1], { x: 5.2, y, w: 4.3, h: 0.4, fontSize: 14, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Weak vs strong students", "Differentiate without shaming");
    callout(pptx, s, 0.4, 1.2, 4.4, 3.2, "Minimum path (weak)",
      "Tasks 1–4 must finish\nTask 4 debugger shots\n5–6 → homework OK\nExtra time: sit with PATH issues first", c.white);
    callout(pptx, s, 5.1, 1.2, 4.4, 3.2, "Stretch (strong)",
      "Full Task 5 menu\nTask 6 table + conclusion\nPost-lab Q3 comparison counts\nAsk them to explain HashSet cost", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "AI / integrity script (bolo)", "Ek baar clear announce");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "Classroom lines",
      "“AI sirf jab allow ho. Use kiya to disclosure likho.\nHide = integrity case.\nViva mein har line explain karni hogi.\nNone likhna bhi theek hai agar AI nahi use kiya.”\n\nDisclosure: tool · purpose · changed · verified · can explain", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Pocket analogies", "Fast recall while teaching");
    const a = [
      ["CLR", "Kitchen that cooks IL recipe (JIT) when ordered"],
      ["Reference", "Two sticky notes, same house address"],
      ["HashSet", "Index card vs reading every page"],
      ["Logic bug", "Spell-check passed, story still wrong"],
    ];
    a.forEach((x, i) => {
      const y = 1.2 + i * 0.75;
      s.addText(x[0], { x: 0.5, y, w: 2.2, h: 0.45, fontSize: 16, bold: true, color: c.teal, fontFace: f });
      s.addText(x[1], { x: 2.9, y, w: 6.6, h: 0.45, fontSize: 15, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "3-hour timing reminder", "Agar peeche ho to kya cut karein");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "Never skip / can compress",
      "NEVER SKIP: debugger live + Tasks 1–4 launch\n\nCAN COMPRESS:\n– Example 3 OR 4 (one short)\n– Example 6: aap run, students watch numbers\n– Tasks 5–6 → homework announce early\n\nExit ticket: Deck C se 1–2 Q", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Exit checklist (aap)", "Lab band karne se pehle");
    const items = [
      "Attendance",
      "Who only finished Tasks 1–2?",
      "AI policy + disclosure reminder",
      "Assignment 1 / Quiz 1 pointer",
      "Lab 2 reading: Big-O intro",
    ];
    items.forEach((it, i) => {
      s.addText("☐  " + it, { x: 0.6, y: 1.3 + i * 0.55, w: 8.5, h: 0.45, fontSize: 17, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const c = theme().colors;
    const s = pptx.addSlide();
    s.background = { color: "3B1F0B" };
    s.addText("Prep done → open Deck A", {
      x: 0.5, y: 2.2, w: 9, h: 0.6, fontSize: 28, bold: true, color: c.white, align: "center", fontFace: f,
    });
    s.addText("Students ko yeh deck mat dikhana", {
      x: 0.5, y: 3.0, w: 9, h: 0.4, fontSize: 16, color: "FBBF24", align: "center", fontFace: f,
    });
  }

  const out = path.join(__dirname, "..", "pptx", "Lab01_B_Teacher_Understanding.pptx");
  await pptx.writeFile({ fileName: out });
  console.log("Wrote", out, "slides≈", n);
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
