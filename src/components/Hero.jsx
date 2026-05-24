import React from 'react';

const Hero = () => {
  const highlights = [
    'GenAI Workflows',
    'LLM Systems',
    'QLoRA',
    'Deployment',
    'Automation',
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left: Text Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-teal-300">
              AI Engineer, Bengaluru
            </p>
            <h1
              id="hero-heading"
              className="mb-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
            >
              Kirushna Priya
            </h1>
            <p className="mb-4 text-xl font-semibold text-slate-100">
              Building GenAI workflows, LLM systems, and reproducible AI pipelines
            </p>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-300">
              I build intelligent AI systems with a focus on workflow automation, QLoRA fine-tuning, open-weight models, and practical deployment.
            </p>

            {/* CTA Buttons */}
            <div className="mb-10 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View Projects
              </a>
              <a
                href="https://github.com/Kirushna-priya"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-teal-500 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.57 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.21.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.23-3.17-.12-.3-.53-1.51.12-3.15 0 0 1.01-.32 3.3 1.21a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.13 3 .4 2.29-1.53 3.3-1.21 3.3-1.21.65 1.64.24 2.85.12 3.15.77.83 1.23 1.88 1.23 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.69.83.57A11.79 11.79 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kirushna-priya"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-teal-500 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-slate-400">
              <p>
                📧{' '}
                <a
                  href="mailto:kirushna203@gmail.com"
                  className="font-medium text-slate-100 hover:text-teal-300"
                >
                  kirushna203@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div>
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-2xl border-2 border-teal-600/50 bg-gradient-to-br from-slate-900 to-black shadow-2xl">
              <img
                src="/profile.png"
                alt="Portrait of Kirushna Priya"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

