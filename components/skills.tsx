import { 
  Code2, 
  Server, 
  Cloud, 
  Brain, 
  TestTube, 
  Layers,
  Languages 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Shadcn/ui",
      "Storybook",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "TypeORM",
      "PostgreSQL",
      "RESTful APIs",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS Amplify",
      "CloudFront",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "AI & Automation",
    icon: Brain,
    skills: [
      "Claude",
      "AI Rules",
      "AI Agents",
      "Cursor",
      "Windsurf",
    ],
  },
  {
    title: "Testing & Tools",
    icon: TestTube,
    skills: [
      "Jest",
      "React Testing Library",
      "Playwright",
      "TDD",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Architecture",
    icon: Layers,
    skills: [
      "Feature-based",
      "Mobile-first",
      "SSR",
      "SSG",
      "SPA",
      "Agile SCRUM",
    ],
  },
];

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B2 Conversational" },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills & Tools
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Technologies and methodologies I work with to build modern applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-surface-container-low p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface-container-high px-3 py-1 text-xs text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-8 rounded-2xl bg-surface-container-low p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Languages className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Languages
            </h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <span className="font-medium text-foreground">{lang.name}</span>
                <span className="rounded-full bg-surface-container-high px-3 py-1 text-xs text-muted-foreground">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
