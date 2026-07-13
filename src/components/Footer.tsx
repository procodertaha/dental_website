import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1d35] text-blue-200/70">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-white text-lg font-bold mb-1">New York Midtown Dental PC</div>
          <div className="text-sky-400 text-xs tracking-widest uppercase mb-4">Dr. Larisa Tkach, DDS</div>
          <p className="text-sm leading-relaxed">
            Providing gentle, expert dental care in the heart of Midtown Manhattan. Your comfort and smile are our
            highest priority.
          </p>
        </div>

        <div>
          <div className="text-white font-semibold text-sm mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {['About', 'Services', 'Reviews', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-sky-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold text-sm mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-sky-500 mt-0.5 flex-shrink-0" />
              <span>Midtown Manhattan, New York, NY</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-sky-500 flex-shrink-0" />
              <a href="tel:+12125551234" className="hover:text-sky-400 transition-colors">
                (212) 555-1234
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-sky-500 flex-shrink-0" />
              <a href="mailto:info@nymidtowndental.com" className="hover:text-sky-400 transition-colors">
                info@nymidtowndental.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-blue-200/40">
          <span>&copy; {new Date().getFullYear()} New York Midtown Dental PC. All rights reserved.</span>
          <span>Serving Midtown Manhattan, New York</span>
        </div>
      </div>
    </footer>
  );
}
