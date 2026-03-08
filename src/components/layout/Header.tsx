import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";

const servicesDropdown = [
  { label: "Websites for Trades", href: "/services/websites-for-trades" },
  { label: "Google Business Profile", href: "/services/google-business-profile" },
  { label: "Service Area Pages", href: "/services/service-area-pages" },
  { label: "Hosting & Care", href: "/services/hosting-and-care" },
];

const seoDropdown = [
  { label: "SEO for Trades", href: "/services/seo" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "AI & Generative SEO", href: "/services/ai-seo" },
  { label: "Ongoing SEO Support", href: "/services/ongoing-seo" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: servicesDropdown },
  { label: "SEO", href: "/services/seo", dropdown: seoDropdown },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setOpenDesktop(null);
    setOpenMobile(null);
  }, [location.pathname]);

  const isSeoPaths = seoDropdown.some((item) => location.pathname === item.href);

  return (
    <header className="sticky top-0 z-50 bg-surface-raised/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-18 px-4 md:px-6">
        <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <img src={logoImage} alt="NE1 Trades" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                      isSeoPaths
                        ? "text-primary font-semibold bg-secondary"
                        : "text-text-secondary hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${desktopDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {desktopDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-card border border-border rounded-lg shadow-lg py-1 animate-fade-in z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === item.href
                              ? "text-primary font-semibold bg-secondary"
                              : "text-text-secondary hover:text-foreground hover:bg-secondary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.href
                    ? "text-primary font-semibold bg-secondary"
                    : "text-text-secondary hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:07463687129" className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-medium">07463 687129</span>
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
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        isSeoPaths
                          ? "text-primary font-semibold bg-secondary"
                          : "text-text-secondary hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="ml-4 flex flex-col gap-0.5 mt-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`px-4 py-2.5 rounded-md text-sm transition-colors ${
                              location.pathname === item.href
                                ? "text-primary font-semibold bg-secondary"
                                : "text-text-secondary hover:text-foreground hover:bg-secondary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-primary font-semibold bg-secondary"
                      : "text-text-secondary hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
              <a href="tel:07463687129" className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary">
                <Phone className="w-4 h-4" />
                07463 687129
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
