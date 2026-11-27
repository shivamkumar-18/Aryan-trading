import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Risk Disclosure", alternates: { canonical: "/risk-disclosure/" } };

export default function RiskDisclosure() {
  return (
    <LegalPage title="Risk Disclosure">
      <p>Please read this before you enrol in any course or start trading.</p>
      <ul>
        <li>Trading in stocks, futures and options involves a substantial risk of loss. You can lose more than you expect, and options can expire worthless.</li>
        <li>Studies published by SEBI have found that most individual traders in equity derivatives made losses. Read SEBI&apos;s latest studies on sebi.gov.in.</li>
        <li>Past results, examples and charts shown in class or on this website do not predict future results.</li>
        <li>Only trade with money you can afford to lose, and never borrow money to trade.</li>
      </ul>
      <p>{site.name} is a training institute. We do not provide stock tips, buy or sell calls, PMS or investment advisory services. Speak to a SEBI-registered investment adviser if you need personal investment advice.</p>
    </LegalPage>
  );
}
