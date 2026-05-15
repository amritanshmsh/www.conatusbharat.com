import type { Metadata, Viewport } from 'next';
import { Antonio, Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const antonio = Antonio({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Conatus Bharat — Understanding begins here',
  description:
    'Most EdTech tells children what to learn. Conatus Bharat builds tools that understand how they learn.',
  keywords: 'education, NEP, learning, Wonder, ConatusBharat, India, schools',
  openGraph: {
    title: 'Conatus Bharat — Understanding begins here',
    description:
      'Most EdTech tells children what to learn. We built Wonder to understand how they learn.',
    url: 'https://www.conatusbharat.com',
    siteName: 'Conatus Bharat',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.conatusbharat.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#5B6BFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${antonio.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-sans bg-paper text-ink antialiased"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
