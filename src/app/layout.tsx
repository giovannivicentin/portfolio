import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Sintony } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
})

const sintony = Sintony({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Giovanni Vicentin - Portifólio Profissional',
  description:
    'Explore o portfólio profissional de Giovanni Vicentin. Descubra sua expertise, projetos e trajetória profissional.',
  authors: [{ name: 'Giovanni Vicentin' }],
  metadataBase: new URL('https://giovannivicentn.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`flex flex-col min-h-screen w-full items-center justify-between bg-background text-foreground ${poppins.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className={`w-full max-w-4xl ${sintony.className}`}>
            <Navbar />
          </header>
          <main className="w-full max-w-full px-4 md:px-0">{children}</main>
          <footer className={`w-full max-w-4xl ${sintony.className}`}>
            <Footer />
          </footer>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
