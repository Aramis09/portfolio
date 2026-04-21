"use client";

import { Home, Briefcase, Layers, FolderKanban, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "HOME", href: "#home" },
  { icon: Briefcase, label: "WORK", href: "#experience" },
  { icon: Layers, label: "SKILLS", href: "#skills" },
  { icon: FolderKanban, label: "PROJECT", href: "#experience" },
  { icon: Mail, label: "MAIL", href: "#contact" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-1 px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium uppercase tracking-wider">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
