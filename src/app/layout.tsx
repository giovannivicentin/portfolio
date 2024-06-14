import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
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
  title: 'Giovanni Vicentin - Desenvolvedor de Software',
  description:
    'Explore o portfólio profissional de Giovanni Vicentin. Descubra seus projetos, habilitades e trajetória profissional.',
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
      <Head>
        <meta
          name="description"
          content="Explore o portfólio profissional de Giovanni Vicentin. Descubra seus projetos, habilidades e trajetória profissional."
        />
        <meta
          name="keywords"
          content="Giovanni Vicentin, desenvolvedor de software, portfólio, Next.js, React, Tailwind CSS, Resend API, Node.js, projetos, networking"
        />
        <meta name="author" content="Giovanni Vicentin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="pt-BR" />
        <link rel="canonical" href="https://www.giovannivicentin.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Giovanni Vicentin - Desenvolvedor de Software"
        />
        <meta
          property="og:description"
          content="Explore o portfólio profissional de Giovanni Vicentin. Descubra seus projetos, habilidades e trajetória profissional."
        />
        <meta property="og:image" content="/profile.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:site_name" content="Giovanni Vicentin" />
        <meta property="og:url" content="https://www.giovannivicentin.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Giovanni Vicentin - Desenvolvedor de Software"
        />
        <meta
          property="twitter:description"
          content="Explore o portfólio profissional de Giovanni Vicentin. Descubra seus projetos, habilidades e trajetória profissional."
        />
        <meta property="twitter:image" content="/portfolio-project.jpeg" />
        <meta property="twitter:site" content="@gibasvicentin" />
        <meta property="twitter:creator" content="@gibasvicentin" />
        <meta
          property="twitter:url"
          content="https://www.giovannivicentin.com"
        />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />

        <link rel="canonical" href="https://www.giovannivicentin.com" />
      </Head>

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
