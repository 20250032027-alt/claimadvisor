import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Contact ClaimAdvisor, Get in Touch",
  description: "Have a question about our legal claims tools, a correction to report, or feedback to share? Use our contact form to reach the ClaimAdvisor editorial team.",
};

export default function ContactPage() {
  return (
    <>
      <TrustBar />
      <section style={{ background: "var(--navy)" }} className="py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-white font-display text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/70 text-base leading-relaxed">
            Have a question, correction, or feedback? We read every message. We do not offer legal advice through this form.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left info panel */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-3">What to expect</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>
              We typically respond to editorial inquiries within 2–3 business days. For legal questions about your specific case, please consult a licensed attorney. We cannot provide that advice.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-3">Reasons to contact us</h2>
            <ul className="space-y-2 text-sm" style={{ color: "var(--gray-500)" }}>
              {[
                "Report an error or outdated data on a calculator page",
                "General questions about how our tools work",
                "Media or press inquiries",
                "Feedback on the site's accuracy or usability",
                "Partnership or linking inquiries",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: "var(--gold)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-lg text-sm" style={{ background: "var(--gold-pale)", border: "1px solid var(--gold)", color: "var(--navy)" }}>
            <strong>Not for legal advice.</strong> ClaimAdvisor is an informational resource. We cannot advise you on your case, recommend attorneys, or interpret laws for your situation.
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
