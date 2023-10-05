import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-start mt-20">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col">
            <h1 className="text-3xl mt-1.5">
              Welcome to my portfolio website!
            </h1>
            <h2 className="text-2xl mt-1.5">
              I'm happy you've visited. I'm{' '}
              <span className="dark:text-violet-400 text-violet-700 border-b border-muted">
                Giovanni Vicentin
              </span>
              .
            </h2>
            <p className="text-lg text-muted-foreground mt-5">
              Outside of coding, I'm a dedicated karate enthusiast. Music fuels
              my <br /> soul, especially Brazilian rap. I frequently immerse
              myself in books, <br />
              finding wisdom and inspiration in their pages.
            </p>
            <div className="flex mt-5">
              <Button className="text-md">
                <Link href="/journey">Learn more about me</Link>
              </Button>
              <Button className="text-md ml-1.5">
                <Link href="/">Download CV</Link>
              </Button>
            </div>
            <p className="mt-5 text-muted-foreground text-lg">Find me on:</p>
            <div className="flex mt-5">
              <Link href="https://www.linkedin.com/in/giovannivicentin/">
                {' '}
                <LinkedInLogoIcon className="w-7 h-7" />
              </Link>

              <Link href="https://github.com/giovannivicentin">
                {' '}
                <GitHubLogoIcon className="w-7 h-7 ml-4" />
              </Link>
            </div>
            <div className="mt-5 flex">
              <p className="text-lg text-muted-foreground">Tech Stack:</p>
              <div className="flex flex-col">
                <div className="flex">
                  <Separator orientation="vertical" className="h-7 ml-2 mr-1" />
                  <Image
                    src="/html.png"
                    width={25}
                    height={25}
                    alt="html icon"
                    className="dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/js.png"
                    width={25}
                    height={25}
                    alt="js icon"
                    className="rounded-sm dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/tailwind.png"
                    width={25}
                    height={25}
                    alt="tailwind icon"
                    className="dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/react.png"
                    width={25}
                    height={25}
                    alt="react icon"
                    className="dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/node.png"
                    width={25}
                    height={25}
                    alt="node icon"
                    className="dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/sql.png"
                    width={25}
                    height={25}
                    alt="next icon"
                    className="dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/git.png"
                    width={25}
                    height={25}
                    alt="git icon"
                    className="dark:invert"
                  ></Image>
                </div>
                <div className="mt-1 flex">
                  <Separator orientation="vertical" className="h-7 ml-2 mr-1" />
                  <Image
                    src="/css.png"
                    width={25}
                    height={25}
                    alt="css icon"
                    className="dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/ts.png"
                    width={25}
                    height={25}
                    alt="ts icon"
                    className="rounded-sm dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/sass.png"
                    width={25}
                    height={25}
                    alt="sass icon"
                    className="dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/next.png"
                    width={25}
                    height={25}
                    alt="next icon"
                    className="dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/nest.png"
                    width={25}
                    height={25}
                    alt="next icon"
                    className="dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/mysql.png"
                    width={25}
                    height={25}
                    alt="next icon"
                    className="dark:invert"
                  ></Image>
                  <Separator orientation="vertical" className="h-7 mx-1" />
                  <Image
                    src="/python.png"
                    width={25}
                    height={25}
                    alt="python icon"
                    className="dark:invert"
                  ></Image>
                </div>
              </div>
            </div>
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
    </>
  );
}
