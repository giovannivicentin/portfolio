import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Sintony } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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
  title: "Giovanni Vicentin's Portfolio",
  description: 'Giovanni Vicentin personal website',
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
      <body className="flex flex-col flex-1 w-full items-center">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={`w-full max-w-5xl text-sm mt-6 ${sintony.className}`}>
            <Navbar />
          </div>
          <main className="flex-1 w-full max-w-5xl px-4 md:px-0">
            {children}
          </main>
        </ThemeProvider>
        <footer className={`w-full max-w-5xl mb-6 ${sintony.className}`}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
