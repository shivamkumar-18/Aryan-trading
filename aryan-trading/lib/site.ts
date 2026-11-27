/**
 * Central place for every business fact shown on the website.
 *
 * - Values marked "[CONFIRM]" are placeholders. The client must provide the real
 *   text. `npm run check:launch` refuses to pass while any [CONFIRM] is left.
 * - Phone, WhatsApp, e-mail and site URL come from environment variables
 *   (see .env.example) so they can be changed without editing code.
 */
const PLACEHOLDER = "[CONFIRM]";

/** Removes the placeholder tag, for use inside links (tel:, mailto:, maps). */
export const clean = (value: string) => value.replace(PLACEHOLDER, "").trim();

/** True while a value is still an unconfirmed placeholder. */
export const isPlaceholder = (value: string) => value.includes(PLACEHOLDER);

export const site = {
  name: "Aryan Trading Classes",
  tagline: "Stock Market Training Academy",
  description:
    "Offline classroom courses in stock market basics, technical analysis and options trading, with live market practice. Book a free demo class.",
  // Final public address, no trailing slash.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  phone: process.env.NEXT_PUBLIC_PHONE ?? `${PLACEHOLDER} +91 00000 00000`,
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "910000000000",
  email: process.env.NEXT_PUBLIC_EMAIL ?? `${PLACEHOLDER} hello@example.com`,
  // Business facts the client must supply:
  legalName: `${PLACEHOLDER} Registered business name`,
  address: `${PLACEHOLDER} Full classroom address, City, State, PIN`,
  hours: `${PLACEHOLDER} Mon to Sat, 9:00 AM to 7:00 PM`,
  syllabusFile: "/aryan-trading-syllabus.pdf",
};

export const telHref = () => `tel:${clean(site.phone).replace(/[^\d+]/g, "")}`;
export const mailHref = () => `mailto:${clean(site.email)}`;
export const mapHref = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clean(site.address))}`;

/** Opens WhatsApp with an optional pre-filled message. */
export function whatsappHref(text?: string) {
  const digits = site.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

/** Enquiry form provider settings (public identifiers, not secrets). */
export const formConfig = {
  provider: process.env.NEXT_PUBLIC_FORM_PROVIDER === "formspree" ? "formspree" : "web3forms",
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
} as const;

/** Returns the URL the form posts to, or "" when the form is not configured yet. */
export function formEndpoint() {
  if (formConfig.provider === "web3forms") {
    return formConfig.web3formsKey ? "https://api.web3forms.com/submit" : "";
  }
  return formConfig.formspreeEndpoint;
}
