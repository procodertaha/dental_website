import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const hours = [
  { day: 'Monday', time: '9:00 AM – 6:00 PM' },
  { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
  { day: 'Friday', time: '9:00 AM – 5:00 PM' },
  { day: 'Saturday', time: 'By Appointment' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 text-xs font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl font-bold text-[#0f2640] mb-4">Visit Our Midtown Office</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Conveniently located in Midtown Manhattan, near Times Square. We welcome new patients and accept most major
            insurance plans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
              <h3 className="font-display text-xl font-semibold text-[#0f2640]">Contact Information</h3>

              <a
                href="https://maps.google.com/?q=New+York+Midtown+Dental"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-100 transition-colors">
                  <MapPin size={18} className="text-sky-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800 group-hover:text-sky-600 transition-colors flex items-center gap-1">
                    View on Maps <ExternalLink size={12} />
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5">Midtown Manhattan, New York, NY</div>
                </div>
              </a>

              <a href="tel:+12125551234" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-100 transition-colors">
                  <Phone size={18} className="text-sky-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800 group-hover:text-sky-600 transition-colors">
                    (212) 555-1234
                  </div>
                  <div className="text-xs text-gray-400">Call to book your appointment</div>
                </div>
              </a>

              <a href="mailto:info@nymidtowndental.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-100 transition-colors">
                  <Mail size={18} className="text-sky-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800 group-hover:text-sky-600 transition-colors">
                    info@nymidtowndental.com
                  </div>
                  <div className="text-xs text-gray-400">We respond within 24 hours</div>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-5">
                <Clock size={16} className="text-sky-600" />
                <h3 className="font-display text-xl font-semibold text-[#0f2640]">Office Hours</h3>
              </div>
              <div className="space-y-2.5">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{day}</span>
                    <span className={time === 'Closed' ? 'text-gray-400 italic' : 'text-gray-600'}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h3 className="font-display text-xl font-semibold text-[#0f2640] mb-1">Request an Appointment</h3>
            <p className="text-gray-400 text-sm mb-6">Fill out the form and we'll be in touch shortly.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">First Name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(212) 000-0000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Reason for Visit</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition appearance-none bg-white">
                  <option value="">Select a service...</option>
                  <option>Routine Cleaning & Exam</option>
                  <option>Dental Crown</option>
                  <option>Cosmetic Consultation</option>
                  <option>Night Guard</option>
                  <option>Emergency / Pain</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Additional Notes</label>
                <textarea
                  rows={3}
                  placeholder="Any additional information you'd like us to know..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0f2640] hover:bg-[#1a3a5c] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Request Appointment
              </button>

              <p className="text-xs text-gray-400 text-center">
                New patients welcome. Most major insurance plans accepted.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
