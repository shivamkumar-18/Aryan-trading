import Link from "next/link";
import { site } from "@/lib/site";
import { container } from "./ui";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line py-10 text-sm text-muted">
      <div className={container}>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
          <Link href="/privacy/" className="hover:text-ink">Privacy policy</Link>
          <Link href="/terms/" className="hover:text-ink">Terms of use</Link>
          <Link href="/risk-disclosure/" className="hover:text-ink">Risk disclosure</Link>
        </nav>
        <p className="mt-4 max-w-3xl">
          <strong>Risk disclosure:</strong> Trading in stocks and derivatives involves a substantial risk of loss and is not
          suitable for everyone. Our content is for education only. It is not investment advice, and nothing here is a
          recommendation to buy or sell any security.
        </p>
        <p className="mt-3">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
