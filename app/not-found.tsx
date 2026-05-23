import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for does not exist. Return to ClaimAdvisor to use our free legal claim estimation tools.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center px-5 text-center"
      style={{ minHeight: "60vh", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div
        className="text-8xl font-display font-bold mb-4"
        style={{ color: "var(--gray-100)", fontFamily: "Lora, Georgia, serif" }}
      >
        404
      </div>
      <h1
        className="font-display text-3xl font-bold mb-4"
        style={{ color: "var(--navy)", fontFamily: "Lora, Georgia, serif" }}
      >
        Page not found
      </h1>
      <p
        className="text-base leading-relaxed mb-8 max-w-md"
        style={{ color: "var(--gray-600)" }}
      >
        The page you were looking for does not exist or has moved.
        Use one of our free tools below to check your legal claim eligibility.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <Link href="/car-accident-calculator" className="btn-primary">
          Car Accident Calculator
        </Link>
        <Link href="/workers-comp-calculator" className="btn-primary">
          Workers Comp Estimator
        </Link>
        <Link href="/mesothelioma-eligibility" className="btn-primary">
          Mesothelioma Eligibility
        </Link>
      </div>
      <Link
        href="/"
        className="text-sm font-medium"
        style={{ color: "var(--gold)" }}
      >
        Back to homepage &rarr;
      </Link>
    </div>
  );
}
