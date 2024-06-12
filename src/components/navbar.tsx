import { ModeToggle } from './mode-toggle';
import { Separator } from './ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="text-sm mt-6 flex items-center justify-center border-b border-muted-foreground/40 p-1 sm:gap-x-1 md:gap-x-2">
      <Link href="/">
        <Button
          variant="ghost"
          className="px-3 md:px-4 lg:px-6 text-xs sm:text-lg xl:text-xl w-18 sm:w-20 lg:w-32 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Início
        </Button>
      </Link>

      <Separator
        orientation="vertical"
        className="h-3 sm:h-4 md:h-6 mx-1 md:mx-2"
      />

      <Link href="/journey">
        <Button
          variant="ghost"
          className="px-3 md:px-4 lg:px-6 text-xs sm:text-lg xl:text-xl w-18 sm:w-20 lg:w-32 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Jornada
        </Button>
      </Link>

      <Separator
        orientation="vertical"
        className="h-3 sm:h-4 md:h-6 mx-1 md:mx-2"
      />

      <Link href="/projects">
        <Button
          variant="ghost"
          className="px-3 md:px-4 lg:px-6 text-xs sm:text-lg xl:text-xl w-18 sm:w-20 lg:w-32 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Projetos
        </Button>
      </Link>

      <Separator
        orientation="vertical"
        className="h-3 sm:h-4 md:h-6 mx-1 md:mx-2"
      />

      <Link href="/contact">
        <Button
          variant="ghost"
          className="px-3 md:px-4 lg:px-6 text-xs sm:text-lg xl:text-xl w-18 sm:w-20 lg:w-32 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Contato
        </Button>
      </Link>

      <Separator
        orientation="vertical"
        className="h-3 sm:h-4 md:h-6 mx-1 md:mx-2"
      />

      <ModeToggle />
    </nav>
  );
}

export default Navbar;
