import { site, whatsappHref } from "@/lib/site";
import { btnAccent, container } from "./ui";

/** Second conversion point: syllabus download and batch timings. */
export default function SyllabusBand() {
  return (
    <section className={`${container} py-16`} aria-labelledby="syllabus-title">
      <div className="rounded-2xl bg-brand p-8 text-white md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <h2 id="syllabus-title" className="font-display text-2xl font-bold sm:text-3xl">See exactly what you will learn</h2>
          <p className="mt-2 max-w-xl text-white/85">Download the course syllabus, or message us to get the current batch timings.</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
          <a href={site.syllabusFile} download className={btnAccent}>Download syllabus</a>
          <a
            href={whatsappHref("Hello, please share the current batch timings and fees.")}
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/60 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Get batch timings
          </a>
        </div>
      </div>
    </section>
  );
}
