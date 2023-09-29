import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Giovanni Vicentin',
  description: 'Giovanni Vicentin personal website'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
