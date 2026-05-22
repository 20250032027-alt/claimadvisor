import type { Metadata } from "next";
import MesotheliomaQuiz from "./MesotheliomaQuiz";
import AdUnit from "@/components/AdUnit";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Mesothelioma Legal Eligibility Checker — Do You Qualify for Compensation?",
  description: "Find out if your history of asbestos exposure or mesothelioma diagnosis may qualify you for legal compensation through lawsuits or asbestos trust funds. Free, confidential, 3-minute check.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who can file a mesothelioma lawsuit?",
      acceptedAnswer: { "@type": "Answer", text: "Any individual diagnosed with mesothelioma, lung cancer, or asbestosis caused by asbestos exposure may be eligible to file a personal injury lawsuit. Family members of someone who died from mesothelioma may also file a wrongful death claim. Cases can often be filed even decades after exposure occurred." }
    },
    {
      "@type": "Question",
      name: "What are asbestos trust funds?",
      acceptedAnswer: { "@type": "Answer", text: "Dozens of companies that manufactured or used asbestos products have declared bankruptcy and established trust funds to compensate current and future victims. There is currently over $30 billion available in these funds. Filing a trust fund claim is separate from a lawsuit and does not require proving the company is still solvent." }
    },
    {
      "@type": "Question",
      name: "How much can a mesothelioma victim receive in compensation?",
      acceptedAnswer: { "@type": "Answer", text: "Compensation varies widely. Trial verdicts can reach several million dollars. Settlement amounts typically range from $1 million to $2.4 million for mesothelioma cases. Trust fund payouts are generally lower, averaging $180,000 to $200,000 per claim, but multiple claims can be filed against different trusts." }
    },
    {
      "@type": "Question",
      name: "Is there a time limit for filing a mesothelioma claim?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Statutes of limitations apply, typically ranging from 1 to 6 years from the date of diagnosis or the date the victim passed away, depending on the state. Because mesothelioma has a latency period of 20–50 years after exposure, the clock usually starts at diagnosis, not exposure. Acting promptly is critical." }
    },
    {
      "@type": "Question",
      name: "Do I need to have a diagnosis to file a claim?",
      acceptedAnswer: { "@type": "Answer", text: "A diagnosis of mesothelioma, asbestosis, or an asbestos-related cancer significantly strengthens your claim and is generally required for full compensation. However, individuals with documented exposure history and symptoms may also consult with an attorney about their options, including monitoring for future eligibility." }
    },
  ],
};

export default function MesotheliomaPage() {
  return (
    <>
      <TrustBar />

      <section style={{ background: "var(--navy)" }} className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(200,151,58,0.15)", color: "var(--gold)" }}>
            Eligibility Checker
          </div>
          <h1 className="text-white font-display text-3xl md:text-4xl font-bold mb-4">
            Mesothelioma Legal Eligibility Checker
          </h1>
          <p className="text-white/70 text-base leading-relaxed">
            Answer a few questions about your asbestos exposure history and health status to determine whether you may qualify for legal compensation.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <AdUnit slot="3003000001" format="sidebar" className="sticky top-24" />
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
          <MesotheliomaQuiz />
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-4 pb-16">
        <hr className="section-divider" />

        <h2 className="text-2xl font-bold mb-6">Understanding Mesothelioma Legal Claims</h2>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          Mesothelioma is an aggressive cancer caused almost exclusively by exposure to asbestos — a mineral once widely used in construction, shipbuilding, automotive manufacturing, and dozens of other industries. Because symptoms can take 20 to 50 years to appear after exposure, many victims are diagnosed decades after they worked with or near asbestos-containing products.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          The legal system provides two primary paths to compensation for mesothelioma victims: <strong style={{ color: "var(--gray-700)" }}>personal injury lawsuits</strong> against manufacturers who knew their products were dangerous, and <strong style={{ color: "var(--gray-700)" }}>asbestos bankruptcy trust fund claims</strong> against companies that have since gone bankrupt. As of 2024, more than $30 billion remains available in these trust funds for current and future claimants.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          A mesothelioma attorney can typically identify multiple potentially liable companies from your work history — manufacturers of asbestos insulation, pipe fittings, floor tiles, brake pads, boiler insulation, and dozens of other products that were routinely used in industrial workplaces before the 1980s. You do not need to identify the source of exposure yourself; attorneys who specialize in these cases have extensive databases of product information.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Who Is Most at Risk for Asbestos Exposure?</h3>
        <ul className="space-y-3 mb-8">
          {[
            ["Construction workers and contractors", "Asbestos was used in insulation, floor tiles, ceiling tiles, roofing materials, joint compound, and fireproofing through the 1970s and into the 1980s."],
            ["Shipyard workers and Navy veterans", "US Navy ships built before 1980 were heavily insulated with asbestos. Shipyard workers who built, repaired, or demolished these vessels face high exposure risk."],
            ["Industrial and manufacturing workers", "Asbestos was used in boiler rooms, power plants, steel mills, paper mills, and chemical plants for its heat-resistant properties."],
            ["Automotive mechanics", "Brake pads, clutch facings, and gaskets historically contained asbestos. Mechanics who cut, drilled, or ground these parts inhaled fibers."],
            ["Family members of exposed workers", "Secondary exposure is well-documented. Family members who washed work clothes contaminated with asbestos dust have developed mesothelioma decades later."],
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
          <AdUnit slot="3003000002" format="rectangle" />
        </div>

        <h3 className="text-xl font-bold mb-6 mt-2">Frequently Asked Questions</h3>
        <div className="space-y-1">
          {[
            {
              q: "Who can file a mesothelioma lawsuit?",
              a: "Any individual diagnosed with mesothelioma, lung cancer, or asbestosis caused by asbestos exposure may be eligible. Family members of someone who died from mesothelioma may also file a wrongful death claim. Cases can often be filed even decades after exposure occurred.",
            },
            {
              q: "What are asbestos trust funds?",
              a: "Dozens of companies that manufactured or used asbestos products established trust funds after bankruptcy to compensate victims. Over $30 billion remains in these funds. A trust fund claim is separate from a lawsuit and does not require the company to still be solvent.",
            },
            {
              q: "How much can a mesothelioma victim receive in compensation?",
              a: "Compensation varies widely. Trial verdicts can reach several million dollars. Settlements typically range from $1 million to $2.4 million for mesothelioma cases. Trust fund payouts average $180,000–$200,000 per claim, but multiple claims can be filed against different trusts.",
            },
            {
              q: "Is there a time limit for filing a mesothelioma claim?",
              a: "Yes. Statutes of limitations typically range from 1 to 6 years from diagnosis or date of death, depending on the state. Because of mesothelioma's long latency period, the clock usually starts at diagnosis, not exposure. Acting promptly is critical.",
            },
            {
              q: "Do I need a diagnosis to file a claim?",
              a: "A confirmed diagnosis significantly strengthens your claim. However, individuals with documented exposure history and symptoms may consult an attorney about monitoring for future eligibility and preserving evidence.",
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
          <strong style={{ color: "var(--gray-700)" }}>Disclaimer:</strong> Eligibility results from this tool are informational only and are not a legal determination. Only a licensed mesothelioma attorney reviewing the specific facts of your case can advise whether you have a viable claim. This tool does not create an attorney-client relationship.
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
