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
  title: 'Giovanni Vicentin - Desenvolvedor de Software',
  description:
    'Explore o portfólio profissional de Giovanni Vicentin. Descubra seus projetos, habilitades e trajetória profissional.',
  authors: { name: 'Giovanni Vicentin', url: 'https://giovannivicentn.com' },
  generator: 'Next.js, React, Tailwind, Node, Vercel, Google Fonts',
  metadataBase: new URL('https://giovannivicentn.com'),
  creator: 'Giovanni Vicentin',
  openGraph: {
    type: 'website',
    url: 'https://www.giovannivicentin.com',
    title: 'Giovanni Vicentin - Desenvolvedor de Software',
    description:
      'Explore o portfólio profissional de Giovanni Vicentin. Descubra seus projetos, habilitades e trajetória profissional.',
    siteName: 'Giovanni Vicentin - Desenvolvedor de Software',
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
    title: 'Giovanni Vicentin - Desenvolvedor de Software',
    description:
      'Explore o portfólio profissional de Giovanni Vicentin. Descubra seus projetos, habilitades e trajetória profissional.',
    images: '/portfolio-project.png',
  },
  category: 'Software Development',
  keywords: [
    'Giovanni Vicentin',
    'Vicentin',
    'Giovanni',
    'Giovani Vicentin',
    'Giovanni Vicentim',
    'Giovani Vicentim',
    'Portfólio',
    'Portfolio',
    'Portifolio',
    'Professional Portfolio',
    'Portfolio Profissional',
    'Software Engineer',
    'Software Developer',
    'Desenvolvedor de Software',
    'Full Stack Developer',
    'Front-End Developer',
    'Back-End Developer',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Projetos',
    'Projects',
    'Resend API',
    'Node.js',
    'Networking',
    'JavaScript',
    'Python',
    'TypeScript',
    'HTML',
    'CSS',
    'SASS',
    'Docker',
    'Java',
    'Kubernetes',
    'CI/CD',
    'Git',
    'GitHub',
    'GitLab',
    'Bitbucket',
    'Jira',
    'Confluence',
    'Slack',
    'Trello',
    'VS Code',
    'IntelliJ IDEA',
    'PyCharm',
    'WebStorm',
    'Visual Studio',
    'Programming',
    'Coding',
    'Algorithms',
    'Data Structures',
    'Computer Science',
    'Software Architecture',
    'Software Development',
    'Software Design',
    'Software Testing',
    'Software Deployment',
    'Software Maintenance',
    'Software Documentation',
    'Software Development Tools',
    'Software Development Frameworks',
    'Software Development Libraries',
    'Software Development Languages',
    'Software Development Technologies',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Computing',
    'AWS',
    'Azure',
    'Google Cloud',
    'Artificial Intelligence',
    'API Development',
    'Agile Methodology',
    'Freelance Software Developer',
    'React Developer',
    'Node.js Developer',
    'Software Engineer Jobs',
    'Tech Stack',
    'GitHub Portfolio',
    'SQL Developer',
    'Remote Software Developer',
    'Entry Level Software Developer',
    'Software Developer Tools',
    'Open Source Projects',
    'Programming Tutorials',
    'Software Engineering Principles',
    'Software Development Life Cycle',
    'Brazilian Software Developer',
    'Brazilian Software Engineer',
    'São Paulo Software Development',
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
