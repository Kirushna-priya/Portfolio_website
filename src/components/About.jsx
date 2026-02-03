import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="border-t border-slate-900 bg-black/60"
      aria-labelledby="about-heading"
    >
      <div className="fade-in-up mx-auto max-w-5xl px-4 py-14 sm:py-16">
        <h2
          id="about-heading"
          className="text-base font-semibold uppercase tracking-[0.2em] text-brand-400"
        >
          About &amp; Transition Story
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-brand-400 to-transparent" />
        <p className="mt-4 text-xl font-medium text-slate-50">
          From operating room to production-ready AI.
        </p>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          <p>
            I began my career as a Clinical Perfusionist, working in
            high-pressure environments where every decision and data point
            mattered immediately. That experience taught me to read complex
            signals, act with clarity under pressure, and treat every number as
            a real outcome for a real person.
          </p>
          <p>
            I transitioned into AI engineering to apply that same mindset to
            building intelligent systems. Today I focus on designing, training
            and validating models that are reliable, interpretable, and grounded
            in how they will actually be used in products and workflows.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-100">
              Clinical skills carried into AI
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>High-stakes decision-making under uncertainty</li>
              <li>Accuracy-first mindset with rigorous validation before action</li>
              <li>Real-time interpretation of complex physiological data</li>
              <li>Clear documentation and cross-team communication</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-100">
              How this shapes my AI work
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Bias and safety considered at the problem-framing stage</li>
              <li>Preference for interpretable features and explainable behavior</li>
              <li>Stress-testing models beyond accuracy (recall, edge cases)</li>
              <li>Accountability for how predictions are used in real-world systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

