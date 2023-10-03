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
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${poppins.className}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={`max-w-5xl w-full text-sm lg:flex ${sintony.className}`}
          >
            <Navbar />
          </div>
          {children}
        </ThemeProvider>
        <footer
        className={`fixed bottom-0 w-full p-4 ${sintony.className}`}
      >
        <Footer />
      </footer>
      </body>
      
    </html>
  );
}
