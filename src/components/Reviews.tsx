import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Heather McPherson',
    badge: 'Local Guide · 72 reviews',
    time: '8 months ago',
    text: "I've been going to Dr Tkach for about 2 years now and she is always on time with seeing me, patient, relaxed, friendly and efficient. I've had dentists who have been late, rushed or brusque in the past and Dr Tkach is a breath of fresh air.",
  },
  {
    name: 'Max K',
    badge: '3 reviews',
    time: 'a year ago',
    text: "I've been to four dentists in NYC over 10 years and Dr. Tkach is by far the best. Smooth, thorough, and pain free cleanings combined with thoughtful, non-judgmental consultation on any questions/issues you have.",
  },
  {
    name: 'Edie Machinist',
    badge: 'Local Guide · 34 reviews',
    time: 'a year ago',
    text: "I had a great experience at Dr. Tkach's office. I was seen on time and the office is clean and modern. She has a kind demeanor and is a thorough clinician. I went for a cleaning and she did the cleaning herself which is not always the case. I barely felt anything as she is very gentle.",
  },
  {
    name: 'John Tsao',
    badge: '2 reviews',
    time: '11 months ago',
    text: "Dr. Tkach is one of the best dentists I've ever had. Her bedside manner is very kind and she is extremely gentle with her patients. I often fall asleep while she is cleaning my teeth! She does the cleanings herself as well. Her office is wonderful.",
  },
  {
    name: 'Anton Yakimov',
    badge: 'Local Guide · 39 reviews',
    time: 'a year ago',
    text: "I recently had dental crowns done at Dr. Larisa Tkach, and I couldn't be happier with the experience. Dr. Larisa Tkach was incredibly skilled and made sure I was comfortable throughout the entire process. She explained every step clearly.",
  },
  {
    name: 'Ashley Jones',
    badge: 'Local Guide · 21 reviews',
    time: '2 years ago',
    text: "Dr. Tkach is absolutely amazing. Best dentist I've ever had. I've been coming to her for a little over three years now. She's gentle whenever I experience discomfort, patient, kind, and so sweet. Scheduling is always easy and seamless.",
  },
  {
    name: 'Jay Putera',
    badge: '9 reviews',
    time: '2 years ago',
    text: "Dr. Larisa Tkach is hands down the best dentist I've ever had. Her office is conveniently located in midtown Manhattan, making appointments a breeze. Despite moving to Miami a few years ago, I've chosen to continue seeing Dr. Tkach for my dental care.",
  },
  {
    name: 'Karl Rozemeyer',
    badge: '7 reviews',
    time: '2 years ago',
    text: "I have been a patient of Dr. Tkach for close to 10 years now and I cannot conceive of going to any other dentist. She is extremely professional and has always handled my dental work with the utmost care and consideration.",
  },
  {
    name: 'Anna Kedova',
    badge: 'Local Guide · 55 reviews',
    time: '2 years ago',
    text: "Dr. Tkach has been my dentist for almost 5 years. She is the most gentle and dedicated dentist I've ever known. Also, many friends and family members are also her patients now. Couldn't recommend her enough!",
  },
  {
    name: 'Kevin Raisch',
    badge: 'Local Guide · 122 reviews',
    time: '2 years ago',
    text: "Great dentist! I've been coming to Dr. Tkach at New York Midtown Dental for several years and really enjoy each visit. Scheduling is efficient, the staff is welcoming and Dr. Tkach is always so nice and does a great job. Highly recommended.",
  },
  {
    name: 'Nicole Camacho',
    badge: '9 reviews',
    time: '2 years ago',
    text: "Dr. Tkach love her! She is the best dentist I have ever been to, she is so gentle and so kind. I would highly recommend her to everyone and I will follow her until the end of the earth if I had to. She is so amazing!!!!!",
  },
  {
    name: 'Manuela Botero',
    badge: '2 reviews',
    time: '3 years ago',
    text: "Best experienced Dental care! Affordable and reasonable fees. Dr. Larisa Tkach is a very knowledgeable Dentist. She is kind, detail oriented, very warm and kind. She is very gentle and thorough when she does my dental cleanings.",
  },
];

const CARDS_PER_PAGE = 6;

export default function Reviews() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE);
  const visible = reviews.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="inline-block text-sky-600 text-xs font-semibold tracking-widest uppercase mb-3">
            Patient Reviews
          </span>
          <h2 className="font-display text-4xl font-bold text-[#0f2640] mb-4">What Our Patients Say</h2>
        </div>

        {/* Rating summary */}
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-end gap-3 mb-2">
            <span className="font-display text-6xl font-bold text-[#0f2640]">5.0</span>
            <div className="pb-3">
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">109 Google reviews</p>
            </div>
          </div>
          <div className="w-16 h-0.5 bg-sky-400 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((r) => (
            <div
              key={r.name}
              className="relative bg-slate-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote size={28} className="text-sky-200 absolute top-5 right-5" />
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-5">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[#0f2640] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{r.name}</div>
                  <div className="text-xs text-gray-400">{r.badge} · {r.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2 rounded-full border border-gray-200 hover:border-sky-400 hover:text-sky-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === page ? 'bg-sky-500 w-5' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="p-2 rounded-full border border-gray-200 hover:border-sky-400 hover:text-sky-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
