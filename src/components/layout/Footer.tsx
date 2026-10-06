import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navLinks, socials } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-[#141112] text-white/75">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image src="/images/logo-white.webp" alt="Tulas International School" width={203} height={79} />
          <p className="mt-6 max-w-md leading-relaxed">
            Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to
            impart education through seamless opportunities.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">Explore</h2>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">Contact us</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={contact.helplineHref} className="flex gap-3 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0" /> Admission helpline {contact.helpline}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex gap-3 hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0" /> {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0" /> {contact.address}
              </a>
            </li>
            <li className="pl-7">Landline {contact.landlines.join(", ")}</li>
          </ul>
        </address>
      </div>
      <p className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Tulas International School, Dehradun. Homepage redesign concept.
      </p>
    </footer>
  );
}
