import type { Metadata } from "next";
import TrustBar from "@/components/TrustBar";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "About ClaimAdvisor — Who We Are and How Our Tools Work",
  description: "ClaimAdvisor provides free, informational legal claim estimation tools for US residents. Learn about our mission, methodology, and editorial standards.",
};

export default function AboutPage() {
  return (
    <>
      <TrustBar />

      {/* Hero */}
      <section style={{ background: "var(--navy)" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white font-display text-4xl font-bold mb-4">About ClaimAdvisor</h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Free, honest tools to help everyday Americans understand their legal options — before they walk into an attorney's office.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">

          {/* Mission */}
          <section>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4" style={{ background: "var(--gold-pale)", color: "var(--gold)" }}>Our Mission</div>
            <h2 className="text-2xl font-bold mb-4">Why We Built ClaimAdvisor</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--gray-500)" }}>
              <p>
                Every year, millions of Americans are injured in car accidents, hurt on the job, or diagnosed with illnesses caused by occupational hazards like asbestos exposure. Many of them never pursue the compensation they are legally entitled to — not because they don't have a case, but because they don't know where to start.
              </p>
              <p>
                The legal system is opaque. Attorney websites are full of fine print and contact forms designed to capture leads, not inform claimants. Insurance adjusters count on people not knowing their numbers. We built ClaimAdvisor to change that dynamic — to give ordinary people the same baseline information that attorneys and adjusters use, for free, without requiring a single piece of personal information.
              </p>
              <p>
                Our tools do not replace attorneys. They prepare you to work with one more effectively. When you understand the formula behind your settlement estimate, you are harder to lowball. When you know your state's workers comp cap, you can verify whether the number on an offer sheet is right. That is the purpose of this site.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          {/* Who we are */}
          <section>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4" style={{ background: "var(--gold-pale)", color: "var(--gold)" }}>Who We Are</div>
            <h2 className="text-2xl font-bold mb-4">The Team Behind This Site</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--gray-500)" }}>
              <p>
                ClaimAdvisor was founded by a small team of legal research and consumer education professionals with backgrounds in personal injury law, workers compensation policy, and digital publishing. We are not a law firm and do not provide legal advice. We are researchers, writers, and technologists who believe that access to legal information should not depend on being able to afford a consultation.
              </p>
              <p>
                Our editorial process draws on publicly available state workers compensation schedules, published personal injury settlement data, mesothelioma trust fund disclosures, and peer-reviewed legal scholarship. All formulas are documented in plain English on each tool's page. We update our state-specific data annually and note the date of last review on each calculator.
              </p>
              <p>
                We are based in the United States and our tools are designed specifically for US residents navigating the US legal and insurance system.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          {/* How tools work */}
          <section>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4" style={{ background: "var(--gold-pale)", color: "var(--gold)" }}>Methodology</div>
            <h2 className="text-2xl font-bold mb-4">How Our Calculators Work</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--gray-500)" }}>
              <p>
                Each tool uses a simplified version of the formulas that legal professionals actually use. None of our outputs are invented — they are derived from documented legal standards that we cite on each page.
              </p>
              <p>
                <strong style={{ color: "var(--gray-700)" }}>Car Accident Settlement Estimator:</strong> Uses the "multiplier method" — a widely documented approach in personal injury law where economic damages (medical bills + lost wages) are multiplied by a factor of 1.5x–5x based on injury severity, then reduced by your proportional fault.
              </p>
              <p>
                <strong style={{ color: "var(--gray-700)" }}>Workers Compensation Estimator:</strong> Applies each state's statutory formula of two-thirds of average weekly wage, capped at each state's published maximum. State caps are sourced directly from state workers compensation board publications.
              </p>
              <p>
                <strong style={{ color: "var(--gray-700)" }}>Mesothelioma Eligibility Checker:</strong> Uses a weighted scoring model based on the three factors most commonly cited by mesothelioma attorneys as eligibility indicators: type of asbestos exposure, duration of exposure, and confirmation of diagnosis.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          {/* What we are not */}
          <section>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4" style={{ background: "var(--red-light)", color: "var(--red)" }}>Important Limits</div>
            <h2 className="text-2xl font-bold mb-4">What ClaimAdvisor Is Not</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--gray-500)" }}>
              <p>
                ClaimAdvisor is an informational resource. We are not a law firm. We do not represent clients. We do not provide legal advice. Nothing on this site creates an attorney-client relationship.
              </p>
              <p>
                Our estimates are based on general formulas and cannot account for the specific facts, evidence, jurisdiction-level rules, or insurance policy terms that determine actual case outcomes. Two people with identical inputs to our calculator can receive substantially different outcomes in the real legal system.
              </p>
              <p>
                If you have been injured, have a workplace illness, or have been diagnosed with mesothelioma, you should consult a licensed attorney in your state. Most personal injury and workers compensation attorneys offer free initial consultations, and the majority work on contingency — meaning they receive a percentage of your recovery and charge you nothing upfront.
              </p>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="quiz-card p-6">
            <h3 className="font-bold text-base mb-4" style={{ color: "var(--navy)" }}>Quick Facts</h3>
            <ul className="space-y-3 text-sm" style={{ color: "var(--gray-500)" }}>
              {[
                ["Founded", "2023"],
                ["Based in", "United States"],
                ["Tools available", "3"],
                ["States covered", "All 50"],
                ["Cost to use", "Free"],
                ["Data sold", "None"],
                ["Legal advice provided", "No"],
              ].map(([k, v]) => (
                <li key={k as string} className="flex justify-between">
                  <span>{k}</span>
                  <strong style={{ color: "var(--navy)" }}>{v}</strong>
                </li>
              ))}
            </ul>
          </div>

          <AdUnit slot="4001000001" format="sidebar" />

          <div className="quiz-card p-6" style={{ background: "var(--navy)" }}>
            <h3 className="font-bold text-base mb-2 text-white">Have a question?</h3>
            <p className="text-sm text-white/60 mb-4">Use our contact form to reach the editorial team.</p>
            <a href="/contact" className="btn-primary text-sm block text-center">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
}
