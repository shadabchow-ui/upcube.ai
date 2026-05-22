import type { Metadata } from "next";
import { CartProvider } from "components/cart/cart-context";
import { Navbar } from "components/layout/navbar";
import {
  canonicalBaseUrl,
  DEFAULT_OG_IMAGE,
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_TITLE,
} from "lib/upcube-seo/metadata";
import { ReactNode, Suspense } from "react";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";
import "./styles/upcube-type-system.css";
import "./styles/upcube-news.css";
import "./styles/upcube-portal.css";
import "./styles/upcube-universal-header.css";
import "./styles/upcube-longform.css";
import "./styles/upcube-account.css";
import "./styles/upcube-account.css";

const upcubeInter = localFont({
  src: [
    {
      path: "./fonts/inter/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "./fonts/inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
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
    {
      path: "./fonts/geist/Geist-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-upcube-ui",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(canonicalBaseUrl),
  title: DEFAULT_SITE_TITLE,
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
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider>
          <Suspense fallback={null}>
            <Navbar />
            <main>
              {children}
              <Toaster closeButton />
            </main>
          </Suspense>
        </CartProvider>
      </body>
    </html>
  );
}
