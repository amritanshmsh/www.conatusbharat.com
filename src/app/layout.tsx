import type { Metadata } from "next";
import { Inter as font } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Loader from "./Loader";

// import Footer from "@/components/Footer";

const inter = font({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: "ConatusBharat - Own Tomorrow",
  description: "Explore the future of education with ConatusBharat, where we empower the next generation to own tomorrow.",
  keywords: "education, innovation, future, learning, ConatusBharat",
  openGraph: {
    title: "ConatusBharat - Own Tomorrow",
    description: "Explore the future of education with ConatusBharat, where we empower the next generation to own tomorrow.",
    url: "https://www.conatusbharat.com",
    siteName: "ConatusBharat",
    images: [
      {
        url: "https://www.conatusbharat.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "ConatusBharat Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.conatusbharat.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00b8ea" />
        <link rel="canonical" href="https://www.conatusbharat.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ConatusBharat",
            url: "https://www.conatusbharat.com",
            logo: "https://www.conatusbharat.com/logo.png",
            sameAs: [
              "https://www.facebook.com/ConatusBharat",
              "https://twitter.com/ConatusBharat",
            ],
          })}
        </script>
      </Head>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <Loader /> */}
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
