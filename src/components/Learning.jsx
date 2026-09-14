import React from 'react';
import Reveal from './Reveal.jsx';

const items = [
  {
    title: 'Microsoft AI Engineer Program Certified',
    org: 'Simplilearn',
    year: '2025',
  },
  {
    title: 'AI Career Accelerator Program Certified',
    org: 'AI for Techies',
    year: '2025',
  },
  {
    title: 'B.Sc. in Perfusion Technology',
    org: 'Chettinad Academy of Research and Education',
    year: '2022',
  },
];

const Learning = () => {
  return (
    <section
      id="learning"
      className="border-t border-slate-800 bg-slate-950/50"
      aria-labelledby="learning-heading"
    >
      <Reveal className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <h2
          id="learning-heading"
          className="text-base font-semibold uppercase tracking-[0.15em] text-teal-300"
        >
          Certifications
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-teal-300 to-transparent" />

        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-1 rounded-lg bg-slate-900 p-5 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:ring-teal-600 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-slate-50">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.org}</p>
              </div>
              <p className="text-sm font-medium text-teal-300">{item.year}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Learning;

