import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import { Spotlight } from "@/components/portfolio/spotlight";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Spotlight />
      <Navbar />

      {/* Hero - full viewport, 2-col centered */}
      <HeroSection />

      {/* Content sections */}
      <main className="mx-auto max-w-screen-lg px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col gap-20 py-12 sm:gap-24 sm:py-16 lg:gap-28 lg:py-24">
          <AboutSection />
          {/* <ExperienceSection /> */}
          {/* <ProjectsSection /> */}
        </div>
      </main>

      {/* Experience - full-width distinct background */}
      <section className="bg-card">
        <div className="mx-auto max-w-screen-lg px-5 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-28">
          <ExperienceSection />
        </div>
      </section>

      <main className="mx-auto max-w-screen-lg px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col gap-20 py-12 sm:gap-24 sm:py-16 lg:gap-28 lg:py-24">
          <ProjectsSection />
        </div>
      </main>

      {/* Contact - full-width distinct background */}
      <section className="bg-card">
        <div className="mx-auto max-w-screen-lg px-5 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-28">
          <ContactSection />
        </div>
      </section>

      <footer className="flex items-center justify-center mx-auto max-w-screen-lg px-5 sm:px-8 md:px-12 lg:px-24">
        <Footer />
      </footer>
    </div>
  );
}
