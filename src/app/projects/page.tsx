import DefaultProject from '@/components/default-project';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:px-24 opacity-0 transform translate-y-10 animate-fadeInSlideUp">
      <div className="max-w-4xl w-full py-6">
        <h1 className="text-3xl mb-7 text-center">Projects</h1>
        <div className="flex flex-col items-center justify-center max-w-4xl gap-7">
          <DefaultProject
            photo="/portfolio-project.png"
            photoAlt="portfolio project"
            explanation="This is my personal portfolio, where I discuss my professional journey, showcase my projects, and highlight my skills. I constructed it using Next.js, TailwindCSS, and TypeScript, and deployed it on Vercel."
            hrefGithub="https://github.com/giovannivicentin/portfolio"
            hrefLive="https://www.giovannivicentin.com/"
          />
        </div>
      </div>
      <h2 className="max-w-4xl w-full py-6 text-muted-foreground text-justify">
        As my focus has always been on projects for private companies,
        unfortunately, I don't yet have a large number of open-source projects
        to showcase in my portfolio. However, I am working on personal projects
        and will soon be updating and filling the portfolio with more projects.
      </h2>
    </div>
  );
};

export default ProjectsPage;
