import React from 'react';

const projects = [
  {
    title: 'Employee Turnover Analysis',
    description:
      'Machine learning pipeline using Random Forest, Logistic Regression and Gradient Boosting to predict employee turnover, with SMOTE, strong feature engineering, and a Flask UI deployed via Docker on AWS Elastic Beanstalk.',
    link: 'https://github.com/Kirushna-priya/Employee_Turnover_Analysis-ML-Project',
  },
  {
    title: 'FlightAI – Airline Assistant',
    description:
      'LLM-powered airline assistant built on Gemini 3 Flash that reasons step by step, decides when to call external tools via Gemini API, and shows both responses and tool-call traces in a transparent UI.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7423364781249740801/',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-slate-900 bg-black/70"
      aria-labelledby="projects-heading"
    >
      <div className="fade-in-up mx-auto max-w-5xl px-4 py-14 sm:py-16">
        <h2
          id="projects-heading"
          className="text-base font-semibold uppercase tracking-[0.2em] text-brand-400"
        >
          Projects
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-brand-400 to-transparent" />
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          Projects that best reflect my current AI engineering work.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-brand-400/70 hover:bg-slate-900/90"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                {project.description}
              </p>

              <div className="mt-4 flex items-center justify-between text-sm">
                <a
                  href={project.link}
                  className="text-brand-300 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

