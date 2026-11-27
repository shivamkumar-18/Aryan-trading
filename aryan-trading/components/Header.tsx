"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { btnPrimary, container } from "./ui";

const links = [
  { label: "Courses", href: "/#courses" },
  { label: "How it works", href: "/#how" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

/** Sticky header with an accessible mobile menu. */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
      <div className={`${container} flex h-16 items-center gap-4`}>
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand font-display text-sm font-extrabold text-white">AT</span>
          <span className="font-display text-lg font-bold leading-tight">
            {site.name}
            <span className="block font-sans text-xs font-medium text-muted">{site.tagline}</span>
          </span>
        </Link>

        <nav
          id="main-nav"
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col gap-1 border-b border-line bg-paper px-5 py-4 md:static md:ml-auto md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 font-medium text-muted hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/#demo" className={`${btnPrimary} ml-auto hidden px-4 py-2 text-sm sm:inline-flex md:ml-0`}>
          Book free demo
        </Link>
        <button
          type="button"
          className="ml-auto rounded-lg border-2 border-line px-3 py-1.5 text-sm font-semibold sm:ml-0 md:hidden"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
