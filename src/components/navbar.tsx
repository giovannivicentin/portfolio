import { ModeToggle } from './mode-toggle';
import { Separator } from './ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// dark:text-violet-400 text-violet-700
function Navbar() {
  return (
    <nav className="w-full max-w-4xl flex items-center justify-center border-b border-muted-foreground/40 p-1">
      <Link href="/">
        <Button
          variant="ghost"
          className="text-sm md:text-md w-24 md:w-28 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Home
        </Button>
      </Link>

      <Separator orientation="vertical" className="h-4 md:h-6 mx-1 md:mx-2" />

      <Link href="/journey">
        <Button
          variant="ghost"
          className="text-sm md:text-md w-24 md:w-28 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Journey
        </Button>
      </Link>

      <Separator orientation="vertical" className="h-4 md:h-6 mx-1 md:mx-2" />

      <Link href="/projects">
        <Button
          variant="ghost"
          className="text-sm md:text-md w-24 md:w-28 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Projects
        </Button>
      </Link>

      <Separator orientation="vertical" className="h-4 md:h-6 mx-1 md:mx-2" />

      <Link href="/contact">
        <Button
          variant="ghost"
          className="text-sm md:text-md w-24 md:w-28 hover:dark:text-violet-400 hover:text-violet-700 hover:bg-transparent"
        >
          Contact
        </Button>
      </Link>

      <Separator
        orientation="vertical"
        className="hidden md:block h-6 mx-2 mr-8"
      />

      <ModeToggle />
    </nav>
  );
}

export default Navbar;
