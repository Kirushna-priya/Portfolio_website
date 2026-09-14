import React from 'react';
import Reveal from './Reveal.jsx';

const projects = [
  {
    title: 'Cardiac Perfusion RAG',
    description:
      'A retrieval-augmented assistant that answers cardiac perfusion questions grounded in real clinical literature. Built for the people in my previous profession as a clinical perfusionist — MVP is live, with more features on the way.',
    tech: ['RAG', 'Vector Retrieval', 'LLMs', 'Hugging Face Spaces'],
    link: 'https://github.com/Kirushna-priya/Cardiac_Perfusion_RAG',
    demoLink: 'https://huggingface.co/spaces/Kirushnapriya/Cardiac_Perfusion_RAG',
  },
  {
    title: 'FlightAI – Airline Assistant',
    description:
      'LLM-powered airline assistant built on Gemini 3 Flash that reasons step by step, decides when to call external tools via Gemini API, and shows both responses and tool-call traces in a transparent UI.',
    tech: ['Gemini API', 'LLMs', 'Tool Calling', 'Python'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7423364781249740801/',
  },
  {
    title: 'AI Trends Agent (CrewAI)',
    description:
      'A CrewAI crew of research and synthesis agents that tracks emerging AI trends and turns scattered headlines into a structured briefing.',
    tech: ['CrewAI', 'LLMs', 'Agent Orchestration'],
    link: 'https://github.com/Kirushna-priya/AI_Trends_Crewai',
  },
  {
    title: 'Employee Turnover Analysis',
    description:
      'Built and optimized machine learning models including Random Forest, Logistic Regression, and Gradient Boosting using SMOTE and feature engineering, achieving 99% prediction accuracy. Developed a Flask frontend for real-time predictions, containerized the app with Docker, and deployed it on AWS Elastic Beanstalk, using AUC- and recall-focused evaluation.',
    tech: ['Python', 'scikit-learn', 'Flask', 'Docker', 'AWS'],
    link: 'https://github.com/Kirushna-priya/Employee_Turnover_Analysis-ML-Project',
  },
  {
    title: 'Monument Classification System',
    description:
      'A computer vision classifier that identifies European monuments from images, packaged with a clean prediction interface.',
    tech: ['Python', 'Computer Vision', 'Model Evaluation'],
    link: 'https://github.com/Kirushna-priya/European_Monument_AI_System',
  },
  {
    title: 'Book Recommender',
    description:
      'A recommendation engine that suggests books using content similarity and reader preference signals instead of flat popularity.',
    tech: ['Python', 'Recommendation Systems'],
    link: 'https://github.com/Kirushna-priya/book_recommender',
  },
  {
    title: 'Quantization Experiments (T4 GPU)',
    description:
      'Testing model quantization techniques on a single T4 GPU to shrink memory footprint while keeping output quality intact.',
    tech: ['Quantization', 'T4 GPU', 'Inference Optimization'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7485536625859690496/',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-slate-800 bg-slate-950/70"
      aria-labelledby="projects-heading"
    >
      <Reveal className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
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
              className={`flex flex-col rounded-xl bg-slate-900 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:ring-teal-600 ${
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
                <div className="mt-4 flex flex-wrap items-center gap-4 pt-4 border-t border-slate-700">
                  <a
                    href={project.link}
                    className="inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project →
                  </a>
                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      className="inline-flex text-sm font-semibold text-slate-300 hover:text-teal-200 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo →
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;
