'use client';
import { useState } from 'react';
import { Separator } from './ui/separator';
import Image from "next/legacy/image";

const techDescriptions = {
  html: 'HTML é a linguagem padrão de marcação para criação de páginas web.',
  js: 'JavaScript é uma linguagem de programação que permite páginas web interativas.',
  tailwind: 'Tailwind CSS é um framework CSS baseado em utilidades.',
  react:
    'React é uma biblioteca JavaScript para construção de interfaces de usuário.',
  node: 'Node.js é um ambiente de execução JavaScript baseado no motor Chrome V8.',
  sql: 'SQL é uma linguagem específica para gerenciamento e consulta de bancos de dados.',
  git: 'Git é um sistema de controle de versão distribuído.',
  css: 'CSS é uma linguagem de folhas de estilo usada para descrever a aparência de um documento.',
  ts: 'TypeScript é um superset de JavaScript com tipagem estática opcional.',
  sass: 'Sass é uma linguagem de script pré-processador que compila em CSS.',
  next: 'Next.js é um framework React para aplicações renderizadas no lado do servidor.',
  nest: 'Nest.js: Framework Node.js eficiente e escalável para o lado do servidor.',
  mysql:
    'MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto.',
  python: 'Python é uma linguagem de programação de alto nível muito popular.',
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
          <div className="max-w-xl my-10 text-md sm:text-lg justify-center text-muted-foreground">
            {selectedTech
              ? techDescriptions[selectedTech]
              : 'Clique em um ícone da stack para saber mais sobre ele.'}
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
