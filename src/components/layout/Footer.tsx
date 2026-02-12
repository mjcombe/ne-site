import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Websites for Trades", href: "/services/websites-for-trades" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Google Business Profile", href: "/services/google-business-profile" },
  { label: "Service Area Pages", href: "/services/service-area-pages" },
  { label: "Hosting & Care", href: "/services/hosting-and-care" },
  { label: "Ongoing SEO Support", href: "/services/ongoing-seo" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
  { label: "Get Started", href: "/get-started" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const Footer = () => {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md gradient-teal flex items-center justify-center">
                <span className="font-heading font-bold text-sm text-accent-foreground">NE</span>
              </div>
              <span className="font-heading font-bold text-xl">NE Trades</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Professional websites and local SEO built specifically for trade businesses across the North East and beyond.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:01911234567" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                0191 123 4567
              </a>
              <a href="mailto:hello@netrades.co.uk" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                hello@netrades.co.uk
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 shrink-0" />
                North East England
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/90">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/90">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Help */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/90">
              Trades We Work With
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Electricians", href: "/trades/electricians" },
                { label: "Plumbers", href: "/trades/plumbers" },
                { label: "Builders", href: "/trades/builders" },
                { label: "Roofers", href: "/trades/roofers" },
                { label: "Decorators", href: "/trades/decorators" },
                { label: "Joiners & Carpenters", href: "/trades/joiners" },
                { label: "Landscapers", href: "/trades/landscapers" },
                { label: "Heating Engineers", href: "/trades/heating-engineers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} NE Trades. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
