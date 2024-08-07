import DefaultProject from '@/components/default-project'
import { Separator } from '@/components/ui/separator'

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:px-24">
      <div className="max-w-4xl w-full py-6">
        <h1 className="text-3xl mb-7 text-center animate-fade">Projetos</h1>
        <div className="flex flex-col items-center justify-center max-w-4xl gap-7">
          <div className="animate-fade-right delay-100">
            <DefaultProject
              photo="/projects/fk-metalicas.png"
              photoAlt="Frank Metalicas Website project"
              explanation="Desenvolvi um site para a Frank Metálicas com o objetivo de criar uma presença digital robusta, facilitando a apresentação de produtos e serviços, exibição de projetos realizados e contato com clientes. Utilizando tecnologias como Next.js, React, Tailwind CSS, Shadcn/UI, Node.js, Zod e React Hook Form, otimizei o site para motores de busca, aumentando a visibilidade da empresa no Google. Como resultado, houve um aumento significativo nos contatos recebidos e destaque da empresa nas buscas online."
              hrefGithub="https://github.com/giovannivicentin/fk_metalicas"
              hrefLive="https://www.frankmetalicas.com/"
            />
          </div>
          <div className="animate-fade-left delay-200">
            <DefaultProject
              photo="/projects/tecnojund.png"
              photoAlt="Tecnojund Website project"
              explanation="Refiz o site da Tecnojund do zero com o objetivo de modernizar a marca, melhorar a experiência do usuário e aumentar a conversão de leads. A principal dificuldade era a ausência de um formulário eficiente para abertura de chamados com envio de e-mail. Agora, o site possui a página /chamados que atende a essa necessidade. Como resultado, houve um aumento significativo no tráfego orgânico, na geração de leads e no fechamento de novos contratos."
              hrefGithub="https://github.com/giovannivicentin/tecnojund"
              hrefLive="https://www.tecnojund.com.br"
              reverse
            />
          </div>
          <div className="animate-fade-right delay-300">
            <DefaultProject
              photo="/projects/portfolio.png"
              photoAlt="portfolio project"
              explanation="Criei meu portfólio pessoal com o objetivo de construir uma marca pessoal, facilitar o networking e comprovar minha experiência como desenvolvedor de software. Criei um site simples e acessível, focado em adicionar e apresentar meus projetos de forma organizada. Através dele, espero que as pessoas possam me conhecer melhor profissionalmente e encontrar uma forma fácil de entrar em contato comigo para futuras oportunidades e colaborações."
              hrefGithub="https://github.com/giovannivicentin/portfolio"
              hrefLive="https://www.giovannivicentin.com/"
            />
          </div>
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
  )
}

export default ProjectsPage
