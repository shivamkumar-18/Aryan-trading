import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy/" } };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This policy explains how {site.name} ({site.legalName}) handles personal information collected through this website.</p>
      <h2>What we collect</h2>
      <p>When you use the demo class or enquiry form we collect the details you type: your name, mobile number, optional email, the course you are interested in, when you can attend and any message.</p>
      <h2>Why we collect it</h2>
      <ul>
        <li>To call or message you about your demo class, batches and fees.</li>
        <li>To answer your questions about our courses.</li>
      </ul>
      <p>We use your details only for these purposes and only after you tick the consent box on the form.</p>
      <h2>Who processes it</h2>
      <p>Form submissions are delivered to us by e-mail through a third-party form service (Web3Forms or Formspree). That service processes the data on our behalf. We do not sell your personal information.</p>
      <h2>How long we keep it</h2>
      <p>We keep enquiry details only as long as needed to respond to you and manage admissions, and delete them when they are no longer needed.</p>
      <h2>Your choices</h2>
      <p>You may ask us to correct or delete your information, or withdraw your consent, at any time by contacting us at {site.email}. We handle requests as required by applicable Indian law.</p>
      <h2>Cookies and analytics</h2>
      <p>This website does not use advertising cookies. {`[CONFIRM] Describe any analytics tool the client enables.`}</p>
      <h2>Contact</h2>
      <p>{site.legalName}, {site.address}. Email: {site.email}. Phone: {site.phone}.</p>
    </LegalPage>
  );
}
