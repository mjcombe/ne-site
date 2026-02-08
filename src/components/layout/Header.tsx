import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-surface-raised/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-18 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <div className="w-8 h-8 rounded-md gradient-navy flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">NE</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            NE Trades
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.href
                  ? "text-accent bg-orange-light"
                  : "text-text-secondary hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:01onal" className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-medium">0191 123 4567</span>
          </a>
          <Button variant="navCta" asChild>
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-surface-raised animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-accent bg-orange-light"
                    : "text-text-secondary hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
              <a href="tel:01onal" className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary">
                <Phone className="w-4 h-4" />
                0191 123 4567
              </a>
              <Button variant="cta" size="lg" asChild className="w-full">
                <Link to="/get-started" onClick={() => setMobileOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
