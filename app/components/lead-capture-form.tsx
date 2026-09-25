"use client";

import { CheckCircle2, X } from "lucide-react";
import { type FormEvent, useEffect, useId, useRef, useState } from "react";

const SNAPITFORMS_ENDPOINT = "https://api.snapitforms.com/submit";
const SNAPITFORMS_ACCESS_KEY = "sf_3e513a8c009f101746620fa6ef47aa34";

type LeadType = "inquiry" | "newsletter";
type SubmissionStatus = "idle" | "sending" | "success" | "error";

type LeadCaptureFormProps = {
  leadType: LeadType;
};

const successMessages: Record<LeadType, { title: string; body: string }> = {
  inquiry: {
    title: "Thank you for sharing your details!",
    body: "Our team will call you back shortly.",
  },
  newsletter: {
    title: "You’re on the list!",
    body: "Thank you for joining our newsletter. We’ll keep you updated with news and pet-care tips.",
  },
};

export default function LeadCaptureForm({ leadType }: LeadCaptureFormProps) {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const titleId = useId();
  const descriptionId = useId();
  const errorId = useId();
  const phoneId = useId();
  const emailId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const isSubmitting = status === "sending";
  const successMessage = successMessages[leadType];

  useEffect(() => {
    if (status !== "success") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setStatus("idle");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [status]);

  const closePopup = () => {
    setStatus("idle");
    window.requestAnimationFrame(() => submitButtonRef.current?.focus());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(SNAPITFORMS_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error("SnapItForms rejected the submission.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <form
        className={leadType === "inquiry" ? "wt-contact-form" : "wt-newsletter"}
        action={SNAPITFORMS_ENDPOINT}
        method="POST"
        onSubmit={handleSubmit}
        aria-describedby={status === "error" ? errorId : undefined}
      >
        <input type="hidden" name="access_key" value={SNAPITFORMS_ACCESS_KEY} />
        <input type="hidden" name="dropdown" value={leadType} />
        <input type="hidden" name="source" value="waggytales.in" />

        {leadType === "inquiry" ? (
          <>
            <label htmlFor={phoneId} className="wt-sr-only">
              Phone number
            </label>
            <input
              id={phoneId}
              name="phone"
              type="tel"
              placeholder="Your phone number"
              autoComplete="tel"
              inputMode="tel"
              pattern="(?:\+91[ -]?|0)?[6-9][0-9]{9}"
              title="Enter a valid 10-digit Indian mobile number, optionally prefixed with +91 or 0."
              maxLength={14}
              required
            />
          </>
        ) : (
          <>
            <label htmlFor={emailId} className="wt-sr-only">
              Email address
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              placeholder="Your email"
              autoComplete="email"
              inputMode="email"
              maxLength={254}
              title="Enter a valid email address."
              spellCheck={false}
              required
            />
          </>
        )}

        <button
          ref={submitButtonRef}
          type="submit"
          className="wt-btn wt-btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Sending…"
            : leadType === "inquiry"
              ? "Send inquiry"
              : "Join"}
        </button>

        {status === "error" ? (
          <p id={errorId} className="wt-lead-error" role="alert">
            We couldn’t submit your details. Please try again or call us directly.
          </p>
        ) : null}
      </form>

      {status === "success" ? (
        <div className="wt-lead-modal-root">
          <button
            type="button"
            className="wt-lead-modal-backdrop"
            aria-label="Close confirmation"
            onClick={closePopup}
          />
          <div
            className="wt-lead-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="wt-lead-modal-close"
              aria-label="Close confirmation"
              onClick={closePopup}
            >
              <X aria-hidden="true" />
            </button>
            <span className="wt-lead-modal-icon" aria-hidden="true">
              <CheckCircle2 />
            </span>
            <h2 id={titleId}>{successMessage.title}</h2>
            <p id={descriptionId}>{successMessage.body}</p>
            <button type="button" className="wt-btn wt-btn-primary" onClick={closePopup}>
              Done
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
