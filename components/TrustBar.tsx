export default function TrustBar() {
  const signals = [
    "Free, No Obligation",
    "100% Confidential",
    "No Personal Data Sold",
    "Information Only — No Sign-Up Required",
  ];

  return (
    <div style={{ background: "var(--navy-light)" }} className="py-3 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {signals.map((s) => (
            <span key={s} className="trust-badge" style={{ color: "var(--gold-light)" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="6" fill="var(--gold)" opacity="0.25"/>
                <path d="M3.5 6L5.2 7.8L8.5 4.5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
