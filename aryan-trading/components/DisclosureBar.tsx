import { site } from "@/lib/site";

/** Regulatory-style notice shown on every page. Wording must be approved by the client. */
export default function DisclosureBar() {
  return (
    <div className="bg-ink px-4 py-2 text-center text-xs text-paper sm:text-sm">
      <strong>SEBI compliance disclosure:</strong> {site.name} is a financial literacy and stock market training
      institute. We do not provide stock tips, PMS or investment advisory services.
    </div>
  );
}
