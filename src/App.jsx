import React, { useState } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Learning from './components/Learning.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import MessageModal from './components/MessageModal.jsx';

const App = () => {
  const [messageOpen, setMessageOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-100">
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950"
      >
        Skip to contact
      </a>

      <header className="sticky top-0 z-20 border-b border-slate-900 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-slate-50"
          >
            KP
            <span className="ml-1 text-xs font-normal text-slate-400">
              AI Engineer
            </span>
          </a>
          <nav
            className="hidden gap-6 text-xs text-slate-300 sm:flex"
            aria-label="Primary navigation"
          >
            <a href="#about" className="hover:text-brand-300">
              About
            </a>
            <a href="#learning" className="hover:text-brand-300">
              Courses
            </a>
            <a href="#skills" className="hover:text-brand-300">
              Skills
            </a>
            <a href="#projects" className="hover:text-brand-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-brand-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Learning />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-900 bg-black/90">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kirushna Priya. Built with a focus on
            safe, reliable AI systems.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Kirushna-priya"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-300"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/kirushna-priya"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-300"
            >
              www.linkedin.com/in/kirushna-priya
            </a>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => setMessageOpen(true)}
        className="fixed bottom-5 right-5 z-30 inline-flex items-center rounded-full bg-brand-500 px-4 py-2 text-xs font-medium text-slate-950 shadow-lg shadow-brand-900/40 transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        Message Me
      </button>

      <MessageModal open={messageOpen} onClose={() => setMessageOpen(false)} />
    </div>
  );
};

export default App;

