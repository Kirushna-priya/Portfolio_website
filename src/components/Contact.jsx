import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950/80"
      aria-labelledby="contact-heading"
    >
      <div className="fade-in-up mx-auto max-w-5xl px-4 py-14 sm:py-16">
        <h2
          id="contact-heading"
          className="text-base font-semibold uppercase tracking-[0.2em] text-brand-400"
        >
          Contact
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-brand-400 to-transparent" />
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          For roles in AI/ML and data-driven products.
        </p>

        <dl className="mt-6 space-y-3 text-sm text-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <dt className="font-medium text-slate-300">Email</dt>
            <dd>
              <a
                href="mailto:kirushna203@gmail.com"
                className="text-brand-300 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
              >
                kirushna203@gmail.com
              </a>
            </dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <dt className="font-medium text-slate-300">GitHub</dt>
            <dd>
              <a
                href="https://github.com/Kirushna-priya"
                className="text-brand-300 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Kirushna-priya
              </a>
            </dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <dt className="font-medium text-slate-300">LinkedIn</dt>
            <dd>
              <a
              href="https://www.linkedin.com/in/kirushna-priya"
                className="text-brand-300 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
                target="_blank"
                rel="noreferrer"
              >
                www.linkedin.com/in/kirushna-priya
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Contact;

