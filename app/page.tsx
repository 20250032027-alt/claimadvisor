import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Free Legal Claims Eligibility Tools — Car Accident, Workers Comp, Mesothelioma",
  description: "Use ClaimAdvisor's free, confidential tools to find out if you may qualify for legal compensation. Estimate car accident settlements, workers comp benefits, and mesothelioma eligibility in minutes.",
};

const tools = [
  {
    href: "/car-accident-calculator",
    title: "Car Accident Settlement Estimator",
    desc: "Were you injured in a car accident that wasn't your fault? Estimate your potential settlement range based on your medical bills, lost wages, and injury severity. Takes about 2 minutes.",
    tag: "Settlement Calculator",
    color: "#0B3D91",
  },
  {
    href: "/workers-comp-calculator",
    title: "Workers Compensation Estimator",
    desc: "Injured on the job? This tool estimates your weekly workers comp benefit and total claim value based on your state, wage, and time off work. Most states follow a standard formula.",
    tag: "Benefit Calculator",
    color: "#1A5C35",
  },
  {
    href: "/mesothelioma-eligibility",
    title: "Mesothelioma Legal Eligibility Checker",
    desc: "Exposure to asbestos can lead to mesothelioma decades later. Find out whether your history qualifies you to speak with a specialist about potential compensation through lawsuits or trust funds.",
    tag: "Eligibility Checker",
    color: "#6B2D00",
  },
];

const stats = [
  { value: "$52B+", label: "Paid out in mesothelioma trust funds to date" },
  { value: "$20,000–$100,000", label: "Median auto accident settlement range" },
  { value: "66.7%", label: "Of your average wage covered by workers comp in most states" },
  { value: "3 min", label: "Average time to complete any of our eligibility tools" },
];

export default function Home() {
  return (
    <>
      <TrustBar />

      {/* Hero */}
      <section style={{ background: "var(--navy)" }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(200,151,58,0.15)", color: "var(--gold)" }}
          >
            Free Legal Estimation Tools
          </div>
          <h1 className="text-white font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Find Out If You May Qualify<br />
            <span style={{ color: "var(--gold)" }}>for Legal Compensation</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            ClaimAdvisor provides free, no-obligation tools to help you understand whether your situation — a car accident, workplace injury, or asbestos exposure — may entitle you to financial compensation under US law.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/car-accident-calculator" className="btn-primary text-base">
              Start My Claim Check
            </Link>
            <Link href="/about" className="btn-secondary text-base" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Ad — leaderboard */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-center">
        <AdUnit slot="1234567890" format="banner" />
      </div>

      {/* Tool cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Three Free Eligibility Tools</h2>
          <p style={{ color: "var(--gray-500)" }} className="max-w-xl mx-auto">
            Each tool walks you through a short series of questions and gives you an honest, data-driven estimate — with no personal information required.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="quiz-card p-8 block group hover:shadow-xl transition-shadow"
            >
              <div
                className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-4"
                style={{ background: `${tool.color}15`, color: tool.color }}
              >
                {tool.tag}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
                {tool.title}
              </h3>
              <p style={{ color: "var(--gray-500)" }} className="text-sm leading-relaxed mb-5">
                {tool.desc}
              </p>
              <span className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
                Get My Estimate &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "var(--gray-50)", borderTop: "1px solid var(--gray-100)", borderBottom: "1px solid var(--gray-100)" }} className="py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="font-display text-2xl font-bold mb-1" style={{ color: "var(--navy)" }}>{s.value}</div>
              <div className="text-xs leading-snug" style={{ color: "var(--gray-500)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why use section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Use ClaimAdvisor?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "No sign-up. No phone calls.",
              body: "You don't need to provide your name, phone number, or email to use any of our calculators. All estimates are generated instantly in your browser.",
            },
            {
              title: "Built on real legal formulas.",
              body: "Our estimates use the same general multiplier and wage-replacement formulas that attorneys and insurance adjusters reference. We explain every calculation in plain English.",
            },
            {
              title: "State-specific where it matters.",
              body: "Workers compensation rates vary significantly by state. Our estimator accounts for the rules in the five most common states, and applies the national standard for all others.",
            },
            {
              title: "A starting point, not a verdict.",
              body: "We don't tell you what you'll receive — no tool can. We give you enough context to walk into a free attorney consultation knowing your situation and your options.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5" style={{ background: "var(--gold-pale)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7L5.5 10L11.5 4" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: "var(--navy)", fontFamily: "inherit" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-content ad */}
      <div className="max-w-6xl mx-auto px-4 pb-8 flex justify-center">
        <AdUnit slot="2345678901" format="rectangle" />
      </div>

      {/* CTA */}
      <section style={{ background: "var(--navy)" }} className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Check Your Eligibility?</h2>
          <p className="text-white/70 mb-8">
            Pick the tool that fits your situation. It takes about three minutes and requires no personal information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/car-accident-calculator" className="btn-primary">Car Accident</Link>
            <Link href="/workers-comp-calculator" className="btn-primary">Workers Comp</Link>
            <Link href="/mesothelioma-eligibility" className="btn-primary">Mesothelioma</Link>
          </div>
        </div>
      </section>
    </>
  );
}
