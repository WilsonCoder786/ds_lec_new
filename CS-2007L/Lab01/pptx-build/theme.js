/**
 * Shared look for CS-2007L Lab PowerPoints.
 * Clean academic: navy + teal (not purple/glow).
 */
function theme() {
  return {
    colors: {
      navy: "0B1F3A",
      teal: "0D7377",
      ink: "1A1A1A",
      muted: "5A6570",
      light: "F4F7FA",
      white: "FFFFFF",
      soft: "E8EEF4",
      warn: "B45309",
      ok: "166534",
      card: "FFFFFF",
      line: "C5D0DC",
    },
    font: "Calibri",
  };
}

function addFooter(pptx, slide, page, total, label) {
  const c = theme().colors;
  slide.addText(label || "CS-2007L · Lab 1", {
    x: 0.4,
    y: 5.15,
    w: 7.5,
    h: 0.25,
    fontSize: 10,
    color: c.muted,
    fontFace: theme().font,
  });
  slide.addText(`${page} / ${total}`, {
    x: 8.2,
    y: 5.15,
    w: 1.4,
    h: 0.25,
    fontSize: 10,
    color: c.muted,
    align: "right",
    fontFace: theme().font,
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 5.05,
    w: 10,
    h: 0.015,
    fill: { color: c.line },
    line: { color: c.line },
  });
}

function titleBar(pptx, slide, title, subtitle) {
  const c = theme().colors;
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.9,
    fill: { color: c.navy },
    line: { color: c.navy },
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0.9,
    w: 0.12,
    h: 4.15,
    fill: { color: c.teal },
    line: { color: c.teal },
  });
  slide.addText(title, {
    x: 0.4,
    y: 0.18,
    w: 9.2,
    h: 0.4,
    fontSize: 22,
    bold: true,
    color: c.white,
    fontFace: theme().font,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.4,
      y: 0.52,
      w: 9.2,
      h: 0.28,
      fontSize: 12,
      color: "B8C9D9",
      fontFace: theme().font,
    });
  }
}

function bulletSlide(pptx, opts) {
  const c = theme().colors;
  const slide = pptx.addSlide();
  slide.background = { color: c.light };
  titleBar(pptx, slide, opts.title, opts.subtitle);
  const items = opts.bullets.map((b) =>
    typeof b === "string"
      ? { text: b, options: { breakLine: true } }
      : b
  );
  slide.addText(items, {
    x: 0.45,
    y: 1.15,
    w: 9.1,
    h: 3.7,
    fontSize: opts.fontSize || 18,
    color: c.ink,
    fontFace: theme().font,
    paraSpacing: 10,
    bullet: { type: "bullet" },
  });
  addFooter(pptx, slide, opts.page, opts.total, opts.footer);
  return slide;
}

function callout(pptx, slide, x, y, w, h, title, body, fill) {
  const c = theme().colors;
  slide.addShape(pptx.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    fill: { color: fill || c.soft },
    line: { color: c.line },
    rectRadius: 0.08,
  });
  slide.addText(title, {
    x: x + 0.15,
    y: y + 0.1,
    w: w - 0.3,
    h: 0.3,
    fontSize: 13,
    bold: true,
    color: c.teal,
    fontFace: theme().font,
  });
  slide.addText(body, {
    x: x + 0.15,
    y: y + 0.4,
    w: w - 0.3,
    h: h - 0.55,
    fontSize: 14,
    color: c.ink,
    fontFace: theme().font,
  });
}

module.exports = { theme, addFooter, titleBar, bulletSlide, callout };
