import type { Metadata } from "next";
import { CartProvider } from "components/cart/cart-context";
import { Navbar } from "components/layout/navbar";
import { EthenTalk } from "components/ethen-talk/ethen-talk";
import { ThemeInitScript } from "components/upcube-theme/theme-init-script";
import {
  canonicalBaseUrl,
  DEFAULT_OG_IMAGE,
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_TITLE,
} from "lib/upcube-seo/metadata";
import { ReactNode, Suspense } from "react";
import localFont from "next/font/local";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";
import "./styles/upcube-type-system.css";
import "./styles/upcube-portal.css";
import "./styles/upcube-universal-header.css";

const upcubeInter = localFont({
  src: [
    {
      path: "./fonts/inter/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-upcube-inter",
  display: "swap",
});

const upcubeGeist = localFont({
  src: [
    {
      path: "./fonts/geist/Geist-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-upcube-ui",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(canonicalBaseUrl),
  title: {
    default: DEFAULT_SITE_TITLE,
    template: "%s | UpcubeAI",
  },
  description: DEFAULT_SITE_DESCRIPTION,
  alternates: {
    canonical: canonicalBaseUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: DEFAULT_SITE_TITLE,
    description: DEFAULT_SITE_DESCRIPTION,
    url: canonicalBaseUrl,
    siteName: "UpcubeAI",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SITE_TITLE,
    description: DEFAULT_SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-EZLC0KG6GX";

function GAScript() {
  if (process.env.NEXT_PUBLIC_ENABLE_GA !== "true" || !gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${upcubeInter.variable} ${upcubeGeist.variable}`}
    >
      <ThemeInitScript />
      <body className="bg-[var(--up-body-bg)] text-[var(--up-body-text)] selection:bg-[var(--up-selection-bg)] selection:text-[var(--up-selection-text)]">
        <CartProvider>
          <Suspense fallback={null}>
            <Navbar />
            <main>
              {children}
              <Toaster closeButton />
              <GAScript />
            </main>
            <EthenTalk />
          </Suspense>
        </CartProvider>
      </body>
    </html>
  );
}
