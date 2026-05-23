import type { Metadata } from "next";
import TrustBar from "@/components/TrustBar";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "About ClaimAdvisor, How the Tools Work and Why We Built Them",
  description: "ClaimAdvisor is a free legal information resource for US residents. Learn who runs it, how the calculators work, and what they can and can't tell you.",
};

export default function AboutPage() {
  return (
    <>
      <TrustBar />

      <section style={{ background: "var(--navy)" }} className="py-14 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white font-display text-4xl font-bold mb-4">About ClaimAdvisor</h1>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
            Free tools that give you the numbers before you talk to anyone who has a financial interest in your case.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">

          <section>
            <div className="section-label">Why This Exists</div>
            <h2 className="text-2xl font-bold mb-4">The problem we're trying to fix</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--gray-600)" }}>
              <p>
                Insurance adjusters make first offers every day. Most injured people receive
                one in their lifetime. That information gap is not accidental, it's how
                low settlements happen.
              </p>
              <p>
                Attorney websites are full of contact forms, not information. Legal aid
                organizations are stretched thin. Most people who've just been hurt in a
                crash or told they can't return to work have no practical way to figure out
                what their situation is actually worth before they talk to someone who
                profits from the answer.
              </p>
              <p>
                ClaimAdvisor exists to close that gap a little. The formulas we use aren't
                secret, attorneys use them, adjusters use them, and anyone willing to dig
                through state workers comp board publications can find the rate tables.
                We just put it in one place and made it usable without a law degree.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <div className="section-label">Who We Are</div>
            <h2 className="text-2xl font-bold mb-4">Who runs this</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--gray-600)" }}>
              <p>
                ClaimAdvisor was built by a small team with backgrounds in legal research,
                consumer information publishing, and web development. We are not a law firm.
                Nobody here will represent you or give you legal advice. That boundary is
                intentional, our job is information, not counsel.
              </p>
              <p>
                We're based in the US and the tools are designed specifically for the US
                legal system. The workers comp rates come directly from each state's
                workers compensation board publications. The car accident multiplier ranges
                come from published personal injury literature. The mesothelioma eligibility
                scoring reflects the criteria that appear consistently in asbestos litigation
                attorneys' published intake criteria.
              </p>
              <p>
                We update state-specific data annually. When a state adjusts its weekly
                maximum benefit, we update the calculator. The date of last review is noted
                in the README for anyone who wants to check.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <div className="section-label">Methodology</div>
            <h2 className="text-2xl font-bold mb-4">How each calculator works</h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--gray-600)" }}>
              <div>
                <strong style={{ color: "var(--gray-800)" }}>Car Accident Settlement Estimator</strong>
                <p className="mt-1">
                  Takes your medical bills plus lost wages, multiplies by a factor based on
                  injury severity (1.5× for minor injuries, up to 5× for permanent disability),
                  then reduces the total by your fault percentage. This is the multiplier
                  method, the standard starting point in personal injury negotiations.
                  It produces a range, not a single number, because the multiplier is
                  genuinely negotiated case by case.
                </p>
              </div>
              <div>
                <strong style={{ color: "var(--gray-800)" }}>Workers Compensation Estimator</strong>
                <p className="mt-1">
                  Applies your state's statutory formula: two-thirds of your average weekly
                  wage, capped at the state maximum. We use published 2024 caps for
                  California, Texas, Florida, New York, and Illinois. All other states use
                  the national average cap. The weekly benefit is then multiplied by your
                  estimated weeks off work to show total claim value.
                </p>
              </div>
              <div>
                <strong style={{ color: "var(--gray-800)" }}>Mesothelioma Eligibility Checker</strong>
                <p className="mt-1">
                  Scores your situation across three factors: type of asbestos exposure
                  (occupational scores highest), duration of exposure, and diagnosis status
                  (confirmed diagnosis adds the most points). The output, Strong, Moderate,
                  or Unlikely, reflects how closely your situation matches the intake
                  criteria that asbestos litigation attorneys publish for free consultations.
                  It is not a legal determination.
                </p>
              </div>
            </div>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <div className="section-label" style={{ background: "var(--red-light)", color: "var(--red)" }}>Limits</div>
            <h2 className="text-2xl font-bold mb-4">What this site cannot do</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--gray-600)" }}>
              <p>
                ClaimAdvisor is not a law firm and does not give legal advice. Nothing here
                creates an attorney-client relationship. The estimates cannot account for
                evidence quality, specific insurance policy terms, the particular judge or
                jurisdiction, or the dozens of other case-specific facts that move a
                real settlement number up or down.
              </p>
              <p>
                Two people with identical inputs can have very different outcomes in court.
                The tools give you a reasonable starting point, not a prediction.
              </p>
              <p>
                If you've been injured, use the estimate to walk into a free attorney
                consultation informed. Most personal injury and workers comp attorneys work
                on contingency, which means no upfront cost. The consultation costs you
                nothing and tells you more than any calculator can.
              </p>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="quiz-card p-6">
            <h3 className="font-bold text-sm mb-4" style={{ color: "var(--navy)", fontFamily: "inherit" }}>Quick facts</h3>
            <ul className="space-y-3 text-sm" style={{ color: "var(--gray-600)" }}>
              {[
                ["Founded", "2023"],
                ["Based in", "United States"],
                ["Tools", "3"],
                ["States covered", "All 50"],
                ["Cost", "Free"],
                ["Data sold", "None"],
                ["Legal advice", "No"],
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
            <h3 className="font-bold text-sm mb-2 text-white" style={{ fontFamily: "inherit" }}>Questions or corrections?</h3>
            <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
              If you spot outdated data or have a question about how the tools work, use the contact form.
            </p>
            <a href="/contact" className="btn-primary text-sm block text-center">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
}
