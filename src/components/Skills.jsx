import React from 'react';

const SkillGroup = ({ title, items }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-brand-300/80 hover:bg-slate-900/90">
    <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
    <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-brand-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-t border-slate-900 bg-black"
      aria-labelledby="skills-heading"
    >
      <div className="fade-in-up mx-auto max-w-5xl px-4 py-14 sm:py-16">
        <h2
          id="skills-heading"
          className="text-base font-semibold uppercase tracking-[0.2em] text-brand-400"
        >
          Skills &amp; Competencies
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-brand-400 to-transparent" />
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          Focused on AI systems that balance accuracy with robustness and clarity.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <SkillGroup
            title="Languages & Libraries"
            items={[
              'Python',
              'pandas, NumPy',
              'scikit-learn',
              'PyTorch, Keras',
            ]}
          />
          <SkillGroup
            title="Machine Learning"
            items={[
              'Supervised & unsupervised learning',
              'Classification & regression',
              'Feature engineering',
              'Model evaluation & metrics awareness',
            ]}
          />
          <SkillGroup
            title="Data & Tools"
            items={[
              'Data cleaning & statistical analysis',
              'Visualization with seaborn & matplotlib',
              'GenAI tooling: Bolt.new, N8N',
              'LLM API calls & tool calling',
              'Working with Ollama locally',
              'Gradio for rapid UIs',
              'Flask, Docker, AWS deployment',
              'Version control with Git & GitHub',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

