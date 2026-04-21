import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
 <section
  id="home"
  // className="relative min-h-screen px-6 pt-24 pb-12 bg-linear-to-bl  from-[#2e5bff] from-10% via-black via-50% to-black"
  className="relative min-h-screen px-6 pt-24 pb-12 "

>
      <div className="mx-auto max-w-7xl">
        {/* Available Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Available for new projects
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display  text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-balance">ARAMIS JAIME:</span>
          <br />
          <span className="text-balance">AI-Driven</span>
          <br />
          <span className="text-balance">Fullstack</span>
          <br />
          <span className="text-balance">Developer</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          Crafting modern, intelligent web & mobile experiences with 3+ years of
          experience in the synthetic atelier of digital craftsmanship.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-foreground px-8 text-background hover:bg-foreground/90"
          >
            <a href="#experience">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-foreground/20 bg-transparent px-8 text-foreground hover:bg-foreground/5"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-12 flex gap-12">
          <div>
            <p className="font-display text-4xl font-bold text-foreground">3+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              Years Experience
            </p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold text-foreground">10+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              Projects Completed
            </p>
          </div>
        </div>

        {/* 3D Element / Visual */}
        <div className="relative mt-12 flex items-center justify-center">
          <div className="relative h-64 w-full max-w-md">
            {/* Abstract geometric shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="h-48 w-48 rotate-45 rounded-3xl bg-gradient-to-br from-surface-container-high to-surface-container-lowest shadow-2xl"></div>
                <div className="absolute -top-4 -right-4 h-24 w-24 rotate-12 rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-high shadow-xl"></div>
                <div className="absolute -bottom-2 -left-6 h-16 w-16 -rotate-12 rounded-xl bg-gradient-to-br from-surface-container-highest to-surface-container shadow-lg"></div>
              </div>
            </div>

       
          </div>
        </div>
      </div>
    </section>
  );
}
