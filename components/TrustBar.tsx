export default function TrustBar() {
  const signals = [
    "Free, No Obligation",
    "100% Confidential",
    "No Personal Data Sold",
    "No Sign-Up Required",
  ];
  return (
    <div style={{ background: "var(--navy-light)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-6xl mx-auto px-5 py-2.5">
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-1">
          {signals.map((s) => (
            <span key={s} className="trust-badge">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="flex-shrink-0">
                <circle cx="6.5" cy="6.5" r="6.5" fill="rgba(200,151,58,0.22)"/>
                <path d="M4 6.5L5.8 8.3L9 5" stroke="var(--gold-light)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
