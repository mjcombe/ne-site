import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ChevronDown, Phone } from "lucide-react";
import { tradeCategories } from "@/data/tradeCategories";
import { locations } from "@/data/locations";

const serviceLinks = [
  { label: "Websites for Businesses", href: "/services/websites-for-trades" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Google Business Profile", href: "/services/google-business-profile" },
  { label: "Service Area Pages", href: "/services/service-area-pages" },
  { label: "Hosting & Care", href: "/services/hosting-and-care" },
  { label: "Ongoing SEO", href: "/services/ongoing-seo" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Our Pricing", href: "/pricing" },
  { label: "Client Results", href: "/results" },
  { label: "Our Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-of-service" },
  { label: "Cookies", href: "/cookie-policy" },
];

const regionOrder = ["Tyne and Wear", "Northumberland", "County Durham", "Teesside"];
const locationsByRegion = regionOrder.map((region) => ({
  region,
  locations: locations.filter((loc) => loc.county === region),
})).filter((g) => g.locations.length > 0);

// Industry groups with collapsible sub-items
const industryGroups = [
  {
    label: "Trade & Property",
    items: tradeCategories.filter((c) =>
      ["Trades & Home Services", "Property & Construction", "Cleaning & Maintenance", "Security Services"].includes(c.label)
    ),
  },
  {
    label: "Health & Lifestyle",
    items: tradeCategories.filter((c) =>
      ["Health & Wellbeing", "Beauty & Aesthetics", "Hair & Barbering", "Sports & Fitness", "Care & Support"].includes(c.label)
    ),
  },
  {
    label: "Business & Professional",
    items: tradeCategories.filter((c) =>
      ["Professional Services", "IT & Technology", "Education & Training", "Retail & Ecommerce", "Logistics & Moving"].includes(c.label)
    ),
  },
  {
    label: "Hospitality & Events",
    items: tradeCategories.filter((c) =>
      ["Hospitality & Food", "Events & Creative", "Wedding Services", "Childcare & Family", "Pet Services", "Automotive"].includes(c.label)
    ),
  },
];

const CollapsibleSection = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors py-0.5"
      >
        <span>{label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="ml-3 mt-1 mb-1.5 flex flex-col gap-0.5">{children}</div>}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <span className="font-heading font-bold text-lg text-primary-foreground">NE1 Digital</span>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mt-2 mb-4 max-w-xs">
              Web design & local SEO for businesses across the North East. 200+ websites built.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <a href="mailto:hello@ne1webdesign.co.uk" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                hello@ne1webdesign.co.uk
              </a>
              <a href="tel:01916941463" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                0191 694 1463
              </a>
            </div>
          </div>

          {/* Services & Company side by side on mobile */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider mb-3 text-primary-foreground/90">
              Services
            </h4>
            <ul className="flex flex-col gap-1.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider mb-3 text-primary-foreground/90">
              Company
            </h4>
            <ul className="flex flex-col gap-1.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Help - collapsible groups */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider mb-3 text-primary-foreground/90">
              Who We Help
            </h4>
            <div className="flex flex-col gap-1">
              {industryGroups.map((group) => (
                <CollapsibleSection key={group.label} label={group.label}>
                  {group.items.map((cat) => {
                    const trade = cat.trades[0];
                    return (
                      <Link
                        key={trade.href}
                        to={trade.href}
                        className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors py-0.5"
                      >
                        {trade.name}
                      </Link>
                    );
                  })}
                </CollapsibleSection>
              ))}
              <Link
                to="/who-we-help"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mt-1.5 font-medium"
              >
                All Industries →
              </Link>
            </div>
          </div>

          {/* Locations Covered - collapsible regions */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider mb-3 text-primary-foreground/90">
              Locations Covered
            </h4>
            <div className="flex flex-col gap-1">
              {locationsByRegion.map((group) => (
                <CollapsibleSection key={group.region} label={group.region}>
                  {group.locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/locations/${loc.slug}`}
                      className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors py-0.5"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </CollapsibleSection>
              ))}
              <Link
                to="/locations"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mt-1.5 font-medium"
              >
                All Locations →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} NE1 Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors"
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
