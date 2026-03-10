import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-ne1digital.png";
import { tradeCategories } from "@/data/tradeCategories";

const servicesDropdown = [
  { label: "Websites for Businesses", href: "/services/websites-for-trades", sub: false },
  { label: "Google Business Profile", href: "/services/google-business-profile", sub: false },
  { label: "Service Area Pages", href: "/services/service-area-pages", sub: false },
  { label: "Hosting & Care", href: "/services/hosting-and-care", sub: false },
  { label: "divider", href: "", sub: false },
  { label: "SEO", href: "/services/seo", sub: true },
  { label: "Local SEO", href: "/services/local-seo", sub: true },
  { label: "AI & Generative SEO", href: "/services/ai-seo", sub: true },
  { label: "Ongoing SEO Support", href: "/services/ongoing-seo", sub: true },
];

const aboutDropdown = [
  { label: "About Us", href: "/about", sub: false },
  { label: "Results", href: "/results", sub: false },
  { label: "Reviews", href: "/reviews", sub: false },
  { label: "Blog", href: "/blog", sub: false },
  { label: "Contact", href: "/contact", sub: false },
];

type SimpleDropdown = { label: string; href: string; sub?: boolean }[];

interface NavLink {
  label: string;
  href: string;
  dropdown?: SimpleDropdown;
  megaMenu?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Services", href: "/services", dropdown: servicesDropdown },
  { label: "Who We Help", href: "/who-we-help", megaMenu: true },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about", dropdown: aboutDropdown },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setOpenDesktop(null);
    setOpenMobile(null);
  }, [location.pathname]);

  const isDropdownActive = (dropdown: SimpleDropdown) =>
    dropdown.some((item) => item.href && location.pathname === item.href);

  const isMegaMenuActive = () =>
    tradeCategories.some((cat) => cat.trades.some((t) => location.pathname === t.href));

  return (
    <header className="sticky top-0 z-50 bg-surface-raised/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-18 px-4 md:px-6">
        <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <img src={logoImage} alt="NE1 Digital" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" ref={navRef}>
          {navLinks.map((link) => {
            // Mega menu for Who We Help
            if (link.megaMenu) {
              const isOpen = openDesktop === link.label;
              const isActive = location.pathname === link.href || isMegaMenuActive();
              return (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setOpenDesktop(isOpen ? null : link.label)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                      isActive
                        ? "text-primary font-semibold bg-secondary"
                        : "text-text-secondary hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-card border border-border rounded-lg shadow-xl py-5 px-6 animate-fade-in z-50">
                      <div className="grid grid-cols-2 gap-1">
                        {tradeCategories.map((cat) => {
                          const trade = cat.trades[0];
                          return (
                            <Link
                              key={trade.href}
                              to={trade.href}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                                location.pathname === trade.href
                                  ? "text-primary font-semibold bg-secondary"
                                  : "text-text-secondary hover:text-foreground hover:bg-secondary"
                              }`}
                            >
                              <trade.icon className="w-4 h-4 text-accent shrink-0" />
                              {trade.name}
                            </Link>
                          );
                        })}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link
                          to="/who-we-help"
                          className="text-sm font-medium text-accent hover:underline"
                        >
                          View all industries we work with →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // Standard dropdown
            if (link.dropdown) {
              const isOpen = openDesktop === link.label;
              const isActive = isDropdownActive(link.dropdown);
              return (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setOpenDesktop(isOpen ? null : link.label)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                      isActive
                        ? "text-primary font-semibold bg-secondary"
                        : "text-text-secondary hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-xl py-2 animate-fade-in z-50">
                      {link.dropdown.map((item, idx) => {
                        if (item.label === "divider") {
                          return <div key={`divider-${idx}`} className="my-2 border-t border-border mx-3" />;
                        }
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              item.sub ? "pl-4" : ""
                            } ${
                              location.pathname === item.href
                                ? "text-primary font-semibold bg-secondary"
                                : "text-text-secondary hover:text-foreground hover:bg-secondary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // Simple link
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
          <a href="tel:01916941463" className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-medium">0191 694 1463</span>
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
        <div className="lg:hidden border-t border-border bg-surface-raised animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              // Mobile mega menu
              if (link.megaMenu) {
                const isOpen = openMobile === link.label;
                const isActive = location.pathname === link.href || isMegaMenuActive();
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setOpenMobile(isOpen ? null : link.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary font-semibold bg-secondary"
                          : "text-text-secondary hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="ml-4 mt-1 space-y-3">
                        {tradeCategories.map((cat) => (
                          <div key={cat.label}>
                            <span className="block px-4 py-1 text-xs font-bold text-accent uppercase tracking-wider">{cat.label}</span>
                            {cat.trades.map((trade) => (
                              <Link
                                key={trade.href}
                                to={trade.href}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors ${
                                  location.pathname === trade.href
                                    ? "text-primary font-semibold bg-secondary"
                                    : "text-text-secondary hover:text-foreground hover:bg-secondary"
                                }`}
                              >
                                <trade.icon className="w-3.5 h-3.5 text-accent shrink-0" />
                                {trade.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link
                          to="/who-we-help"
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm font-medium text-accent"
                        >
                          View all →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              // Mobile standard dropdown
              if (link.dropdown) {
                const isOpen = openMobile === link.label;
                const isActive = isDropdownActive(link.dropdown);
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setOpenMobile(isOpen ? null : link.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary font-semibold bg-secondary"
                          : "text-text-secondary hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="ml-4 flex flex-col gap-0.5 mt-1">
                        {link.dropdown.map((item, idx) => {
                          if (item.label === "divider") {
                            return <div key={`divider-${idx}`} className="my-1 border-t border-border mx-4" />;
                          }
                          return (
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
                          );
                        })}
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
              <a href="tel:01916941463" className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary">
                <Phone className="w-4 h-4" />
                0191 694 1463
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