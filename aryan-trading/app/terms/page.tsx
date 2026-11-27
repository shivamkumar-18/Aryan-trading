import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/terms/" } };

export default function Terms() {
  return (
    <LegalPage title="Terms of Use">
      <p>By using this website you agree to these terms. {site.name} is operated by {site.legalName}.</p>
      <h2>Education only</h2>
      <p>All content and classes are for education and financial literacy. We do not provide stock tips, buy or sell calls, portfolio management or investment advisory services. Nothing on this website is a recommendation to buy or sell any security.</p>
      <h2>No promise of results</h2>
      <p>Trading involves risk, and you may lose money. We make no promise or guarantee of profit or of any trading result. Examples and illustrations are for learning only.</p>
      <h2>Fees and refunds</h2>
      <p>{`[CONFIRM] Fee payment, batch transfer and refund rules, as decided by the business owner.`}</p>
      <h2>Intellectual property</h2>
      <p>Website text, images, course material and notes belong to {site.legalName} and may not be copied, recorded or resold without written permission.</p>
      <h2>Limitation of liability</h2>
      <p>To the extent allowed by law, we are not liable for any loss arising from decisions you make in the markets or from your use of this website.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India. {`[CONFIRM] Court jurisdiction (city), as advised by the business owner's lawyer.`}</p>
    </LegalPage>
  );
}
