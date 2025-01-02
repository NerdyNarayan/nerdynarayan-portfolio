import { ModeToggle } from './theme-button';

export default function Navbar() {
  return (
    <div className="flex h-16 w-full items-center justify-between">
      <div className="flex w-full items-center justify-between">
        <div>Nerdy Narayan</div>
        <ModeToggle />
      </div>
    </div>
  );
}
