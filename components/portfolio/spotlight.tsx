"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/portfolio/theme-provider";

export function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const color =
    theme === "dark" ? "rgba(189, 131, 56, 0.06)" : "rgba(130, 88, 20, 0.04)";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden lg:block"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, ${color}, transparent 80%)`,
      }}
    />
  );
}
