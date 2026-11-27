import Link from "next/link";
import { btnPrimary, container } from "@/components/ui";

/** Becomes 404.html, which Cloudflare Pages shows for unknown addresses. */
export default function NotFound() {
  return (
    <main id="main" className={`${container} py-24 text-center`}>
      <h1 className="font-display text-4xl font-extrabold">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className={`${btnPrimary} mt-6`}>Go to the home page</Link>
    </main>
  );
}
