import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
  logo?: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "Jul 2026 - Present",
    title: "Software Engineer Intern",
    company: "LOCOMeX, Inc.",
    companyUrl: "#",
    logo: "/images/locomex-logo.jpeg",
    description:
      "Ship full-stack features end-to-end (Python/Django) on a B2B supplier-management SaaS platform, from backend logic and APIs to role-based dashboards, in a fast-moving startup team.",
    technologies: ["Python", "Django", "REST APIs", "PostgreSQL", "Git"],
  },
  {
    period: "Sep 2025 - Dec 2025",
    title: "Software Development Intern",
    company: "The Buku App",
    companyUrl: "#",
    logo: "/images/thebukuapp-logo.jpeg",
    description:
      "Led a 3-member team to architect, build, and release a consumer marketplace app to 100+ live users in under 2 months. Owned Stripe payments, real-time sync, and auth integrations end-to-end.",
    technologies: [
      "Swift",
      "Firebase",
      "Stripe",
      "REST APIs",
      "Git",
    ],
  },
  {
    period: "Jan 2026 - May 2026",
    title: "Student Researcher",
    company: "NYU ML for Energy Commodity Markets",
    companyUrl: "#",
    logo: "/images/nyu-logo-2.png",
    description:
      "Designed and optimized deep learning time-series models (ESNN, RNN, LSTM, GRU, Attention) to forecast next-day oil prices from macroeconomic data, improving predictive accuracy and model stability.",
    technologies: ["Python", "TensorFlow", "PyTorch"],
  },
  {
    period: "Jan 2026 - May 2026",
    title: "Student Researcher",
    company: "NYU Sixth Sense",
    companyUrl: "#",
    logo: "/images/nyu-logo-2.png",
    description:
      "Working with an interdisciplinary research team at NYU to develop wearable assistive technology to promote safe autonomous mobility among the visually impaired.",
    technologies: [],
  },
  {
    period: "Jul 2022 - Jul 2024",
    title: "Software Engineer",
    company: "Citibank",
    companyUrl: "#",
    logo: "/images/citibank-logo.png",
    description:
      "Migrated batch file-processing from Ab Initio to Apache Spark (20% faster) and legacy mainframe queues to REST microservices. Built Java parsers for financial data across 6+ enterprise clients.",
    technologies: ["Apache Spark", "Java", "REST APIs", "Microservices", "Git"],
  },
  {
    period: "May 2021 - Jul 2021",
    title: "Software Engineer Intern",
    company: "Citibank",
    companyUrl: "#",
    logo: "/images/citibank-logo.png",
    description:
      "Built Spring Boot health-check microservices and a real-time observability dashboard for critical banking infrastructure, cutting issue-identification time by 40%.",
    technologies: ["Java", "Spring Boot", "JavaScript", "REST APIs", "Microservices"],
  },
];

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <a
      href={experience.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid gap-4 rounded-lg p-4 -mx-4 transition-all duration-200 hover:bg-secondary/50 sm:grid-cols-[180px_1fr]"
    >
      <span className="text-xs font-mono text-muted-foreground pt-1 tracking-wide">
        {experience.period}
      </span>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          {experience.logo && (
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md bg-white dark:bg-background">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="font-medium text-foreground leading-snug">
              {experience.title}
            </h3>
            <h3 className="font-medium text-accent/60 leading-snug">
              {experience.company}
            </h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {experience.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-primary/10 text-primary border-0 font-mono text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </a>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="mb-8 font-serif text-3xl font-normal tracking-tight text-primary sm:text-4xl">
        Experience
      </h2>
      <div className="flex flex-col gap-2">
        {experiences.map((exp) => (
          <ExperienceCard
            key={`${exp.period}-${exp.company}`}
            experience={exp}
          />
        ))}
      </div>
      <a
        href="https://drive.google.com/file/d/1sthRJotnn46zt5n8LpHoirBJuqIOOoHo/view?usp=drive_link"
        className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        View Full Resume
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </section>
  );
}
