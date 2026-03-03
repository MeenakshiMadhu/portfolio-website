import {
  Server,
  Layout,
  Cloud,
  BrainCircuit,
  PenTool,
  Code,
  GraduationCap,
  Laptop,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code, // Code for Languages
    skills: [
      "Python",
      "Java",
      "C",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Swift",
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: BrainCircuit, // BrainCircuit for ML & AI
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-Learn",
      "XGBoost",
      "TensorFlow",
      "PyTorch",
      "Keras",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud, // Cloud for Cloud & DevOps
    skills: [
      "AWS",
      "GCP",
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
    title: "Frameworks and Databases",
    icon: Server, // Server for Frameworks and Databases
    skills: [
      "Spring Boot",
      "Django",
      "React",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Software Design",
    icon: Layout, // Layout for Software Design
    skills: [
      "System Design",
      "Object-Oriented Programming",
      "Microservices Architecture",
      "Design Patterns",
      "REST APIs",
      "Agile",
      "Git (Version Control)",
    ],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="mb-8 font-serif text-3xl font-normal tracking-tight text-primary sm:text-4xl">
        About Me
      </h2>

      {/* Introduction */}
      <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed mb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border/50 p-12">
            <p>
              My work spans engineering distributed Spark pipelines in
              high-volume financial systems, building AI-driven forecasting
              models, and shipping production-ready mobile applications.
              {/* I am
              drawn to systems that handle real-world complexity, whether it
              involves processing large datasets, synchronizing real-time
              activity, or deploying cloud-native architectures. */}
            </p>
            <br></br>
            <p>
              I enjoy understanding systems deeply, how data flows, where edge
              cases break, and how users actually behave, then building
              solutions that are clean and intentional.
            </p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/50 p-12">
            <p>
              {/* Outside of code, I am endlessly curious about the world. I love
              traveling and understanding culture through food, experimenting in
              the kitchen, and practicing Indian classical music, which I have
              trained in for over a decade. I can easily fall into a
              productivity video rabbit hole and I am currently searching for
              cozy, thoughtfully designed games that feel quiet and clever. */}
              <span className="font-semibold">Outside Tech</span>
              <br />
              <br />I love exploring new cultures through travel and food,
              experimenting in the kitchen, and practicing Indian classical
              music, which I have trained in for over a decade. I enjoy cozy,
              clever games, productivity hacks, and finding ways to make
              everyday life more thoughtful and intentional.
            </p>
          </div>
        </div>
        <br />
        <div className="rounded-lg border border-border/50 p-4">
          <p>
            At my core, I am curious, structured, and ambitious. I believe in
            doing things well, learning constantly, and building work I am
            genuinely proud of.
          </p>
        </div>
      </div>
      <br />
      <br />
      {/* Experience & Education */}
      {/* <h3 className="text-lg font-semibold text-foreground mb-6 text-center md:text-left">
        Experience & Education
      </h3> */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:divide-x md:divide-border/40">
        {/* Work Column */}
        <div className="pr-0 md:pr-6 space-y-5">
          <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground mb-4">
            <Laptop className="h-4 w-4 text-primary" />
            <p className="text-lg">Work</p>
          </h4>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white dark:bg-background">
                <img
                  src="/images/thebukuapp-logo.jpeg"
                  alt="The Buku App Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <p>Software Development Engineer Intern</p>
                <p className="text-primary font-medium">The Buku App</p>
                <p className="text-xs text-muted-foreground/70">
                  Jul 2025 - Dec 2025
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white dark:bg-background">
                <img
                  src="/images/citibank-logo.png"
                  alt="Citi Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <p>Software Development Engineer</p>
                <p className="text-primary font-medium">Citibank</p>
                <p className="text-xs text-muted-foreground/70">
                  Jul 2022 - Jul 2024
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Education Column */}
        <div className="pl-0 md:pl-6 space-y-5">
          <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground mb-4">
            <GraduationCap className="h-4 w-4 text-primary" />
            <p className="text-lg">Education</p>
          </h4>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white dark:bg-background">
                <img
                  src="/images/nyu-logo-2.png"
                  alt="NYU Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <p>M.S. Computer Science</p>
                <p className="text-primary font-medium">New York University</p>
                <p className="text-xs text-muted-foreground/70">2024 - 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white dark:bg-background">
                <img
                  src="/images/nit-calicut-logo.svg"
                  alt="NIT Calicut Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <p>B.Tech. Computer Science</p>
                <p className="text-primary font-medium">
                  National Institute of Technology Calicut
                </p>
                <p className="text-xs text-muted-foreground/70">2018 - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line*/}
      <hr className="my-12 border-t border-border/40" />

      {/* Skills */}
      <div>
        <h3 className="text-lg font-semibold tracking-wide text-foreground mb-6">
          Skills
        </h3>
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
                  <h4 className="text-sm font-mono text-foreground text-muted-foreground">
                    {category.title}
                  </h4>
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
      </div>
    </section>
  );
}
