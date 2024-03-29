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
  title: 'Giovanni Vicentin - Portifólio Profissional',
  description:
    'Explore o portfólio profissional de Giovanni Vicentin. Descubra sua expertise, projetos e trajetória profissional.',
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
      lang="pt-br"
      className={`flex min-h-screen flex-col items-center justify-between bg-background text-foreground md:px-24 overflow-x-hidden ${poppins.className}`}
    >
      <Head>
        <meta name="author" content="Giovanni Vicentin" />
        <meta
          name="description"
          content="Explore o portfólio profissional de Giovanni Vicentin. Descubra sua expertise, projetos e trajetória profissional."
        />
        <meta
          name="keywords"
          content="giovanni vicentin, portfolio, portifolio, giovanni vicentin portifolio, giovanni vicentin portfolio, Giovanni Vicentin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Giovanni Vicentin - Portifólio Profissional"
        />
        <meta
          property="og:description"
          content="Explore o portfólio profissional de Giovanni Vicentin. Descubra sua expertise, projetos e trajetória profissional."
        />
        <meta property="og:image" content="public\logo.png" />
        <meta property="og:url" content="https://www.giovannivicentin.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Giovanni Vicentin's Portfolio" />
        <meta
          name="twitter:description"
          content="Giovanni Vicentin - Portifólio Profissional"
        />
        <meta name="twitter:image" content="public\logo.png" />
        <meta name="twitter:url" content="https://www.giovannivicentin.com" />
      </Head>
      <body className="flex flex-col flex-1 w-full items-center scrollbar-thin scrollbar-thumb-muted-foreground/40 scrollbar-track-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header
            className={`w-full max-w-full sm:max-w-4xl text-sm mt-6 ${sintony.className}`}
          >
            <Navbar />
          </header>
          <main className="flex-1 w-full max-w-full px-4 md:px-0">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <footer
          className={`w-full max-w-full sm:max-w-4xl mb-6 ${sintony.className}`}
        >
          <Footer />
        </footer>
      </body>
    </html>
  );
}
