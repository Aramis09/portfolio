import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-6 pt-24 pb-12"
    >
      <div className="mx-auto max-w-7xl justify-between flex items-start">
        <div>
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
          Crafting modern, intelligent web and mobile applications with over 3 years of hands-on experience. I focus on implementing AI-driven workflows to accelerate the development process and ensure high-quality delivery. Open to relocation for the right opportunity.
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
              <p className="font-display text-4xl font-bold text-foreground">
                3+
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Years Experience
              </p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-foreground">
                10+
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
        <Link
          href="https://www.linkedin.com/in/aramisdev"
          className="hidden lg:block mr-16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/aramis2.png"}
            alt="Aramis Jaime Character created with IA"
            width={550}
            height={550}
            className="hidden lg:block"
          />
        </Link>
      </div>
    </section>
  );
}

