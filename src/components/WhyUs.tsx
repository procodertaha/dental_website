import { Heart, Clock, Award, Users } from 'lucide-react';

const pillars = [
  {
    icon: Heart,
    title: 'Gentle by Nature',
    description:
      'Patients consistently describe Dr. Tkach as the gentlest dentist they have ever experienced. Pain-free care is our standard, not the exception.',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    description:
      'We respect your schedule. Appointments begin promptly and our streamlined process means efficient, effective care without unnecessary waiting.',
  },
  {
    icon: Award,
    title: 'Personalized Attention',
    description:
      'Dr. Tkach performs every cleaning personally. You receive direct, consistent care from an expert who knows your dental history intimately.',
  },
  {
    icon: Users,
    title: 'A Team You Trust',
    description:
      'From the front desk to the chair, our warm and professional staff make every visit comfortable, welcoming, and stress-free.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#0f2640]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-sky-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Dentistry the Way It Should Be
          </h2>
          <p className="text-blue-200/70 max-w-xl mx-auto text-sm leading-relaxed">
            We believe great dental care starts with a great relationship. Our practice is built on trust, expertise, and
            an unwavering commitment to your comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-sky-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-500/30 transition-colors">
                  <Icon size={22} className="text-sky-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
