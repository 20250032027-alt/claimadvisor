"use client";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import DisclaimerBox from "@/components/DisclaimerBox";

type Answers = {
  injuryType: string;
  bodyPart: string;
  weeksOff: string;
  weeklyWage: string;
  state: string;
};

const TOTAL_STEPS = 5;

// State-specific max weekly benefits (2024 approximations)
const stateMaxBenefit: Record<string, number> = {
  California: 1619,
  Texas: 1099,
  Florida: 1197,
  "New York": 1145,
  Illinois: 1897,
};

const stateMin: Record<string, number> = {
  California: 242,
  Texas: 165,
  Florida: 20,
  "New York": 275,
  Illinois: 284,
};

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export default function WorkersCompQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [done, setDone] = useState(false);

  function pick(field: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    else setDone(true);
  }

  function back() {
    if (step > 1) setStep((s) => s - 1);
  }

  function reset() {
    setAnswers({});
    setStep(1);
    setDone(false);
  }

  const fields: (keyof Answers)[] = ["injuryType", "bodyPart", "weeksOff", "weeklyWage", "state"];
  const canAdvance = !!answers[fields[step - 1]];

  if (done) {
    const wage = parseFloat(answers.weeklyWage || "0");
    const weeks = parseFloat(answers.weeksOff || "0");
    const state = answers.state || "Other";
    const maxBenefit = stateMaxBenefit[state] ?? 1200;
    const minBenefit = stateMin[state] ?? 150;
    const rawBenefit = wage * 0.667;
    const weeklyBenefit = Math.min(Math.max(rawBenefit, minBenefit), maxBenefit);
    const totalClaim = weeklyBenefit * weeks;

    return (
      <div className="quiz-card p-8">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: "var(--green-light)", color: "var(--green)" }}>
            Estimate Complete
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">Your Estimated Workers Comp Benefits</h2>
          <p className="text-sm" style={{ color: "var(--gray-500)" }}>Based on {state} rules — for informational purposes only</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl p-6 text-center" style={{ background: "var(--navy)" }}>
            <div className="text-xs mb-1" style={{ color: "var(--gold-light)" }}>Estimated Weekly Benefit</div>
            <div className="font-display text-3xl font-bold text-white">{formatCurrency(weeklyBenefit)}</div>
            <div className="text-xs mt-1 text-white/50">per week</div>
          </div>
          <div className="rounded-xl p-6 text-center" style={{ background: "var(--navy-light)" }}>
            <div className="text-xs mb-1" style={{ color: "var(--gold-light)" }}>Estimated Total Value</div>
            <div className="font-display text-3xl font-bold text-white">{formatCurrency(totalClaim)}</div>
            <div className="text-xs mt-1 text-white/50">over {weeks} weeks</div>
          </div>
        </div>

        <div className="rounded-lg p-4 mb-6 text-sm" style={{ background: "var(--gray-50)", border: "1px solid var(--gray-100)" }}>
          <div className="font-semibold mb-2" style={{ color: "var(--navy)" }}>How this was calculated</div>
          <div className="space-y-1 text-xs" style={{ color: "var(--gray-500)" }}>
            <div className="flex justify-between"><span>Your average weekly wage:</span><span className="font-medium">{formatCurrency(wage)}</span></div>
            <div className="flex justify-between"><span>Benefit rate (66.7%):</span><span className="font-medium">{formatCurrency(rawBenefit)}</span></div>
            <div className="flex justify-between"><span>{state} maximum weekly cap:</span><span className="font-medium">{formatCurrency(maxBenefit)}</span></div>
            <div className="flex justify-between font-semibold" style={{ color: "var(--navy)", borderTop: "1px solid var(--gray-100)", paddingTop: "0.5rem" }}>
              <span>Applied weekly benefit:</span><span>{formatCurrency(weeklyBenefit)}</span>
            </div>
          </div>
        </div>

        <div className="mb-6"><DisclaimerBox /></div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.martindale.com/find-attorneys/workers-compensation-attorney/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center flex-1"
          >
            Speak With a Workers Comp Attorney
          </a>
          <button onClick={reset} className="btn-secondary flex-1">Start Over</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-card p-8">
      <ProgressBar current={step} total={TOTAL_STEPS} />

      {step === 1 && (
        <QuizStep
          question="What type of work injury did you sustain?"
          options={[
            "Slip, trip, or fall",
            "Repetitive motion or overuse injury",
            "Struck by object or equipment",
            "Motor vehicle accident on the job",
            "Occupational illness or disease",
            "Machinery or equipment accident",
            "Other workplace injury",
          ]}
          selected={answers.injuryType}
          onSelect={(v) => pick("injuryType", v)}
        />
      )}

      {step === 2 && (
        <QuizStep
          question="Which part of your body was primarily injured?"
          options={[
            "Back or spine",
            "Shoulder or arm",
            "Hand, wrist, or fingers",
            "Knee or leg",
            "Foot or ankle",
            "Head or neck",
            "Multiple body parts",
          ]}
          selected={answers.bodyPart}
          onSelect={(v) => pick("bodyPart", v)}
        />
      )}

      {step === 3 && (
        <QuizStep
          question="How many weeks have you been (or expect to be) unable to work?"
          subtitle="Include past time missed and any future recovery weeks your doctor has estimated."
          options={[
            { label: "Less than 2 weeks", value: "1" },
            { label: "2–4 weeks", value: "3" },
            { label: "1–3 months (4–13 weeks)", value: "8" },
            { label: "3–6 months (13–26 weeks)", value: "20" },
            { label: "6–12 months (26–52 weeks)", value: "39" },
            { label: "More than 1 year (52+ weeks)", value: "78" },
          ]}
          selected={answers.weeksOff}
          onSelect={(v) => pick("weeksOff", v)}
        />
      )}

      {step === 4 && (
        <NumberStep
          question="What is your average weekly gross wage?"
          subtitle="Divide your annual salary by 52, or use your weekly pay stub amount before deductions."
          value={answers.weeklyWage || ""}
          onChange={(v) => pick("weeklyWage", v)}
          prefix="$"
        />
      )}

      {step === 5 && (
        <QuizStep
          question="In which state did your workplace injury occur?"
          subtitle="Workers comp rates, caps, and rules differ significantly by state."
          options={["California", "Texas", "Florida", "New York", "Illinois", "Other US state"]}
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
          {step === TOTAL_STEPS ? "Calculate My Benefits" : "Next"}
        </button>
      </div>
    </div>
  );
}

function QuizStep({ question, subtitle, options, selected, onSelect }: {
  question: string; subtitle?: string;
  options: (string | { label: string; value: string })[];
  selected?: string; onSelect: (v: string) => void;
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
            <button key={val} className={`option-btn ${selected === val ? "selected" : ""}`} onClick={() => onSelect(val)}>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function NumberStep({ question, subtitle, value, onChange, prefix }: {
  question: string; subtitle?: string; value: string; onChange: (v: string) => void; prefix?: string;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold mb-1">{question}</h2>
      {subtitle && <p className="text-sm mb-5" style={{ color: "var(--gray-500)" }}>{subtitle}</p>}
      {!subtitle && <div className="mb-5" />}
      <div className="relative">
        {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold" style={{ color: "var(--gray-500)" }}>{prefix}</span>}
        <input
          type="number" min="0" value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter amount"
          className="w-full rounded-lg border text-base py-3 pr-4 focus:outline-none focus:ring-2"
          style={{ paddingLeft: prefix ? "2rem" : "1rem", borderColor: "var(--gray-100)", fontFamily: "DM Sans, sans-serif" }}
        />
      </div>
    </div>
  );
}
