import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  url: string;
}

const projects: Project[] = [
  {
    title: "Collaborative Code Editor",
    description:
      "Designed and deployed a real-time collaborative code editor using CRDTs (Yjs), WebSockets, and AWS cloud infrastructure, enabling scalable, fault-tolerant multi-user editing with low-latency synchronization.",
    technologies: ["Node.js", "Yjs", "WebSockets", "AWS", "Docker"],
    url: "https://github.com/MeenakshiMadhu/colab-code-editor",
  },
  {
    title: "AI Restaurant Concierge Chatbot",
    description:
      "Engineered a serverless backend system on AWS (Lambda, DynamoDB, SQS, Elasticsearch) to process and respond to user queries in real time, demonstrating cloud-native application design and scalable data pipelines.",
    technologies: ["AWS Lambda", "DynamoDB", "SQS", "Elasticsearch"],
    url: "https://github.com/MeenakshiMadhu/AWS-Restaurant-Concierge-Chatbot",
  },
  {
    title: "PCOS Detection using Machine Learning Models",
    description:
      "Built end-to-end ML pipeline for clinical diagnosis, comparing Random Forest, XGBoost, and SVM classifiers with hyperparameter tuning (GridSearchCV) and feature importance analysis, achieving 87.9% accuracy.",
    technologies: ["Python", "Scikit-Learn", "XGBoost", "SVM", "GridSearchCV"],
    url: "https://github.com/MeenakshiMadhu/PCOS-Detection-ML-Models",
  },
  {
    title: "WealthWise Personal Finance Tracker",
    description:
      "Architected and deployed a containerized full-stack personal finance application using Django, PostgreSQL, and Docker, implementing RESTful APIs and a mock CI/CD pipeline to enable automated testing and streamlined deployment.",
    technologies: ["Django", "PostgreSQL", "Docker", "RESTful APIs"],
    url: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-border/50 bg-card/50 p-5 transition-all duration-200 hover:bg-secondary/40 hover:border-border"
    >
      <h3 className="flex items-center gap-1 font-medium text-foreground">
        {project.title}
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-mono text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="mb-8 font-serif text-3xl font-normal tracking-tight text-primary sm:text-4xl">
        Projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
