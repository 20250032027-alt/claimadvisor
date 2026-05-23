import type { Metadata } from "next";
import MesotheliomaQuiz from "./MesotheliomaQuiz";
import AdUnit from "@/components/AdUnit";
import TrustBar from "@/components/TrustBar";
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
      name: "Who can file a mesothelioma lawsuit?",
      acceptedAnswer: { "@type": "Answer", text: "Anyone diagnosed with mesothelioma, asbestosis, or asbestos-related lung cancer can file a personal injury claim. If the person has passed away, family members can file a wrongful death claim. Claims can be filed decades after the original exposure. The clock usually starts at diagnosis, not the day you worked around asbestos." }
    },
    {
      "@type": "Question",
      name: "What are asbestos trust funds and how do they work?",
      acceptedAnswer: { "@type": "Answer", text: "When major asbestos manufacturers declared bankruptcy, courts required them to set up trusts to compensate current and future victims. More than $30 billion remains in these trusts. Filing a trust claim is separate from a lawsuit. You don't have to prove the company still exists or is solvent. An attorney identifies which trusts apply to your work history and files on your behalf." }
    },
    {
      "@type": "Question",
      name: "How much compensation can a mesothelioma victim receive?",
      acceptedAnswer: { "@type": "Answer", text: "It varies widely. Trust fund payouts average $180,000 to $200,000 per claim, and multiple claims can be filed against different trusts. Lawsuit settlements typically range from $1 million to $2.4 million. Trial verdicts can reach several million. Most cases settle before trial. An attorney experienced in asbestos litigation can give a more realistic estimate based on your specific exposure history." }
    },
    {
      "@type": "Question",
      name: "Is there a time limit for filing a mesothelioma claim?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Statutes of limitations range from 1 to 6 years depending on the state, measured from the date of diagnosis, not the date of exposure. Because mesothelioma can take 20 to 50 years to develop after asbestos exposure, many victims are diagnosed long after the companies responsible have gone bankrupt. Acting quickly after diagnosis preserves your options." }
    },
    {
      "@type": "Question",
      name: "Do I need a diagnosis to file a mesothelioma claim?",
      acceptedAnswer: { "@type": "Answer", text: "A confirmed pathological diagnosis significantly strengthens any claim and is required for full compensation from most trusts and lawsuits. However, individuals with documented asbestos exposure and developing symptoms can consult an attorney about preserving evidence and monitoring eligibility. Some trust funds accept claims for asbestosis and pleural disease as well as mesothelioma." }
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
          <MesotheliomaQuiz />
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-5 pb-16">
        <hr className="section-divider" />

        <h2 className="text-2xl font-bold mb-5">Mesothelioma Legal Claims Explained</h2>
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
          doesn't eliminate your legal options, the statute of limitations in most states
          starts at the date of diagnosis, not the date of the exposure.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          There are two main paths to compensation. The first is a{" "}
          <strong style={{ color: "var(--gray-800)" }}>personal injury or wrongful death
          lawsuit</strong> against the manufacturers of the specific asbestos products you
          worked with. The second is a <strong style={{ color: "var(--gray-800)" }}>trust
          fund claim</strong>, dozens of bankrupt asbestos companies were required by courts
          to establish compensation funds, and more than $30 billion remains available.
          Most victims pursue both simultaneously.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-600)" }}>
          You don't need to remember every product you worked with. Attorneys who specialize
          in asbestos litigation maintain detailed databases of what products were used in
          which industries and job sites. A pipefitter, insulator, or shipyard worker from
          the 1960s through 1980s likely encountered dozens of asbestos-containing products
          from multiple manufacturers.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Who Is Most at Risk for Asbestos Exposure</h3>
        <ul className="space-y-3 mb-8">
          {[
            ["Construction workers and trades", "Asbestos insulation, floor tiles, ceiling tiles, joint compound, roofing materials, and fireproofing were all standard before the 1980s. Demolition and renovation work still disturbs old asbestos today."],
            ["Navy veterans and shipyard workers", "US Navy vessels built before 1980 were heavily insulated with asbestos. Boiler rooms, engine rooms, and sleeping quarters all contained it. The VA recognizes the exposure risk and provides benefits for eligible veterans."],
            ["Industrial and power plant workers", "Asbestos was used in boilers, turbines, pipe insulation, and heat-resistant gaskets throughout heavy industry. Power plant workers, steel workers, and paper mill employees faced consistent exposure."],
            ["Automotive mechanics", "Brake pads, clutch plates, and head gaskets historically contained asbestos. Mechanics who cut, drilled, or ground these parts inhaled fibers over entire careers."],
            ["Family members of exposed workers", "Secondary exposure is well-documented and legally compensable. Spouses and children who handled contaminated work clothes, or lived in homes where workers brought fibers home on their bodies and hair, have developed mesothelioma decades later."],
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

        <h3 className="text-xl font-bold mb-5 mt-2">Frequently Asked Questions</h3>
        <div className="space-y-1">
          {[
            {
              q: "Who can file a mesothelioma lawsuit?",
              a: "Anyone diagnosed with mesothelioma, asbestosis, or asbestos-related lung cancer. Family members can file wrongful death claims. The statute of limitations starts at diagnosis, not exposure, so cases filed decades after the original exposure are common.",
            },
            {
              q: "What are asbestos trust funds and how do they work?",
              a: "Bankrupt asbestos manufacturers were required to fund trusts to compensate victims. Over $30 billion remains. Trust claims are separate from lawsuits, you don't need to prove the company is still solvent. Attorneys identify which trusts apply to your work history and file on your behalf.",
            },
            {
              q: "How much compensation can a mesothelioma victim receive?",
              a: "Trust fund payouts average $180,000–$200,000 per claim, and multiple claims can be filed. Lawsuit settlements typically range from $1 million to $2.4 million. Most cases settle before trial. VA benefits are separate and may also apply to veterans.",
            },
            {
              q: "Is there a time limit for filing a mesothelioma claim?",
              a: "Yes. Statutes of limitations are 1 to 6 years from diagnosis depending on the state. Acting quickly after diagnosis is critical, delays can permanently close off legal options.",
            },
            {
              q: "Do I need a diagnosis to file a mesothelioma claim?",
              a: "A confirmed diagnosis is required for full compensation from most trusts and lawsuits. If you have documented exposure history and developing symptoms, an attorney can advise you on preserving evidence and monitoring your eligibility.",
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
