import React, { useState } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Learning from './components/Learning.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import MessageModal from './components/MessageModal.jsx';

const App = () => {
  const [messageOpen, setMessageOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-teal-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950"
      >
        Skip to contact
      </a>

      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-slate-50"
          >
            KP
            <span className="ml-2 text-xs font-normal text-slate-600">
              AI Engineer
            </span>
          </a>
          <nav
            className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex"
            aria-label="Primary navigation"
          >
            <a href="#about" className="nav-link hover:text-teal-300 transition">
              About
            </a>
            <a href="#experience" className="nav-link hover:text-teal-300 transition">
              Experience
            </a>
            <a href="#projects" className="nav-link hover:text-teal-300 transition">
              Projects
            </a>
            <a href="#learning" className="nav-link hover:text-teal-300 transition">
              Certifications
            </a>
            <a href="#skills" className="nav-link hover:text-teal-300 transition">
              Skills
            </a>
            <a href="#contact" className="nav-link hover:text-teal-300 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Learning />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kirushna Priya. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Kirushna-priya"
              target="_blank"
              rel="noreferrer"
              className="nav-link hover:text-teal-300 transition"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/kirushna-priya"
              target="_blank"
              rel="noreferrer"
              className="nav-link hover:text-teal-300 transition"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.instagram.com/iam.kirushnapriya/"
              target="_blank"
              rel="noreferrer"
              className="nav-link hover:text-teal-300 transition"
            >
              Instagram
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://hashnode.com/@kirushnapriya"
              target="_blank"
              rel="noreferrer"
              className="nav-link hover:text-teal-300 transition"
            >
              Hashnode
            </a>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => setMessageOpen(true)}
        className="fixed bottom-6 right-6 z-30 inline-flex items-center rounded-lg bg-teal-600 px-5 py-3 text-xs font-semibold text-slate-950 shadow-lg transition hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        Message Me
      </button>

      <MessageModal open={messageOpen} onOpenChange={setMessageOpen} />
    </div>
  );
};

export default App;

