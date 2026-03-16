import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ChevronDown, Phone } from "lucide-react";
import { tradeCategories } from "@/data/tradeCategories";
import { locations } from "@/data/locations";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

          {/* Brand + Offices */}
          <div>
            <span className="font-heading font-bold text-lg text-primary-foreground">NE1 Digital</span>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mt-2 mb-4 max-w-xs">
              Web design & local SEO for businesses across the North East. 200+ websites built.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60 mb-5">
              <a href="mailto:hello@ne1webdesign.co.uk" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                hello@ne1webdesign.co.uk
              </a>
            </div>

            {/* North Tyneside Office */}
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 mb-1">North Tyneside</p>
              <div className="flex items-start gap-1.5 text-xs text-primary-foreground/50 leading-relaxed">
                <MapPin className="w-3 h-3 shrink-0 mt-0.5" />
                <span>Suite 2.6a, North Tyneside Business Centre, North Shields, NE30 1NT</span>
              </div>
              <a href="tel:01916941463" className="flex items-center gap-1.5 text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors mt-1">
                <Phone className="w-3 h-3 shrink-0" />
                0191 694 1463
              </a>
            </div>

            {/* Teesside Office */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 mb-1">Teesside</p>
              <div className="flex items-start gap-1.5 text-xs text-primary-foreground/50 leading-relaxed">
                <MapPin className="w-3 h-3 shrink-0 mt-0.5" />
                <span>Norton High Street, TS20</span>
              </div>
              <a href="tel:07463687129" className="flex items-center gap-1.5 text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors mt-1">
                <Phone className="w-3 h-3 shrink-0" />
                07463 687129
              </a>
            </div>
          </div>

          {/* Who We Help */}
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

          {/* Locations Covered */}
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

          {/* Quick Links (lean) */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider mb-3 text-primary-foreground/90">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-1.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Pricing", href: "/pricing" },
                { label: "Our Reviews", href: "/reviews" },
                { label: "Client Results", href: "/results" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
