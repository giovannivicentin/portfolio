'use client';
import { useState } from 'react';
import { Separator } from './ui/separator';
import Image from 'next/image';

function TechStack() {
  const [selectedTech, setSelectedTech] = useState<
    keyof typeof techDescriptions | null
  >(null);

  const techDescriptions = {
    html: 'HTML is the standard markup language for creating web pages.',
    js: 'JavaScript is a programming language that enables interactive web pages.',
    tailwind: 'Tailwind CSS is a utility-based CSS framework.',
    react: 'React is a JavaScript library for building user interfaces.',
    node: 'Node.js is a JavaScript runtime environment based on Chrome V8 engine.',
    sql: 'SQL is a language specific to managing and querying databases.',
    git: 'Git is a distributed version control system.',
    css: 'CSS is a stylesheet language used to describe the look of a document.',
    ts: 'TypeScript is a superset of JavaScript with optional static typing.',
    sass: 'Sass is a scripting preprocessor language that compiles into CSS.',
    next: 'Next.js is a React framework for server-side rendered applications.',
    nest: 'Nest.js: Efficient, Scalable Server-Side Node.js Framework.',
    mysql: 'MySQL is an open-source relational database management system.',
    python: 'Python is a popular high-level programming language.',
  };

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
              onClick={() => setSelectedTech('html')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/js.png"
              width={25}
              height={25}
              alt="js icon"
              className="rounded-sm dark:invert"
              onClick={() => setSelectedTech('js')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/tailwind.png"
              width={25}
              height={25}
              alt="tailwind icon"
              className="dark:invert"
              onClick={() => setSelectedTech('tailwind')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/react.png"
              width={25}
              height={25}
              alt="react icon"
              className="dark:invert"
              onClick={() => setSelectedTech('react')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/node.png"
              width={25}
              height={25}
              alt="node icon"
              className="dark:invert"
              onClick={() => setSelectedTech('node')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/sql.png"
              width={25}
              height={25}
              alt="sql icon"
              className="dark:invert"
              onClick={() => setSelectedTech('sql')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/git.png"
              width={25}
              height={25}
              alt="git icon"
              className="dark:invert"
              onClick={() => setSelectedTech('git')}
            />
          </div>
          <div className="mt-1 flex">
            <Separator orientation="vertical" className="h-7 ml-2 mr-1" />
            <Image
              src="/css.png"
              width={25}
              height={25}
              alt="css icon"
              className="dark:invert"
              onClick={() => setSelectedTech('css')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/ts.png"
              width={25}
              height={25}
              alt="ts icon"
              className="rounded-sm dark:invert"
              onClick={() => setSelectedTech('ts')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/sass.png"
              width={25}
              height={25}
              alt="sass icon"
              className="dark:invert"
              onClick={() => setSelectedTech('sass')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/next.png"
              width={25}
              height={25}
              alt="next icon"
              className="dark:invert"
              onClick={() => setSelectedTech('next')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/nest.png"
              width={25}
              height={25}
              alt="nest icon"
              className="dark:invert"
              onClick={() => setSelectedTech('nest')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/mysql.png"
              width={25}
              height={25}
              alt="mysql icon"
              className="dark:invert"
              onClick={() => setSelectedTech('mysql')}
            />
            <Separator orientation="vertical" className="h-7 mx-1" />
            <Image
              src="/python.png"
              width={25}
              height={25}
              alt="python icon"
              className="dark:invert"
              onClick={() => setSelectedTech('python')}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 text-md items-start text-muted-foreground">
        {selectedTech
          ? techDescriptions[selectedTech]
          : 'Click in a tech icon to learn know more about it.'}
      </div>
    </>
  );
}

export default TechStack;
