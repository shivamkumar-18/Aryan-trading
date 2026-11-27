import { mailHref, mapHref, site, telHref, whatsappHref } from "@/lib/site";
import DemoForm from "./DemoForm";
import { container } from "./ui";

export default function Contact() {
  return (
    <section id="contact" className={`${container} grid gap-10 py-16 lg:grid-cols-2`} aria-labelledby="contact-title">
      <div id="demo" className="lg:order-2">
        <DemoForm />
      </div>
      <div>
        <h2 id="contact-title" className="font-display text-3xl font-bold">Visit us or get in touch</h2>
        <dl className="mt-6 space-y-5">
          <div>
            <dt className="font-semibold">Classroom address</dt>
            <dd className="text-muted">{site.address}</dd>
            <dd><a className="font-semibold text-brand underline" href={mapHref()} rel="noopener noreferrer" target="_blank">Open in Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-semibold">Phone</dt>
            <dd><a className="text-brand underline" href={telHref()}>{site.phone}</a></dd>
          </div>
          <div>
            <dt className="font-semibold">WhatsApp</dt>
            <dd><a className="text-brand underline" href={whatsappHref("Hello, I would like to know more about your courses.")}>Chat with us on WhatsApp</a></dd>
          </div>
          <div>
            <dt className="font-semibold">Email</dt>
            <dd><a className="text-brand underline" href={mailHref()}>{site.email}</a></dd>
          </div>
          <div>
            <dt className="font-semibold">Opening hours</dt>
            <dd className="text-muted">{site.hours}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
