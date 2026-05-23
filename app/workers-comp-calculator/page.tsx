import type { Metadata } from "next";
import WorkersCompQuiz from "./WorkersCompQuiz";
import AdUnit from "@/components/AdUnit";
import TrustBar from "@/components/TrustBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workers Compensation Calculator — How Much Will I Receive?",
  description: "Calculate your weekly workers comp benefit and total claim value. Based on your state's published formula, your average weekly wage, and your time off work. Free, 2 minutes.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is workers compensation calculated?",
      acceptedAnswer: { "@type": "Answer", text: "In most states, your weekly benefit is two-thirds of your average weekly wage, capped at a maximum the state sets and adjusts each year. Your average weekly wage is usually calculated from the 52 weeks before your injury. California's max in 2024 was $1,619.57 per week. Texas was $1,099. Earning above those thresholds means you get the cap, not two-thirds of your actual wage." }
    },
    {
      "@type": "Question",
      name: "How long can I collect workers compensation benefits?",
      acceptedAnswer: { "@type": "Answer", text: "Temporary Total Disability pays while you cannot work at all. Most states allow it for 104 weeks, some up to 500. Once your doctor releases you to work — even modified duty — temporary benefits typically stop or reduce. If you have a lasting impairment, you may qualify for Permanent Partial or Permanent Total Disability benefits, which can last for years or for life depending on the state and the severity." }
    },
    {
      "@type": "Question",
      name: "Does workers comp cover all my medical bills?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — 100 percent, with no deductibles or copays, for treatment that is reasonable, necessary, and related to your work injury. That covers emergency care, surgery, hospitalization, physical therapy, prescriptions, and most durable medical equipment. Your employer's insurer controls which doctors you can see in most states, at least initially." }
    },
    {
      "@type": "Question",
      name: "Can my employer fire me for filing a workers comp claim?",
      acceptedAnswer: { "@type": "Answer", text: "No. Retaliating against an employee for filing a legitimate workers comp claim is illegal in all 50 states. If you are fired, demoted, or have hours cut after filing, that may be a separate wrongful termination or retaliation claim on top of your workers comp case." }
    },
    {
      "@type": "Question",
      name: "What do I do if my workers comp claim is denied?",
      acceptedAnswer: { "@type": "Answer", text: "Appeal it. Every state has a formal appeals process, usually starting with a request for reconsideration or a hearing before a workers compensation judge. Deadlines are short — typically 30 to 90 days from the denial notice. A workers comp attorney can file the appeal for you at no upfront cost since they work on contingency." }
    },
  ],
};

export default function WorkersCompPage() {
  return (
    <>
      <TrustBar />

      <section style={{ background: "var(--navy)" }} className="py-12 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-label">Benefit Calculator</div>
          <h1 className="text-white font-display text-3xl md:text-4xl font-bold mb-4">
            How Much Workers Comp Will I Receive?
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
            Enter your state, average weekly wage, and time off work to see your estimated
            weekly benefit and total claim value — based on your state's actual formula.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <AdUnit slot="3002000001" format="sidebar" className="sticky top-24" />
          <div className="mt-6 p-5 rounded-xl" style={{ background: "var(--off-white)", border: "1px solid var(--gray-100)" }}>
            <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--navy)", fontFamily: "inherit" }}>Other tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/car-accident-calculator" style={{ color: "var(--gold)" }}>Car Accident Calculator &rarr;</Link></li>
              <li><Link href="/mesothelioma-eligibility" style={{ color: "var(--gold)" }}>Mesothelioma Eligibility &rarr;</Link></li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
          <WorkersCompQuiz />
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-5 pb-16">
        <hr className="section-divider" />

        <h2 className="text-2xl font-bold mb-5">How Workers Compensation Benefits Are Calculated</h2>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          Workers compensation is a no-fault system — you don't have to prove your employer
          was negligent, only that the injury happened at work or because of work. In exchange,
          you generally cannot sue your employer directly for the injury. The trade-off is speed
          and certainty over the larger potential recovery of a lawsuit.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          The weekly benefit formula is the same across most states:{" "}
          <strong style={{ color: "var(--gray-800)" }}>two-thirds of your average weekly wage,
          up to your state's maximum</strong>. The cap is what catches people off guard. In
          California, the 2024 maximum for temporary total disability was $1,619.57 per week.
          In Texas it was $1,099. If you earn more than roughly $2,400 a week in California,
          you hit the cap and your benefit stops growing regardless of your actual salary.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          Your average weekly wage is typically calculated from the 52 weeks before your injury
          date. Overtime, tips, and bonuses may or may not count depending on your state.
          If you worked a second job, those earnings might be included too.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          Beyond wage replacement, workers comp covers 100 percent of your medical treatment
          with no out-of-pocket costs — emergency care, surgery, physical therapy, medications,
          and medical equipment. If your injury leaves a permanent impairment, a physician
          assigns a disability rating that translates directly into additional compensation
          under your state's schedule of injuries.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">What Affects Your Workers Comp Benefit</h3>
        <ul className="space-y-3 mb-8">
          {[
            ["Your average weekly wage", "Calculated from the 52 weeks before injury. Higher earners hit the state cap and stop seeing their benefit grow above it."],
            ["Your state", "Caps vary by hundreds of dollars a week. California's 2024 max was $1,619. Texas was $1,099. Illinois was $1,897. Your state matters more than any other single factor."],
            ["Temporary vs. permanent disability", "Temporary benefits end when you return to work or reach maximum medical improvement. Permanent impairment ratings lead to either a lump sum or ongoing scheduled benefits."],
            ["Injury type and body part", "States use schedules that assign a specific number of compensable weeks to injuries affecting specific body parts. Losing a finger has a different value than a knee injury."],
            ["Return-to-work offers", "If your employer offers modified duty within your medical restrictions, refusing it may reduce or suspend your wage replacement benefits even if you can't do your original job."],
            ["Whether your claim is disputed", "If your employer's insurer questions whether the injury is work-related, or whether your treatment is necessary, the process becomes adversarial and an attorney becomes more important."],
          ].map(([title, body]) => (
            <li key={title as string} className="flex gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5" style={{ background: "var(--gold)" }} />
              <div>
                <strong style={{ color: "var(--gray-800)" }}>{title}:</strong>{" "}
                <span style={{ color: "var(--gray-600)" }}>{body}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center my-8">
          <AdUnit slot="3002000002" format="rectangle" />
        </div>

        <h3 className="text-xl font-bold mb-5 mt-2">Frequently Asked Questions</h3>
        <div className="space-y-1">
          {[
            {
              q: "How is workers compensation calculated?",
              a: "Two-thirds of your average weekly wage, capped at your state's published maximum. California's 2024 cap was $1,619.57. Texas was $1,099. Illinois was $1,897. Your average weekly wage comes from the 52 weeks before your injury.",
            },
            {
              q: "How long can I collect workers compensation benefits?",
              a: "Temporary Total Disability pays while you can't work at all — typically up to 104 weeks, sometimes 500. Permanent impairment qualifies you for additional benefits based on a disability rating. Some Permanent Total Disability awards last for life.",
            },
            {
              q: "Does workers comp cover all my medical bills?",
              a: "Yes, 100 percent of reasonable and necessary treatment — no deductibles, no copays. Emergency care, surgery, physical therapy, prescriptions, and most medical equipment are all covered. Your employer's insurer typically controls which doctors you use initially.",
            },
            {
              q: "Can my employer fire me for filing a workers comp claim?",
              a: "No. Retaliation for filing a workers comp claim is illegal in all 50 states. If your hours, role, or employment changes after you file, that may be a separate wrongful termination or retaliation claim.",
            },
            {
              q: "What do I do if my workers comp claim is denied?",
              a: "Appeal immediately. Deadlines are usually 30 to 90 days from the denial. You have the right to a hearing before a workers compensation judge. An attorney can file the appeal at no upfront cost — they work on contingency.",
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

        <div className="mt-8 p-4 rounded-lg text-sm" style={{ background: "var(--off-white)", border: "1px solid var(--gray-100)", color: "var(--gray-600)" }}>
          <strong style={{ color: "var(--gray-800)" }}>Disclaimer:</strong> Benefit estimates are based on each state's published formula and are for informational purposes only. Actual benefits depend on your state's specific rules, your employer's insurance carrier, claim disputes, and other factors. Consult a licensed workers compensation attorney for advice on your specific situation.
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
