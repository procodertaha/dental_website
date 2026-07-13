import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Performs cleanings personally — no delegation to hygienists',
  'Gentle, virtually pain-free procedures',
  'Always on time — no long waits',
  'Modern equipment & immaculately clean office',
  'Kind, patient, and non-judgmental approach',
  'In-network with most major insurance plans',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
            <img
              src="https://images.pexels.com/photos/5355925/pexels-photo-5355925.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dr. Larisa Tkach"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#0f2640] text-white rounded-2xl p-5 shadow-xl max-w-[200px]">
            <div className="font-display text-3xl font-bold text-sky-400">10+</div>
            <div className="text-sm text-blue-200 mt-1">Years serving Midtown Manhattan patients</div>
          </div>
        </div>

        <div>
          <span className="inline-block text-sky-600 text-xs font-semibold tracking-widest uppercase mb-3">
            Meet Your Dentist
          </span>
          <h2 className="font-display text-4xl font-bold text-[#0f2640] leading-tight mb-5">
            Dr. Larisa Tkach, DDS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dr. Larisa Tkach is consistently recognized by her patients as one of the best dentists in New York City. Her
            practice, conveniently located in Midtown Manhattan, is built on a foundation of genuine care, meticulous
            attention to detail, and a commitment to making every patient feel at ease.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Unlike many dental offices, Dr. Tkach performs every cleaning herself — ensuring personalized, consistent care
            at every visit. Patients regularly report that her gentle touch is so soothing, they fall asleep in the chair.
          </p>

          <ul className="space-y-3 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-sky-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0f2640] hover:bg-[#1a3a5c] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            Schedule with Dr. Tkach
          </a>
        </div>
      </div>
    </section>
  );
}
