import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="border-t border-slate-800 bg-slate-950/50"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <h2
          id="about-heading"
          className="text-base font-semibold uppercase tracking-[0.15em] text-teal-300"
        >
          About
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-teal-300 to-transparent" />
        
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
          AI Engineer experienced in automating workflows, LLM fine-tuning, orchestrating Gen AI systems, and building intelligent assistants.
        </p>


      </div>
    </section>
  );
};

export default About;

