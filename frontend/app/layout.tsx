import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PropaShop — Timeless Beauty at Your Step",
    template: "%s | PropaShop",
  },
  description:
    "Curated corporate and smart women's fashion from Marabastad, delivered across Gauteng. Boss Lady, Monday Meeting, Interview Ready collections and more.",
  keywords: [
    "women's fashion",
    "corporate fashion",
    "Marabastad",
    "Gauteng delivery",
    "South Africa fashion",
    "PropaShop",
    "smart casual",
    "African luxury fashion",
  ],
  authors: [{ name: "Zelda Koketso Chokoe" }],
  creator: "PropaShop",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://propashop.co.za",
    siteName: "PropaShop",
    title: "PropaShop — Timeless Beauty at Your Step",
    description:
      "Curated corporate and smart women's fashion from Marabastad, delivered across Gauteng.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PropaShop — Timeless Beauty at Your Step",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PropaShop — Timeless Beauty at Your Step",
    description: "Curated corporate & smart fashion. Gauteng-wide delivery.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#6B1A2E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontFamily: "DM Sans, sans-serif",
              fontSize: "13px",
              background: "#1B2A4A",
              color: "#F5ECD7",
              borderRadius: "2px",
              border: "1px solid #C9A97A",
            },
            success: {
              iconTheme: { primary: "#C9A97A", secondary: "#1B2A4A" },
            },
          }}
        />
      </body>
    </html>
  );
}
