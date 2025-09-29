import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: {
    default: "Shifa AI – Pilot-Ready AI Platform to Reduce 30-Day Readmissions",
    template: "%s | Shifa AI"
  },
  description: "Shifa AI helps hospitals and care teams reduce preventable readmissions with automated follow-ups, AI triage, and nurse alerts — all using de-identified data during early pilots.",
  keywords: [
    "hospital readmissions",
    "AI healthcare", 
    "care transition",
    "patient monitoring",
    "healthcare AI",
    "readmission reduction",
    "post-discharge care",
    "nurse alerts",
    "AI triage",
    "pilot program",
    "de-identified data"
  ],
  authors: [{ name: "Shifa AI" }],
  creator: "Shifa AI",
  publisher: "Shifa AI",
  metadataBase: new URL("https://shifa-ai-tau.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shifa-ai-tau.vercel.app",
    siteName: "Shifa AI",
    title: "Shifa AI – Pilot-Ready AI Platform to Reduce 30-Day Readmissions",
    description: "Shifa AI helps hospitals and care teams reduce preventable readmissions with automated follow-ups, AI triage, and nurse alerts — all using de-identified data during early pilots.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shifa AI - AI-Powered Care Transition Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shifa AI – Pilot-Ready AI Platform to Reduce 30-Day Readmissions",
    description: "Shifa AI helps hospitals and care teams reduce preventable readmissions with automated follow-ups, AI triage, and nurse alerts — all using de-identified data during early pilots.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0D9488" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
