import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  url: string;
}

const projects: Project[] = [
  {
    title: "CompassNYC",
    description:
      "Built an on-device AI assistant for NYC social services at Spark Hack NVIDIA using RAG (Qwen 2.5 7B, hybrid retrieval) over NYC Open Data, with a natural-language query interface and interactive map for location services.",
    technologies: ["Python", "Qwen 2.5 7B", "RAG", "Hybrid Retrieval"],
    url: "https://github.com/MeenakshiMadhu/spark-hack-CompassNYC",
  },
  {
    title: "scoutAI",
    description:
      "Built a full-stack AI job-matching platform with hybrid semantic search (OpenAI embeddings) and structured resume extraction (GPT-4o-mini), reasoning through a five-tier scaling architecture from first principles.",
    technologies: ["Next.js", "OpenAI Embeddings", "GPT-4o-mini", "RAG"],
    url: "https://github.com/MeenakshiMadhu/scoutAI",
  },
  {
    title: "Real-Time Collaborative Code Editor",
    description:
      "Built a real-time collaborative coding platform with CRDTs (Yjs), WebSockets, and AWS, enabling conflict-free multi-user editing, persistent sessions, and live code execution.",
    technologies: ["Python", "Yjs", "WebSockets", "AWS", "Docker"],
    url: "https://github.com/MeenakshiMadhu/colab-code-editor",
  },
  {
    title: "WealthWise Personal Finance Tracker",
    description:
      "Built a full-stack budgeting app with PostgreSQL, integrating the Plaid API for live financial data and deploying to Azure via Docker and GitHub Actions CI/CD.",
    technologies: ["Django", "PostgreSQL", "Plaid API", "Azure", "Docker"],
    url: "https://github.com/MeenakshiMadhu/WealthWise-Personal-Finance-Tracker",
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
