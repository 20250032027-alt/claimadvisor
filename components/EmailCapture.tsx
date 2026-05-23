"use client";
import { useState } from "react";

interface EmailCaptureProps {
  estimateLabel: string;
  estimateValue: string;
  toolName: string;
}

export default function EmailCapture({ estimateLabel, estimateValue, toolName }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xwvzqkor", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          tool: toolName,
          estimate: estimateValue,
          subject: `ClaimAdvisor estimate: ${estimateLabel}`,
          _subject: `ClaimAdvisor estimate summary — ${toolName}`,
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        className="rounded-xl p-4 text-sm text-center"
        style={{ background: "var(--green-light)", color: "var(--green)" }}
      >
        <strong>Sent.</strong> Check your inbox for your estimate summary.
      </div>
    );
  }

  return (
    <div
      className="rounded-xl p-5"
      style={{ background: "var(--off-white)", border: "1px solid var(--gray-100)" }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
          style={{ background: "var(--gold-pale)" }}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <rect x="1" y="3" width="13" height="9" rx="1.5" stroke="var(--gold)" strokeWidth="1.4"/>
            <path d="M1 5l6.5 4.5L14 5" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="font-semibold text-sm" style={{ color: "var(--navy)" }}>
            Get a copy of your estimate
          </div>
          <div className="text-xs mt-0.5" style={{ color: "var(--gray-600)" }}>
            We'll send a summary to your inbox. No follow-up emails, no spam.
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="input-field flex-1 text-sm py-2.5"
          style={{ fontSize: "0.875rem" }}
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary text-sm py-2.5 px-4 flex-shrink-0"
          style={{ opacity: status === "sending" ? 0.6 : 1 }}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs mt-2" style={{ color: "var(--red)" }}>
          Something went wrong. Try again or note your estimate manually.
        </p>
      )}
    </div>
  );
}
