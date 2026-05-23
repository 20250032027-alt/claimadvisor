import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "How Much Is My Legal Claim Worth? Free Estimation Tools — ClaimAdvisor",
  description:
    "Find out what your car accident, workers comp, or mesothelioma claim may be worth. Free calculators built on real legal formulas. No sign-up, no phone calls.",
};

const tools = [
  {
    href: "/car-accident-calculator",
    tag: "Settlement Calculator",
    title: "Car Accident Settlement Estimator",
    desc: "Got hurt in a crash that wasn't your fault? Plug in your medical bills, lost wages, and injury type to see a realistic settlement range — the same math your attorney would start with.",
    time: "~2 min",
    accent: "#0B3D91",
    accentBg: "rgba(11,61,145,0.07)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="11" width="22" height="11" rx="3" stroke="#0B3D91" strokeWidth="1.8"/>
        <path d="M7 11V9a2 2 0 012-2h10a2 2 0 012 2v2" stroke="#0B3D91" strokeWidth="1.8"/>
        <circle cx="9" cy="22" r="2.5" stroke="#0B3D91" strokeWidth="1.6"/>
        <circle cx="19" cy="22" r="2.5" stroke="#0B3D91" strokeWidth="1.6"/>
        <path d="M3 16h5M20 16h5" stroke="#0B3D91" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: "/workers-comp-calculator",
    tag: "Benefit Calculator",
    title: "Workers Compensation Estimator",
    desc: "Hurt on the job? Most people don't know their state caps what they can receive — or how the two-thirds wage formula actually works. This tool shows you the number before you negotiate.",
    time: "~2 min",
    accent: "#1A5C35",
    accentBg: "rgba(26,92,53,0.07)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="9" y="3" width="10" height="5" rx="1.5" stroke="#1A5C35" strokeWidth="1.8"/>
        <rect x="4" y="8" width="20" height="17" rx="3" stroke="#1A5C35" strokeWidth="1.8"/>
        <path d="M4 14h20" stroke="#1A5C35" strokeWidth="1.6"/>
        <path d="M11 14v11M17 14v11" stroke="#1A5C35" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: "/mesothelioma-eligibility",
    tag: "Eligibility Checker",
    title: "Mesothelioma Legal Eligibility",
    desc: "Asbestos diseases show up 20 to 50 years after exposure. If you or a family member worked in construction, shipyards, or manufacturing before 1980, there may be money available — even from companies that no longer exist.",
    time: "~3 min",
    accent: "#7B3500",
    accentBg: "rgba(123,53,0,0.07)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L4 8v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V8L14 3z" stroke="#7B3500" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M10 14l3 3 5-5" stroke="#7B3500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "$52B+",      label: "Remaining in asbestos trust funds" },
  { value: "$20K–$100K", label: "Typical auto accident settlement range" },
  { value: "66.7%",      label: "Of your wage, replaced by workers comp" },
  { value: "3 min",      label: "To complete any tool on this site" },
];

const trustPoints = [
  {
    title: "No sign-up. No phone calls.",
    body: "You don't need to hand over your name, number, or email to use any of these tools. The estimate runs in your browser and stays there.",
  },
  {
    title: "The same math attorneys use.",
    body: "Personal injury lawyers use the multiplier method. Workers comp uses a wage formula set by each state. We use both — and explain every step so you're not guessing.",
  },
  {
    title: "State rules, not national averages.",
    body: "Workers comp benefit caps vary by hundreds of dollars a week depending on where you live. We apply your state's actual published cap, not a rounded national figure.",
  },
  {
    title: "A number to negotiate from.",
    body: "Insurance adjusters make low first offers because most people don't know what their case is worth. Knowing your range before that call changes the conversation.",
  },
];

export default function Home() {
  return (
    <>
      <TrustBar />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 60%, var(--navy-light) 100%)",
        }}
        className="relative overflow-hidden py-24 px-5"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 40%, rgba(200,151,58,0.08) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(18,45,84,0.6) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="section-label">Free Legal Estimation Tools</div>
          <h1
            className="font-display text-white mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700 }}
          >
            Find Out What Your
            <br />
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>
              Legal Claim May Be Worth
            </em>
          </h1>
          <p
            className="mx-auto mb-10 text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.68)", maxWidth: "560px" }}
          >
            Free calculators for car accident settlements, workers compensation benefits,
            and mesothelioma eligibility. Built on real legal formulas.
            No personal information required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/car-accident-calculator" className="btn-primary">
              Start My Claim Check
            </Link>
            <Link href="/about" className="btn-ghost-white">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Leaderboard Ad */}
      <div className="max-w-6xl mx-auto px-5 py-6 flex justify-center">
        <AdUnit slot="1234567890" format="banner" />
      </div>

      {/* Tool Cards */}
      <section className="max-w-6xl mx-auto px-5 py-14">
        <div className="text-center mb-12">
          <div className="section-label">Three Free Tools</div>
          <h2 className="font-display text-3xl font-bold mb-3" style={{ color: "var(--navy)" }}>
            Which situation applies to you?
          </h2>
          <p className="text-base" style={{ color: "var(--gray-600)", maxWidth: 480, margin: "0 auto" }}>
            A short quiz. An honest estimate. No account needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="card p-7 block group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: tool.accentBg }}
              >
                {tool.icon}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: tool.accent }}>
                {tool.tag}
              </div>
              <h3 className="font-display text-lg font-bold mb-3 leading-snug" style={{ color: "var(--navy)" }}>
                {tool.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--gray-600)" }}>
                {tool.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold flex items-center gap-1.5" style={{ color: "var(--gold)" }}>
                  Get My Estimate
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "var(--off-white)", color: "var(--gray-600)" }}>
                  {tool.time}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{ background: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        className="py-12 px-5"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="font-display text-3xl font-bold mb-1.5" style={{ color: "var(--gold-light)" }}>
                {s.value}
              </div>
              <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <div className="section-label">Why Use ClaimAdvisor</div>
          <h2 className="font-display text-3xl font-bold" style={{ color: "var(--navy)" }}>
            Know your number before anyone else does
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {trustPoints.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-6 rounded-xl"
              style={{ background: "var(--off-white)", border: "1px solid var(--gray-100)" }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                style={{ background: "var(--gold-pale)" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 5" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: "var(--navy)", fontFamily: "inherit" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gray-600)" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-content Ad */}
      <div className="max-w-6xl mx-auto px-5 pb-8 flex justify-center">
        <AdUnit slot="2345678901" format="rectangle" />
      </div>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
          borderTop: "3px solid var(--gold)",
        }}
        className="py-16 px-5"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to check your eligibility?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            Pick the tool that fits your situation. Three minutes. No personal information required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/car-accident-calculator" className="btn-primary">Car Accident</Link>
            <Link href="/workers-comp-calculator" className="btn-primary">Workers Comp</Link>
            <Link href="/mesothelioma-eligibility" className="btn-primary">Mesothelioma</Link>
          </div>
        </div>
      </section>
    </>
  );
}
