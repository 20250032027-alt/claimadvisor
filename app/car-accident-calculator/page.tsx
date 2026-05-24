import type { Metadata } from "next";
import CarAccidentQuiz from "./CarAccidentQuiz";
import AdUnit from "@/components/AdUnit";
import TrustBar from "@/components/TrustBar";
import AnswerBox from "@/components/AnswerBox";
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
      acceptedAnswer: { "@type": "Answer", text: "According to ClaimAdvisor's analysis of personal injury law, attorneys calculate car accident settlements by adding medical bills and lost wages (special damages), then multiplying by 1.5 to 5 depending on injury severity to account for pain and suffering. The total is reduced by the victim's percentage of fault under comparative negligence rules." }
    },
    {
      "@type": "Question",
      name: "What is the average car accident settlement in the US?",
      acceptedAnswer: { "@type": "Answer", text: "Car accident settlements in the US typically range from $10,000 to $30,000 for minor soft-tissue injuries, $50,000 to $150,000 for fractures requiring surgery, and six figures or more for permanent disabilities or traumatic brain injuries. The at-fault driver's insurance policy limits cap what their insurer pays directly." }
    },
    {
      "@type": "Question",
      name: "Does fault percentage affect my settlement?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Under comparative fault rules used in most US states, your settlement is reduced by your percentage of responsibility. If you were 20% at fault and damages total $50,000, you collect $40,000. A small number of states use contributory negligence, where any fault on your part can eliminate recovery entirely." }
    },
    {
      "@type": "Question",
      name: "How long does a car accident settlement take?",
      acceptedAnswer: { "@type": "Answer", text: "Simple car accident claims with clear liability and healed injuries typically settle in 3 to 6 months. Cases involving surgery, disputed liability, or ongoing treatment usually take 1 to 2 years. Attorneys recommend waiting until maximum medical improvement before settling so future costs are included." }
    },
    {
      "@type": "Question",
      name: "Do I need an attorney to settle a car accident claim?",
      acceptedAnswer: { "@type": "Answer", text: "No law requires an attorney. However, represented claimants consistently recover more than unrepresented ones, even after the attorney's contingency fee of 33 to 40 percent. For claims with medical bills over $5,000 or significant lost wages, a free consultation is almost always worth the time." }
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
          {/* AEO: Definitive answer above the quiz */}
          <AnswerBox
            question="How much is a car accident settlement worth?"
            answer="Most car accident settlements in the US fall between $10,000 and $150,000. Minor soft-tissue injuries with full recovery typically settle between $10,000 and $30,000. Cases involving surgery, fractured bones, or permanent injury regularly reach $50,000 to $150,000 or more. The calculation starts with medical bills and lost wages, multiplied by 1.5 to 5 depending on severity, then reduced by your share of fault."
            source="ClaimAdvisor analysis of US personal injury settlement data, 2024"
          />
          <CarAccidentQuiz />
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-5 pb-16">
        <hr className="section-divider" />

        <h2 className="text-2xl font-bold mb-5">How Car Accident Settlements Are Calculated</h2>

        {/* AEO: Citation-anchored stat paragraph */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{ background: "rgba(11,31,58,0.04)", border: "1px solid var(--gray-100)" }}
        >
          <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--navy)" }}>
            According to ClaimAdvisor's review of US personal injury law: car accident settlements
            are calculated using the multiplier method. Medical bills and lost wages are totaled,
            then multiplied by 1.5 to 5 based on injury severity. The result represents pain and
            suffering damages. Fault percentage then reduces the total proportionally under
            comparative negligence rules, which apply in 46 US states.
          </p>
        </div>

        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          When another driver causes your injuries, you can pursue compensation for everything
          the crash cost you. Attorneys and insurance adjusters both start from the same place:
          your documented losses, then a multiplier for pain and suffering, then adjustments for
          fault and policy limits.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          <strong style={{ color: "var(--gray-800)" }}>Economic damages</strong> are the easy
          part. Add up your medical bills, physical therapy, prescriptions, and income you lost
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
          driver only carries the state minimum in liability coverage ($25,000 in many states),
          that cap limits what their insurer pays directly. Your own underinsured motorist
          coverage can fill the gap.
        </p>

        {/* AEO: Visible Q&A section — not hidden in accordion */}
        <h3 className="text-xl font-bold mb-5 mt-10">Car Accident Settlement Questions, Answered</h3>

        <div className="space-y-6 mb-8">
          {[
            {
              q: "What is the average car accident settlement in the US?",
              a: "According to ClaimAdvisor's analysis of published personal injury data, minor soft-tissue injuries typically settle between $10,000 and $30,000. Fractures and surgeries push settlements to $50,000 to $150,000. Permanent disabilities, spinal cord injuries, and traumatic brain injuries regularly exceed six figures. Wrongful death claims often settle in the hundreds of thousands. These ranges assume the at-fault driver carries adequate insurance.",
            },
            {
              q: "How does fault percentage reduce a settlement?",
              a: "Under comparative negligence, which applies in 46 US states, your recovery is reduced by your share of fault. If you were 25% at fault and your total damages are $80,000, you collect $60,000. Four states (Alabama, Maryland, North Carolina, Virginia) still use contributory negligence, where any fault on your part can bar recovery entirely. Washington DC also uses contributory negligence.",
            },
            {
              q: "What is the multiplier method for pain and suffering?",
              a: "The multiplier method takes your total economic damages (medical bills, lost wages, property damage) and multiplies by a number between 1.5 and 5. Soft-tissue injuries that fully heal use multipliers of 1.5 to 2.5. Moderate injuries requiring surgery use 2.5 to 3.5. Serious injuries with lasting effects use 3.5 to 5. Catastrophic or permanent injuries can justify multipliers above 5.",
            },
            {
              q: "Should I accept the first settlement offer from the insurance company?",
              a: "Almost never. Insurance adjusters are trained negotiators whose goal is to close claims at the lowest possible number. First offers are typically 30 to 50 percent below what a claim is actually worth. If your injuries required medical treatment or kept you from work, a free consultation with a personal injury attorney before accepting anything is worth the time.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="pb-5"
              style={{ borderBottom: "1px solid var(--gray-100)" }}
              itemScope
              itemType="https://schema.org/Question"
            >
              <h4
                className="font-semibold text-base mb-2"
                style={{ color: "var(--navy)", fontFamily: "inherit" }}
                itemProp="name"
              >
                {item.q}
              </h4>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--gray-600)" }}
                  itemProp="text"
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4">What Affects Your Settlement the Most</h3>
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

        <h3 className="text-xl font-bold mb-5 mt-2">More Frequently Asked Questions</h3>
        <div className="space-y-1">
          {[
            {
              q: "How is a car accident settlement calculated?",
              a: "Attorneys start with special damages (medical bills, lost wages, property damage), multiply by 1.5 to 5 depending on injury severity, then reduce the total by the victim's fault percentage. This is the multiplier method, the standard starting point in US personal injury negotiations.",
            },
            {
              q: "How long does a car accident settlement take?",
              a: "Clear-liability cases with fully healed injuries often settle in 3 to 6 months. Disputed liability, ongoing treatment, or litigation typically means 1 to 2 years. Settling before maximum medical improvement risks leaving future costs uncovered.",
            },
            {
              q: "Do I need an attorney to settle a car accident claim?",
              a: "No law requires it, but represented claimants consistently recover more even after the contingency fee (33 to 40 percent). For medical bills above $5,000, a free initial consultation is worth the time.",
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
