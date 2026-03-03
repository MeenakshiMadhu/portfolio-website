import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "2022 — 2024",
    title: "Software Development Engineer",
    company: "Citibank",
    companyUrl: "#",
    description:
      "Engineered distributed ETL pipelines with Apache Spark, Java, and Oracle SQL to process high-volume financial transactions, modernized legacy batch processes into REST APIs, and drove system maintainability through code reviews and technical documentation.",
    technologies: ["Apache Spark", "Java", "Oracle SQL", "REST APIs", "Git"],
  },
  {
    period: "Jan 2025 -Present",
    title: "Student Researcher",
    company: "NYU ML for Energy Commodity Markets",
    companyUrl: "#",
    description:
      "Designed and optimized deep learning time-series models (ESNN, RNN, LSTM, GRU, Attention) to forecast next-day oil prices from macroeconomic data, improving predictive accuracy and model stability.",
    technologies: ["Python", "TensorFlow", "PyTorch"],
  },
  {
    period: "Jan 2025 - Present",
    title: "Student Researcher",
    company: "NYU Sixth Sense",
    companyUrl: "#",
    description:
      "Working with an interdisciplinary research team at NYU to develop wearable assistive technology to promote safe autonomous mobility among the visually impaired.",
    technologies: [],
  },
  {
    period: "Jul 2025 - Dec 2025",
    title: "Software Development Engineer Intern",
    company: "The Buku App",
    companyUrl: "#",
    description:
      "Built and launched a production-ready iOS marketplace app using Swift and Firebase, implementing secure authentication, real-time data synchronization, and payment integration, supporting 70+ active users while maintaining a clean, scalable codebase.",
    technologies: [
      "Swift",
      "Firebase",
      "iOS Development",
      "Stripe Payment Integration",
      "Git",
    ],
  },
  {
    period: "May 2021 – Jul 2021",
    title: "Software Developer Technology Analyst Intern",
    company: "Citibank",
    companyUrl: "#",
    description:
      "Developed and deployed Java Spring Boot microservices with a JavaScript dashboard to monitor critical financial systems in real-time, reducing issue identification time by 40% for internal teams.",
    technologies: ["Java", "JavaScript", "REST APIs", "Microservices"],
  },
  // {
  //   period: "Nov 2020 — Aug 2021",
  //   title: "Backend Development Intern",
  //   company: "Onfluence Ltd.",
  //   companyUrl: "#",
  //   description:
  //     "Built scalable Flask APIs with MySQL for an online slot-booking platform, optimizing queries and caching to cut average response time by 90%, improving user engagement and retention.",
  //   technologies: ["Flask", "MySQL", "REST APIs", "Docker"],
  // },
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
        <h3 className="font-medium text-foreground leading-snug">
          {experience.title}
          {/* <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> */}
        </h3>
        <h3 className="font-medium text-accent/60 leading-snug">
          {experience.company}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
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
          <ExperienceCard key={exp.period} experience={exp} />
        ))}
      </div>
      <a
        href="https://drive.google.com/file/d/1zTSm0ERilLESkIOZyEJxfd67zhTWzI3A/view?usp=sharing"
        className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        View Full Resume
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </section>
  );
}
