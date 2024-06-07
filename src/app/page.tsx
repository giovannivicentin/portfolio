import Link from 'next/link';
import Image from "next/legacy/image";
import { Button } from '@/components/ui/button';
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import TechStack from '@/components/tech-stack';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 sm:mt-20 opacity-0 transform translate-y-10 animate-fadeInSlideUp">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col mr-2">
          <div className="sm:items-center sm:text-center max-w-4xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-xl sm:text-justify leading-relaxed">
              Bem-vindo ao meu portfólio!
            </h1>
            <h2 className="text-xl sm:text-2xl mt-7 sm:mt-4 max-w-xl sm:text-justify leading-relaxed">
              Fico feliz com a sua visita. Meu nome é<br />
              <span className="dark:text-violet-400 text-violet-700 animate-fadeIn">
                Giovanni Vicentin
              </span>
              .
            </h2>
            <p className="text-lg text-muted-foreground mt-7 sm:mt-4 max-w-xl text-justify leading-relaxed">
              Além da programação, dedico-me ao karatê shotokan, que equilibra
              mente e corpo. A música, especialmente o rap brasileiro, energiza
              e inspira meu dia a dia. Sou também apaixonado por leitura, sempre
              em busca de novos conhecimentos e visões de mundo através dos
              livros.
            </p>
          </div>
          <div className="mt-7 sm:mt-4 flex flex-col md:flex-row">
            <Link href="/journey" prefetch>
              <Button className="text-md md:text-lg w-full md:w-auto transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
                Saiba Mais Sobre Mim
              </Button>
            </Link>
            <a
              href="/Giovanni_Vicentin_CV.pdf"
              download="Giovanni_Vicentin_CV.pdf"
            >
              <Button className="text-md md:text-lg mt-4 md:mt-0 md:ml-4 w-full md:w-auto transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
                Download do Currículo
              </Button>
            </a>
          </div>

          <p className="mt-5 text-muted-foreground text-lg">Me encontre em:</p>
          <div className="flex mt-5">
            <Link
              href="https://www.linkedin.com/in/giovannivicentin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogoIcon className="w-7 h-7 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
            <Link
              href="https://github.com/giovannivicentin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
          </div>
          <TechStack />
        </div>
        <Image
          src="/profile.png"
          width={150}
          height={150}
          alt="Profile Image"
          className="rounded-full mx-auto mb-10 sm:mx-0 sm:mb-0 border-collapse border-2 border-primary/50 animate-fadeIn"
          priority
        ></Image>
      </div>
    </div>
  );
}
