import { steps } from "@/lib/content";
import { container } from "./ui";

/** Numbered because the content really is a sequence. */
export default function HowItWorks() {
  return (
    <section id="how" className="bg-band py-16" aria-labelledby="how-title">
      <div className={container}>
        <h2 id="how-title" className="font-display text-3xl font-bold">How it works</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand font-display font-bold text-white">{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
