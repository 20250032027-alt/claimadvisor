import type { Metadata } from "next";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Terms of Use — ClaimAdvisor",
  description: "Read ClaimAdvisor's terms of use, including disclaimers that our tools are informational only and do not constitute legal advice.",
};

export default function TermsPage() {
  const updated = "January 1, 2024";
  return (
    <>
      <TrustBar />
      <section style={{ background: "var(--navy)" }} className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white font-display text-4xl font-bold mb-3">Terms of Use</h1>
          <p className="text-white/60 text-sm">Last updated: {updated}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="space-y-10" style={{ color: "var(--gray-500)", lineHeight: "1.8" }}>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>1. Acceptance of Terms</h2>
            <p>
              By accessing or using claimadvisor.info (the "Site"), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the Site. We reserve the right to modify these terms at any time, and your continued use of the Site following any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>2. No Legal Advice — Informational Purposes Only</h2>
            <div className="p-4 rounded-lg mb-4 font-medium text-sm" style={{ background: "var(--red-light)", color: "var(--red)", border: "1px solid #FCA5A5" }}>
              ClaimAdvisor does not provide legal advice. The tools, content, estimates, and information on this Site are for general informational and educational purposes only. Nothing on this Site constitutes legal advice or creates an attorney-client relationship.
            </div>
            <p>
              The estimation tools on this Site use general mathematical formulas derived from publicly available legal information. The outputs are illustrative estimates based on commonly used methodologies. They are not predictions, guarantees, or assessments of any specific legal matter.
            </p>
            <p className="mt-3">
              Legal outcomes depend on the specific facts and circumstances of each individual case, the applicable state and federal laws, the quality of evidence, the performance of legal counsel, the decisions of judges and juries, and many other unpredictable factors. Two individuals who input identical data into our calculators may receive substantially different outcomes in actual legal proceedings.
            </p>
            <p className="mt-3">
              You should always consult with a licensed attorney in your state before making any decision based on information found on this Site. Most personal injury and workers compensation attorneys offer free consultations and work on contingency, meaning no upfront cost to you.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>3. No Attorney-Client Relationship</h2>
            <p>
              Use of this Site does not create, and is not intended to create, an attorney-client relationship between you and ClaimAdvisor or any attorney. ClaimAdvisor is not a law firm and does not employ attorneys. No communications sent through this Site will be treated as privileged or confidential in any legal proceeding.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>4. Accuracy and Currency of Information</h2>
            <p>
              We make reasonable efforts to ensure the accuracy of the information and formulas on this Site. However, laws, regulations, and state-specific rules change frequently. We do not warrant that the information on this Site is current, accurate, complete, or free from errors. You should verify all information independently before relying on it.
            </p>
            <p className="mt-3">
              The state-specific data used in our Workers Compensation Estimator is reviewed and updated annually. We note the date of last review on that page. For the most current benefit rates and caps, consult your state's official workers compensation board website.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, ClaimAdvisor, its owners, editors, contributors, and technology providers shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of, or inability to use, the Site or the information it contains. This includes but is not limited to damages arising from reliance on any estimate, calculation, or information provided by the Site.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>6. Third-Party Links and Advertising</h2>
            <p>
              This Site contains links to third-party websites, including attorney directories and legal resource sites. These links are provided for your convenience. We do not endorse, control, or take responsibility for the content or privacy practices of any third-party website. The presence of an advertisement on this Site does not constitute an endorsement of the advertiser's products or services.
            </p>
            <p className="mt-3">
              This Site displays advertisements served by Google AdSense. We are not responsible for the content of those advertisements. Clicking an advertisement takes you to a third-party website governed by that party's terms and privacy policy.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>7. Intellectual Property</h2>
            <p>
              All content on this Site, including text, tool logic, design, graphics, and code, is owned by or licensed to ClaimAdvisor and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this Site without prior written permission.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>8. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located within the United States.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>9. Contact</h2>
            <p>
              Questions about these Terms of Use may be sent to us via our{" "}
              <a href="/contact" className="underline" style={{ color: "var(--navy)" }}>contact form</a>.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
