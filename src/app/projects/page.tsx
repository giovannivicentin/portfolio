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
        <h1 className="text-3xl mb-6 text-center">Projects</h1>
        <div className="flex flex-col items-center justify-center max-w-4xl gap-y-16">
          <DefaultProject
            photo="/Example_image.svg"
            photoAlt="image of a example"
            explanation="this is an example of text that I made when I am writing this text."
          />
          <DefaultProject
            photo="/Example_image.svg"
            photoAlt="image of a example"
            explanation="this is an example of text that I made when I am writing this text."
            reverse
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
