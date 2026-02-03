import React from 'react';

const posts = [
  {
    title: 'What clinical training taught me about AI reliability',
    summary:
      'How years of watching patient responses minute-by-minute shapes the way I think about model validation, monitoring, and failure modes.',
  },
  {
    title: 'Why accuracy alone fails in production AI',
    summary:
      'Why metrics like recall, calibration, and subgroup performance matter more than a single accuracy score when real patients are involved.',
  },
];

const Writing = () => {
  return (
    <section
      id="writing"
      className="border-t border-slate-800 bg-slate-950"
      aria-labelledby="writing-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
        <h2
          id="writing-heading"
          className="text-base font-semibold uppercase tracking-[0.2em] text-brand-400"
        >
          Thought Process &amp; Writing
        </h2>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          A snapshot of ideas I care about. These can be expanded into full
          posts or talks.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{post.summary}</p>
              <p className="mt-4 text-xs text-slate-500">
                Draft in progress — intended as a deeper dive for recruiters
                and ML teams.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;

