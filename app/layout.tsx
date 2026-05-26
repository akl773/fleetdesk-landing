import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const siteName = "FleetDecks";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fleetdecks.com";
const title = "FleetDecks | White-label car rental operations software";
const description =
  "FleetDecks gives car rental operators one white-label dashboard for bookings, fleet operations, WhatsApp leads, and customer handoffs.";
const socialImage = "/fleetdecks-og.svg";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/fleetdecks-logo.svg`,
      description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: siteName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "FleetDecks",
    "white-label car rental software",
    "car rental operations",
    "fleet management software",
    "WhatsApp booking assistant",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/fleetdecks-icon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: [{ url: "/fleetdecks-icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/fleetdecks-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title,
    description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "FleetDecks white-label car rental operations dashboard",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "FleetDecks white-label car rental operations dashboard",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5ef" },
    { media: "(prefers-color-scheme: dark)", color: "#07110d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
