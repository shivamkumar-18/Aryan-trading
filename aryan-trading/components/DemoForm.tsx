"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { courses } from "@/lib/content";
import { formConfig, formEndpoint, site, whatsappHref } from "@/lib/site";
import { btnPrimary } from "./ui";

type Status = "idle" | "sending" | "success" | "error";

const input = "mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5";

/**
 * Free demo class request. Posts JSON straight from the browser to a form service
 * (Web3Forms or Formspree), which e-mails the enquiry to the client. No own server needed.
 */
export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Spam trap: people never see this field, bots fill it. Pretend success and send nothing.
    if (data.website) {
      setStatus("success");
      return;
    }

    // Indian mobile number: 10 digits starting 6-9. Ignores +91, spaces and dashes.
    const phone = (data.phone ?? "").replace(/\D/g, "").slice(-10);
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setStatus("error");
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    const endpoint = formEndpoint();
    if (!endpoint) {
      setStatus("error");
      setMessage("The online form is not switched on yet. Please message us on WhatsApp instead.");
      return;
    }

    const fields = {
      name: data.name,
      phone,
      email: data.email || "not given",
      interested_in: data.interest,
      available: data.available,
      message: data.message || "none",
    };
    const subject = `Free demo class request from ${data.name}`;
    const payload =
      formConfig.provider === "web3forms"
        ? { access_key: formConfig.web3formsKey, subject, from_name: site.name, ...fields }
        : { _subject: subject, ...fields };

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      const ok = res.ok && (formConfig.provider !== "web3forms" || result.success === true);
      if (!ok) throw new Error("Form service rejected the request");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Sorry, we could not send your request. Please try again or message us on WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-line bg-white p-6">
        <h3 className="font-display text-xl font-bold">Thank you!</h3>
        <p className="mt-2 text-muted">We have received your request and will call you soon to confirm your free demo class.</p>
        <a className="mt-4 inline-block font-semibold text-brand underline" href={whatsappHref("Hello, I just requested a demo class.")}>
          Prefer WhatsApp? Message us
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-line bg-white p-6">
      <h3 className="font-display text-xl font-bold">Book your free demo class</h3>

      <label className="mt-4 block text-sm font-medium">
        Full name
        <input className={input} name="name" required autoComplete="name" maxLength={80} />
      </label>
      <label className="mt-3 block text-sm font-medium">
        Mobile number
        <input className={input} name="phone" type="tel" required autoComplete="tel" inputMode="tel" maxLength={20} />
      </label>
      <label className="mt-3 block text-sm font-medium">
        Email (optional)
        <input className={input} name="email" type="email" autoComplete="email" maxLength={120} />
      </label>
      <label className="mt-3 block text-sm font-medium">
        I am interested in
        <select className={input} name="interest" defaultValue="Not sure yet">
          {courses.map((c) => <option key={c.title}>{c.title}</option>)}
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="mt-3 block text-sm font-medium">
        I can attend in the
        <select className={input} name="available" defaultValue="Flexible">
          <option>Morning</option><option>Afternoon</option><option>Evening</option><option>Weekend</option><option>Flexible</option>
        </select>
      </label>
      <label className="mt-3 block text-sm font-medium">
        Message (optional)
        <textarea className={input} name="message" rows={3} maxLength={500} />
      </label>

      {/* Hidden spam trap (see handleSubmit). */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="mt-4 flex items-start gap-2 text-sm">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4" />
        <span>
          I agree that {site.name} may contact me about my enquiry. Read the{" "}
          <Link href="/privacy/" className="font-semibold text-brand underline">Privacy Policy</Link>.
        </span>
      </label>

      <button type="submit" disabled={status === "sending"} className={`${btnPrimary} mt-5 w-full disabled:opacity-60`}>
        {status === "sending" ? "Sending..." : "Request free demo class"}
      </button>
      <p role="alert" className="mt-3 min-h-5 text-sm font-medium text-red-700">{status === "error" ? message : ""}</p>
    </form>
  );
}
