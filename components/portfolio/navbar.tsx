"use client"

import { useEffect, useState, useCallback } from "react"
import { Home, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/portfolio/theme-provider"

const navItems = [
  { label: "Home", href: "#home", icon: true },
  { label: "About", href: "#about", icon: false },
  { label: "Experience", href: "#experience", icon: false },
  { label: "Projects", href: "#projects", icon: false },
  { label: "Contact", href: "#contact", icon: false },
]

const mobileNavItems = navItems.filter((item) => !item.icon)

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    const sections = navItems.map(({ href }) =>
      document.querySelector(href)
    )
    sections.forEach((el) => {
      if (el) observer.observe(el)
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-background/90 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-screen-xl flex items-center justify-between px-5 py-4 sm:px-8">
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-secondary/50 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Desktop nav - centered */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex items-center gap-1">
              {navItems.map(({ label, href, icon }) => {
                const sectionId = href.replace("#", "")
                const isActive = activeSection === sectionId
                return (
                  <li key={href}>
                    <a
                      href={href}
                      className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {icon ? <Home className="h-4 w-4" /> : label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Theme toggle - always visible */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu dropdown */}
      <div
        className={`fixed top-[65px] left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center px-6 py-6 gap-1">
          {mobileNavItems.map(({ label, href }) => {
            const sectionId = href.replace("#", "")
            const isActive = activeSection === sectionId
            return (
              <li key={href} className="w-full">
                <a
                  href={href}
                  onClick={closeMobile}
                  className={`flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
