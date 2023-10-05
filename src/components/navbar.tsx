import { ModeToggle } from './mode-toggle';
import { Separator } from './ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="w-full px-6 py-1.5 flex items-center justify-center border-b border-muted-foreground/40">
      <Button asChild className="text-md w-28" variant="ghost">
        <Link href="/" className="px-10">
          Home
        </Link>
      </Button>
      <Separator orientation="vertical" className="h-6 mx-2" />
      <Button className="text-md w-28" variant="ghost">
        <Link href="/journey" className="px-10">
          Journey
        </Link>
      </Button>
      <Separator orientation="vertical" className="h-6 mx-2" />
      <Button className="text-md w-28" variant="ghost">
        <Link href="/projects" className="px-10">
          Projects
        </Link>
      </Button>
      <Separator orientation="vertical" className="h-6 mx-2" />
      <Button className="text-md w-28" variant="ghost">
        <Link href="/contact" className="px-10">
          Contact
        </Link>
      </Button>
      <Separator orientation="vertical" className="h-6 mx-2 mr-8" />
      <ModeToggle />
    </nav>
  );
}

export default Navbar;
