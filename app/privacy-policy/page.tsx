import type { Metadata } from "next";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Privacy Policy — ClaimAdvisor",
  description: "ClaimAdvisor's privacy policy explaining how we collect, use, and protect your data, including our use of Google AdSense, cookies, and third-party analytics.",
};

export default function PrivacyPolicyPage() {
  const updated = "January 1, 2024";

  return (
    <>
      <TrustBar />
      <section style={{ background: "var(--navy)" }} className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white font-display text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: {updated}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="prose-custom space-y-10" style={{ color: "var(--gray-500)", lineHeight: "1.8" }}>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>1. Introduction</h2>
            <p>
              ClaimAdvisor ("we," "us," or "our") operates the website located at claimadvisor.info (the "Site"). This Privacy Policy describes how we collect, use, disclose, and safeguard information when you visit our Site. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.
            </p>
            <p className="mt-3">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will update the "Last updated" date at the top of this page. Your continued use of the Site after any modification constitutes your acceptance of the revised policy.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>2. Information We Collect</h2>
            <h3 className="text-base font-semibold mb-2" style={{ color: "var(--gray-700)" }}>2.1 Information You Provide Voluntarily</h3>
            <p>
              We collect information you voluntarily provide to us when you use our contact form. This includes your name, email address, and the contents of your message. We do not require you to create an account or provide personal information to use any of our calculator tools.
            </p>
            <h3 className="text-base font-semibold mb-2 mt-4" style={{ color: "var(--gray-700)" }}>2.2 Calculator Inputs</h3>
            <p>
              The answers you enter into our legal claim estimation tools (such as medical bill amounts, wages, and health status) are processed entirely in your browser. We do not transmit, store, or log this data on our servers. It is used solely to generate your on-screen estimate.
            </p>
            <h3 className="text-base font-semibold mb-2 mt-4" style={{ color: "var(--gray-700)" }}>2.3 Automatically Collected Information</h3>
            <p>
              When you visit our Site, certain information may be automatically collected by our servers and third-party services, including: IP address, browser type and version, operating system, referring URLs, pages visited, time and date of your visit, and time spent on each page. This information is used in aggregate to understand how visitors use our Site and to improve our content.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>3. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small data files placed on your device by your browser. You can instruct your browser to refuse cookies or notify you when cookies are being sent, though some features of the Site may not function properly if cookies are disabled.
            </p>
            <h3 className="text-base font-semibold mb-2 mt-4" style={{ color: "var(--gray-700)" }}>3.1 Types of Cookies We Use</h3>
            <ul className="space-y-2 ml-4">
              {[
                ["Essential cookies", "Required for the Site to function. These include session cookies and security tokens."],
                ["Analytics cookies", "Used to understand how visitors interact with our Site (e.g., Google Analytics). These cookies collect aggregate, anonymized data."],
                ["Advertising cookies", "Set by Google AdSense and related advertising partners to serve relevant advertisements and measure ad performance. See Section 5 for full details."],
              ].map(([title, desc]) => (
                <li key={title as string} className="flex gap-2 text-sm">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: "var(--gold)" }} />
                  <span><strong style={{ color: "var(--gray-700)" }}>{title}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>4. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="space-y-2 ml-4 mt-3">
              {[
                "Respond to your contact form submissions",
                "Monitor and analyze usage patterns to improve Site content and functionality",
                "Detect, prevent, and address technical issues or fraudulent activity",
                "Comply with legal obligations",
                "Serve relevant advertisements through Google AdSense (see Section 5)",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: "var(--gold)" }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <strong style={{ color: "var(--gray-700)" }}>We do not sell your personal information to third parties.</strong> We do not share your contact form data with advertisers or data brokers.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>5. Google AdSense and Third-Party Advertising</h2>
            <p>
              ClaimAdvisor displays advertisements served by <strong style={{ color: "var(--gray-700)" }}>Google AdSense</strong>, a third-party advertising service operated by Google LLC. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to our Site and other websites across the internet.
            </p>
            <p className="mt-3">
              Google's use of advertising cookies enables it and its partners to serve advertisements to you based on your visit to our Site and/or other websites on the internet. You may opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--navy)" }}>
                Google Ads Settings
              </a>
              . You may also opt out of a third-party vendor's use of cookies for personalized advertising by visiting{" "}
              <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--navy)" }}>
                www.aboutads.info
              </a>.
            </p>
            <p className="mt-3">
              Google's privacy policy, which describes how Google collects and uses data in connection with AdSense, is available at{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--navy)" }}>
                https://policies.google.com/privacy
              </a>.
            </p>
            <p className="mt-3">
              We have no access to or control over the cookies set by Google AdSense. We are not responsible for the privacy practices of Google or any third-party advertisers.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>6. Third-Party Services</h2>
            <p>We may use the following third-party services, each of which has its own privacy policy:</p>
            <ul className="space-y-2 ml-4 mt-3 text-sm">
              {[
                ["Google Analytics", "Website traffic analysis. Opt out at https://tools.google.com/dlpage/gaoptout"],
                ["Google AdSense", "Advertising. Opt out at https://www.google.com/settings/ads"],
                ["Vercel", "Website hosting. Their privacy policy applies to infrastructure-level data handling."],
              ].map(([name, desc]) => (
                <li key={name as string} className="flex gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: "var(--gold)" }} />
                  <span><strong style={{ color: "var(--gray-700)" }}>{name}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>7. Your Privacy Rights</h2>
            <h3 className="text-base font-semibold mb-2" style={{ color: "var(--gray-700)" }}>7.1 California Residents (CCPA)</h3>
            <p>
              If you are a California resident, you have the right to: (a) know what personal information we collect about you; (b) request deletion of your personal information; (c) opt out of the sale of your personal information (we do not sell personal information); and (d) non-discrimination for exercising your privacy rights. To exercise these rights, contact us using the information in Section 10.
            </p>
            <h3 className="text-base font-semibold mb-2 mt-4" style={{ color: "var(--gray-700)" }}>7.2 European Residents (GDPR)</h3>
            <p>
              If you are located in the European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to access, correct, or delete your personal data, and the right to data portability. Our Site is operated from and targeted at residents of the United States. If you access our Site from the EEA, your information may be transferred to and processed in the United States, which may not provide the same level of data protection as your home country.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>8. Data Retention</h2>
            <p>
              Contact form messages are retained for a period of up to 24 months for the purpose of responding to inquiries and maintaining records of editorial communications. After this period, they are deleted. As noted above, calculator inputs are never transmitted to or stored by our servers.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>9. Children's Privacy</h2>
            <p>
              Our Site is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18 without parental consent, we will take steps to delete that information promptly.
            </p>
          </section>

          <hr style={{ borderColor: "var(--gray-100)" }} />

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg text-sm" style={{ background: "var(--gray-50)", border: "1px solid var(--gray-100)" }}>
              <strong style={{ color: "var(--gray-700)" }}>ClaimAdvisor Editorial Team</strong><br />
              Website: <a href="/contact" className="underline" style={{ color: "var(--navy)" }}>claimadvisor.info/contact</a><br />
              For legal requests or data deletion, please include "Privacy Request" in your message subject.
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
