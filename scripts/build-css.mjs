import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const entry = join(root, "css", "style.css");

const fontImports = [];

function resolveImports(file, seen = new Set()) {
  if (seen.has(file)) return "";
  seen.add(file);

  const source = readFileSync(file, "utf8");
  const base = dirname(file);
  let output = "";

  const importPattern = /@import\s+(?:url\()?["']([^"']+)["']\)?\s*;/g;
  let cursor = 0;
  let match;

  while ((match = importPattern.exec(source)) !== null) {
    output += source.slice(cursor, match.index);
    cursor = importPattern.lastIndex;

    const target = match[1];
    if (/^https?:\/\//.test(target)) {
      fontImports.push(`@import url("${target}");`);
    } else {
      output += resolveImports(resolve(base, target), seen);
    }
  }

  output += source.slice(cursor);
  return output;
}

const css = resolveImports(entry);

const minified = css
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*([{}:;,>+~])\s*/g, "$1")
  .replace(/;}/g, "}")
  .replace(/\s*!\s*important/g, "!important")
  .trim();

const result = `${fontImports.join("")}${minified}\n`;

writeFileSync(join(root, "css", "style.min.css"), result, "utf8");
console.log(`style.min.css gerado com ${result.length} caracteres.`);
