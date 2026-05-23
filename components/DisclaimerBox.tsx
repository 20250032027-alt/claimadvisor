export default function DisclaimerBox() {
  return (
    <div
      className="rounded-lg p-4 text-sm leading-relaxed"
      style={{
        background: "var(--off-white)",
        border: "1px solid var(--gray-100)",
        color: "var(--gray-600)",
      }}
      role="note"
      aria-label="Legal disclaimer"
    >
      <strong style={{ color: "var(--gray-800)" }}>This is an estimate, not legal advice.</strong>{" "}
      The number above is a starting point based on general formulas — not a prediction of what
      you'll receive. Real settlements depend on evidence quality, insurance policy limits,
      your state's specific rules, and facts no calculator can account for. Talk to a licensed
      attorney before making any decisions about your claim.
    </div>
  );
}
