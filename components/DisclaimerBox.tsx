export default function DisclaimerBox() {
  return (
    <div
      className="rounded-lg p-4 text-sm leading-relaxed"
      style={{ background: "var(--gray-50)", border: "1px solid var(--gray-100)", color: "var(--gray-500)" }}
      role="note"
      aria-label="Legal disclaimer"
    >
      <strong style={{ color: "var(--gray-700)" }}>Important Disclaimer:</strong> The results shown are estimates based on general formulas and publicly available data. They are not legal advice, not a guarantee of any outcome, and should not be relied upon as the basis for any legal decision. Every case is unique. Consult a licensed personal injury or workers compensation attorney in your state before taking any action.
    </div>
  );
}
