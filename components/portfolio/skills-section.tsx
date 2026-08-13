import {
  Server,
  Layout,
  Cloud,
  BrainCircuit,
  Code,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      "Python",
      "Java",
      "C",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Swift",
      "HTML/CSS",
    ],
  },
  {
    title: "Frameworks and Databases",
    icon: Server,
    skills: [
      "Spring Boot",
      "Django",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
    ],
  },
  {
    title: "Software Design",
    icon: Layout,
    skills: [
      "System Design",
      "Distributed Systems",
      "Object-Oriented Programming",
      "Microservices Architecture",
      "Design Patterns",
      "REST APIs",
      "Agile",
      "Git (Version Control)",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "Firebase",
      "CI/CD",
      "Linux/Unix",
      "Apache Spark",
      "ElasticSearch",
      "Git",
      "GitHub Actions",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-Learn",
      "XGBoost",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Embeddings",
      "RAG",
      "LLM Integration",
      "Agentic AI",
      "OpenAI",
      "Anthropic",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="mb-8 font-serif text-3xl font-normal tracking-tight text-primary sm:text-4xl">
        Skills
      </h2>
      <div className="grid gap-4 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="rounded-lg border border-border/50 bg-card/50 p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-mono text-muted-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
