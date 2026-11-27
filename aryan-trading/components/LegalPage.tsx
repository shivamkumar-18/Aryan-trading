import { container } from "./ui";

/** Shared layout for Privacy, Terms and Risk pages. */
export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main id="main" className={`${container} max-w-3xl py-14`}>
      <h1 className="font-display text-4xl font-extrabold">{title}</h1>
      <p className="mt-2 text-sm text-muted">Last updated: 27 November 2026. Draft pending review by the business owner&apos;s legal adviser.</p>
      <div className="mt-8 space-y-4 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1">
        {children}
      </div>
    </main>
  );
}
