export function Footer() {
  return (
    <div className="flex flex-col py-8 text-sm text-muted-foreground leading-relaxed max-w-lg items-center justify-center text-center">
      <p>
        © {new Date().getFullYear()} Meenakshi Madhu &lt;3
        {/* Built with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Vercel
        </a>
        . */}
      </p>
    </div>
  );
}
