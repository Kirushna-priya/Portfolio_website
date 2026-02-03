import React from 'react';

const items = [
  {
    title: 'AI Engineer: Core Track',
    org: 'Udemy · with Ed Donner',
    year: '2026 (ongoing)',
    detail: 'Hands-on AI engineering, LLMs, system design, and tool-calling patterns.',
  },
  {
    title: 'Microsoft AI Engineer Program',
    org: 'Simplilearn',
    year: '2025 (ongoing)',
    detail: 'Applied AI and ML workflows aligned with Microsoft cloud tooling.',
  },
  {
    title: 'AI Career Accelerator Program',
    org: 'AI for Techies',
    year: '2025 (ongoing)',
    detail: 'Career-focused projects and mentorship for transitioning into AI roles.',
  },
  {
    title: 'Generative AI Mastermind',
    org: 'Outskill',
    year: '2025',
    detail: 'Practical GenAI projects with LLMs, agents, and automation tools.',
  },
  {
    title: 'B.Sc. in Perfusion Technology',
    org: 'Chettinad Academy of Research and Education',
    year: '2022 · 78.8%',
    detail: 'Clinical training in high-responsibility environments and critical care systems.',
  },
];

const Learning = () => {
  return (
    <section
      id="learning"
      className="border-t border-slate-900 bg-black/70"
      aria-labelledby="learning-heading"
    >
      <div className="fade-in-up mx-auto max-w-5xl px-4 py-14 sm:py-16">
        <h2
          id="learning-heading"
          className="text-base font-semibold uppercase tracking-[0.2em] text-brand-400"
        >
          Courses &amp; Certifications
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-brand-400 to-transparent" />
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          A snapshot of how I&apos;ve been building my AI engineering foundation over time.
        </p>

        <ol className="mt-8 space-y-5 border-l border-slate-800 pl-4 text-sm text-slate-200">
          {items.map((item) => (
            <li
              key={item.title}
              className="relative ml-1 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-brand-300/80 hover:bg-slate-900/90"
            >
              <span className="absolute -left-[1.05rem] top-4 h-2.5 w-2.5 rounded-full bg-brand-300 ring-4 ring-black" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-400">{item.org}</p>
                </div>
                <p className="text-xs font-medium text-brand-200">{item.year}</p>
              </div>
              <p className="mt-2 text-xs text-slate-300">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Learning;

