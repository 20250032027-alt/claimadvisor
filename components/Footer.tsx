import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-6xl mx-auto px-5 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">

          {/* Brand col */}
          <div className="md:col-span-4">
            <div className="font-display font-bold text-xl text-white mb-3 tracking-tight">
              Claim<span style={{ color: "var(--gold)" }}>Advisor</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)", maxWidth: 280 }}>
              Free, confidential legal claim estimation tools for US residents. Informational only. Not legal advice.
            </p>
            <div
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ background: "rgba(200,151,58,0.12)", color: "var(--gold-light)", border: "1px solid rgba(200,151,58,0.2)" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <circle cx="5" cy="5" r="4" stroke="var(--gold-light)" strokeWidth="1.2"/>
                <path d="M3 5l1.5 1.5L7 3.5" stroke="var(--gold-light)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              No data sold. Ever.
            </div>
          </div>

          {/* Tools col */}
          <div className="md:col-span-3 md:col-start-6">
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Tools
            </div>
            <ul className="space-y-2.5">
              {[
                ["/car-accident-calculator", "Car Accident Calculator"],
                ["/workers-comp-calculator", "Workers Comp Estimator"],
                ["/mesothelioma-eligibility", "Mesothelioma Eligibility"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site col */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Site
            </div>
            <ul className="space-y-2.5">
              {[
                ["/about", "About Us"],
                ["/contact", "Contact"],
                ["/privacy-policy", "Privacy Policy"],
                ["/terms", "Terms of Use"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            &copy; {new Date().getFullYear()} ClaimAdvisor. All rights reserved.
          </p>
          <p className="text-xs max-w-lg" style={{ color: "rgba(255,255,255,0.3)" }}>
            <strong style={{ color: "rgba(255,255,255,0.4)" }}>Disclaimer:</strong> ClaimAdvisor provides general information only and does not constitute legal advice. Estimates are illustrative. Consult a licensed attorney for advice specific to your case.
          </p>
        </div>
      </div>
    </footer>
  );
}
