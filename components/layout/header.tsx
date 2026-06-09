import Link from "next/link";

interface HeaderProps {
  backLink?: string;
  backLabel?: string;
}

export function Header({ backLink, backLabel }: HeaderProps) {
  return (
    <header className="glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-text-secondary/50">
            <span className="h-2 w-2 rounded-full bg-accent-amber" />
          </span>
          my_ui
        </Link>
        {backLink ? (
          <Link
            href={backLink}
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            ← {backLabel || "返回"}
          </Link>
        ) : (
          <nav className="hidden gap-8 text-sm text-text-secondary md:flex">
            <Link href="/" className="hover:text-text-primary transition-colors">
              Works
            </Link>
            <span className="hover:text-text-primary transition-colors cursor-pointer opacity-50">
              About
            </span>
          </nav>
        )}
      </div>
    </header>
  );
}
