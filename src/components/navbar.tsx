import { ModeToggle } from './mode-toggle';
import { Separator } from './ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="w-full max-w-4xl flex flex-wrap items-center justify-center border-b border-muted-foreground/40 p-1">
      <Link href="/">
        <Button
          variant="ghost"
          className="p-2 md:p-3 lg:p-4 text-xs sm:text-sm md:text-md lg:text-lg w-18 sm:w-20 md:w-28 lg:w-32 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Home
        </Button>
      </Link>

      <Separator
        orientation="vertical"
        className="h-3 sm:h-4 md:h-6 mx-1 md:mx-2"
      />

      <Link href="/journey">
        <Button
          variant="ghost"
          className="p-2 md:p-3 lg:p-4 text-xs sm:text-sm md:text-md lg:text-lg w-18 sm:w-20 md:w-28 lg:w-32 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Journey
        </Button>
      </Link>

      <Separator
        orientation="vertical"
        className="h-3 sm:h-4 md:h-6 mx-1 md:mx-2"
      />

      <Link href="/projects">
        <Button
          variant="ghost"
          className="p-2 md:p-3 lg:p-4 text-xs sm:text-sm md:text-md lg:text-lg w-18 sm:w-20 md:w-28 lg:w-32 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Projects
        </Button>
      </Link>

      <Separator
        orientation="vertical"
        className="h-3 sm:h-4 md:h-6 mx-1 md:mx-2"
      />

      <Link href="/contact">
        <Button
          variant="ghost"
          className="p-2 md:p-3 lg:p-4 text-xs sm:text-sm md:text-md lg:text-lg w-18 sm:w-20 md:w-28 lg:w-32 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Contact
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
