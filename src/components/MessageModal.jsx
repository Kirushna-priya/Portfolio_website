import React, { useEffect, useRef } from 'react';

const MessageModal = ({ open, onClose }) => {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (open && dialogRef.current) {
      closeButtonRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && open) {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="message-heading"
      ref={dialogRef}
    >
      <div className="mx-4 w-full max-w-md scale-100 rounded-2xl border border-slate-700 bg-slate-900/95 p-6 shadow-2xl shadow-slate-900/80 transition-transform">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="message-heading"
              className="text-base font-semibold text-slate-50"
            >
              Message Me
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              This form is wired for Netlify Forms. On deployment to Netlify,
              submissions can be emailed to{' '}
              <span className="font-medium">kirushna203@gmail.com</span>.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
            className="rounded-full border border-slate-600 px-2 py-1 text-xs text-slate-300 hover:border-brand-400 hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Esc
          </button>
        </div>

        <form
          className="mt-5 space-y-4"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Don’t fill this out if you&apos;re human:{' '}
              <input name="bot-field" />
            </label>
          </p>

          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-slate-200"
            >
              Name <span className="text-brand-300">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-200"
            >
              Email <span className="text-brand-300">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-slate-200"
            >
              Message <span className="text-brand-300">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 w-full resize-y rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="text-[11px] text-slate-400">
              By sending this, you agree to be contacted at the email provided.
            </p>
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-brand-500 px-4 py-2 text-xs font-medium text-slate-950 shadow-sm transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageModal;

