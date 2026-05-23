import type { Metadata } from "next";
import CarAccidentQuiz from "./CarAccidentQuiz";
import AdUnit from "@/components/AdUnit";
import TrustBar from "@/components/TrustBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Accident Settlement Calculator, What Is My Case Worth?",
  description: "How much is your car accident claim worth? Estimate your settlement range in 2 minutes based on medical bills, lost wages, injury severity, and fault percentage.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is a car accident settlement calculated?",
      acceptedAnswer: { "@type": "Answer", text: "Attorneys start with your special damages (the hard costs you can document: medical bills, lost wages, property damage). They then multiply that figure by somewhere between 1.5 and 5, depending on how serious and permanent the injuries are. That multiplied amount covers pain and suffering. If you share some fault for the crash, the total is reduced by your percentage." }
    },
    {
      "@type": "Question",
      name: "What is the average car accident settlement in the US?",
      acceptedAnswer: { "@type": "Answer", text: "There is no single average that means much. Minor soft-tissue injuries with medical bills under $10,000 typically settle between $10,000 and $30,000. Fractures and surgeries push settlements into the $50,000–$150,000 range. Permanent disabilities, spinal injuries, and traumatic brain injuries regularly reach six figures or more. The at-fault driver's policy limits also cap what their insurer will pay directly." }
    },
    {
      "@type": "Question",
      name: "Does fault percentage affect my settlement?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, and the rules differ by state. Most states use comparative fault, which reduces your payout by whatever percentage of fault is assigned to you. If you were 20% at fault and your total damages are $50,000, you collect $40,000. A few states still use contributory negligence, where being even 1% at fault can bar you from recovering anything. Knowing which system your state uses matters before you accept any offer." }
    },
    {
      "@type": "Question",
      name: "How long does a car accident settlement take?",
      acceptedAnswer: { "@type": "Answer", text: "Straightforward cases with clear liability and injuries that fully heal often wrap up in 3 to 6 months. Once surgeries, ongoing treatment, or disputed liability enter the picture, a year or two is normal. Most attorneys advise against settling before you hit maximum medical improvement, the point your doctor says you've recovered as much as you will. Settling too early means you cannot go back for future medical costs." }
    },
    {
      "@type": "Question",
      name: "Do I need an attorney to settle a car accident claim?",
      acceptedAnswer: { "@type": "Answer", text: "No law requires you to hire one. But insurance adjusters work these cases every day, and their first offer is almost never their best one. Injured claimants with attorneys consistently recover more, even after the attorney's contingency fee (usually 33 to 40 percent). If your medical bills exceed $5,000 or your injuries took you out of work, a free consultation with a personal injury attorney is almost certainly worth your time." }
    },
  ],
};

export default function CarAccidentPage() {
  return (
    <>
      <TrustBar />

      <section style={{ background: "var(--navy)" }} className="py-12 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-label">Settlement Calculator</div>
          <h1 className="text-white font-display text-3xl md:text-4xl font-bold mb-4">
            How Much Is My Car Accident Claim Worth?
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
            Answer six questions about your crash, injuries, and lost income to get an estimated
            settlement range, the same starting point an attorney would use.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <AdUnit slot="3001000001" format="sidebar" className="sticky top-24" />
          <div className="mt-6 p-5 rounded-xl" style={{ background: "var(--off-white)", border: "1px solid var(--gray-100)" }}>
            <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--navy)", fontFamily: "inherit" }}>Other tools</h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--gray-600)" }}>
              <li><Link href="/workers-comp-calculator" style={{ color: "var(--gold)" }}>Workers Comp Estimator &rarr;</Link></li>
              <li><Link href="/mesothelioma-eligibility" style={{ color: "var(--gold)" }}>Mesothelioma Eligibility &rarr;</Link></li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
          <CarAccidentQuiz />
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-5 pb-16">
        <hr className="section-divider" />

        <h2 className="text-2xl font-bold mb-5">How Car Accident Settlements Are Calculated</h2>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          When another driver causes your injuries, you can pursue compensation for everything
          the crash cost you. Attorneys and insurance adjusters both start from the same place:
          your documented losses, then a multiplier for pain and suffering, then adjustments for
          fault and policy limits.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          <strong style={{ color: "var(--gray-800)" }}>Economic damages</strong> are the easy
          part: add up your medical bills, physical therapy, prescriptions, and income you lost
          while recovering. Keep every receipt and every Explanation of Benefits from your
          insurance company. These numbers form the base of your claim.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          <strong style={{ color: "var(--gray-800)" }}>Non-economic damages</strong> cover pain and
          suffering, emotional distress, and loss of enjoyment. None of those come with a receipt.
          The multiplier method is the most common way to quantify them: take your economic
          damages and multiply by 1.5 to 5, depending on how severe and lasting the injury is.
          A neck strain that healed in six weeks uses a lower multiplier than a herniated disc
          that still hurts two years later.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          Your state's fault rules then come into play. If you were partly responsible for the
          crash, most states will reduce your payout by that percentage. And if the at-fault
          driver only carries the state minimum in liability coverage, $25,000 in many states —
          that cap limits what their insurer pays directly. Your own underinsured motorist
          coverage can fill the gap.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">What Affects Your Settlement the Most</h3>
        <ul className="space-y-3 mb-8">
          {[
            ["Medical bills and future treatment costs", "The foundation of the calculation. Future costs, additional surgery, ongoing physical therapy, are also compensable if documented by your doctors."],
            ["Lost income and reduced earning capacity", "Both past lost wages and any lasting impact on your ability to earn. If your injury changed your career, that difference in lifetime earnings matters."],
            ["Injury type and permanence", "Injuries that fully heal settle for less than those that leave lasting limitations. Chronic pain, permanent nerve damage, and surgical hardware carry higher multipliers."],
            ["Your percentage of fault", "Even being 10 percent at fault reduces your recovery by 10 percent in comparative fault states. Contributory negligence states are harsher."],
            ["The at-fault driver's policy limits", "A minimum-coverage driver caps what you can collect from their insurer. Your own UM/UIM coverage, or a lawsuit against their personal assets, may be additional options."],
            ["Quality of your evidence", "Police reports, witness contact information, dashcam footage, and prompt medical care all strengthen your position. Gaps in treatment weaken it."],
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
          <AdUnit slot="3001000002" format="rectangle" />
        </div>

        <h3 className="text-xl font-bold mb-5 mt-2">Frequently Asked Questions</h3>
        <div className="space-y-1">
          {[
            {
              q: "How is a car accident settlement calculated?",
              a: "Attorneys start with your special damages, medical bills, lost wages, property damage, then multiply that figure by 1.5 to 5 depending on injury severity. That product covers pain and suffering. Fault percentage then reduces the total proportionally.",
            },
            {
              q: "What is the average car accident settlement in the US?",
              a: "Minor soft-tissue injuries typically settle between $10,000 and $30,000. Fractures and surgeries push into the $50,000–$150,000 range. Permanent disabilities regularly exceed six figures. The at-fault driver's policy limit also caps what their insurer will pay.",
            },
            {
              q: "Does fault percentage affect my settlement?",
              a: "Yes. Most states use comparative fault, which reduces your payout by your share of responsibility. A few still use contributory negligence, where any fault on your part can eliminate recovery entirely.",
            },
            {
              q: "How long does a car accident settlement take?",
              a: "Clear-liability cases with fully healed injuries often settle in 3 to 6 months. Disputed liability, ongoing treatment, or litigation typically means 1 to 2 years. Settling before you've reached maximum medical improvement risks leaving future costs uncovered.",
            },
            {
              q: "Do I need an attorney to settle a car accident claim?",
              a: "No law requires it, but injured claimants with attorneys consistently recover more even after the contingency fee. If your medical bills exceed $5,000 or you missed significant work, a free initial consultation is worth your time.",
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
          <strong style={{ color: "var(--gray-800)" }}>Disclaimer:</strong> Estimates from this tool are illustrative only. They are based on general formulas and do not account for the specific facts, evidence, jurisdiction, or insurance coverage involved in your case. This is not legal advice. Consult a licensed personal injury attorney in your state before making any decisions about your claim.
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
