import { ModeToggle } from './mode-toggle';
import { Separator } from './ui/separator';
import { Button } from '@/components/ui/button';

function Navbar() {
  return (
    <div className="w-full px-6 py-3 flex items-center justify-between border-b border-muted-foreground/40">
      <h1 className="text-xl font-bold">Giovanni Vicentin</h1>
      <div className="flex items-center gap-3">
        <Button variant="ghost">Home</Button>
        <Separator orientation="vertical" className="h-6" />
        <Button variant="ghost">About</Button>
        <Separator orientation="vertical" className="h-6" />
        <Button variant="ghost">Contact</Button>
        <Separator orientation="vertical" className="h-6" />
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
