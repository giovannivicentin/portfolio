'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Loader } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Toggle } from '@/components/ui/toggle';

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const displayIcon = () => {
    if (!mounted) {
      return <Loader className="animate-spin h-3.5 w-3.5 sm:w-5 sm:h-5 xl:h-6 xl:w-6" />;
    }

    if (theme === 'system') {
      return resolvedTheme === 'dark' ? (
        <Sun className="h-3.5 w-3.5 sm:w-5 sm:h-5 xl:h-6 xl:w-6 dark:hover:text-violet-400 hover:text-violet-700" />
      ) : (
        <Moon className="h-3.5 w-3.5 sm:w-5 sm:h-5 xl:h-6 xl:w-6 dark:hover:text-violet-400 hover:text-violet-700" />
      );
    }
    return theme === 'dark' ? (
      <Sun className="h-3.5 w-3.5 sm:w-5 sm:h-5 xl:h-6 xl:w-6 dark:hover:text-violet-400 hover:text-violet-700" />
    ) : (
      <Moon className="h-3.5 w-3.5 sm:w-5 sm:h-5 xl:h-6 xl:w-6 dark:hover:text-violet-400 hover:text-violet-700" />
    );
  };

  return (
    <Toggle variant="default" aria-label="Toggle theme" onClick={handleToggle}>
      {displayIcon()}
    </Toggle>
  );
}
