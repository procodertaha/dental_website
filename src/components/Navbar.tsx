import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-tight">
          <span
            className={`font-display text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-[#0f2640]' : 'text-white'
            }`}
          >
            New York Midtown Dental
          </span>
          <span
            className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? 'text-sky-600' : 'text-sky-300'
            }`}
          >
            Professional Care
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-sky-400 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+12125551234"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
          >
            <Phone size={14} />
            Call Us
          </a>
        </nav>

        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-sky-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+12125551234"
            className="flex items-center gap-2 bg-sky-500 text-white text-sm font-semibold px-4 py-2 rounded-full w-fit"
          >
            <Phone size={14} />
            Call Us
          </a>
        </div>
      )}
    </header>
  );
}
