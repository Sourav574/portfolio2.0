import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const navItems = [
  { href: "/", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  location === item.href
                    ? "text-foreground font-semibold"
                    : "text-foreground/60"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex overflow-x-auto gap-4 pb-2 px-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "transition-colors hover:text-foreground/80 whitespace-nowrap",
                  location === item.href
                    ? "text-foreground font-semibold"
                    : "text-foreground/60"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Resume
          </Button>
        </div>
      </div>
    </header>
  );
}