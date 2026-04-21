import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    period: "Jan 2025 — Mar 2026",
    title: "AI-Driven Fullstack Developer",
    company: "Altatienda",
    location: "Buenos Aires",
    description:
      "AI-powered e-commerce product. Provided technical guidance to the design team, implemented responsive and pixel-perfect views using a mobile-first approach, and collaborated with product, design, and backend teams to deliver new features.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Shadcn",
      "Tailwind CSS",
      "Jest",
      "NestJS",
      "Playwright",
      "Docker",
    ],
  },
  {
    period: "Nov 2024 — Aug 2025",
    title: "Fullstack Developer (Web & Mobile)",
    company: "Zergex",
    location: "Buenos Aires",
    description:
      "Worked in a software factory implementing production-ready features, fixing bugs, and understanding the context of multiple projects. Developed mobile and web applications using React Native, React, and Next.js.",
    technologies: [
      "TypeScript",
      "React Native",
      "React",
      "Next.js",
      "AWS",
      "NestJS",
      "PostgreSQL",
    ],
  },
  {
    period: "Feb 2024 — Dec 2024",
    title: "Fullstack Developer",
    company: "Edu Passport",
    location: "USA, Texas",
    description:
      "Job Board product. Led a frontend team of 3 developers to migrate a legacy PHP website to a modern platform using Next.js, Tailwind CSS, and AWS Amplify.",
    technologies: [
      "TypeScript",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "AWS Amplify",
    ],
  },
];

export function Experience() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Building digital products across startups, software factories, and freelance projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                        {exp.title} · {exp.company}
                        <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
                      </h3>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-surface-container-high px-3 py-1 text-xs text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
