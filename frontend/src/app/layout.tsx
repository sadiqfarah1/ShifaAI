import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shifa AI - Reduce Hospital Readmissions with AI-Powered Care Transition",
  description: "Reduce costly hospital readmissions by 40% with automated follow-ups, AI triage, and real-time care team alerts. Trusted by 200+ healthcare organizations.",
  keywords: "hospital readmissions, AI healthcare, care transition, patient monitoring, healthcare AI, readmission reduction",
  authors: [{ name: "Shifa AI" }],
  creator: "Shifa AI",
  publisher: "Shifa AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shifa-ai-tau.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shifa AI - Reduce Hospital Readmissions with AI-Powered Care Transition",
    description: "Reduce costly hospital readmissions by 40% with automated follow-ups, AI triage, and real-time care team alerts.",
    url: "https://shifa-ai-tau.vercel.app",
    siteName: "Shifa AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shifa AI - AI-Powered Care Transition Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shifa AI - Reduce Hospital Readmissions with AI-Powered Care Transition",
    description: "Reduce costly hospital readmissions by 40% with automated follow-ups, AI triage, and real-time care team alerts.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0d9488" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
