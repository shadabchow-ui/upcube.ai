function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderInlineMarkdown(text: string): string {
  let html = escapeHtml(text);

  html = html
    .replace(/\[([^\]]+?)\]\(([^)]+?)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+?)`/g, "<code>$1</code>");

  return html;
}

export function renderMarkdownToHtml(markdown: string): string {
  const lines = markdown.split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i]!;

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (line.trim().startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length) {
        const l = lines[i]!;
        if (l.trim().startsWith("```")) break;
        codeLines.push(l);
        i++;
      }
      i++;
      const code = codeLines.join("\n");
      out.push(`<pre><code>${escapeHtml(code)}</code></pre>`);
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1]!.length;
      const text = renderInlineMarkdown(headingMatch[2]!);
      out.push(`<h${level}>${text}</h${level}>`);
      i++;
      continue;
    }

    if (/^-{3,}$/.test(line.trim())) {
      out.push("<hr />");
      i++;
      continue;
    }

    if (/^-\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length) {
        const l = lines[i]!;
        if (!/^-\s/.test(l)) break;
        items.push(`<li>${renderInlineMarkdown(l.replace(/^-\s+/, ""))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    const paraLines: string[] = [];
    while (i < lines.length) {
      const l = lines[i]!;
      if (l.trim() === "") break;
      if (/^(#{1,6})\s/.test(l)) break;
      if (/^-\s/.test(l)) break;
      if (/^-{3,}$/.test(l.trim())) break;
      if (l.trim().startsWith("```")) break;
      paraLines.push(l);
      i++;
    }

    if (paraLines.length > 0) {
      const html = paraLines.map((l) => renderInlineMarkdown(l)).join(" ");
      out.push(`<p>${html}</p>`);
    }
  }

  const merged: string[] = [];
  for (const block of out) {
    if (
      block.startsWith("<p>") &&
      merged.length > 0 &&
      merged[merged.length - 1]!.startsWith("<p>")
    ) {
      const prev = merged.pop()!;
      const prevContent = prev.slice(3, -4);
      const currContent = block.slice(3, -4);
      merged.push(`<p>${prevContent} ${currContent}</p>`);
    } else {
      merged.push(block);
    }
  }

  return merged.join("\n");
}
