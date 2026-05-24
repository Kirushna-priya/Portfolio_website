import React from 'react';

const projects = [
  {
    title: 'QLoRA Fine-tuning of Qwen-11B on Dolly Dataset',
    description:
      'Fine-tuned Qwen-11B using QLoRA with 4-bit quantization on Google Colab (T4 GPU), processed the Databricks Dolly dataset for instruction tuning, and built a modular training and inference pipeline that reduced memory footprint while improving instruction-following performance over the base model.',
    tech: ['PyTorch', 'QLoRA', 'Qwen', 'Dolly', 'Colab'],
    link: 'https://github.com/Kirushna-priya',
  },
  {
    title: 'Employee Turnover Analysis',
    description:
      'Built and optimized machine learning models including Random Forest, Logistic Regression, and Gradient Boosting using SMOTE and feature engineering, achieving 99% prediction accuracy. Developed a Flask frontend for real-time predictions, containerized the app with Docker, and deployed it on AWS Elastic Beanstalk, using AUC- and recall-focused evaluation.',
    tech: ['Python', 'scikit-learn', 'Flask', 'Docker', 'AWS'],
    link: 'https://github.com/Kirushna-priya/Employee_Turnover_Analysis-ML-Project',
  },
  {
    title: 'FlightAI – Airline Assistant',
    description:
      'LLM-powered airline assistant built on Gemini 3 Flash that reasons step by step, decides when to call external tools via Gemini API, and shows both responses and tool-call traces in a transparent UI.',
    tech: ['Gemini API', 'LLMs', 'Tool Calling', 'Python'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7423364781249740801/',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-slate-800 bg-slate-950/70"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <h2
          id="projects-heading"
          className="text-base font-semibold uppercase tracking-[0.15em] text-teal-300"
        >
          Projects
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-teal-300 to-transparent" />
        <p className="mt-6 max-w-2xl text-base text-slate-300">
          Featured work showcasing AI engineering, machine learning, and production deployment.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`flex flex-col rounded-xl bg-slate-900 ring-1 ring-slate-700 transition hover:ring-teal-600 ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <a
                    href={project.link}
                    className="inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

