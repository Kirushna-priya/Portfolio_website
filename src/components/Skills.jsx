import React from 'react';

const SkillCategory = ({ title, skills }) => (
  <div className="rounded-xl bg-slate-900 p-6 ring-1 ring-slate-700 transition hover:ring-teal-600">
    <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="inline-block rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium text-teal-300 ring-1 ring-slate-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & ML',
      skills: [
        'Python',
        'Linux',
        'pandas',
        'NumPy',
        'scikit-learn',
        'supervised learning',
        'unsupervised learning',
        'feature engineering',
        'model evaluation',
        'AUC',
        'recall-focused evaluation',
        'data cleaning',
        'statistical analysis',
        'seaborn',
        'matplotlib',
        'Selenium',
      ],
    },
    {
      title: 'Deep Learning & NLP',
      skills: [
        'PyTorch',
        'Keras',
        'LLMs',
        'Gemini API',
        'prompt engineering',
        'tool calling',
        'LoRA',
        'QLoRA',
      ],
    },
    {
      title: 'GenAI & Platforms',
      skills: [
        'LLM API integration',
        'Hugging Face',
        'Openclaw',
        'ComfyUI',
        'N8N',
        'GPU workflows',
        'Vast.ai',
      ],
    },
    {
      title: 'MLOps & Deployment',
      skills: [
        'Flask',
        'Docker',
        'AWS Elastic Beanstalk',
        'Gradio',
        'Streamlit',
      ],
    },
    {
      title: 'Collaboration',
      skills: [
        'Git',
        'GitHub',
        'version control workflows',
        'code reviews',
        'documentation',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="border-t border-slate-800 bg-slate-950/50"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <h2
          id="skills-heading"
          className="text-base font-semibold uppercase tracking-[0.15em] text-teal-300"
        >
          Skills
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-teal-300 to-transparent" />
        <p className="mt-6 max-w-2xl text-base text-slate-300">
          Focused on AI systems that balance performance with reproducibility and practical deployment.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

