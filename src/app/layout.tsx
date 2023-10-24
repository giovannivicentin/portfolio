import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Sintony } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
});

const sintony = Sintony({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Giovanni Vicentin - Professional Portfolio',
  description:
    'Explore the professional portfolio of Giovanni Vicentin. Discover his expertise, projects, and professional journey in the industry.',
  authors: [{ name: 'Giovanni Vicentin' }],
  metadataBase: new URL('https://giovannivicentn.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`flex min-h-screen flex-col items-center justify-between bg-background text-foreground md:px-24 ${poppins.className}`}
    >
      <Head>
        <meta name="author" content="Giovanni Vicentin" />
        <meta
          name="description"
          content="Explore the professional portfolio of Giovanni Vicentin. Discover his expertise, projects, and professional journey in the industry."
        />
        <meta
          name="keywords"
          content="giovanni vicentin, portfolio, portifolio, giovanni vicentin portifolio, giovanni vicentn portfolio, Giovanni Vicentin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Giovanni Vicentin - Professional Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the professional portfolio of Giovanni Vicentin. Discover his expertise, projects, and professional journey in the industry."
        />
        <meta property="og:image" content="public\logo.png" />
        <meta property="og:url" content="https://www.giovannivicentin.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Giovanni Vicentin's Portfolio" />
        <meta
          name="twitter:description"
          content="Giovanni Vicentin - Professional Portfolio"
        />
        <meta name="twitter:image" content="public\logo.png" />
        <meta name="twitter:url" content="https://www.giovannivicentin.com" />
      </Head>
      <body className="flex flex-col flex-1 w-full items-center">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={`w-full max-w-4xl text-sm mt-6 ${sintony.className}`}>
            <Navbar />
          </div>
          <main className="flex-1 w-full max-w-5xl px-4 md:px-0">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <footer className={`w-full max-w-4xl mb-6 ${sintony.className}`}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
