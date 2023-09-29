import { ModeToggle } from './mode-toggle';
import { Separator } from './ui/separator';
import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google'

function Navbar() {
  return (
    <div className="w-full px-6 py-3 flex items-center justify-center border-b border-muted-foreground/40">
        <Button className='text-md px-10' variant="ghost">Home</Button>
        <Separator orientation="vertical" className="h-6 mx-2" />
        <Button className='text-md px-10' variant="ghost">About</Button>
        <Separator orientation="vertical" className="h-6 mx-2" />
        <Button className='text-md px-10' variant="ghost">Projects</Button>
        <Separator orientation="vertical" className="h-6 mx-2" />
        <Button className='text-md px-10' variant="ghost">Contact</Button>
        <Separator orientation="vertical" className="h-6 mx-2 mr-8" />
        <ModeToggle />
      </div>
  );
}

export default Navbar;
