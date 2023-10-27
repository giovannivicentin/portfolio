'use client';
import DefaultProject from '@/components/default-project';
import LoadingScreen from '@/components/loading-screen';
import { useState, useEffect } from 'react';

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;
  return (
    <div className="flex flex-col items-center justify-center p-4 md:px-24 opacity-0 transform translate-y-10 animate-fadeInSlideUp">
      <div className="max-w-4xl w-full py-6">
        <h1 className="text-3xl mb-7 text-center">Projects (Building)</h1>
        <div className="flex flex-col items-center justify-center max-w-4xl gap-7">
          <DefaultProject
            photo="/Example_image.svg"
            photoAlt="image of a example"
            explanation="Building...Building...Building...Building...Building...Building...Building...Building...Building..."
            hrefGithub="https://www.github.com"
            hrefLive="https://example.com"
          />
          <DefaultProject
            photo="/Example_image.svg"
            photoAlt="image of a example"
            explanation="Building...Building...Building...Building...Building...Building...Building...Building...Building..."
            hrefGithub="https://www.github.com"
            hrefLive="https://example.com"
            reverse
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
