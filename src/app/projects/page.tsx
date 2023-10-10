'use client';
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
    <div className="flex flex-col items-center p-4 md:px-24 opacity-0 transform translate-y-10 animate-fadeInSlideUp">
      <div className="max-w-4xl w-full py-6">
        <h1 className="text-3xl mb-6 text-center">Projects</h1>
      </div>
    </div>
  );
};

export default ProjectsPage;
