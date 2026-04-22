
import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";

export type Experience = {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
};

export const ExperienceCard = ({ exp }: { exp: Experience }) => {
  return (
    <div
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
  );
};
