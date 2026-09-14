import React from 'react';
import Reveal from './Reveal.jsx';

const experiences = [
  {
    role: 'AI Engineer',
    company: '11fps',
    location: 'Bengaluru, Karnataka',
    period: 'April 2026 – Present',
    bullets: [
      'Automating the end-to-end AI filmmaking workflow with modular generative pipelines',
      'Improving character consistency across asset generation and rendering workflows',
      'Orchestrating rendering queues and optimizing production pipelines',
      'Reduced production time by 40–50% through workflow automation and system optimization',
    ],
  },
  {
    role: 'AI Research Intern',
    company: 'Seranai',
    location: 'Remote',
    period: 'March 2026',
    bullets: [
      'Designed and documented Claude Skills on the FOUNDRY framework for AI tool integration',
      'Structured skills for integration into the SkillsMP platform with robust evaluation',
      'Analyzed Y Combinator startups and open-source AI tools for founder-focused applications',
      'Emphasized research methodology, documentation, structured AI tooling, and reproducible evaluation',
    ],
  },
  {
    role: 'AI Content Creator Intern',
    company: 'Unbothered',
    location: 'Remote',
    period: '1 month internship',
    bullets: [
      'Developed AI-assisted content creation workflows using prompt-driven systems',
      'Supported research and ideation for AI-related thought leadership content',
      'Contributed to communication of AI concepts and applications for diverse audiences',
    ],
  },
  {
    role: 'Clinical Perfusionist',
    company: 'Manipal Hospitals',
    location: 'Bengaluru, Karnataka',
    period: 'December 2023 – April 2025',
    bullets: [
      'Managed high-stakes critical care systems: CPB, ECMO, IABP, and VAD in operating theaters',
      'Trained and mentored junior perfusionists and interdisciplinary clinical teams',
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-t border-slate-800 bg-slate-950/50"
      aria-labelledby="experience-heading"
    >
      <Reveal className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <h2
          id="experience-heading"
          className="text-base font-semibold uppercase tracking-[0.15em] text-teal-300"
        >
          Experience
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-teal-300 to-transparent" />

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="relative pb-8"
            >
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-16 h-8 w-0.5 bg-gradient-to-b from-teal-600 to-slate-600" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="relative flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-teal-500 ring-4 ring-slate-950" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-0.5">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-slate-50">
                      {exp.role}
                    </h3>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                      <p className="text-sm font-medium text-slate-300">
                        {exp.company}
                      </p>
                      <span className="hidden text-slate-500 sm:inline">·</span>
                      <p className="text-sm text-slate-400">{exp.location}</p>
                      <span className="hidden text-slate-500 sm:inline">·</span>
                      <p className="text-sm font-medium text-teal-300">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Experience;
