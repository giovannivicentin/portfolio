import DefaultProject from '@/components/default-project';
import { Separator } from '@/components/ui/separator';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:px-24 opacity-0 transform translate-y-10 animate-fadeInSlideUp">
      <div className="max-w-4xl w-full py-6">
        <h1 className="text-3xl mb-7 text-center">Projetos</h1>
        <div className="flex flex-col items-center justify-center max-w-4xl gap-7">
          <DefaultProject
            photo="/portfolio-project.png"
            photoAlt="portfolio project"
            explanation="Este portfólio destaca uma coleção de projetos que refletem minhas habilidades e paixões, desenvolvido com Next.js, TailwindCSS e TypeScript. Ele demonstra minha competência técnica e a capacidade de criar uma experiência de usuário fluida. Durante o desenvolvimento, superei desafios de otimização de desempenho e responsividade do design, ampliando meu conhecimento sobre as melhores práticas de desenvolvimento web. Implementado no Vercel, este portfólio mostra meu trabalho e evidencia minhas habilidades em deploy e manutenção de aplicações web modernas, representando meu crescimento profissional e dedicação ao aprimoramento técnico e criativo."
            hrefGithub="https://github.com/giovannivicentin/portfolio"
            hrefLive="https://www.giovannivicentin.com/"
          />
        </div>
        <Separator className="mt-10" />
      </div>
      <h2 className="max-w-4xl w-full py-6 text-muted-foreground text-justify leading-relaxed">
        Como meu foco sempre foi em projetos para empresas privadas,
        infelizmente, ainda não possuo uma grande quantidade de projetos de
        código aberto para apresentar aqui no meu portfólio. No entanto, estou
        trabalhando em projetos pessoais e em breve estarei atualizando e
        preenchendo o portfólio com mais projetos.
      </h2>
    </div>
  );
};

export default ProjectsPage;
