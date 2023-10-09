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
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('html')}
            >
              <Image
                src="/html.png"
                width={25}
                height={25}
                alt="html icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('js')}
            >
              <Image
                src="/js.png"
                width={25}
                height={25}
                alt="js icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('tailwind')}
            >
              <Image
                src="/tailwind.png"
                width={25}
                height={25}
                alt="tailwind icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('react')}
            >
              <Image
                src="/react.png"
                width={25}
                height={25}
                alt="react icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('node')}
            >
              <Image
                src="/node.png"
                width={25}
                height={25}
                alt="node icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('sql')}
            >
              <Image
                src="/sql.png"
                width={25}
                height={25}
                alt="sql icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('git')}
            >
              <Image
                src="/git.png"
                width={25}
                height={25}
                alt="git icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
          </div>
          <div className="mt-1 flex">
            <Separator orientation="vertical" className="h-7 ml-2 mr-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('css')}
            >
              <Image
                src="/css.png"
                width={25}
                height={25}
                alt="css icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('ts')}
            >
              <Image
                src="/ts.png"
                width={25}
                height={25}
                alt="ts icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent"
              onClick={() => setSelectedTech('sass')}
            >
              <div className="image-container">
                <Image
                  src="/sass.png"
                  width={25}
                  height={25}
                  alt="sass icon"
                  className="dark:invert image-hover-effect bg-transparent"
                />
              </div>
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('next')}
            >
              <Image
                src="/next.png"
                width={25}
                height={25}
                alt="next icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('nest')}
            >
              <Image
                src="/nest.png"
                width={25}
                height={25}
                alt="nest icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('mysql')}
            >
              <Image
                src="/mysql.png"
                width={25}
                height={25}
                alt="mysql icon"
                className="dark:invert image-hover-effect bg-transparent"
              />
            </button>
            <Separator orientation="vertical" className="h-7 mx-1" />
            <button
              className="button-container p-1 bg-transparent transition-transform transform hover:scale-110"
              onClick={() => setSelectedTech('python')}
            >
              <div className="image-container">
                <Image
                  src="/python.png"
                  width={25}
                  height={25}
                  alt="python icon"
                  className="dark:invert image-hover-effect bg-transparent"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 text-sm items-start text-muted-foreground">
        {selectedTech
          ? techDescriptions[selectedTech]
          : 'Click in a tech icon to know more about it.'}
      </div>
    </>
  );
}

export default TechStack;
