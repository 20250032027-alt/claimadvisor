"use client";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import DisclaimerBox from "@/components/DisclaimerBox";

type Answers = {
  exposureType: string;
  yearsExposure: string;
  diagnosis: string;
  age: string;
};

const TOTAL_STEPS = 4;

export default function MesotheliomaQuiz() {
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

  const fields: (keyof Answers)[] = ["exposureType", "yearsExposure", "diagnosis", "age"];
  const canAdvance = !!answers[fields[step - 1]];

  if (done) {
    // Score calculation
    let score = 0;
    if (answers.exposureType === "occupational") score += 3;
    else if (answers.exposureType === "secondary") score += 2;
    else if (answers.exposureType === "environmental") score += 1;

    if (answers.yearsExposure === "10+") score += 3;
    else if (answers.yearsExposure === "5-10") score += 2;
    else if (answers.yearsExposure === "1-5") score += 1;

    if (answers.diagnosis === "confirmed") score += 5;
    else if (answers.diagnosis === "suspected") score += 2;
    else if (answers.diagnosis === "symptoms") score += 1;

    const result: "strong" | "moderate" | "unlikely" =
      score >= 7 ? "strong" : score >= 3 ? "moderate" : "unlikely";

    const resultData = {
      strong: {
        label: "Strong Eligibility Indicated",
        desc: "Based on your answers, your situation strongly aligns with the criteria attorneys use to evaluate mesothelioma and asbestos-related compensation claims. A confirmed or suspected diagnosis combined with documented occupational exposure is precisely the profile for which asbestos trust funds and lawsuits are designed.",
        action: "Speak with a Mesothelioma Specialist Now",
        cls: "result-strong",
      },
      moderate: {
        label: "Moderate Eligibility — Consultation Recommended",
        desc: "Your answers suggest possible eligibility, but additional information is needed to determine whether a claim is viable. Attorneys who specialize in asbestos cases offer free consultations and can review your work history, medical records, and exposure details at no cost or obligation to you.",
        action: "Get a Free Eligibility Consultation",
        cls: "result-moderate",
      },
      unlikely: {
        label: "Eligibility Is Unclear At This Time",
        desc: "Based on your answers, the clearest eligibility factors — occupational exposure and a confirmed diagnosis — are not strongly present. This does not necessarily mean you have no claim. If you believe you were exposed to asbestos, a free attorney consultation can review your history in more detail.",
        action: "Discuss Your History with an Attorney",
        cls: "result-unlikely",
      },
    }[result];

    return (
      <div className="quiz-card p-8">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: "var(--green-light)", color: "var(--green)" }}>
            Assessment Complete
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">Your Mesothelioma Eligibility Result</h2>
        </div>

        <div className={`rounded-xl p-6 mb-6 ${resultData.cls}`}>
          <div className="font-display text-xl font-bold mb-3">{resultData.label}</div>
          <p className="text-sm leading-relaxed opacity-90">{resultData.desc}</p>
        </div>

        <div className="rounded-lg p-4 mb-6 text-sm" style={{ background: "var(--gold-pale)", border: "1px solid var(--gold)", color: "var(--navy)" }}>
          <strong>Time matters in mesothelioma cases.</strong> Statutes of limitations in most states run 1–3 years from diagnosis. If you or a family member has been diagnosed, consulting an attorney as soon as possible preserves your legal options.
        </div>

        <div className="mb-6"><DisclaimerBox /></div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.martindale.com/find-attorneys/mesothelioma-attorney/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center flex-1 text-sm"
          >
            {resultData.action}
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
          question="What best describes your history of asbestos exposure?"
          subtitle="Select the option that most closely matches your situation."
          options={[
            { label: "Direct occupational exposure — I worked with or around asbestos-containing materials (construction, shipyard, manufacturing, military, etc.)", value: "occupational" },
            { label: "Secondary / household exposure — A family member brought asbestos fibers home on their work clothes", value: "secondary" },
            { label: "Environmental exposure — I lived near an asbestos mine, mill, or heavily contaminated area", value: "environmental" },
            { label: "I am not aware of any asbestos exposure", value: "none" },
          ]}
          selected={answers.exposureType}
          onSelect={(v) => pick("exposureType", v)}
        />
      )}

      {step === 2 && (
        <QuizStep
          question="Approximately how many years were you exposed to asbestos?"
          subtitle="Include the full period of employment or living situation that involved exposure."
          options={[
            { label: "Less than 1 year", value: "under1" },
            { label: "1–5 years", value: "1-5" },
            { label: "5–10 years", value: "5-10" },
            { label: "More than 10 years", value: "10+" },
            { label: "Not applicable — no known exposure", value: "none" },
          ]}
          selected={answers.yearsExposure}
          onSelect={(v) => pick("yearsExposure", v)}
        />
      )}

      {step === 3 && (
        <QuizStep
          question="What is your current health and diagnosis status?"
          options={[
            { label: "Confirmed mesothelioma, asbestosis, or asbestos-related lung cancer diagnosis", value: "confirmed" },
            { label: "Suspected diagnosis — tests ongoing or biopsy results pending", value: "suspected" },
            { label: "No diagnosis, but I have respiratory symptoms (shortness of breath, chest pain, persistent cough)", value: "symptoms" },
            { label: "No symptoms and no diagnosis at this time", value: "none" },
          ]}
          selected={answers.diagnosis}
          onSelect={(v) => pick("diagnosis", v)}
        />
      )}

      {step === 4 && (
        <QuizStep
          question="What is the claimant's current age?"
          subtitle="This is used to assess claim urgency and statute of limitations risk."
          options={[
            "Under 45",
            "45–54",
            "55–64",
            "65–74",
            "75 or older",
          ]}
          selected={answers.age}
          onSelect={(v) => pick("age", v)}
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
          {step === TOTAL_STEPS ? "Check My Eligibility" : "Next"}
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
