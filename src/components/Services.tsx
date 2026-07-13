import { Sparkles, Shield, Smile, Activity, Moon, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Teeth Cleaning & Hygiene',
    description:
      'Thorough, gentle cleanings performed personally by Dr. Tkach. Most patients describe them as completely painless and look forward to each visit.',
    image: 'https://images.pexels.com/photos/3845741/pexels-photo-3845741.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Shield,
    title: 'Dental Crowns',
    description:
      'Precision crown restoration with clear communication at every step. Dr. Tkach ensures comfort and confidence throughout the entire procedure.',
    image: 'https://images.pexels.com/photos/6627629/pexels-photo-6627629.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    description:
      'Enhance your smile with expert cosmetic treatments tailored to your needs. Natural-looking results with a focus on your comfort and confidence.',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Activity,
    title: 'Comprehensive Exams',
    description:
      'Full diagnostic X-rays and thorough examinations to detect issues early. Dr. Tkach reviews all findings with you and answers every question.',
    image: 'https://images.pexels.com/photos/5355925/pexels-photo-5355925.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Moon,
    title: 'Night Guards',
    description:
      'Custom-fitted night guards for teeth grinding and clenching. Protect your teeth while you sleep with a comfortable, durable appliance.',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Stethoscope,
    title: 'Major Dental Treatments',
    description:
      'From root canals to complex restorations, Dr. Tkach handles major procedures with the same gentle care and expertise her patients trust.',
    image: 'https://images.pexels.com/photos/6627637/pexels-photo-6627637.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 text-xs font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </span>
          <h2 className="font-display text-4xl font-bold text-[#0f2640] mb-4">Comprehensive Dental Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            From routine cleanings to complex restorations, we provide a full range of dental services — all with the
            gentle, personalized care our patients rave about.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2640]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-9 h-9 bg-sky-500 rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-[#0f2640] mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
