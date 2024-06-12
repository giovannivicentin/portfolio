const JourneyPage = () => {
  return (
    <div className="flex flex-col items-center p-4 md:px-24">
      <div className="max-w-4xl w-full text-center py-6">
        <h1 className="text-3xl mb-6 animate-fade">Minha Jornada</h1>
        <h2 className="text-xl mb-6 text-justify leading-relaxed animate-fade-right">
          Olá! Eu sou{' '}
          <span className="dark:text-violet-400 text-violet-700">
            Giovanni Vicentin
          </span>
          , mas pode me chamar de Gibas. Sou Engenheiro de Software no Brasil,
          com experiência em desenvolvimento Full Stack de aplicações web.
        </h2>
        <p className="mb-6 text-justify leading-relaxed animate-fade-right delay-100">
          Iniciei minha carreira profissional em 2022, no mesmo ano em que comecei meu curso de Bacharelado em Ciência da Computação, com duração de quatro anos. Meu primeiro passo no mundo da tecnologia foi como desenvolvedor backend, onde trabalhei principalmente com Python, desenvolvendo Robotic Process Automations (RPAs) e criando scripts em Visual Basic e PowerShell. Além disso, tive bastante envolvimento com operações de CRUD em bancos de dados.
        </p>
        <p className="mb-6 text-justify leading-relaxed animate-fade-right delay-200">
          À medida que avançava nos estudos na faculdade, fui descobrindo novas áreas dentro da tecnologia e percebi uma paixão especial por aplicações web. Para aprofundar meus conhecimentos nessa área, fiz cursos extracurriculares, incluindo o curso Explorer da Rocketseat, que me formou como desenvolvedor full stack web. Também obtive uma certificação da Microsoft em fundamentos de desenvolvimento de software e estou sempre em busca de novos conhecimentos para me especializar ainda mais no mundo do desenvolvimento full stack.
        </p>
        <p className="mb-6 text-justify leading-relaxed animate-fade-right delay-300">
          Atualmente, trabalho como desenvolvedor no Sam's Club, que pertence ao grupo Carrefour no Brasil. Minhas responsabilidades incluem a criação de páginas web, onde cuido do front end utilizando React e do backend com Node.js. Utilizo também GraphQL e REST APIs, além de escrever scripts em Python quando necessário. Uma das minhas principais realizações foi a criação da página de cadastro dos sócios do Sam's Club Brasil, onde participei ativamente tanto do front end quanto do backend, impactando o cadastro de futuros milhões de usuários.
        </p>
        <p className="mb-6 text-justify leading-relaxed animate-fade-right delay-400">
          Meus objetivos futuros incluem terminar a faculdade no final de 2025, criar conteúdo para ajudar outras pessoas no desenvolvimento de software e alcançar o nível de desenvolvedor sênior full stack. Acredito que compartilhar conhecimento é essencial para o crescimento da comunidade de tecnologia, e estou ansioso para contribuir de forma significativa nesse aspecto.
        </p>
      </div>
    </div>
  );
};

export default JourneyPage;
