import { whatsappHref } from "@/lib/site";

/** Floating WhatsApp button, kept clear of phone notches and home bars. */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref("Hello, I would like to know more about your courses.")}
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 z-40 rounded-full bg-[#1fa855] px-5 py-3 font-semibold text-white shadow-lg hover:brightness-95"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      WhatsApp
    </a>
  );
}
