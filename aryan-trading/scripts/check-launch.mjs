/**
 * Pre-launch check. Run:  npm run check:launch
 * Fails (exit code 1) while sample values or [CONFIRM] placeholders remain.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const problems = [];
const env = process.env;

// 1. Required settings must exist and must not be the sample values from .env.example.
const required = ["NEXT_PUBLIC_SITE_URL", "NEXT_PUBLIC_PHONE", "NEXT_PUBLIC_WHATSAPP_NUMBER", "NEXT_PUBLIC_EMAIL"];
for (const key of required) {
  const value = env[key] ?? "";
  if (!value) problems.push(`${key} is not set`);
  else if (/example\.com|98765|43210/.test(value)) problems.push(`${key} still has the sample value "${value}"`);
}
if (env.NEXT_PUBLIC_SITE_URL && !env.NEXT_PUBLIC_SITE_URL.startsWith("https://")) {
  problems.push("NEXT_PUBLIC_SITE_URL must start with https://");
}

// 2. The form provider must be configured.
if (env.NEXT_PUBLIC_FORM_PROVIDER === "formspree") {
  if (!env.NEXT_PUBLIC_FORMSPREE_ENDPOINT) problems.push("NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set");
} else if (!env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
  problems.push("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set");
}

// 3. No [CONFIRM] placeholders may remain in the source.
function scan(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) scan(path);
    else if (/\.(ts|tsx|css|md|txt|xml|json)$/.test(name)) {
      readFileSync(path, "utf8").split("\n").forEach((line, i) => {
        const t = line.trim();
        const hasPlaceholder = line.includes("[CONFIRM]") || line.includes("${PLACEHOLDER}");
        // Skip comments, the constant itself, and env-driven fallbacks (checked in step 1).
        const skip = t.startsWith("*") || t.startsWith("//") || line.includes("PLACEHOLDER =") || line.includes("process.env.");
        if (hasPlaceholder && !skip) {
          problems.push(`${path}:${i + 1} still contains a [CONFIRM] placeholder`);
        }
      });
    }
  }
}
for (const dir of ["app", "components", "lib"]) scan(dir);

// 4. Required files.
for (const file of ["public/aryan-trading-syllabus.pdf", "public/og.png"]) {
  if (!existsSync(file)) problems.push(`${file} is missing`);
}

if (problems.length) {
  console.error(`\nNot ready to launch. ${problems.length} problem(s):\n`);
  problems.forEach((p) => console.error(` - ${p}`));
  process.exit(1);
}
console.log("Launch check passed.");
