import { Star, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2640]/90 via-[#0f2640]/70 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-1.5 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sky-200 text-xs font-medium tracking-wide">5.0 · 109 Google Reviews</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your Smile,{' '}
            <span className="text-sky-400">Our</span>{' '}
            Priority
          </h1>

          <p className="text-blue-100/80 text-lg leading-relaxed mb-8 max-w-lg">
            Experience exceptional dental care in the heart of Midtown Manhattan. Dr. Larisa Tkach and her team provide
            gentle, thorough, and pain-free dentistry you'll actually look forward to.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-sky-500/30 hover:shadow-sky-400/40 hover:-translate-y-0.5"
            >
              Book an Appointment
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            {[
              { value: '10+', label: 'Years of Experience' },
              { value: '5.0★', label: 'Google Rating' },
              { value: '100%', label: 'Gentle Care' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200/70 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hidden md:block relative opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[4/5]">
            <img
              src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern dental office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2640]/60 to-transparent" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Star size={18} className="fill-sky-500 text-sky-500" />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Voted Best Dentist</div>
              <div className="text-sm font-semibold text-gray-800">Midtown Manhattan</div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
