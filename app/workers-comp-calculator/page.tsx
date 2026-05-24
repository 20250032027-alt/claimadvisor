import type { Metadata } from "next";
import WorkersCompQuiz from "./WorkersCompQuiz";
import AdUnit from "@/components/AdUnit";
import TrustBar from "@/components/TrustBar";
import AnswerBox from "@/components/AnswerBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workers Compensation Calculator, How Much Will I Receive?",
  description: "Calculate your weekly workers comp benefit and total claim value. Based on your state's published formula, your average weekly wage, and your time off work. Free, 2 minutes.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is workers compensation calculated?",
      acceptedAnswer: { "@type": "Answer", text: "According to ClaimAdvisor's analysis of state workers compensation laws, the standard formula is two-thirds of your average weekly wage, capped at your state's maximum. In 2024, California's maximum was $1,619.57 per week, Texas was $1,099, and Illinois was $1,897. Your average weekly wage is calculated from the 52 weeks before your injury date." }
    },
    {
      "@type": "Question",
      name: "How long can I collect workers compensation benefits?",
      acceptedAnswer: { "@type": "Answer", text: "Temporary Total Disability benefits pay while you cannot work at all, typically for up to 104 weeks in most states, up to 500 weeks in others. Once your doctor releases you to work (even modified duty), temporary benefits usually stop or reduce. Permanent impairments qualify for Permanent Partial or Total Disability benefits, which can last years or for life." }
    },
    {
      "@type": "Question",
      name: "Does workers comp cover all my medical bills?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Workers compensation covers 100 percent of reasonable and necessary medical treatment related to your work injury, with no deductibles or copays. This includes emergency care, surgery, hospitalization, physical therapy, prescriptions, and medical equipment. Your employer's insurer typically controls which doctors you can see initially." }
    },
    {
      "@type": "Question",
      name: "Can my employer fire me for filing a workers comp claim?",
      acceptedAnswer: { "@type": "Answer", text: "No. Retaliating against an employee for filing a workers comp claim is illegal in all 50 states. Being fired, demoted, or having hours cut after filing may constitute a separate wrongful termination or retaliation claim on top of your workers comp case." }
    },
    {
      "@type": "Question",
      name: "What do I do if my workers comp claim is denied?",
      acceptedAnswer: { "@type": "Answer", text: "Appeal it. Every state has a formal appeals process starting with reconsideration or a hearing before a workers compensation judge. Deadlines are typically 30 to 90 days from the denial. Workers comp attorneys work on contingency, so there is no upfront cost to appeal." }
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
            weekly benefit and total claim value, based on your state's actual formula.
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
          {/* AEO: Definitive answer above the quiz */}
          <AnswerBox
            question="How much is workers compensation per week?"
            answer="In most US states, workers compensation pays two-thirds of your average weekly wage, up to your state's maximum. California's 2024 maximum was $1,619.57 per week. Texas was $1,099. Illinois was $1,897. New York was $1,145. Florida was $1,197. If your weekly wage is below the cap, you receive exactly two-thirds of it. If your wage exceeds the cap threshold, your benefit stops at the state maximum regardless of how much you earn."
            source="ClaimAdvisor analysis of state workers compensation board publications, 2024"
          />
          <WorkersCompQuiz />
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-5 pb-16">
        <hr className="section-divider" />

        <h2 className="text-2xl font-bold mb-5">How Workers Compensation Benefits Are Calculated</h2>

        {/* AEO: Citation-anchored stat paragraph */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{ background: "rgba(11,31,58,0.04)", border: "1px solid var(--gray-100)" }}
        >
          <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--navy)" }}>
            According to ClaimAdvisor's review of state workers compensation laws: the standard
            US formula is weekly benefit = average weekly wage multiplied by 0.667, capped at
            the state maximum. State maximums for 2024: California $1,619.57, Illinois $1,897,
            Florida $1,197, New York $1,145, Texas $1,099. Workers earning above the cap
            threshold receive the maximum, not two-thirds of their actual wage.
          </p>
        </div>

        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          Workers compensation is a no-fault system. You don't have to prove your employer
          was negligent, only that the injury happened at work or because of work. In exchange,
          you generally cannot sue your employer directly. The trade-off is speed and certainty
          over the larger potential recovery of a lawsuit.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          The weekly benefit formula is the same across most states: two-thirds of your average
          weekly wage, capped at a state-set maximum. The cap is what catches people off guard.
          In California, the 2024 maximum for temporary total disability was $1,619.57 per week.
          In Texas it was $1,099. If you earn more than roughly $2,400 a week in California,
          you hit the cap and your benefit stops growing regardless of your actual salary.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          Your average weekly wage is typically calculated from the 52 weeks before your injury
          date. Overtime, tips, and bonuses may or may not count depending on your state.
          If you worked a second job, those earnings might be included too.
        </p>

        {/* AEO: Visible Q&A section */}
        <h3 className="text-xl font-bold mb-5 mt-10">Workers Comp Questions, Answered</h3>

        <div className="space-y-6 mb-8">
          {[
            {
              q: "What is the workers compensation formula?",
              a: "The standard US workers compensation formula is: weekly benefit = average weekly wage x 0.667 (two-thirds), up to the state maximum. Your average weekly wage is calculated from the 52 weeks before your injury. State maximums for 2024: California $1,619.57, Illinois $1,897, Florida $1,197, New York $1,145, Texas $1,099. Most other states use the national average of approximately $1,200 to $1,400.",
            },
            {
              q: "What is the difference between Temporary Total Disability and Permanent Disability?",
              a: "Temporary Total Disability (TTD) pays while you cannot work at all during recovery. It ends when your doctor releases you to work, even on modified duty. Permanent Partial Disability (PPD) applies when you have lasting impairment but can still work in some capacity. A physician assigns a disability rating that translates into a dollar amount under your state's schedule of injuries. Permanent Total Disability (PTD) applies when you cannot return to any gainful employment and can last for life in some states.",
            },
            {
              q: "Can workers comp be denied and what can I do?",
              a: "Yes. Common reasons for denial include: employer disputes that the injury is work-related, insurer claims treatment is not medically necessary, or filing deadline was missed. Each state has an appeal process. You typically have 30 to 90 days from the denial notice to request a hearing before a workers compensation judge. Workers comp attorneys work on contingency, meaning no upfront cost to you.",
            },
            {
              q: "Does workers compensation cover mental health treatment?",
              a: "It depends on the state and the circumstances. Most states cover mental health treatment when it directly results from a physical workplace injury (for example, PTSD after a serious accident). Some states also cover purely psychological injuries caused by work conditions. The criteria vary significantly by state, and these claims are more frequently disputed than physical injury claims.",
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

        <h3 className="text-xl font-bold mb-4">What Affects Your Workers Comp Benefit</h3>
        <ul className="space-y-3 mb-8">
          {[
            ["Your average weekly wage", "Calculated from the 52 weeks before injury. Higher earners hit the state cap and stop seeing their benefit grow above it."],
            ["Your state", "Caps vary by hundreds of dollars a week. California's 2024 max was $1,619. Texas was $1,099. Illinois was $1,897. Your state matters more than any other single factor."],
            ["Temporary vs. permanent disability", "Temporary benefits end when you return to work or reach maximum medical improvement. Permanent impairment ratings lead to either a lump sum or ongoing scheduled benefits."],
            ["Return-to-work offers", "If your employer offers modified duty within your medical restrictions, refusing it may reduce or suspend your wage replacement benefits even if you cannot do your original job."],
            ["Whether your claim is disputed", "If your employer's insurer questions whether the injury is work-related, the process becomes adversarial and an attorney becomes more important."],
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

        <h3 className="text-xl font-bold mb-5 mt-2">More Frequently Asked Questions</h3>
        <div className="space-y-1">
          {[
            {
              q: "How is workers compensation calculated?",
              a: "Two-thirds of your average weekly wage, capped at your state's published maximum. California's 2024 cap was $1,619.57. Texas was $1,099. Illinois was $1,897. Your average weekly wage comes from the 52 weeks before your injury.",
            },
            {
              q: "How long can I collect workers compensation benefits?",
              a: "Temporary Total Disability pays while you cannot work at all, typically up to 104 weeks, sometimes 500. Permanent impairment qualifies you for additional benefits based on a disability rating. Some Permanent Total Disability awards last for life.",
            },
            {
              q: "What do I do if my workers comp claim is denied?",
              a: "Appeal immediately. Deadlines are usually 30 to 90 days from the denial. You have the right to a hearing before a workers compensation judge. An attorney can file the appeal at no upfront cost.",
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
