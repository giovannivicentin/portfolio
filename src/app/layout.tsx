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
  title: 'Giovanni Vicentin - Professional Portfolio',
  description:
    'Explore o portfólio profissional de Giovanni Vicentin. Descubra seus projetos, habilitades e trajetória profissional.',
  authors: { name: 'Giovanni Vicentin', url: 'https://giovannivicentn.com' },
  generator: 'Next.js, React, Tailwind, Node, Vercel, Google Fonts',
  metadataBase: new URL('https://giovannivicentn.com'),
  creator: 'Giovanni Vicentin',
  openGraph: {
    type: 'website',
    url: 'https://www.giovannivicentin.com',
    title: 'Giovanni Vicentin - Professional Portfolio',
    description:
      'Explore o portfólio profissional de Giovanni Vicentin. Descubra seus projetos, habilitades e trajetória profissional.',
    siteName: 'Giovanni Vicentin - Professional Portfolio',
    images: [
      {
        url: '/portfolio-project.png',
      },
    ],
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  twitter: {
    card: 'summary_large_image',
    site: '@gibasvicentin',
    creator: '@gibasvicentin',
    title: 'Giovanni Vicentin - Professional Portfolio',
    description:
      'Explore o portfólio profissional de Giovanni Vicentin. Descubra seus projetos, habilitades e trajetória profissional.',
    images: '/portfolio-project.png',
  },
  category: 'Software Development',
  keywords: [
    'Giovanni Vicentin',
    'Vicentin',
    'Software Engineer',
    'Desenvolvedor de Software',
    'Portfólio',
    'Professional Portfolio',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Projetos',
    'Projects',
    'Resend API',
    'Node.js',
    'Networking',
  ],
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
