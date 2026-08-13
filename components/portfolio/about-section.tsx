import { GraduationCap, Laptop } from "lucide-react";

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
              My work sits at the intersection of backend engineering and
              full-stack development: designing APIs, data pipelines, and
              distributed systems that hold up in production. From migrating
              Spark pipelines at Citibank to shipping Django backends at
              LOCOMeX and payment integrations at The Buku App, I focus on how
              data flows, where systems break, and how to build things that
              scale cleanly.
            </p>
            <br></br>
            <p>
              I enjoy going deep on backend architecture and full-stack product
              work, understanding edge cases, and shipping solutions that are
              clean, reliable, and intentional.
            </p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/50 p-12">
            <p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:divide-x md:divide-border/40">
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
                  src="/images/locomex-logo.jpeg"
                  alt="LOCOMeX Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <p>Software Engineer Intern</p>
                <p className="text-primary font-medium">LOCOMeX, Inc.</p>
                <p className="text-xs text-muted-foreground/70">
                  Jul 2026 - Present
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white dark:bg-background">
                <img
                  src="/images/thebukuapp-logo.jpeg"
                  alt="The Buku App Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <p>Software Development Intern</p>
                <p className="text-primary font-medium">The Buku App</p>
                <p className="text-xs text-muted-foreground/70">
                  Sep 2025 - Dec 2025
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
                <p>Software Engineer</p>
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
    </section>
  );
}
