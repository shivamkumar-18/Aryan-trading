import { faqs } from "@/lib/content";
import { container } from "./ui";

/** Native <details> elements: keyboard accessible, no JavaScript needed. */
export default function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-band py-16" aria-labelledby="faq-title">
      <div className={container}>
        <h2 id="faq-title" className="font-display text-3xl font-bold">Questions students ask</h2>
        <div className="mt-6 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-lg border border-line bg-white px-5 py-4">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
