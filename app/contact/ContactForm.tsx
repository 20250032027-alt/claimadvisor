"use client";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xojrrrzb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="quiz-card p-8 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--green-light)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12L10 17L19 8" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold mb-2">Message Sent</h2>
        <p className="text-sm mb-6" style={{ color: "var(--gray-500)" }}>
          Thank you for reaching out. We typically respond within 2–3 business days.
        </p>
        <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }} className="btn-secondary">
          Send Another Message
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="quiz-card p-8 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--red-light)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="var(--red)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold mb-2">Something Went Wrong</h2>
        <p className="text-sm mb-6" style={{ color: "var(--gray-500)" }}>
          Your message could not be sent. Please try again or email us directly.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-primary">
          Try Again
        </button>
      </div>
    );
  }

  const inputClass = "input-field";
  const inputStyle = {};

  return (
    <div className="quiz-card p-8">
      <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--gray-700)" }}>
              Full Name <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <input
              required type="text" value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Jane Smith"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--gray-700)" }}>
              Email Address <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <input
              required type="email" value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="jane@example.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--gray-700)" }}>Subject</label>
          <select
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className={inputClass} style={{ background: "white" }}
          >
            <option value="">Select a subject</option>
            <option value="error">Report an error or outdated data</option>
            <option value="tool">Question about a calculator tool</option>
            <option value="media">Media or press inquiry</option>
            <option value="feedback">General feedback</option>
            <option value="partnership">Partnership inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--gray-700)" }}>
            Message <span style={{ color: "var(--red)" }}>*</span>
          </label>
          <textarea
            required rows={6} value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Please describe your question or feedback in detail..."
            className={inputClass} style={{ resize: "vertical" }}
          />
        </div>

        <div className="p-3 rounded-lg text-xs" style={{ background: "var(--gray-50)", color: "var(--gray-500)" }}>
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy" className="underline" style={{ color: "var(--navy)" }}>Privacy Policy</a>.
          We do not sell your contact information.
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full"
          style={{ opacity: status === "submitting" ? 0.6 : 1 }}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
