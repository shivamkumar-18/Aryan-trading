import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Courses from "@/components/Courses";
import HowItWorks from "@/components/HowItWorks";
import SyllabusBand from "@/components/SyllabusBand";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Audience />
      <Courses />
      <HowItWorks />
      <SyllabusBand />
      <Faq />
      <Contact />
    </main>
  );
}
