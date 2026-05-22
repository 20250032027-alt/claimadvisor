import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)" }} className="text-white/70 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="font-display font-bold text-lg text-white mb-3">
              Claim<span style={{ color: "var(--gold)" }}>Advisor</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              Free, confidential legal claim estimation tools for US residents. We provide information only — not legal advice. Always consult a licensed attorney for your specific situation.
            </p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Tools</div>
            <ul className="space-y-2">
              <li><Link href="/car-accident-calculator" className="hover:text-white transition-colors">Car Accident Calculator</Link></li>
              <li><Link href="/workers-comp-calculator" className="hover:text-white transition-colors">Workers Comp Estimator</Link></li>
              <li><Link href="/mesothelioma-eligibility" className="hover:text-white transition-colors">Mesothelioma Eligibility</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Site</div>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} ClaimAdvisor. All rights reserved.</p>
          <p className="text-white/40 text-xs max-w-lg">
            <strong className="text-white/50">Disclaimer:</strong> ClaimAdvisor provides general information only and does not constitute legal advice. Estimates are illustrative and not guarantees of outcome. Consult a licensed attorney for advice specific to your case.
          </p>
        </div>
      </div>
    </footer>
  );
}
