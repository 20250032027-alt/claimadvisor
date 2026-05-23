import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.claimadvisor.info"),
  title: {
    default: "ClaimAdvisor, Free Legal Claims Eligibility Tools",
    template: "%s | ClaimAdvisor",
  },
  description:
    "Free, confidential tools to estimate your legal claim value. Car accident settlements, workers compensation benefits, and mesothelioma eligibility, no obligation, no personal data sold.",
  keywords: [
    "legal claim calculator",
    "settlement estimator",
    "workers compensation",
    "mesothelioma eligibility",
    "car accident settlement",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "ClaimAdvisor",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClaimAdvisor, Free Legal Claim Estimation Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ClaimAdvisor",
  url: "https://www.claimadvisor.info",
  description:
    "Free legal claim estimation tools for US residents including car accident settlements, workers compensation benefits, and mesothelioma eligibility.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClaimAdvisor",
  url: "https://www.claimadvisor.info",
  logo: "https://www.claimadvisor.info/og-image.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://www.claimadvisor.info/contact",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7492388540350253" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics — replace G-XXXXXXXXXX with your Measurement ID after setup */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
