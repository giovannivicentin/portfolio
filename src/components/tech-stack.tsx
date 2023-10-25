'use client';
import { useState } from 'react';
import { Separator } from './ui/separator';
import Image from 'next/image';

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

function TechStack() {
  const [selectedTech, setSelectedTech] = useState<
    keyof typeof techDescriptions | null
  >(null);

  return (
    <>
      <div className="mt-5 flex flex-col">
        <p className="text-lg text-muted-foreground">Tech Stack:</p>
        <div className="flex flex-col mt-5">
          <div className="flex">
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
              before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('html')}
            >
              <Image
                src="/html.svg"
                width={25}
                height={25}
                alt="html icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
              before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('js')}
            >
              <Image
                src="/js.svg"
                width={25}
                height={25}
                alt="js icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
              before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('tailwind')}
            >
              <Image
                src="/tailwind.svg"
                width={25}
                height={25}
                alt="tailwind icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
              before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('react')}
            >
              <Image
                src="/react.svg"
                width={25}
                height={25}
                alt="react icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full 
              before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('node')}
            >
              <Image
                src="/node.svg"
                width={25}
                height={25}
                alt="node icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full 
              before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('sql')}
            >
              <Image
                src="/sql.svg"
                width={25}
                height={25}
                alt="sql icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
              before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('git')}
            >
              <Image
                src="/git.svg"
                width={25}
                height={25}
                alt="git icon"
                className="dark:invert bg-transparent"
              />
            </button>
          </div>
          <div className="mt-1 flex">
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
              before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('css')}
            >
              <Image
                src="/css.svg"
                width={25}
                height={25}
                alt="css icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
              before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('ts')}
            >
              <Image
                src="/ts.svg"
                width={25}
                height={25}
                alt="ts icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
              before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('sass')}
            >
              <div>
                <Image
                  src="/sass.svg"
                  width={25}
                  height={25}
                  alt="sass icon"
                  className="dark:invert bg-transparent"
                />
              </div>
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
                before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('next')}
            >
              <Image
                src="/next.svg"
                width={25}
                height={25}
                alt="next icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
                before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('nest')}
            >
              <Image
                src="/nest.svg"
                width={25}
                height={25}
                alt="nest icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
                before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('mysql')}
            >
              <Image
                src="/mysql.svg"
                width={25}
                height={25}
                alt="mysql icon"
                className="dark:invert bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="relative p-1 isolation-auto z-10 rounded-md
                before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
                before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
              onClick={() => setSelectedTech('python')}
            >
              <div>
                <Image
                  src="/python.svg"
                  width={25}
                  height={25}
                  alt="python icon"
                  className="dark:invert bg-transparent"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 text-md sm:text-lg items-start text-muted-foreground">
        {selectedTech
          ? techDescriptions[selectedTech]
          : 'Click in a tech icon to know more about it.'}
      </div>
    </>
  );
}

export default TechStack;
