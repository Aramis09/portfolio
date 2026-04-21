import { Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Have a project in mind? Let&apos;s work together to bring your ideas to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email Card */}
          <a
            href="mailto:aramisjaime48@gmail.com"
            className="group flex items-center gap-4 rounded-2xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">aramisjaime48@gmail.com</p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
          </a>

          {/* Location Card */}
          <div className="flex items-center gap-4 rounded-2xl bg-surface-container-low p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium text-foreground">Santiago del Estero, Argentina</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-border bg-transparent text-foreground hover:bg-surface-container-high"
          >
            <a
              href="https://linkedin.com/in/aramisjaime"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-border bg-transparent text-foreground hover:bg-surface-container-high"
          >
            <a
              href="https://github.com/aramisjaime"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-surface-container-low p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground">
            Ready to start a project?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            I&apos;m currently available for freelance work and exciting opportunities.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 rounded-full bg-foreground px-8 text-background hover:bg-foreground/90"
          >
            <a href="mailto:aramisjaime48@gmail.com">
              Let&apos;s Talk
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
