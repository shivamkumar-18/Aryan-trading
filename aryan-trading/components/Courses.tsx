import Link from "next/link";
import { courses } from "@/lib/content";
import { btnOutline, container } from "./ui";

export default function Courses() {
  return (
    <section id="courses" className={`${container} py-16`} aria-labelledby="courses-title">
      <h2 id="courses-title" className="font-display text-3xl font-bold">Our courses</h2>
      <p className="mt-2 max-w-2xl text-muted">All courses are taught in person in our classroom. Fees and batch dates are shared when you enquire.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {courses.map((c) => (
          <article key={c.title} className="flex flex-col rounded-xl border border-line bg-white p-6">
            <p className="text-sm font-semibold text-brand">{c.level}</p>
            <h3 className="mt-1 font-display text-xl font-bold">{c.title}</h3>
            <p className="mt-2 text-muted">{c.summary}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
              {c.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <Link href="/#demo" className={`${btnOutline} mt-6 self-start px-4 py-2 text-sm`}>Ask about this course</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
