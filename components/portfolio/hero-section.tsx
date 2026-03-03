import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/MeenakshiMadhu",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/meenakshi-madhu",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:mm14029@nyu.edu",
    icon: Mail,
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] items-center justify-center px-6 scroll-mt-24 dotted-bg"
    >
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
        {/* Photo */}
        <div className="relative shrink-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-full ring-2 ring-primary/20 ring-offset-4 ring-offset-background sm:h-56 sm:w-56 md:h-64 md:w-64">
            <Image
              src="/images/portrait.jpeg"
              alt="Portrait photo"
              fill
              className="object-cover"
              style={{ objectPosition: "center calc(50% + 10px)" }}
              priority
            />
          </div>
          <div className="absolute -inset-2 -z-10 rounded-full bg-primary/10 blur-2xl" />
        </div>

        {/* Details */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Meenakshi Madhu
          </h1>
          <h2 className="mt-3 text-lg font-medium text-primary sm:text-xl">
            Software Engineer
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground leading-relaxed text-sm sm:text-base">
            Software engineer with 2+ years of experience building scalable
            systems and intelligent applications that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#experience"
              className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1zTSm0ERilLESkIOZyEJxfd67zhTWzI3A/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
            >
              View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:text-primary hover:bg-primary/10"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
