import React, { useEffect, useRef } from 'react';

const MessageModal = ({ open, onOpenChange }) => {
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
        onOpenChange(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="message-heading"
      onClick={() => onOpenChange(false)}
      ref={dialogRef}
    >
      <div
        className="mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-200 transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="message-heading"
              className="text-lg font-semibold text-slate-900"
            >
              Message Me
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              This form is wired for Netlify Forms. On deployment to Netlify,
              submissions will be emailed to{' '}
              <span className="font-medium">kirushna203@gmail.com</span>.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            ref={closeButtonRef}
            className="rounded-lg border border-slate-300 px-2 py-1 text-xs font-medium text-slate-600 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            Close
          </button>
        </div>

        <form
          className="mt-6 space-y-4"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Don't fill this out if you&apos;re human:{' '}
              <input name="bot-field" />
            </label>
          </p>

          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-slate-900"
            >
              Name <span className="text-teal-700">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-900"
            >
              Email <span className="text-teal-700">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-slate-900"
            >
              Message <span className="text-teal-700">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <p className="text-[11px] text-slate-600">
              By sending, you agree to be contacted at the email provided.
            </p>
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-teal-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
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
