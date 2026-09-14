import React from 'react';
import Reveal from './Reveal.jsx';

const About = () => {
  return (
    <section
      id="about"
      className="border-t border-slate-800 bg-slate-950/50"
      aria-labelledby="about-heading"
    >
      <Reveal className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <h2
          id="about-heading"
          className="text-base font-semibold uppercase tracking-[0.15em] text-teal-300"
        >
          About
        </h2>
        <div className="mt-2 h-px w-16 rounded-full bg-gradient-to-r from-teal-300 to-transparent" />

        <p className="mt-6 max-w-2xl text-xl font-semibold text-slate-100">
          I took an unconventional path into AI.
        </p>

        <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-slate-300">
          <p>
            I began my career as a Clinical Perfusionist, where precision, critical thinking, and staying calm under pressure were part of everyday work.
          </p>

          <blockquote className="rounded-lg border-l-2 border-teal-500 bg-slate-900/60 py-3 pl-4 pr-4 text-slate-200">
            During one Sunday hospital shift, I attended an online AI workshop that completely changed how I saw the future of technology. That experience led me to make a full transition into AI engineering.
          </blockquote>

          <p>
            Today, I work as an AI Engineer at 11fps, building AI-powered applications using technologies like CrewAI, LangGraph, and ComfyUI. I've worked on automating the AI filmmaking workflow, and I enjoy turning ideas into practical AI solutions.
          </p>

          <p>
            I'm passionate about building, learning, and working in fast-paced startup environments.
          </p>
        </div>

        <div className="mt-8 max-w-2xl rounded-xl bg-slate-900 p-5 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:ring-teal-600">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-300">
            Long-term goal
          </p>
          <p className="mt-2 text-base leading-relaxed text-slate-100">
            Create AI products that solve real-world problems, and eventually build a company of my own.
          </p>
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
          Always happy to connect with people building interesting things in AI.
        </p>
      </Reveal>
    </section>
  );
};

export default About;
