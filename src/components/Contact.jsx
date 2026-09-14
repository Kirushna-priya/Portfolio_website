import React from 'react';
import Reveal from './Reveal.jsx';

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950/50"
      aria-labelledby="contact-heading"
    >
      <Reveal className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <h2
          id="contact-heading"
          className="text-base font-semibold uppercase tracking-[0.15em] text-teal-300"
        >
          Contact
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-teal-300 to-transparent" />
        <p className="mt-6 max-w-2xl text-base text-slate-300">
          Open to roles in AI/ML, GenAI, and intelligent automation. Let's connect.
        </p>

        <dl className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-slate-900 p-6 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:ring-teal-600">
            <dt className="font-semibold text-slate-50">Email</dt>
            <dd className="mt-2">
              <a
                href="mailto:kirushna203@gmail.com"
                className="text-teal-300 hover:text-teal-200 font-medium transition"
              >
                kirushna203@gmail.com
              </a>
            </dd>
          </div>

          <div className="rounded-lg bg-slate-900 p-6 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:ring-teal-600">
            <dt className="font-semibold text-slate-50">GitHub</dt>
            <dd className="mt-2">
              <a
                href="https://github.com/Kirushna-priya"
                className="text-teal-300 hover:text-teal-200 font-medium transition"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Kirushna-priya
              </a>
            </dd>
          </div>

          <div className="rounded-lg bg-slate-900 p-6 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:ring-teal-600">
            <dt className="font-semibold text-slate-50">LinkedIn</dt>
            <dd className="mt-2">
              <a
                href="https://www.linkedin.com/in/kirushna-priya"
                className="text-teal-300 hover:text-teal-200 font-medium transition"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/kirushna-priya
              </a>
            </dd>
          </div>

          <div className="rounded-lg bg-slate-900 p-6 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:ring-teal-600">
            <dt className="font-semibold text-slate-50">Instagram</dt>
            <dd className="mt-2">
              <a
                href="https://www.instagram.com/iam.kirushnapriya/"
                className="text-teal-300 hover:text-teal-200 font-medium transition"
                target="_blank"
                rel="noreferrer"
              >
                @iam.kirushnapriya
              </a>
            </dd>
          </div>

          <div className="rounded-lg bg-slate-900 p-6 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:ring-teal-600">
            <dt className="font-semibold text-slate-50">Hashnode</dt>
            <dd className="mt-2">
              <a
                href="https://hashnode.com/@kirushnapriya"
                className="text-teal-300 hover:text-teal-200 font-medium transition"
                target="_blank"
                rel="noreferrer"
              >
                hashnode.com/@kirushnapriya
              </a>
            </dd>
          </div>

          <div className="rounded-lg bg-slate-900 p-6 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:ring-teal-600">
            <dt className="font-semibold text-slate-50">Location</dt>
            <dd className="mt-2 text-slate-300">
              Bengaluru, Karnataka 560037
            </dd>
          </div>

          <div className="rounded-lg bg-slate-900 p-6 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:ring-teal-600">
            <dt className="font-semibold text-slate-50">Portfolio</dt>
            <dd className="mt-2">
              <a
                href="https://kirushnapriya-portfolio.netlify.app"
                className="text-teal-300 hover:text-teal-200 font-medium transition"
                target="_blank"
                rel="noreferrer"
              >
                kirushnapriya-portfolio.netlify.app
              </a>
            </dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
};

export default Contact;

