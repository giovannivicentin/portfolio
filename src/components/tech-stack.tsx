import { Separator } from './ui/separator';
import Image from 'next/image';

function TechStack() {
  return (
    <>
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
    </>
  );
}

export default TechStack;
