"use client";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import DisclaimerBox from "@/components/DisclaimerBox";
import EmailCapture from "@/components/EmailCapture";
import Link from "next/link";

type Answers = {
  accidentType: string;
  fault: string;
  severity: string;
  medBills: string;
  lostWages: string;
  state: string;
};

const TOTAL_STEPS = 6;

const multipliers: Record<string, [number, number]> = {
  minor: [1.5, 2.5],
  moderate: [2, 3.5],
  serious: [3, 4.5],
  severe: [3.5, 5],
};

const faultReduction: Record<string, number> = {
  "0": 1,
  "10": 0.9,
  "25": 0.75,
  "50": 0.5,
  "75": 0.25,
};

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export default function CarAccidentQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [done, setDone] = useState(false);

  function pick(field: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    else calculate();
  }

  function back() {
    if (step > 1) setStep((s) => s - 1);
  }

  function calculate() {
    setDone(true);
  }

  function reset() {
    setAnswers({});
    setStep(1);
    setDone(false);
  }

  const currentField: keyof Answers = (
    ["accidentType", "fault", "severity", "medBills", "lostWages", "state"] as const
  )[step - 1];

  const canAdvance = !!answers[currentField];

  if (done) {
    const medBills = parseFloat(answers.medBills || "0");
    const lostWages = parseFloat(answers.lostWages || "0");
    const [low, high] = multipliers[answers.severity || "minor"];
    const faultFactor = faultReduction[answers.fault || "0"];
    const lowEst = Math.round(((medBills * low) + lostWages) * faultFactor / 500) * 500;
    const highEst = Math.round(((medBills * high) + lostWages) * faultFactor / 500) * 500;

    return (
      <div className="quiz-card p-8">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: "var(--green-light)", color: "var(--green)" }}>
            Estimate Complete
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">Your Estimated Settlement Range</h2>
          <p className="text-sm" style={{ color: "var(--gray-500)" }}>Based on the multiplier method. Not a guarantee, but a real starting point.</p>
        </div>

        <div className="rounded-xl p-8 text-center mb-6" style={{ background: "var(--navy)", color: "white" }}>
          <div className="text-sm mb-2" style={{ color: "var(--gold-light)" }}>Estimated Range</div>
          <div className="font-display text-3xl md:text-4xl font-bold">
            {formatCurrency(Math.max(lowEst, 1000))} to {formatCurrency(Math.max(highEst, 2000))}
          </div>
          <div className="text-xs mt-2 opacity-60">Before attorney fees and litigation costs</div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="rounded-lg p-3" style={{ background: "var(--gray-50)" }}>
            <div className="text-xs mb-1" style={{ color: "var(--gray-500)" }}>Medical Bills</div>
            <div className="font-semibold text-sm">{formatCurrency(medBills)}</div>
          </div>
          <div className="rounded-lg p-3" style={{ background: "var(--gray-50)" }}>
            <div className="text-xs mb-1" style={{ color: "var(--gray-500)" }}>Lost Wages</div>
            <div className="font-semibold text-sm">{formatCurrency(parseFloat(answers.lostWages || "0"))}</div>
          </div>
          <div className="rounded-lg p-3" style={{ background: "var(--gray-50)" }}>
            <div className="text-xs mb-1" style={{ color: "var(--gray-500)" }}>Fault Factor</div>
            <div className="font-semibold text-sm">{(faultFactor * 100).toFixed(0)}%</div>
          </div>
        </div>

        <div className="mb-6">
          <DisclaimerBox />
        </div>

        {/* Item 1: Lawyer threshold message */}
        {highEst >= 10000 && (
          <div
            className="rounded-xl p-4 mb-6 text-sm leading-relaxed"
            style={{ background: "rgba(11,31,58,0.04)", border: "1.5px solid var(--navy)", color: "var(--navy)" }}
          >
            <strong>At this estimate, getting an attorney is almost certainly worth it.</strong>{" "}
            Personal injury attorneys take car accident cases on contingency — no upfront cost.
            Studies of injury claims consistently show represented claimants recover 3 to 4 times
            more on average, even after the attorney's fee. A free consultation takes 20 minutes
            and tells you whether you have a case worth pursuing.
          </div>
        )}
        {highEst < 10000 && highEst > 0 && (
          <div
            className="rounded-xl p-4 mb-6 text-sm leading-relaxed"
            style={{ background: "var(--off-white)", border: "1px solid var(--gray-100)", color: "var(--gray-600)" }}
          >
            Your estimate is on the lower end. For smaller claims, some people negotiate directly
            with the insurer. That said, a free attorney consultation costs you nothing and can
            tell you if there's more value in your case than the formula shows.
          </div>
        )}

        {/* Item 4: Email capture */}
        <div className="mb-6">
          <EmailCapture
            toolName="Car Accident Settlement Estimator"
            estimateLabel={`${formatCurrency(Math.max(lowEst, 1000))} to ${formatCurrency(Math.max(highEst, 2000))}`}
            estimateValue={`Low: ${formatCurrency(Math.max(lowEst, 1000))} | High: ${formatCurrency(Math.max(highEst, 2000))} | Medical bills: ${formatCurrency(medBills)} | Lost wages: ${formatCurrency(parseFloat(answers.lostWages || "0"))} | Fault factor: ${(faultFactor * 100).toFixed(0)}%`}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.martindale.com/find-attorneys/personal-injury-attorney/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center flex-1"
          >
            Get a Free Attorney Consultation
          </a>
          <button onClick={reset} className="btn-secondary flex-1">
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-card p-8">
      <ProgressBar current={step} total={TOTAL_STEPS} />

      {step === 1 && (
        <QuizStep
          question="What type of accident were you involved in?"
          options={[
            "Rear-end collision",
            "Side-impact (T-bone)",
            "Head-on collision",
            "Hit by a distracted driver",
            "Multi-vehicle pileup",
            "Other / not sure",
          ]}
          selected={answers.accidentType}
          onSelect={(v) => pick("accidentType", v)}
        />
      )}

      {step === 2 && (
        <QuizStep
          question="Approximately what percentage of fault was yours?"
          subtitle="Be honest, overestimating your innocence leads to inaccurate estimates."
          options={[
            { label: "0%, The accident was entirely the other driver's fault", value: "0" },
            { label: "About 10%, I may have contributed slightly", value: "10" },
            { label: "About 25%, I share some responsibility", value: "25" },
            { label: "About 50%, Fault was roughly equal", value: "50" },
            { label: "More than 50%, I was mostly at fault", value: "75" },
          ]}
          selected={answers.fault}
          onSelect={(v) => pick("fault", v)}
        />
      )}

      {step === 3 && (
        <QuizStep
          question="How would you describe your injuries?"
          options={[
            { label: "Minor, Soft tissue, whiplash, minor bruising (healed fully)", value: "minor" },
            { label: "Moderate, Broken bone, stitches, several weeks of recovery", value: "moderate" },
            { label: "Serious, Surgery required, months of recovery or lasting effects", value: "serious" },
            { label: "Severe, Permanent disability, paralysis, or traumatic brain injury", value: "severe" },
          ]}
          selected={answers.severity}
          onSelect={(v) => pick("severity", v)}
        />
      )}

      {step === 4 && (
        <NumberStep
          question="What are your total medical bills so far?"
          subtitle="Include emergency room, hospital stays, physical therapy, prescriptions, and any future costs you've been quoted."
          field="medBills"
          value={answers.medBills || ""}
          onChange={(v) => pick("medBills", v)}
          prefix="$"
        />
      )}

      {step === 5 && (
        <NumberStep
          question="How much income have you lost due to your injuries?"
          subtitle="Include time you missed from work during recovery and any future lost earnings if your ability to work has changed."
          field="lostWages"
          value={answers.lostWages || ""}
          onChange={(v) => pick("lostWages", v)}
          prefix="$"
        />
      )}

      {step === 6 && (
        <QuizStep
          question="Which state did the accident occur in?"
          subtitle="Fault and damages rules vary by state."
          options={[
            "California", "Texas", "Florida", "New York", "Pennsylvania",
            "Illinois", "Ohio", "Georgia", "North Carolina", "Michigan",
            "Other US state",
          ]}
          selected={answers.state}
          onSelect={(v) => pick("state", v)}
        />
      )}

      <div className="flex justify-between mt-8">
        {step > 1 ? (
          <button onClick={back} className="btn-secondary">Back</button>
        ) : (
          <div />
        )}
        <button
          onClick={next}
          disabled={!canAdvance}
          className="btn-primary"
          style={{ opacity: canAdvance ? 1 : 0.4, cursor: canAdvance ? "pointer" : "not-allowed" }}
        >
          {step === TOTAL_STEPS ? "Calculate My Estimate" : "Next"}
        </button>
      </div>
    </div>
  );
}

function QuizStep({
  question, subtitle, options, selected, onSelect,
}: {
  question: string;
  subtitle?: string;
  options: (string | { label: string; value: string })[];
  selected?: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold mb-1">{question}</h2>
      {subtitle && <p className="text-sm mb-5" style={{ color: "var(--gray-500)" }}>{subtitle}</p>}
      {!subtitle && <div className="mb-5" />}
      <div className="flex flex-col gap-3">
        {options.map((opt) => {
          const val = typeof opt === "string" ? opt : opt.value;
          const label = typeof opt === "string" ? opt : opt.label;
          return (
            <button
              key={val}
              className={`option-btn ${selected === val ? "selected" : ""}`}
              onClick={() => onSelect(val)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function NumberStep({
  question, subtitle, field, value, onChange, prefix,
}: {
  question: string;
  subtitle?: string;
  field: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold mb-1">{question}</h2>
      {subtitle && <p className="text-sm mb-5" style={{ color: "var(--gray-500)" }}>{subtitle}</p>}
      {!subtitle && <div className="mb-5" />}
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold" style={{ color: "var(--gray-500)" }}>
            {prefix}
          </span>
        )}
        <input
          type="number"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter amount"
          className="input-field"
          style={{ paddingLeft: prefix ? "2rem" : "1rem" }}
          aria-label={question}
        />
      </div>
      <p className="text-xs mt-2" style={{ color: "var(--gray-300)" }}>Enter 0 if not applicable.</p>
    </div>
  );
}
