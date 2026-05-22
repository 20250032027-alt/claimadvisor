import type { Metadata } from "next";
import WorkersCompQuiz from "./WorkersCompQuiz";
import AdUnit from "@/components/AdUnit";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Workers Compensation Benefit Estimator — How Much Will I Receive?",
  description: "Estimate your weekly workers compensation benefit and total claim value based on your state, average weekly wage, injury type, and time off work. Free and confidential.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is workers compensation calculated?",
      acceptedAnswer: { "@type": "Answer", text: "In most US states, your weekly workers compensation benefit is calculated as approximately two-thirds (66.7%) of your average weekly wage, up to a state-set maximum. Your average weekly wage is typically determined by dividing your total earnings over the 52 weeks prior to your injury by 52. Some states use different time windows or calculation methods." }
    },
    {
      "@type": "Question",
      name: "How long can I receive workers compensation benefits?",
      acceptedAnswer: { "@type": "Answer", text: "Duration depends on the type and severity of your injury. Temporary Total Disability (TTD) benefits continue while you are completely unable to work, up to state limits ranging from 104 to 500 weeks. Permanent Total Disability can provide lifelong benefits in some states. Partial disability benefits apply if you can work but at reduced capacity." }
    },
    {
      "@type": "Question",
      name: "Does workers comp cover all medical bills?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Workers compensation should cover 100% of all reasonable and necessary medical treatment related to your work injury — with no copays, deductibles, or out-of-pocket costs. This includes emergency care, surgery, hospitalization, physical therapy, prescription medications, and durable medical equipment." }
    },
    {
      "@type": "Question",
      name: "Can I be fired for filing a workers compensation claim?",
      acceptedAnswer: { "@type": "Answer", text: "It is illegal under the laws of all US states for an employer to fire, demote, or retaliate against an employee for filing a legitimate workers compensation claim. If you believe you have been retaliated against, you may have a separate legal claim against your employer in addition to your workers comp claim." }
    },
    {
      "@type": "Question",
      name: "What if my workers comp claim is denied?",
      acceptedAnswer: { "@type": "Answer", text: "A denial is not the end of your claim. Every state has an appeal process. You typically have 30–90 days to appeal a denial, and you can request a hearing before a workers compensation judge. An experienced workers comp attorney can significantly improve your chances on appeal — most work on contingency, meaning no upfront cost to you." }
    },
  ],
};

export default function WorkersCompPage() {
  return (
    <>
      <TrustBar />

      <section style={{ background: "var(--navy)" }} className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(200,151,58,0.15)", color: "var(--gold)" }}>
            Benefit Calculator
          </div>
          <h1 className="text-white font-display text-3xl md:text-4xl font-bold mb-4">
            Workers Compensation Benefit Estimator
          </h1>
          <p className="text-white/70 text-base leading-relaxed">
            Estimate your weekly benefit amount and total claim value based on your wage, injury, and state. No sign-up required.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <AdUnit slot="3002000001" format="sidebar" className="sticky top-24" />
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
          <WorkersCompQuiz />
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-4 pb-16">
        <hr className="section-divider" />

        <h2 className="text-2xl font-bold mb-6">How Workers Compensation Benefits Are Calculated</h2>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          Workers compensation is a no-fault insurance system that provides wage replacement and medical benefits to employees injured on the job. Unlike personal injury lawsuits, you do not need to prove your employer was negligent — only that the injury occurred in the course of your employment.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          The core calculation for most states is straightforward: <strong style={{ color: "var(--gray-700)" }}>weekly benefit = average weekly wage × 0.667</strong>. This two-thirds wage replacement rate is designed to partially compensate for lost income while providing an incentive to return to work when medically able.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          However, every state caps the maximum weekly benefit. In California, the maximum for temporary total disability in 2024 was $1,619.57 per week. In Texas, it was $1,099. These caps mean that higher-wage earners often receive less than two-thirds of their actual salary. Some states also set a minimum weekly benefit to protect lower-wage workers.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          Beyond wage replacement, workers comp covers 100% of medical treatment costs, vocational rehabilitation if you cannot return to your previous job, and permanent disability benefits if your injury leaves lasting functional limitations. A permanent partial disability rating by a physician translates directly into a dollar amount under each state's schedule of injuries.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Factors That Affect Your Workers Comp Claim Value</h3>
        <ul className="space-y-3 mb-8">
          {[
            ["Your average weekly wage", "Calculated from earnings in the 52 weeks before injury. Overtime, bonuses, and tips may or may not be included depending on your state."],
            ["The state where you work", "Each state administers its own workers comp system with different benefit rates, caps, and duration limits."],
            ["Injury type and body part affected", "States use 'schedules' that assign a fixed number of compensable weeks to injuries to specific body parts — a lost finger has a different value than a knee injury."],
            ["Permanent vs. temporary disability", "Temporary benefits end when you recover or reach maximum medical improvement. Permanent disability may result in a lump-sum settlement or ongoing payments."],
            ["Your employer's dispute of the claim", "If your employer or their insurer disputes liability, the process becomes adversarial and attorney representation becomes more critical."],
            ["Return-to-work status", "If your employer offers modified duty within your restrictions, your wage replacement benefits may be reduced or suspended."],
          ].map(([title, body]) => (
            <li key={title as string} className="flex gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5" style={{ background: "var(--gold)" }} />
              <div>
                <strong style={{ color: "var(--gray-700)" }}>{title}:</strong>{" "}
                <span style={{ color: "var(--gray-500)" }}>{body}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center my-8">
          <AdUnit slot="3002000002" format="rectangle" />
        </div>

        <h3 className="text-xl font-bold mb-6 mt-2">Frequently Asked Questions</h3>
        <div className="space-y-1">
          {[
            {
              q: "How is workers compensation calculated?",
              a: "In most US states, your weekly workers compensation benefit is approximately two-thirds (66.7%) of your average weekly wage, up to a state-set maximum. Your average weekly wage is typically determined by dividing your total earnings over the 52 weeks prior to injury by 52.",
            },
            {
              q: "How long can I receive workers compensation benefits?",
              a: "Duration depends on injury severity. Temporary Total Disability (TTD) benefits continue while you cannot work, up to state limits ranging from 104 to 500 weeks. Permanent Total Disability can provide lifelong benefits in some states. Partial disability applies if you can work at reduced capacity.",
            },
            {
              q: "Does workers comp cover all medical bills?",
              a: "Yes. Workers compensation covers 100% of all reasonable and necessary medical treatment related to your work injury — no copays, deductibles, or out-of-pocket costs. This includes emergency care, surgery, hospitalization, physical therapy, prescriptions, and medical equipment.",
            },
            {
              q: "Can I be fired for filing a workers compensation claim?",
              a: "It is illegal in all US states to fire, demote, or retaliate against an employee for filing a legitimate workers compensation claim. If you believe you have been retaliated against, you may have a separate legal claim against your employer.",
            },
            {
              q: "What if my workers comp claim is denied?",
              a: "A denial is not final. Every state has an appeal process. You typically have 30–90 days to appeal, and can request a hearing before a workers compensation judge. An experienced attorney can significantly improve your chances on appeal — most work on contingency with no upfront cost.",
            },
          ].map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                {item.q}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0">
                  <path d="M4 6L8 10L12 6" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg text-sm" style={{ background: "var(--gray-50)", border: "1px solid var(--gray-100)", color: "var(--gray-500)" }}>
          <strong style={{ color: "var(--gray-700)" }}>Disclaimer:</strong> Benefit estimates are based on widely used state formulas and are for informational purposes only. Actual benefits depend on your state's specific rules, your employer's insurance carrier, and the outcome of any disputes. Consult a licensed workers compensation attorney for advice on your specific claim.
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
