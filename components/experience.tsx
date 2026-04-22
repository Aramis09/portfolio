import { ExperienceCard, type Experience } from "./experience-card";




const experiences:Experience[] = [
  {
    period: "Jan 2025 — Mar 2026",
    title: "AI-Driven Fullstack Developer",
    company: "Altatienda",
    location: "Buenos Aires",
    description:
      "Part of the foundation team for an AI-powered e-commerce product, playing a key role in building the project from the ground up. I contributed to the development of both the client-side and the BFF (Backend for Frontend), while providing technical guidance to the design team to ensure responsive, pixel-perfect, mobile-first views. I collaborated closely with product and backend teams to implement and deliver core features.",
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
      "Worked in a software factory developing mobile and web applications with React, Next.js, and React Native. I built mobile projects from the ground up while maintaining close communication with management to ensure alignment. Additionally, I played a key role in stabilizing existing projects by performing deep investigations to resolve complex bugs in unfamiliar codebases and delivering new, production-ready features.",
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
      "Joined as a Senior Fullstack Developer (frontend-focused) to lead the migration of a legacy PHP application to a modern stack using Next.js and Tailwind CSS. Refactored a poorly structured codebase with duplicated logic, implemented proper integration with backend services, introduced state management using Redux, and established error handling and testing practices to improve scalability, reliability, and maintainability across the application.",
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
    <section className="px-6 py-20" id="experience">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Building digital products across startups, software factories, and
            freelance projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard exp={exp} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}

