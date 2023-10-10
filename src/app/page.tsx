'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import TechStack from '@/components/tech-stack';
import LoadingScreen from '@/components/loading-screen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="flex flex-col justify-center items-center mt-20 opacity-0 transform translate-y-10 animate-fadeInSlideUp">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col">
          <h1 className="text-3xl">Welcome to my portfolio website!</h1>
          <h2 className="text-2xl mt-2">
            I'm happy you've visited. I'm{' '}
            <span className="dark:text-violet-400 text-violet-700">
              Giovanni Vicentin
            </span>
            .
          </h2>
          <p className="text-lg text-muted-foreground mt-3 leading-relaxed">
            Outside of coding, I'm a dedicated karate enthusiast. Music fuels my{' '}
            <br /> soul, especially Brazilian rap. I frequently immerse myself
            in books, <br />
            finding wisdom and inspiration in their pages.
          </p>
          <div className="flex mt-5">
            <Link href="/journey">
              <Button className="text-md transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
                Learn more about me
              </Button>
            </Link>

            <Link href="/Giovanni_s_Resume.pdf" download>
              <Button className="text-md ml-1.5 transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
                Download CV
              </Button>
            </Link>
          </div>
          <p className="mt-5 text-muted-foreground text-lg">Find me on:</p>
          <div className="flex mt-5">
            <Link href="https://www.linkedin.com/in/giovannivicentin/">
              {' '}
              <LinkedInLogoIcon className="w-7 h-7 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>

            <Link href="https://github.com/giovannivicentin">
              {' '}
              <GitHubLogoIcon className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
          </div>
          <TechStack />
        </div>

        <Image
          src="/profile.png"
          width={150}
          height={150}
          alt="AI Profile Image"
          className="rounded-full"
        ></Image>
      </div>
    </div>
  );
}
