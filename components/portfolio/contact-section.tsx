"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";

const EMAIL = "meenakshimadhu00@gmail.com";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/meenakshi-madhu",
    icon: Linkedin,
    description: "Connect with me",
  },
  {
    label: "GitHub",
    href: "https://github.com/MeenakshiMadhu",
    icon: Github,
    description: "Check out my code",
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: Mail,
    description: "Drop me a mail",
  },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
        {/* Left column */}
        <div className="flex-1">
          <h3 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl text-balance">
            {"Let's connect!"}
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-sm">
            I live in New York City, NY, USA. Let's grab some coffee if you are
            around here! <br />
            <br />
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something great.
          </p>
        </div>

        {/* Right column - social links */}
        <div className="flex flex-col gap-3 md:min-w-[260px]">
          {contactLinks.map(({ label, href, icon: Icon, description }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 p-4 transition-all duration-200 hover:bg-secondary/40 hover:border-border"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">{label}</p>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          ))}

          <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 p-3">
            <code className="flex-1 truncate text-sm text-muted-foreground">
              {EMAIL}
            </code>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
