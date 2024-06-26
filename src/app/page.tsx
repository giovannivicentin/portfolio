import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import TechStack from '@/components/tech-stack'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 sm:mt-20">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col mr-2">
          <div className="sm:items-center text-center max-w-4xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-xl sm:text-justify leading-relaxed animate-fade-right">
              Bem-vindo ao meu portfólio!
            </h1>
            <div>
              <h2 className="text-xl sm:text-2xl mt-4 max-w-xl sm:text-justify leading-relaxed animate-fade-right delay-100 md:w-[30rem]">
                Fico feliz com a sua visita. Meu nome é
                <span className="dark:text-violet-400 text-violet-700 animate-fade-right delay-200">
                  {` Giovanni Vicentin`}
                </span>
                .
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl text-justify leading-relaxed animate-fade-right delay-300">
              Além da programação, dedico-me ao karatê shotokan, que equilibra
              mente e corpo. A música, especialmente o rap brasileiro, energiza
              e inspira meu dia a dia. Sou também apaixonado por leitura, sempre
              em busca de novos conhecimentos e visões de mundo através dos
              livros.
            </p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row md:gap-4 animate-fade-right delay-400">
            <Link href="/journey" prefetch>
              <Button className="text-md md:text-lg w-full md:w-auto transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
                Saiba Mais Sobre Mim
              </Button>
            </Link>
            <a
              href="/Giovanni_Vicentin_CV.pdf"
              download="Giovanni_Vicentin_CV.pdf"
            >
              <Button className="text-md md:text-lg mt-4 md:mt-0 w-full md:w-auto transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
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
            >
              <LinkedInLogoIcon className="w-8 h-8 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
            <Link
              href="https://github.com/giovannivicentin"
              target="_blank"
              rel="noopener noreferrer"
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
