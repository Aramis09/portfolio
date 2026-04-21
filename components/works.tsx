import { ArrowRight, ArrowUpRight, Code2, Smartphone, Shield, Globe } from "lucide-react";

const projects = [
  {
    id: "ufs",
    title: "UFS",
    description: "Autonomous network monitoring system with predictive threat detection.",
    icon: Shield,
    featured: true,
  },
  {
    id: "cli-automation",
    title: "CLI Automation",
    description: "Node.js based automation tools for CI/CD pipelines.",
    icon: Code2,
  },
  {
    id: "aether-mobile",
    title: "Aether Mobile",
    description: "React Native application focused on minimalism and speed.",
    icon: Smartphone,
  },
  {
    id: "web-platforms",
    title: "Web Platforms",
    description: "Full-stack web applications with Next.js and cloud infrastructure.",
    icon: Globe,
  },
];

export function Works() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected Works
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Exploring the intersection of human-centric design and autonomous system logic.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-primary"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4">
          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-surface-container-low p-6"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute right-0 top-0 h-full w-1/2">
                    <div className="h-full w-full bg-[linear-gradient(to_right,transparent_0%,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%,transparent_100%)] bg-[length:8px_100%]"></div>
                  </div>
                </div>

                <div className="relative">
                  <span className="font-display text-xl font-bold text-foreground">
                    {project.title}
                  </span>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <button className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}

          {/* Other Projects */}
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-surface-container-low p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <project.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  CASE STUDY
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
