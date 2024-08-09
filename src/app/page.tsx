import TechStack from '@/components/tech-stack'
import { Button } from '@/components/ui/button'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 sm:mt-20">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col mr-2">
          <div className="sm:items-center text-center max-w-4xl w-full">
            <h1 className="text-xl sm:text-2xl md:text-4xl max-w-xl sm:text-justify leading-relaxed animate-fade-right">
              Olá, eu sou
              <span className="dark:text-violet-400 text-violet-700 animate-fade-right delay-200">
                {` Giovanni Vicentin`}
              </span>
            </h1>
            <div>
              <h2 className="text-lg mt-4 max-w-xl text-start  leading-relaxed animate-fade-right delay-100 md:w-[30rem]">
                Criando código para capacitar a inovação digital nas empresas,
                garantindo experiências de usuário de alta qualidade no{' '}
                <Link
                  href="https://g.co/kgs/tNyh6S5"
                  className="hover:underline hover:dark:text-violet-400 hover:text-violet-700"
                >
                  Sam&rsquo;s Club
                </Link>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl text-start leading-relaxed animate-fade-right delay-300">
              Quando não estou codificando ou desenvolvendo um projeto pessoal,
              provavelmente estou indo a eventos, fazendo um café de qualidade e
              tentando me manter em forma para viver um pouco mais.
            </p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-4 animate-fade-right delay-400">
            <Link href="/journey" about="Link to /journey page" prefetch>
              <Button className="text-md md:text-lg w-full md:w-auto transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
                Saiba Mais Sobre Mim
              </Button>
            </Link>
            <a
              href="/giovanni-vicentin-resume.pdf"
              aria-label="Download do Currículo"
            >
              <Button className="text-md md:text-lg md:mt-0 w-full md:w-auto transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
                Download do Currículo
              </Button>
            </a>
          </div>

          <p className="mt-5 text-muted-foreground text-lg animate-fade-right delay-500">
            Me encontre em:
          </p>
          <div className="flex mt-5 animate-fade-right delay-600 gap-4">
            <Link
              href="https://www.linkedin.com/in/giovannivicentin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile of Giovanni Vicentin"
            >
              <LinkedInLogoIcon className="w-8 h-8 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
            <Link
              href="https://github.com/giovannivicentin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile of Giovanni Vicentin"
            >
              <GitHubLogoIcon className="w-8 h-8 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
          </div>
          <TechStack />
        </div>
        <Image
          src="/profile.png"
          width={150}
          height={150}
          alt="Profile Image"
          className="rounded-full mx-auto mb-4 sm:mx-0 sm:mb-0 border-collapse border-2 border-primary/50 animate-fade-left"
          priority
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        ></Image>
      </div>
    </div>
  )
}
