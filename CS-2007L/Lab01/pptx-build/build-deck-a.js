/**
 * Deck A — Amazing, easy, detailed student lecture (Lab 1)
 * Goal: interest + clarity — simple English, stories, analogies, 1-idea slides
 */
const PptxGenJS = require("pptxgenjs");
const { theme, addFooter, titleBar, callout } = require("./theme");
const path = require("path");

const TOTAL = 58;
const FOOTER = "CS-2007L · Lab 1 · Easy Lecture for Students";

function page(pptx, n, title, subtitle) {
  const c = theme().colors;
  const slide = pptx.addSlide();
  slide.background = { color: c.light };
  titleBar(pptx, slide, title, subtitle);
  addFooter(pptx, slide, n, TOTAL, FOOTER);
  return { slide, c };
}

function rememberBox(pptx, slide, text, y = 4.0) {
  const c = theme().colors;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.4, y, w: 9.2, h: 0.7,
    fill: { color: "ECFDF5" }, line: { color: "6EE7B7" }, rectRadius: 0.08,
  });
  slide.addText("Remember:  " + text, {
    x: 0.55, y: y + 0.18, w: 8.9, h: 0.4,
    fontSize: 14, bold: true, color: "065F46", fontFace: theme().font,
  });
}

function sectionSlide(pptx, n, big, small) {
  const c = theme().colors;
  const f = theme().font;
  const s = pptx.addSlide();
  s.background = { color: c.navy };
  s.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.18, h: 5.625, fill: { color: c.teal }, line: { color: c.teal },
  });
  s.addText(big, {
    x: 0.7, y: 1.9, w: 8.5, h: 0.9, fontSize: 32, bold: true, color: c.white, fontFace: f,
  });
  s.addText(small, {
    x: 0.7, y: 2.9, w: 8.5, h: 0.7, fontSize: 18, color: "A8C0D8", fontFace: f,
  });
  addFooter(pptx, s, n, TOTAL, FOOTER);
  return s;
}

async function build() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "LAYOUT_16x9", width: 10, height: 5.625 });
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "CS-2007L Course Package";
  pptx.title = "Lab 1 — Easy & Amazing Lecture for Students";
  const f = theme().font;
  let n = 0;

  // ===== OPENING =====
  {
    n++;
    const c = theme().colors;
    const s = pptx.addSlide();
    s.background = { color: c.navy };
    s.addShape(pptx.ShapeType.rect, {
      x: 0, y: 4.5, w: 10, h: 1.125, fill: { color: c.teal }, line: { color: c.teal },
    });
    s.addText("Welcome to your first Data Structures Lab", {
      x: 0.5, y: 0.7, w: 9, h: 0.4, fontSize: 14, color: "A8C0D8", align: "center", fontFace: f,
    });
    s.addText("Lab 1: Let’s Make Code\nClear, Correct & Fast", {
      x: 0.5, y: 1.4, w: 9, h: 1.4, fontSize: 34, bold: true, color: c.white, align: "center", fontFace: f,
    });
    s.addText("No scary theory dump — we learn with stories, demos, and tiny steps", {
      x: 0.8, y: 3.2, w: 8.4, h: 0.5, fontSize: 16, color: "D6E4F0", align: "center", fontFace: f,
    });
    s.addText("CS-2007L  ·  .NET 8  ·  C#  ·  3 hours", {
      x: 0.5, y: 4.85, w: 9, h: 0.35, fontSize: 16, bold: true, color: c.white, align: "center", fontFace: f,
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "A promise for today’s class", "If you stay with us, you will leave with real skills");
    const promises = [
      ["You will RUN a C# program", "Not just watch — your own laptop / lab PC"],
      ["You will CATCH a hidden bug", "Using the debugger like a detective"],
      ["You will EXPLAIN ideas simply", "Value vs reference, in plain words"],
      ["You will SEE speed vs memory", "Why HashSet can feel “magic”"],
    ];
    promises.forEach((p, i) => {
      const y = 1.15 + i * 0.85;
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.4, y, w: 9.2, h: 0.75, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.08,
      });
      s.addText(p[0], { x: 0.6, y: y + 0.1, w: 8.8, h: 0.3, fontSize: 16, bold: true, color: c.navy, fontFace: f });
      s.addText(p[1], { x: 0.6, y: y + 0.4, w: 8.8, h: 0.25, fontSize: 13, color: c.muted, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Our journey today (simple map)", "Six stops — like a short trip");
    const stops = [
      ["Stop 1", "Tools", "Make it run"],
      ["Stop 2", "Bugs", "Find the truth"],
      ["Stop 3", "Words", "Data → File"],
      ["Stop 4", "Types", "Copy vs share"],
      ["Stop 5", "Array", "6 superpowers"],
      ["Stop 6", "Speed", "Pay with memory?"],
    ];
    stops.forEach((b, i) => {
      const x = 0.3 + i * 1.6;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y: 1.4, w: 1.5, h: 2.6, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.1,
      });
      s.addText(b[0], { x, y: 1.6, w: 1.5, h: 0.35, fontSize: 12, color: c.teal, align: "center", fontFace: f });
      s.addText(b[1], { x, y: 2.2, w: 1.5, h: 0.5, fontSize: 16, bold: true, color: c.navy, align: "center", fontFace: f });
      s.addText(b[2], { x: x + 0.08, y: 2.9, w: 1.35, h: 0.7, fontSize: 12, color: c.muted, align: "center", fontFace: f });
    });
  }

  // ===== WHY =====
  n++;
  sectionSlide(pptx, n, "Why should you care?", "Because the same ideas run your campus apps");

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Story 1: The enrolment list", "A problem you already understand");
    s.addText("Imagine BS Computer Engineering — Section A list of student IDs.", {
      x: 0.45, y: 1.15, w: 9.1, h: 0.4, fontSize: 15, color: c.ink, fontFace: f,
    });
    const needs = [
      "Show everyone (traverse)",
      "Find ID 1099 (search)",
      "Add a late student (insert)",
      "Remove a dropped student (delete)",
      "Sort for printing (sort)",
      "Combine two sections (merge)",
    ];
    needs.forEach((x, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.4 + col * 4.7, y: 1.7 + row * 0.85, w: 4.5, h: 0.7,
        fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.08,
      });
      s.addText(x, {
        x: 0.55 + col * 4.7, y: 1.88 + row * 0.85, w: 4.2, h: 0.35,
        fontSize: 15, color: c.navy, fontFace: f,
      });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Story 2: The “twin sensor” mystery", "Industry 5.0 — simple version");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "Factory floor (easy story)",
      "A machine sends many sensor IDs every second.\nIf the SAME ID appears twice, something may be wrong (faulty / cloned sensor).\n\nSlow way: compare every ID with every other ID.\nFast way: keep a “seen already” set in memory (HashSet).\n\nToday you will FEEL both ways with a timer.", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Big picture of this semester", "Lab 1 is the first brick");
    s.addText("Arrays  →  Lists  →  Stacks & Queues  →  Trees  →  Graphs  →  Hashing", {
      x: 0.4, y: 1.5, w: 9.2, h: 0.6, fontSize: 16, bold: true, color: c.navy, align: "center", fontFace: f,
    });
    callout(pptx, s, 0.4, 2.4, 9.2, 2.0, "Your job this semester",
      "Not only “code that runs”…\nAlso: “code I can explain, test, debug, and justify with time/memory.”", c.white);
  }

  // ===== TOOLS =====
  n++;
  sectionSlide(pptx, n, "Stop 1 — Make it run", "Tools, commands, and your first Hello");

  {
    n++;
    const { slide: s, c } = page(pptx, n, "What happens when you press Run?", "A friendly pipeline (viva favourite)");
    const steps = [
      ["You write", "Program.cs"],
      ["Compiler", "makes IL"],
      ["CLR", "loads it"],
      ["JIT", "CPU code"],
      ["You see", "output"],
    ];
    steps.forEach((st, i) => {
      const x = 0.3 + i * 1.95;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y: 1.5, w: 1.8, h: 2.0,
        fill: { color: i === 0 || i === 4 ? c.teal : c.navy },
        line: { color: i === 0 || i === 4 ? c.teal : c.navy },
        rectRadius: 0.1,
      });
      s.addText(st[0], { x, y: 1.8, w: 1.8, h: 0.4, fontSize: 13, color: c.white, align: "center", fontFace: f });
      s.addText(st[1], { x, y: 2.4, w: 1.8, h: 0.6, fontSize: 16, bold: true, color: c.white, align: "center", fontFace: f });
      if (i < 4) s.addText("→", { x: x + 1.7, y: 2.2, w: 0.3, h: 0.4, fontSize: 20, bold: true, color: c.ink, fontFace: f });
    });
    rememberBox(pptx, s, "Compiler translates. CLR runs (+ JIT + memory cleaning).");
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Two helpers — don’t mix them up", "Compiler vs CLR in one glance");
    callout(pptx, s, 0.4, 1.2, 4.4, 3.0, "Compiler = translator",
      "Reads your C#.\nChecks spelling/rules.\nWrites IL (.dll).\n\nLike: turning your notes into a clear recipe book.", c.white);
    callout(pptx, s, 5.1, 1.2, 4.4, 3.0, "CLR = kitchen",
      "Opens the recipe (IL).\nCooks when needed (JIT).\nServes the dish (output).\nCleans dishes (GC).", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "SDK vs Runtime — cafeteria analogy", "Easy way to remember forever");
    callout(pptx, s, 0.4, 1.2, 4.4, 3.0, "SDK = full kitchen kit",
      "Knives, stove, recipes, training.\nYou CREATE and BUILD food (apps).\n\nYou need this in the lab.", c.white);
    callout(pptx, s, 5.1, 1.2, 4.4, 3.0, "Runtime = dining hall",
      "Can serve / eat ready meals.\nRuns programs.\n\nNot enough alone to develop.", c.white);
    rememberBox(pptx, s, "Check once:  dotnet --version   → should start with 8.0");
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Your starter pack (install once)", "Choose ONE IDE — both are fine");
    const tools = [
      [".NET 8 SDK", "The engine + build tools", "Must have"],
      ["Visual Studio 2022", "Big friendly IDE", "Option A"],
      ["VS Code + C# Dev Kit", "Light & fast", "Option B"],
      ["Terminal", "Where commands live", "Must have"],
    ];
    tools.forEach((t, i) => {
      const y = 1.15 + i * 0.75;
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.4, y, w: 9.2, h: 0.65, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.06,
      });
      s.addText(t[0], { x: 0.55, y: y + 0.15, w: 3.3, h: 0.35, fontSize: 15, bold: true, color: c.navy, fontFace: f });
      s.addText(t[1], { x: 3.9, y: y + 0.15, w: 3.8, h: 0.35, fontSize: 14, color: c.ink, fontFace: f });
      s.addText(t[2], { x: 7.8, y: y + 0.15, w: 1.6, h: 0.35, fontSize: 13, bold: true, color: c.teal, align: "right", fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Four magic commands", "Type them — fingers learn faster than eyes");
    const cmds = [
      ["dotnet --version", "Am I ready? (need 8.0.x)"],
      ["dotnet new console -n Lab01 --use-program-main", "Create a clean project with Main"],
      ["dotnet build", "Compile — show errors early"],
      ["dotnet run", "Build (if needed) + run"],
    ];
    cmds.forEach((cmd, i) => {
      const y = 1.15 + i * 0.8;
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.4, y, w: 9.2, h: 0.7, fill: { color: c.navy }, line: { color: c.navy }, rectRadius: 0.06,
      });
      s.addText(cmd[0], { x: 0.55, y: y + 0.08, w: 9, h: 0.28, fontSize: 13, bold: true, color: "7DFFD4", fontFace: "Consolas" });
      s.addText(cmd[1], { x: 0.55, y: y + 0.36, w: 9, h: 0.25, fontSize: 13, color: c.white, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Why we use an explicit Main method", "So beginners always see “where it starts”");
    callout(pptx, s, 0.4, 1.2, 4.4, 3.0, "Top-level (short style)",
      "Code starts without Main.\nLooks neat for tiny demos.\nHarder for first-timers to spot the entry point.", c.white);
    callout(pptx, s, 5.1, 1.2, 4.4, 3.0, "Our lab style",
      "Always see:\npublic static void Main(...)\n\nEasy teaching. Easy viva.\nVS: tick “Do not use top-level statements”.", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "What’s in your project folder?", "Submit smart — don’t upload junk");
    const items = [
      ["Program.cs", "Your code — keep & screenshot"],
      ["*.csproj", "Project settings (net8.0)"],
      ["bin/", "Generated output — NEVER submit"],
      ["obj/", "Temp build files — NEVER submit"],
    ];
    items.forEach((it, i) => {
      const y = 1.2 + i * 0.75;
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.4, y, w: 9.2, h: 0.65, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.06,
      });
      s.addText(it[0], { x: 0.6, y: y + 0.15, w: 2.5, h: 0.35, fontSize: 16, bold: true, color: c.teal, fontFace: "Consolas" });
      s.addText(it[1], { x: 3.3, y: y + 0.15, w: 6.0, h: 0.35, fontSize: 15, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "LIVE: Your first program", "Type it. Don’t paste. Feel the win.");
    s.addShape(pptx.ShapeType.roundRect, {
      x: 0.4, y: 1.15, w: 9.2, h: 2.7, fill: { color: c.navy }, line: { color: c.navy }, rectRadius: 0.1,
    });
    s.addText(`Console.WriteLine("Hello, C#!");\nConsole.WriteLine("Welcome to Data Structures Lab");\nConsole.WriteLine($"Running on .NET {Environment.Version}");`, {
      x: 0.65, y: 1.5, w: 8.8, h: 2.1, fontSize: 16, color: "E8FFF8", fontFace: "Consolas",
    });
    rememberBox(pptx, s, "If this prints — your toolchain works. Celebrate that.");
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Tiny dictionary for Example 1", "Words you will hear all semester");
    const rows = [
      ["namespace", "A label/group for related code"],
      ["Main", "The door — program starts here"],
      ['$"Hello {name}"', "Interpolation — insert values into text"],
      ["/// <summary>", "XML comment — helps humans + IDE"],
    ];
    rows.forEach((r, i) => {
      const y = 1.2 + i * 0.75;
      s.addText(r[0], { x: 0.5, y, w: 3.3, h: 0.5, fontSize: 15, bold: true, color: c.teal, fontFace: "Consolas" });
      s.addText(r[1], { x: 3.9, y, w: 5.6, h: 0.5, fontSize: 15, color: c.ink, fontFace: f });
    });
  }

  // ===== DEBUG =====
  n++;
  sectionSlide(pptx, n, "Stop 2 — Become a bug detective", "The debugger is your superpower");

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Three kinds of “something’s wrong”", "Know which hospital to go to");
    const errs = [
      ["Compile error", "Build refuses", "Typo / wrong name", "Fix spelling & using"],
      ["Runtime error", "Crashes mid-run", "Bad index, null, …", "Read exception + line"],
      ["Logic error", "Runs, wrong answer", "Off-by-one, bad formula", "Debugger + tests"],
    ];
    errs.forEach((e, i) => {
      const x = 0.35 + i * 3.2;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y: 1.25, w: 3.05, h: 3.2, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.1,
      });
      s.addShape(pptx.ShapeType.rect, {
        x, y: 1.25, w: 3.05, h: 0.65, fill: { color: i === 2 ? "B45309" : i === 1 ? c.teal : c.navy }, line: { color: i === 2 ? "B45309" : i === 1 ? c.teal : c.navy },
      });
      s.addText(e[0], { x, y: 1.4, w: 3.05, h: 0.4, fontSize: 15, bold: true, color: c.white, align: "center", fontFace: f });
      s.addText(e[1], { x: x + 0.15, y: 2.15, w: 2.75, h: 0.5, fontSize: 14, bold: true, color: c.navy, align: "center", fontFace: f });
      s.addText(e[2], { x: x + 0.15, y: 2.75, w: 2.75, h: 0.7, fontSize: 13, color: c.ink, align: "center", fontFace: f });
      s.addText(e[3], { x: x + 0.15, y: 3.6, w: 2.75, h: 0.55, fontSize: 13, color: c.teal, align: "center", fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Four keys — memorize like a game cheat code", "Same in Visual Studio & VS Code");
    const keys = [
      ["F5", "Start debugging"],
      ["F9", "Red breakpoint"],
      ["F10", "Step over line"],
      ["F11", "Step into method"],
    ];
    keys.forEach((k, i) => {
      const x = 0.4 + (i % 2) * 4.7;
      const y = 1.25 + Math.floor(i / 2) * 1.5;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y, w: 4.4, h: 1.3, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.1,
      });
      s.addShape(pptx.ShapeType.roundRect, {
        x: x + 0.25, y: y + 0.3, w: 1.4, h: 0.7, fill: { color: c.teal }, line: { color: c.teal }, rectRadius: 0.1,
      });
      s.addText(k[0], { x: x + 0.25, y: y + 0.42, w: 1.4, h: 0.45, fontSize: 22, bold: true, color: c.white, align: "center", fontFace: f });
      s.addText(k[1], { x: x + 1.9, y: y + 0.45, w: 2.2, h: 0.45, fontSize: 18, color: c.navy, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Locals window = X-ray glasses", "See the truth while the program pauses");
    const tips = [
      "Breakpoint stops time for your program",
      "Locals shows every variable’s current value",
      "Press F10 and watch numbers change",
      "Count loop trips — does it match your paper calculation?",
    ];
    tips.forEach((t, i) => {
      s.addText(`${i + 1}.  ${t}`, {
        x: 0.55, y: 1.3 + i * 0.7, w: 9, h: 0.55, fontSize: 18, color: c.ink, fontFace: f,
      });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "LIVE mystery: Sum 1..5 should be 15", "But the program prints 10 — why?");
    s.addShape(pptx.ShapeType.roundRect, {
      x: 0.4, y: 1.2, w: 9.2, h: 2.2, fill: { color: c.navy }, line: { color: c.navy }, rectRadius: 0.1,
    });
    s.addText("for (int i = 1; i < n; i++)   // buggy condition\n    sum += i;", {
      x: 0.7, y: 1.6, w: 8.6, h: 1.4, fontSize: 20, color: "FFE4E4", fontFace: "Consolas",
    });
    s.addText("Expected 15  ·  Actual 10  ·  This is a LOGIC error (build still succeeds)", {
      x: 0.4, y: 3.7, w: 9.2, h: 0.4, fontSize: 15, bold: true, color: "B45309", fontFace: f,
    });
    rememberBox(pptx, s, "Fix: i <= n   — include the last number.");
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Detective recipe (use forever)", "Same steps for Task 4 today");
    const steps = [
      ["Paper first", "Write expected answer (15)"],
      ["Run once", "Note the wrong output"],
      ["Breakpoint", "F9 on the suspicious line"],
      ["Watch", "Locals: i and sum"],
      ["Fix one thing", "Re-run until expected matches"],
    ];
    steps.forEach((st, i) => {
      const y = 1.15 + i * 0.6;
      s.addShape(pptx.ShapeType.ellipse, {
        x: 0.5, y: y + 0.05, w: 0.4, h: 0.4, fill: { color: c.teal }, line: { color: c.teal },
      });
      s.addText(String(i + 1), { x: 0.5, y: y + 0.1, w: 0.4, h: 0.3, fontSize: 14, bold: true, color: c.white, align: "center", fontFace: f });
      s.addText(st[0], { x: 1.15, y: y + 0.05, w: 2.4, h: 0.4, fontSize: 16, bold: true, color: c.navy, fontFace: f });
      s.addText(st[1], { x: 3.6, y: y + 0.05, w: 5.8, h: 0.4, fontSize: 15, color: c.ink, fontFace: f });
    });
  }

  // ===== DATA WORDS =====
  n++;
  sectionSlide(pptx, n, "Stop 3 — Speak the language of data", "Four words: Data, Field, Record, File");

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Meet the four friends", "One student example — remember forever");
    const terms = [
      ["Data", "Raw fact", '"Ayesha"\n3.45'],
      ["Field", "Named slot", "Name\nCgpa"],
      ["Record", "One person", "DSU-001\nAyesha, 3.45"],
      ["File", "Many on disk", "students.txt"],
    ];
    terms.forEach((t, i) => {
      const x = 0.35 + i * 2.4;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y: 1.25, w: 2.25, h: 3.1, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.1,
      });
      s.addShape(pptx.ShapeType.rect, {
        x, y: 1.25, w: 2.25, h: 0.7, fill: { color: i % 2 ? c.teal : c.navy }, line: { color: i % 2 ? c.teal : c.navy },
      });
      s.addText(t[0], { x, y: 1.4, w: 2.25, h: 0.4, fontSize: 18, bold: true, color: c.white, align: "center", fontFace: f });
      s.addText(t[1], { x: x + 0.1, y: 2.2, w: 2.05, h: 0.5, fontSize: 14, color: c.navy, align: "center", fontFace: f });
      s.addText(t[2], { x: x + 0.1, y: 2.9, w: 2.05, h: 1.1, fontSize: 13, color: c.muted, align: "center", fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "How they nest (like folders)", "Zoom out from value → disk file");
    s.addShape(pptx.ShapeType.roundRect, {
      x: 0.5, y: 1.25, w: 9.0, h: 3.1, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.1,
    });
    s.addText("FILE   students.txt\n  RECORD   one student line\n    FIELD   RegNo = DSU-001\n    FIELD   Name  = Ayesha\n    FIELD   Cgpa  = 3.45   ← each number/text is DATA", {
      x: 0.8, y: 1.5, w: 8.4, h: 2.6, fontSize: 18, color: c.ink, fontFace: "Consolas",
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Quick check — classify these", "Say the answer in your head");
    const qs = [
      ['"Karachi"', "Data (a raw value)"],
      ["Column Age", "Field"],
      ["One attendance row", "Record"],
      ["attendance.csv", "File"],
      ["3.14", "Data"],
    ];
    qs.forEach((q, i) => {
      const y = 1.15 + i * 0.6;
      s.addText(q[0], { x: 0.6, y, w: 3.5, h: 0.4, fontSize: 15, bold: true, color: c.navy, fontFace: f });
      s.addText("→  " + q[1], { x: 4.3, y, w: 5.2, h: 0.4, fontSize: 15, color: c.teal, fontFace: f });
    });
  }

  // ===== TYPES =====
  n++;
  sectionSlide(pptx, n, "Stop 4 — Copy or share?", "Value types vs reference types");

  {
    n++;
    const { slide: s, c } = page(pptx, n, "The big idea in one sentence", "This saves you from many future bugs");
    s.addShape(pptx.ShapeType.roundRect, {
      x: 0.5, y: 1.6, w: 9.0, h: 2.2, fill: { color: c.navy }, line: { color: c.navy }, rectRadius: 0.12,
    });
    s.addText("Value types copy the NUMBER.\nReference types copy the ADDRESS.", {
      x: 0.8, y: 2.1, w: 8.4, h: 1.3, fontSize: 26, bold: true, color: c.white, align: "center", fontFace: f,
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Value types = two separate notebooks", "int, double, bool, char, …");
    callout(pptx, s, 0.4, 1.2, 4.6, 2.8, "Code",
      "int a = 10;\nint b = a;\nb = 99;\n\na is still 10\nb is 99", c.white);
    callout(pptx, s, 5.2, 1.2, 4.3, 2.8, "Picture",
      "Notebook A has 10.\nYou copy into Notebook B.\nYou scribble 99 in B.\nA is untouched.", c.white);
    rememberBox(pptx, s, "Independent copies. Safe and simple.");
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Reference types = same house, two keys", "Arrays & objects live on the heap");
    callout(pptx, s, 0.4, 1.2, 4.6, 2.8, "Code",
      "int[] first = {1,2,3};\nint[] second = first;\nsecond[0] = 99;\n\nfirst[0] is ALSO 99!", c.white);
    callout(pptx, s, 5.2, 1.2, 4.3, 2.8, "Picture",
      "You didn’t build a new house.\nYou copied the KEY.\nPaint the door — both keys open the same door.", c.white);
    rememberBox(pptx, s, "Shared object → surprising changes.");
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Want a real copy? Use Clone()", "You pay with extra memory");
    s.addShape(pptx.ShapeType.roundRect, {
      x: 0.4, y: 1.2, w: 9.2, h: 2.0, fill: { color: c.navy }, line: { color: c.navy }, rectRadius: 0.1,
    });
    s.addText("int[] third = (int[])first.Clone();\nthird[1] = 77;   // first stays unchanged", {
      x: 0.7, y: 1.6, w: 8.6, h: 1.2, fontSize: 18, color: c.white, fontFace: "Consolas",
    });
    callout(pptx, s, 0.4, 3.5, 9.2, 1.1, "Tradeoff taste",
      "Independence costs space. (We meet this idea again with HashSet.)", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "String is special (don’t panic)", "Reference type, but immutable");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "Easy rule",
      "string s1 = \"DSU\";\nstring s2 = s1;\ns2 += \"!\";\n\ns1 is still \"DSU\".\ns2 is a NEW string \"DSU!\".\n\nYou can’t edit string characters in place like an array.", c.white);
  }

  // ===== ARRAY OPS =====
  n++;
  sectionSlide(pptx, n, "Stop 5 — Array superpowers", "Six operations every structure somehow needs");

  {
    n++;
    const { slide: s, c } = page(pptx, n, "The famous six", "Say them out loud once");
    const ops = ["Traverse", "Search", "Insert", "Delete", "Sort", "Merge"];
    ops.forEach((op, i) => {
      const x = 0.4 + (i % 3) * 3.15;
      const y = 1.3 + Math.floor(i / 3) * 1.55;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y, w: 3.0, h: 1.35, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.1,
      });
      s.addText(String(i + 1), { x: x + 0.2, y: y + 0.25, w: 0.5, h: 0.4, fontSize: 20, bold: true, color: c.teal, fontFace: f });
      s.addText(op, { x: x + 0.7, y: y + 0.45, w: 2.1, h: 0.45, fontSize: 20, bold: true, color: c.navy, fontFace: f });
    });
  }

  const opCards = [
    ["Traverse — walk the whole list", "Visit every element once.\nLike checking attendance for every student.\nCost idea: O(n)"],
    ["Search — find someone", "Look for a value; return index or -1.\nLike finding Roll No in a printed list.\nLinear search cost: O(n)"],
    ["Insert — make space & add", "Add at a position; others shift.\nLike inserting a name into a paper list mid-page.\nCost idea: O(n)"],
    ["Delete — remove & close the gap", "Remove at index; others shift left.\nLike erasing a name and pulling lines up.\nCost idea: O(n)"],
    ["Sort — neat order", "Ascending / descending.\nToday we may use Array.Sort.\nGood sorts: about O(n log n)"],
    ["Merge — join two sorted lines", "Combine two sorted arrays into one sorted array.\nRule: both inputs must ALREADY be sorted.\nCost: O(n + m)"],
  ];
  opCards.forEach((card) => {
    n++;
    const { slide: s, c } = page(pptx, n, card[0], "Plain words + cost intuition");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "In simple English", card[1], c.white);
  });

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Why insert feels “expensive” on arrays", "Fixed size → lots of copying");
    const steps = [
      "Make a NEW bigger array (Length + 1)",
      "Copy the left part",
      "Put the new value",
      "Copy the right part one slot over",
    ];
    steps.forEach((st, i) => {
      s.addText(`${i + 1}.  ${st}`, {
        x: 0.6, y: 1.3 + i * 0.6, w: 8.8, h: 0.5, fontSize: 18, color: c.ink, fontFace: f,
      });
    });
    rememberBox(pptx, s, "More elements → more copy work → O(n). Task 5 = arrays only (no List yet).");
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Pocket cost card (Lab 1)", "Lab 2 will make Big-O formal — today just intuition");
    const rows = [
      ["Read data[i]", "O(1) instant"],
      ["Traverse / linear search", "O(n) grows with size"],
      ["Insert / Delete", "O(n) shift/copy"],
      ["Good sort", "O(n log n)"],
      ["Merge sorted arrays", "O(n + m)"],
    ];
    rows.forEach((r, i) => {
      const y = 1.2 + i * 0.6;
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y, w: 9.0, h: 0.52, fill: { color: i % 2 ? c.soft : c.white }, line: { color: c.line }, rectRadius: 0.05,
      });
      s.addText(r[0], { x: 0.7, y: y + 0.1, w: 5.5, h: 0.3, fontSize: 15, color: c.ink, fontFace: f });
      s.addText(r[1], { x: 6.3, y: y + 0.1, w: 3.0, h: 0.3, fontSize: 14, bold: true, color: c.teal, align: "right", fontFace: f });
    });
  }

  // ===== TRADEOFF =====
  n++;
  sectionSlide(pptx, n, "Stop 6 — Speed vs memory", "Sometimes you pay RAM to buy time");

  {
    n++;
    const { slide: s, c } = page(pptx, n, "The tradeoff in human words", "You already make this choice in daily life");
    callout(pptx, s, 0.4, 1.2, 4.4, 3.0, "No extra notes",
      "Every time you need a phone number, you scan the whole contact printout.\nSlow, but zero extra notebook.", c.white);
    callout(pptx, s, 5.1, 1.2, 4.4, 3.0, "Extra index notebook",
      "You keep a sorted index or HashSet-like memory.\nFaster lookup.\nUses more space.", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "In code: Linear vs HashSet", "Same answers — different cost");
    callout(pptx, s, 0.4, 1.2, 4.4, 3.0, "Linear Contains",
      "For each query, scan the array.\nLittle extra memory.\nTime grows badly with many queries.", c.white);
    callout(pptx, s, 5.1, 1.2, 4.4, 3.0, "HashSet Contains",
      "Build a set once (extra memory).\nEach check is roughly constant time.\nGreat when you ask many times.", c.white);
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Measure fairly (pro tip)", "Otherwise timings lie to you");
    const tips = [
      "Use Stopwatch",
      "Run: dotnet run -c Release",
      "Repeat 3 times → keep median (Task 6)",
      "First check: both methods find the SAME count",
    ];
    tips.forEach((t, i) => {
      s.addText(`•  ${t}`, { x: 0.6, y: 1.35 + i * 0.7, w: 8.8, h: 0.55, fontSize: 18, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Your decision story", "Cloud vs tiny edge device");
    callout(pptx, s, 0.4, 1.2, 4.4, 3.0, "Cloud server",
      "Usually more RAM.\nPrefer faster structures (HashSet).\nUsers hate waiting.", c.white);
    callout(pptx, s, 5.1, 1.2, 4.4, 3.0, "Edge / IoT device",
      "Little memory.\nSometimes accept slower loops.\nStill must be CORRECT.", c.white);
  }

  // ===== TASKS =====
  n++;
  sectionSlide(pptx, n, "Your graded missions", "Clear goals — start with 1 to 4");

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Mission board", "Do 1–4 in lab; 5–6 if time (else homework)");
    const tasks = [
      ["1", "Environment report", "Prove your tools work"],
      ["2", "Student profile card", "Input + TryParse care"],
      ["3", "Types + classify", "Theory + tiny code"],
      ["4", "BuggyStats detective", "Debugger screenshots!"],
      ["5", "Enrolment manager", "Arrays only menu app"],
      ["6", "Sensor duplicates", "Time it + conclude"],
    ];
    tasks.forEach((t, i) => {
      const y = 1.1 + i * 0.55;
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.4, y, w: 9.2, h: 0.48, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.05,
      });
      s.addText(t[0], { x: 0.55, y: y + 0.1, w: 0.5, h: 0.28, fontSize: 14, bold: true, color: c.teal, fontFace: f });
      s.addText(t[1], { x: 1.2, y: y + 0.1, w: 4.0, h: 0.28, fontSize: 14, bold: true, color: c.navy, fontFace: f });
      s.addText(t[2], { x: 5.4, y: y + 0.1, w: 4.0, h: 0.28, fontSize: 13, color: c.muted, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Task 4 boss fight — three bugs", "Different symptoms — different lessons");
    const bugs = [
      ["Bug A", "Loop too far", "CRASH runtime"],
      ["Bug B", "int ÷ int", "Wrong average"],
      ["Bug C", "max starts 0", "Fails on negatives"],
    ];
    bugs.forEach((b, i) => {
      const x = 0.4 + i * 3.15;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y: 1.4, w: 3.0, h: 2.6, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.1,
      });
      s.addText(b[0], { x, y: 1.65, w: 3.0, h: 0.4, fontSize: 14, bold: true, color: c.teal, align: "center", fontFace: f });
      s.addText(b[1], { x: x + 0.15, y: 2.3, w: 2.7, h: 0.7, fontSize: 18, bold: true, color: c.navy, align: "center", fontFace: f });
      s.addText(b[2], { x: x + 0.15, y: 3.3, w: 2.7, h: 0.4, fontSize: 14, color: "B45309", align: "center", fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "How marks work (/10)", "Play fair — know the scoring");
    const rows = [
      ["Show run + debugger confidently", "2"],
      ["Complete assigned tasks well", "3"],
      ["Clean code + AI honesty", "2"],
      ["Viva — explain concepts simply", "3"],
    ];
    rows.forEach((r, i) => {
      const y = 1.3 + i * 0.7;
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.4, y, w: 9.2, h: 0.58, fill: { color: c.white }, line: { color: c.line }, rectRadius: 0.06,
      });
      s.addText(r[0], { x: 0.6, y: y + 0.15, w: 7.2, h: 0.3, fontSize: 15, color: c.ink, fontFace: f });
      s.addText(r[1] + " marks", { x: 7.9, y: y + 0.15, w: 1.5, h: 0.3, fontSize: 15, bold: true, color: c.navy, align: "right", fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Submit without stress", "Checklist before LMS upload");
    const items = [
      "Name + Reg No on top",
      "Code + output screenshots",
      "Task 4: debugger shot per bug (Locals visible)",
      "Written bits for Tasks 1 & 3",
      "AI disclosure (or write None)",
      "No bin/ or obj/ folders",
    ];
    items.forEach((it, i) => {
      s.addText("☑  " + it, { x: 0.55, y: 1.2 + i * 0.5, w: 9, h: 0.4, fontSize: 16, color: c.ink, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "About AI helpers", "Honesty is part of the grade (CLO-3)");
    callout(pptx, s, 0.4, 1.2, 9.2, 3.2, "If allowed and you used AI",
      "Write: which tool · what you asked · what you changed · how you verified.\n\nIn viva you must explain every line.\nHiding AI use = academic integrity problem.\nWriting “None” is perfect if you truly used none.", c.white);
  }

  // ===== CLOSE =====
  {
    n++;
    const { slide: s, c } = page(pptx, n, "60-second recap — take these home", "Six lines that unlock Lab 1");
    const lines = [
      "Compiler translates · CLR runs",
      "Value copy ≠ reference copy",
      "Data → Field → Record → File",
      "Array insert/delete often O(n)",
      "Debugger finds logic bugs",
      "HashSet: pay memory, buy speed",
    ];
    lines.forEach((line, i) => {
      s.addText(`${i + 1}.  ${line}`, {
        x: 0.55, y: 1.2 + i * 0.5, w: 9, h: 0.4, fontSize: 17, color: c.ink, fontFace: f,
      });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Next week teaser", "We make “O(n)” scientific");
    const items = [
      "Frequency count",
      "Big-O notation",
      "Measure growth with Stopwatch",
      "Compare prediction vs reality",
    ];
    items.forEach((it, i) => {
      s.addText("→  " + it, { x: 0.7, y: 1.4 + i * 0.65, w: 8.5, h: 0.5, fontSize: 20, color: c.navy, fontFace: f });
    });
  }

  {
    n++;
    const { slide: s, c } = page(pptx, n, "Your turn — Mission start!", "Open IDE · Create Lab01 · Begin Task 1");
    s.addShape(pptx.ShapeType.roundRect, {
      x: 1.2, y: 1.7, w: 7.6, h: 2.2, fill: { color: c.teal }, line: { color: c.teal }, rectRadius: 0.15,
    });
    s.addText("You’ve got this.\nType. Run. Debug. Explain.", {
      x: 1.2, y: 2.2, w: 7.6, h: 1.3, fontSize: 26, bold: true, color: c.white, align: "center", fontFace: f,
    });
  }

  {
    n++;
    const c = theme().colors;
    const s = pptx.addSlide();
    s.background = { color: c.navy };
    s.addText("Questions? Ask now.", {
      x: 0.5, y: 1.8, w: 9, h: 0.7, fontSize: 36, bold: true, color: c.white, align: "center", fontFace: f,
    });
    s.addText("Then start Tasks 1–4  ·  Use the debugger on Task 4", {
      x: 0.5, y: 2.8, w: 9, h: 0.5, fontSize: 16, color: "B8C9D8", align: "center", fontFace: f,
    });
    s.addText("Lab 1 · Easy Lecture · CS-2007L", {
      x: 0.5, y: 4.5, w: 9, h: 0.35, fontSize: 14, color: c.teal, align: "center", fontFace: f,
    });
  }

  const out = path.join(__dirname, "..", "pptx", "Lab01_A_Lecture_Detailed.pptx");
  await pptx.writeFile({ fileName: out });
  console.log("Wrote", out, "slides=", n);
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
