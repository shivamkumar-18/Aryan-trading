import { audiences } from "@/lib/content";
import { container } from "./ui";

export default function Audience() {
  return (
    <section className="border-y border-line bg-band py-12" aria-labelledby="audience-title">
      <div className={container}>
        <h2 id="audience-title" className="font-display text-2xl font-bold sm:text-3xl">Who our classes are for</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title}>
              <h3 className="font-display text-lg font-bold">{a.title}</h3>
              <p className="mt-1 text-muted">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
