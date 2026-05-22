import type { Metadata } from "next";
import CarAccidentQuiz from "./CarAccidentQuiz";
import AdUnit from "@/components/AdUnit";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Car Accident Settlement Estimator — How Much Is My Case Worth?",
  description: "Use our free car accident settlement calculator to estimate your compensation range based on medical bills, lost wages, injury severity, and fault. Takes 2 minutes.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is a car accident settlement calculated?",
      acceptedAnswer: { "@type": "Answer", text: "Most personal injury attorneys use a formula that starts with your 'special damages' — verifiable out-of-pocket costs like medical bills and lost wages — and then multiplies them by a factor of 1.5x to 5x depending on injury severity. The resulting number represents 'general damages' including pain and suffering. The total is then reduced if you share some fault for the accident." }
    },
    {
      "@type": "Question",
      name: "What is the average car accident settlement in the US?",
      acceptedAnswer: { "@type": "Answer", text: "Settlement amounts vary enormously by state, injury type, and the quality of your legal representation. Minor accidents with soft-tissue injuries often settle between $10,000 and $25,000. Serious injuries involving surgery, hospitalization, or permanent disability can reach six figures or more. Wrongful death claims are typically in the hundreds of thousands to millions." }
    },
    {
      "@type": "Question",
      name: "Does fault percentage affect my settlement?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, significantly. The US uses two main systems: 'comparative fault,' which reduces your award by your percentage of fault; and 'contributory negligence,' used in a few states, where any fault on your part can bar recovery entirely. For example, if you were 20% at fault and your damages are $50,000, a comparative fault state would award you $40,000." }
    },
    {
      "@type": "Question",
      name: "How long does it take to settle a car accident claim?",
      acceptedAnswer: { "@type": "Answer", text: "Simple claims with clear liability and minor injuries often resolve in 3–6 months. Cases involving significant injuries, disputed liability, or litigation can take 1–3 years. Attorneys generally advise waiting until you reach 'maximum medical improvement' — the point at which your doctors expect no further recovery — before settling, so your future costs are fully factored in." }
    },
    {
      "@type": "Question",
      name: "Do I need an attorney to file a car accident claim?",
      acceptedAnswer: { "@type": "Answer", text: "You are not legally required to hire an attorney. However, studies consistently show that accident victims represented by attorneys recover 3–4x more on average than those who negotiate alone, even after attorney fees (typically 33–40% of the recovery). For claims involving medical bills above $5,000, it is almost always in your financial interest to consult with a personal injury attorney. Most offer free initial consultations." }
    },
  ],
};

export default function CarAccidentPage() {
  return (
    <>
      <TrustBar />

      <section style={{ background: "var(--navy)" }} className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(200,151,58,0.15)", color: "var(--gold)" }}>
            Settlement Calculator
          </div>
          <h1 className="text-white font-display text-3xl md:text-4xl font-bold mb-4">
            Car Accident Settlement Estimator
          </h1>
          <p className="text-white/70 text-base leading-relaxed">
            Answer a few short questions about your accident and injuries to receive an estimated settlement range. Free and confidential — no personal information required.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar ad */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <AdUnit slot="3001000001" format="sidebar" className="sticky top-24" />
        </div>

        {/* Quiz */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <CarAccidentQuiz />
        </div>
      </div>

      {/* Educational content */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <hr className="section-divider" />

        <h2 className="text-2xl font-bold mb-6">How Car Accident Settlements Are Calculated</h2>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          When you are injured in a car accident caused by another driver's negligence, you are entitled to seek compensation for your losses. The legal term for this is "damages," and they fall into two main categories: economic damages and non-economic damages.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          <strong style={{ color: "var(--gray-700)" }}>Economic damages</strong> are the tangible, documented costs your accident caused. These include current and future medical bills, physical therapy costs, prescription expenses, car repair or replacement, and any income you lost because you were unable to work. These are calculated by adding up actual bills and pay stubs — there is no estimate involved.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          <strong style={{ color: "var(--gray-700)" }}>Non-economic damages</strong> — often called pain and suffering — are harder to quantify. Insurance adjusters and attorneys commonly use a multiplier method: take your total economic damages and multiply by a number between 1.5 and 5, depending on how severe and permanent the injuries are. A soft-tissue neck strain may use a 1.5 multiplier. A spinal fracture with permanent disability might justify a 4 or 5.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          The final settlement amount is then influenced by your state's fault rules, the insurance policy limits of the at-fault driver, the strength of evidence, and whether or not you have legal representation. Insurance companies frequently offer the lowest possible initial settlement to unrepresented claimants, so understanding your baseline estimate before you negotiate is essential.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Factors That Affect Your Car Accident Settlement Value</h3>
        <ul className="space-y-3 mb-8">
          {[
            ["Medical bills and ongoing treatment costs", "The foundation of most settlements. Keep every receipt, Explanation of Benefits, and doctor's note."],
            ["Lost income and reduced earning capacity", "If injuries keep you from working temporarily or permanently, that income loss is compensable."],
            ["Injury severity and permanence", "A broken bone that heals completely will typically yield a smaller settlement than a herniated disc causing chronic pain."],
            ["Fault percentage", "If you contributed to the crash, most states will reduce your payout proportionally."],
            ["Policy limits of the at-fault driver", "A driver with only $25,000 in coverage caps what you can recover directly from their insurer, though you may pursue their personal assets or your own underinsured motorist coverage."],
            ["Quality of evidence", "Police reports, witness statements, dashcam footage, and medical records all strengthen your case."],
          ].map(([title, body]) => (
            <li key={title} className="flex gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5" style={{ background: "var(--gold)" }} />
              <div>
                <strong style={{ color: "var(--gray-700)" }}>{title}:</strong>{" "}
                <span style={{ color: "var(--gray-500)" }}>{body}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Ad between sections */}
        <div className="flex justify-center my-8">
          <AdUnit slot="3001000002" format="rectangle" />
        </div>

        <h3 className="text-xl font-bold mb-6 mt-2">Frequently Asked Questions</h3>
        <div className="space-y-1">
          {[
            {
              q: "How is a car accident settlement calculated?",
              a: "Most personal injury attorneys use a formula that starts with your 'special damages' — verifiable out-of-pocket costs like medical bills and lost wages — and then multiplies them by a factor of 1.5x to 5x depending on injury severity. The resulting number represents 'general damages' including pain and suffering. The total is then reduced if you share some fault for the accident.",
            },
            {
              q: "What is the average car accident settlement in the US?",
              a: "Settlement amounts vary enormously by state, injury type, and the quality of your legal representation. Minor accidents with soft-tissue injuries often settle between $10,000 and $25,000. Serious injuries involving surgery, hospitalization, or permanent disability can reach six figures or more. Wrongful death claims are typically in the hundreds of thousands to millions.",
            },
            {
              q: "Does fault percentage affect my settlement?",
              a: "Yes, significantly. The US uses two main systems: 'comparative fault,' which reduces your award by your percentage of fault; and 'contributory negligence,' used in a few states, where any fault on your part can bar recovery entirely. If you were 20% at fault and your damages total $50,000, a comparative fault state would award you $40,000.",
            },
            {
              q: "How long does it take to settle a car accident claim?",
              a: "Simple claims with clear liability and minor injuries often resolve in 3–6 months. Cases involving significant injuries, disputed liability, or litigation can take 1–3 years. Attorneys generally advise waiting until you reach 'maximum medical improvement' before settling, so your future costs are fully factored in.",
            },
            {
              q: "Do I need an attorney to file a car accident claim?",
              a: "You are not legally required to hire an attorney. However, accident victims represented by attorneys recover significantly more on average than those who negotiate alone, even after attorney fees (typically 33–40% of the recovery). For claims involving medical bills above $5,000, consulting a personal injury attorney is almost always worth the free initial consultation.",
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
          <strong style={{ color: "var(--gray-700)" }}>Disclaimer:</strong> The estimates produced by this tool are illustrative only, based on general formulas, and do not constitute legal advice. Settlement outcomes depend on facts and circumstances specific to each case. Always consult a licensed personal injury attorney for advice about your situation.
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
