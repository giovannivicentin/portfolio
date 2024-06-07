'use client';
import React from 'react';
import { useState, FC } from 'react';
import { Separator } from './ui/separator';
import Image from 'next/image';

const techDescriptions: Record<string, string> = {
  html: 'HTML é a linguagem padrão de marcação para criação de páginas web.',
  js: 'JavaScript é uma linguagem de programação que permite páginas web interativas.',
  tailwind: 'Tailwind CSS é um framework CSS baseado em utilidades.',
  react: 'React é uma biblioteca JavaScript para construção de interfaces de usuário.',
  node: 'Node.js é um ambiente de execução JavaScript baseado no motor Chrome V8.',
  sql: 'SQL é uma linguagem específica para gerenciamento e consulta de bancos de dados.',
  git: 'Git é um sistema de controle de versão distribuído.',
  css: 'CSS é uma linguagem de folhas de estilo usada para descrever a aparência de um documento.',
  ts: 'TypeScript é um superset de JavaScript com tipagem estática opcional.',
  sass: 'Sass é uma linguagem de script pré-processador que compila em CSS.',
  next: 'Next.js é um framework React para aplicações renderizadas no lado do servidor.',
  nest: 'Nest.js: Framework Node.js eficiente e escalável para o lado do servidor.',
  mysql: 'MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto.',
  python: 'Python é uma linguagem de programação de alto nível muito popular.',
};

const techIcons: Array<keyof typeof techDescriptions> = [
  'html', 'js', 'tailwind', 'react', 'node', 
  'sql', 'git', 'css', 'ts', 'sass', 
  'next', 'nest', 'mysql', 'python'
];

interface TechButtonProps {
  tech: keyof typeof techDescriptions;
  onClick: () => void;
}

const TechButton: FC<TechButtonProps> = ({ tech, onClick }) => (
  <button
    className="relative p-1 isolation-auto z-10 rounded-md
      before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full
      before:bg-violet-500 before:dark:bg-violet-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-400"
    onClick={onClick}
  >
    <Image
      src={`/${tech}.svg`}
      width={25}
      height={25}
      alt={`${tech} icon`}
      className="dark:invert bg-transparent"
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  </button>
);

const TechStack: FC = () => {
  const [selectedTech, setSelectedTech] = useState<keyof typeof techDescriptions | null>(null);

  const renderTechRow = (techs: Array<keyof typeof techDescriptions>) => (
    <div className="flex">
      {techs.map((tech, index) => (
        <React.Fragment key={tech}>
          <TechButton tech={tech} onClick={() => setSelectedTech(tech)} />
          {index < techs.length - 1 && (
            <Separator orientation="vertical" className="h-7 mx-1" />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="mt-5 flex flex-col">
      <p className="text-lg text-muted-foreground">Tech Stack:</p>
      <div className="flex flex-col mt-5 space-y-2">
        {renderTechRow(techIcons.slice(0, 7))}
        {renderTechRow(techIcons.slice(7))}
      </div>
      <div className="max-w-xl my-10 text-md sm:text-lg justify-center text-muted-foreground">
        {selectedTech
          ? techDescriptions[selectedTech]
          : 'Clique em um ícone da stack para saber mais sobre ele.'}
      </div>
    </div>
  );
}

export default TechStack;
