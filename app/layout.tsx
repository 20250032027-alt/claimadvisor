import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.claimadvisor.info"),
  title: {
    default: "ClaimAdvisor — Free Legal Claims Eligibility Tools",
    template: "%s | ClaimAdvisor",
  },
  description:
    "Free, confidential tools to estimate your legal claim value. Car accident settlements, workers compensation benefits, and mesothelioma eligibility — no obligation, no personal data sold.",
  keywords: [
    "legal claim calculator",
    "settlement estimator",
    "workers compensation",
    "mesothelioma eligibility",
    "car accident settlement",
  ],
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "ClaimAdvisor", locale: "en_US" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7492388540350253" />
        {/* Fonts loaded via link tag — works reliably on Vercel at runtime */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
