import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Buttons } from "./design-system/Buttons";
import { Cards } from "./design-system/Cards";
import { ColorPalette } from "./design-system/ColorPalette";
import { Forms } from "./design-system/Forms";
import { Logo } from "./design-system/Logo";
import { Modals } from "./design-system/Modals";
import { Typography } from "./design-system/Typography";
import { Button } from "./ui/button";

export function DesignSystemShowcase() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a preference stored
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--kontron-gradient-linear)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1
                className="text-5xl text-white mb-2"
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: 900,
                  letterSpacing: "-0.01em",
                }}
              >
                Kontron Design System
              </h1>
              <p
                className="text-xl text-white/80"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 300 }}
              >
                Component Library based on PrimeNG — Kontron Branding
              </p>
            </div>
            <Button onClick={toggleTheme} variant="ghost" size="icon">
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {[
          { id: "logo", label: "Logo", child: <Logo /> },
          { id: "colors", label: "Color Palette", child: <ColorPalette /> },
          { id: "typography", label: "Typography", child: <Typography /> },
          { id: "buttons", label: "Buttons", child: <Buttons /> },
          { id: "forms", label: "Form Components", child: <Forms /> },
          { id: "cards", label: "Cards", child: <Cards /> },
          { id: "modals", label: "Modals & Dialogs", child: <Modals /> },
        ].map(({ id, label, child }) => (
          <section key={id} id={id} className="mb-16">
            <h2 className="ds-page-title text-3xl text-foreground mb-6">
              {label}
            </h2>
            {child}
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground">
          <p style={{ fontFamily: "var(--font-primary)", fontWeight: 300 }}>
            © 2026 Kontron. Design System Documentation
          </p>
        </div>
      </footer>
    </div>
  );
}
