import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 pb-24 md:pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-foreground" />
            <span className="font-display text-sm font-bold tracking-tight text-foreground">
              ARAMIS JAIME
            </span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} The Synthetic Atelier | ARAMIS JAIME
          </p>
        </div>
      </div>
    </footer>
  );
}
