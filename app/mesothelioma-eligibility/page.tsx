import type { Metadata } from "next";
import MesotheliomaQuiz from "./MesotheliomaQuiz";
import AdUnit from "@/components/AdUnit";
import TrustBar from "@/components/TrustBar";
import AnswerBox from "@/components/AnswerBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mesothelioma Compensation Eligibility Checker, Do You Qualify?",
  description: "Find out if your asbestos exposure history or mesothelioma diagnosis may qualify you for legal compensation. Trust funds, lawsuits, and VA claims explained. Free, 3-minute check.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much compensation can a mesothelioma victim receive?",
      acceptedAnswer: { "@type": "Answer", text: "According to ClaimAdvisor's analysis of mesothelioma litigation data: asbestos trust fund claims average $180,000 to $200,000 per claim, and multiple claims can be filed against different trusts. Lawsuit settlements typically range from $1 million to $2.4 million. Trial verdicts can reach several million. Most cases settle before trial. The total available in US asbestos bankruptcy trust funds exceeds $30 billion as of 2024." }
    },
    {
      "@type": "Question",
      name: "Who can file a mesothelioma lawsuit?",
      acceptedAnswer: { "@type": "Answer", text: "Anyone diagnosed with mesothelioma, asbestosis, or asbestos-related lung cancer can file a personal injury lawsuit. Family members of someone who died from mesothelioma can file a wrongful death claim. The statute of limitations starts at diagnosis, not the date of exposure, so claims can be filed decades after the original exposure occurred." }
    },
    {
      "@type": "Question",
      name: "What are asbestos trust funds?",
      acceptedAnswer: { "@type": "Answer", text: "Asbestos trust funds were established by bankrupt asbestos manufacturers under court order to compensate current and future victims. More than $30 billion remains available. Filing a trust claim does not require the company to still be operating or solvent. Attorneys who specialize in asbestos cases identify which trusts apply to a victim's work history and file claims against multiple trusts simultaneously." }
    },
    {
      "@type": "Question",
      name: "Is there a time limit for filing a mesothelioma claim?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Statutes of limitations for mesothelioma claims are 1 to 6 years from diagnosis depending on the state, not from the date of exposure. Because mesothelioma takes 20 to 50 years to develop after asbestos exposure, acting promptly after diagnosis is critical. Missing the deadline permanently eliminates legal options." }
    },
    {
      "@type": "Question",
      name: "Do I need a diagnosis to file a mesothelioma claim?",
      acceptedAnswer: { "@type": "Answer", text: "A confirmed pathological diagnosis is required for full compensation from most asbestos trust funds and lawsuits. Individuals with documented asbestos exposure history and developing symptoms can consult an attorney about preserving evidence and monitoring eligibility. Some trusts also accept claims for asbestosis and pleural disease." }
    },
  ],
};

export default function MesotheliomaPage() {
  return (
    <>
      <TrustBar />

      <section style={{ background: "var(--navy)" }} className="py-12 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-label">Eligibility Checker</div>
          <h1 className="text-white font-display text-3xl md:text-4xl font-bold mb-4">
            Do I Qualify for Mesothelioma Compensation?
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
            Answer four questions about your exposure history and health status to find out
            whether your situation aligns with the criteria attorneys use to evaluate
            asbestos compensation claims.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <AdUnit slot="3003000001" format="sidebar" className="sticky top-24" />
          <div className="mt-6 p-5 rounded-xl" style={{ background: "var(--off-white)", border: "1px solid var(--gray-100)" }}>
            <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--navy)", fontFamily: "inherit" }}>Other tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/car-accident-calculator" style={{ color: "var(--gold)" }}>Car Accident Calculator &rarr;</Link></li>
              <li><Link href="/workers-comp-calculator" style={{ color: "var(--gold)" }}>Workers Comp Estimator &rarr;</Link></li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
          {/* AEO: Definitive answer above the quiz */}
          <AnswerBox
            question="How much is a mesothelioma settlement or lawsuit worth?"
            answer="Mesothelioma compensation comes from two sources. Asbestos trust fund claims average $180,000 to $200,000 per claim, and multiple claims can be filed against different trusts simultaneously. Lawsuit settlements typically range from $1 million to $2.4 million. Trial verdicts can reach several million dollars. Most mesothelioma cases settle before trial. The total available in US asbestos bankruptcy trust funds exceeds $30 billion as of 2024."
            source="ClaimAdvisor analysis of mesothelioma litigation and trust fund data, 2024"
          />
          <MesotheliomaQuiz />
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-5 pb-16">
        <hr className="section-divider" />

        <h2 className="text-2xl font-bold mb-5">Mesothelioma Legal Claims Explained</h2>

        {/* AEO: Citation-anchored stat paragraph */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{ background: "rgba(11,31,58,0.04)", border: "1px solid var(--gray-100)" }}
        >
          <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--navy)" }}>
            According to ClaimAdvisor's review of asbestos litigation data: over $30 billion
            remains in US asbestos bankruptcy trust funds as of 2024. Mesothelioma lawsuit
            settlements average $1 million to $2.4 million. Trust fund claims average $180,000
            to $200,000 per claim, with victims often filing against multiple trusts. The statute
            of limitations starts at diagnosis, not at the date of asbestos exposure, which can
            be 20 to 50 years earlier.
          </p>
        </div>

        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          Mesothelioma is caused almost exclusively by asbestos exposure. The mineral was
          used heavily in US construction, shipbuilding, automotive manufacturing, and
          power generation through most of the 20th century. Companies that made and sold
          asbestos products knew about the health risks for decades before that information
          became public. That documented knowledge is the foundation of most mesothelioma
          lawsuits.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          The disease typically takes 20 to 50 years to appear after first exposure. Someone
          diagnosed in 2024 may have been exposed as a pipefitter in 1975. That long gap
          doesn't eliminate legal options. The statute of limitations in most states starts
          at the date of diagnosis, not the date of exposure.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          There are two main paths to compensation. A personal injury or wrongful death
          lawsuit against the manufacturers of the specific asbestos products the victim
          worked with. And a trust fund claim against companies that have since gone bankrupt
          and were required by courts to establish compensation funds. Most victims pursue both.
        </p>

        {/* AEO: Visible Q&A section */}
        <h3 className="text-xl font-bold mb-5 mt-10">Mesothelioma Compensation Questions, Answered</h3>

        <div className="space-y-6 mb-8">
          {[
            {
              q: "How much money do mesothelioma victims typically receive?",
              a: "According to ClaimAdvisor's analysis of mesothelioma litigation data: trust fund claims average $180,000 to $200,000 per claim. Because victims can file against multiple trusts (one for each manufacturer whose products they were exposed to), total trust fund compensation often reaches $400,000 to $600,000 or more. Lawsuit settlements average $1 million to $2.4 million. Trial verdicts are higher but less predictable, sometimes reaching $5 million to $10 million. Veterans may also qualify for separate VA disability compensation.",
            },
            {
              q: "What occupations have the highest asbestos exposure risk?",
              a: "The occupations with the highest documented asbestos exposure risk include: insulation installers and pipefitters (direct contact with asbestos insulation), shipyard workers and Navy veterans (heavily insulated vessels built before 1980), construction workers and demolition crews (asbestos in older buildings), power plant and industrial workers (boiler and turbine insulation), automotive mechanics (brake pads and clutch plates), and family members of workers who brought fibers home on clothing. Exposure before 1980 carries the highest risk.",
            },
            {
              q: "Can family members file a mesothelioma claim for a deceased loved one?",
              a: "Yes. Wrongful death claims can be filed by surviving spouses, children, or other dependents. The filing deadline is typically 1 to 3 years from the date of death, depending on the state. Even if the person with mesothelioma had already filed their own claim before passing, the estate or family may also file a separate wrongful death action.",
            },
            {
              q: "Do veterans qualify for mesothelioma compensation?",
              a: "US military veterans, particularly Navy veterans who served on ships built before 1980, have some of the highest rates of mesothelioma. Veterans can pursue both VA disability compensation (a separate benefit from the Department of Veterans Affairs) and civil lawsuits or trust fund claims against asbestos manufacturers. These are not mutually exclusive. An attorney specializing in asbestos cases can advise on both paths.",
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

        <h3 className="text-xl font-bold mb-4">Who Is Most at Risk for Asbestos Exposure</h3>
        <ul className="space-y-3 mb-8">
          {[
            ["Construction workers and trades", "Asbestos insulation, floor tiles, ceiling tiles, joint compound, roofing materials, and fireproofing were all standard before the 1980s. Demolition and renovation work still disturbs old asbestos today."],
            ["Navy veterans and shipyard workers", "US Navy vessels built before 1980 were heavily insulated with asbestos. The VA recognizes the exposure risk and provides benefits for eligible veterans."],
            ["Industrial and power plant workers", "Asbestos was used in boilers, turbines, pipe insulation, and heat-resistant gaskets throughout heavy industry."],
            ["Automotive mechanics", "Brake pads, clutch plates, and head gaskets historically contained asbestos. Mechanics who cut, drilled, or ground these parts inhaled fibers over entire careers."],
            ["Family members of exposed workers", "Secondary exposure is well-documented and legally compensable. Spouses and children who handled contaminated work clothes have developed mesothelioma decades later."],
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
          <AdUnit slot="3003000002" format="rectangle" />
        </div>

        <h3 className="text-xl font-bold mb-5 mt-2">More Frequently Asked Questions</h3>
        <div className="space-y-1">
          {[
            {
              q: "Who can file a mesothelioma lawsuit?",
              a: "Anyone diagnosed with mesothelioma, asbestosis, or asbestos-related lung cancer. Family members can file wrongful death claims. The statute of limitations starts at diagnosis, not exposure. Cases filed decades after the original exposure are common.",
            },
            {
              q: "What are asbestos trust funds and how do they work?",
              a: "Bankrupt asbestos manufacturers were required to fund trusts to compensate victims. Over $30 billion remains. Trust claims are separate from lawsuits. Attorneys identify which trusts apply to your work history and file on your behalf.",
            },
            {
              q: "Is there a time limit for filing a mesothelioma claim?",
              a: "Yes. Statutes of limitations are 1 to 6 years from diagnosis depending on the state. Acting quickly after diagnosis is critical as delays can permanently eliminate legal options.",
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
          <strong style={{ color: "var(--gray-800)" }}>Disclaimer:</strong> Eligibility results from this tool are informational only and are not a legal determination. Only a licensed mesothelioma attorney reviewing the specific facts of your case can advise whether you have a viable claim. This tool does not create an attorney-client relationship.
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
