// Footer component
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { tradeCategories } from "@/data/tradeCategories";

const serviceLinks = [
  { label: "Websites for Businesses", href: "/services/websites-for-trades" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Google Business Profile", href: "/services/google-business-profile" },
  { label: "Service Area Pages", href: "/services/service-area-pages" },
  { label: "Hosting & Care", href: "/services/hosting-and-care" },
  { label: "Ongoing SEO Support", href: "/services/ongoing-seo" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Offices */}
          <div className="lg:col-span-1">
            <span className="font-heading font-bold text-xl text-primary-foreground">NE1 Digital</span>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Professional web design and local SEO for businesses across North Tyneside, Teesside and the wider North East.
            </p>

            {/* North Tyneside Office */}
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary-foreground/60" />
              <div className="text-sm text-primary-foreground/70 leading-relaxed">
                <span className="block font-semibold text-primary-foreground/90">North Tyneside</span>
                Suite 2.6a, North Tyneside Business Centre,<br />
                North Shields, NE30 1NT
                <a href="tel:01916941463" className="block mt-1 hover:text-primary-foreground transition-colors">0191 694 1463</a>
              </div>
            </div>

            {/* Teesside Office */}
            <div className="flex items-start gap-2 mb-5">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary-foreground/60" />
              <div className="text-sm text-primary-foreground/70 leading-relaxed">
                <span className="block font-semibold text-primary-foreground/90">Teesside</span>
                Norton High Street, TS20
                <a href="tel:07463687129" className="block mt-1 hover:text-primary-foreground transition-colors">07463 687129</a>
              </div>
            </div>

            <a href="mailto:hello@ne1webdesign.co.uk" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4 shrink-0" />
              hello@ne1webdesign.co.uk
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/90">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
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
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Help - Collapsible Categories */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/90">
              Who We Help
            </h4>
            <div className="flex flex-col gap-1">
              {tradeCategories.map((cat) => {
                const trade = cat.trades[0];
                return (
                  <Link
                    key={trade.href}
                    to={trade.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors py-0.5"
                  >
                    {trade.name}
                  </Link>
                );
              })}
              <Link
                to="/who-we-help"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors mt-2 font-medium"
              >
                View All →
              </Link>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/90">
              Locations
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Newcastle", href: "/locations/newcastle" },
                { label: "Sunderland", href: "/locations/sunderland" },
                { label: "Gateshead", href: "/locations/gateshead" },
                { label: "Durham", href: "/locations/durham" },
                { label: "North Shields", href: "/locations/north-shields" },
                { label: "Darlington", href: "/locations/darlington" },
                { label: "Middlesbrough", href: "/locations/middlesbrough" },
                { label: "All Locations", href: "/locations" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
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
            © {new Date().getFullYear()} NE1 Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
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