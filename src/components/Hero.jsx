import React from 'react';
import Reveal from './Reveal.jsx';

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
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-28">
        <Reveal className="grid gap-12 md:grid-cols-2 md:items-center">
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
                className="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md transition hover:-translate-y-0.5 hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View Projects
              </a>
              <a
                href="/Kirushnapriya%20AI%20Engineer.pdf"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M12 3v12" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M4 19h16" />
                </svg>
                Resume
              </a>
              <a
                href="https://github.com/Kirushna-priya"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/iam.kirushnapriya/"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.47 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.47.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.47-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.47-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.13 1.38-.66.67-1.07 1.34-1.38 2.13-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.84 5.84 0 0 0-1.38-2.13A5.84 5.84 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://hashnode.com/@kirushnapriya"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953A3.953 3.953 0 1 1 12 8.047a3.953 3.953 0 0 1 0 7.906z" />
                </svg>
                Hashnode
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
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-2xl border-2 border-teal-600/50 bg-gradient-to-br from-slate-900 to-black shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/kp_closeup.jpeg"
                alt="Portrait of Kirushna Priya"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;

