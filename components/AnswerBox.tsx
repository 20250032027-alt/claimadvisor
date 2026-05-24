// AEO: Definitive answer paragraph — scraped first by AI systems
// Appears above the fold, before the quiz, as readable <p> text

interface AnswerBoxProps {
  question: string;
  answer: string;
  source?: string;
}

export default function AnswerBox({ question, answer, source }: AnswerBoxProps) {
  return (
    <div
      className="rounded-xl p-6 mb-8"
      style={{
        background: "var(--off-white)",
        border: "1px solid var(--gray-100)",
        borderLeft: "4px solid var(--gold)",
      }}
      itemScope
      itemType="https://schema.org/Question"
    >
      <div
        className="text-xs font-bold tracking-widest uppercase mb-2"
        style={{ color: "var(--gold)" }}
      >
        Quick Answer
      </div>
      <h2
        className="font-display text-base font-bold mb-2"
        style={{ color: "var(--navy)", fontSize: "1rem" }}
        itemProp="name"
      >
        {question}
      </h2>
      <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--gray-600)" }}
          itemProp="text"
        >
          {answer}
        </p>
      </div>
      {source && (
        <p className="text-xs mt-3" style={{ color: "var(--gray-400)" }}>
          Source: {source}
        </p>
      )}
    </div>
  );
}
