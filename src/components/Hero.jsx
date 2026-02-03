import React from 'react';

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,178,172,0.26),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_55%)]" />
      <div className="fade-in-up relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 md:flex-row md:py-24">
        <div className="w-full md:w-3/5">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            AI Engineer with clinical intuition
          </p>
          <h1
            id="hero-heading"
            className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Kirushna Priya
          </h1>
          <p className="mb-4 text-base font-medium text-brand-200 sm:text-lg">
            AI Engineer | Clinical Perfusionist → AI Systems
          </p>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I build AI systems that stay calm under pressure — blending clinical
            decision-making experience with a precise, validation-first approach
            to data and models.
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-brand-400 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-brand-900/40 transition hover:bg-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View Projects
            </a>
            <a
              href="/Kirushnapriya-Resume.pdf"
              className="inline-flex items-center rounded-full border border-brand-500/60 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-brand-300 hover:text-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Kirushna-priya"
              className="inline-flex items-center text-sm font-medium text-slate-300 transition hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-full px-3 py-1"
              aria-label="GitHub profile"
            >
              <span className="mr-2 h-5 w-5 rounded-full border border-slate-500 bg-slate-900 flex items-center justify-center text-xs">
                {/* Simple GitHub glyph */}
                <span className="sr-only">GitHub</span>
              </span>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kirushna-priya"
              className="inline-flex items-center text-sm font-medium text-slate-300 transition hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-full px-3 py-1"
              aria-label="LinkedIn profile"
            >
              <span className="mr-2 h-5 w-5 rounded-full border border-slate-500 bg-slate-900 flex items-center justify-center text-[10px]">
                in
              </span>
              www.linkedin.com/in/kirushna-priya
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-[2.25rem] border border-brand-500/50 bg-gradient-to-br from-slate-900 via-slate-900 to-black shadow-[0_20px_60px_rgba(15,23,42,0.9)] ring-1 ring-slate-900/80 sm:h-56 sm:w-56 md:h-64 md:w-64">
            <img
              src="/profile.png"
              alt="Portrait of Kirushna Priya"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

