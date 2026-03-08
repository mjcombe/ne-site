import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-hosting.jpg";

const HostingAndCare = () => (
  <ServicePageLayout
    heroImage={heroImage}
    title="Reliable website hosting and care for trade businesses"
    subtitle="Hosting & Care"
    description="Your website needs to be fast, secure, and always online. We handle all the technical stuff — hosting, updates, security, and backups — so you never have to worry about it."
    whoIsItFor={[
      "Trade businesses that want hassle-free website management",
      "Tradespeople who don't want to deal with hosting and updates",
      "Businesses whose websites have been hacked or run slowly",
      "Any trade business that needs reliable uptime and fast load speeds",
    ]}
    howItHelps={[
      "A slow or broken website loses customers. We keep your site running fast, secure, and always available so you never miss an enquiry.",
      "Regular updates and security patches protect your website from threats and keep everything running smoothly.",
      "Daily backups mean your website can be restored quickly if anything goes wrong, giving you complete peace of mind.",
      "We monitor performance and uptime so we can fix issues before they affect your customers.",
    ]}
    whatsIncluded={[
      "Fast, reliable UK hosting",
      "SSL security certificate",
      "Daily automated backups",
      "WordPress and plugin updates",
      "Security monitoring and protection",
      "Uptime monitoring",
      "Performance optimisation",
      "Priority email and phone support",
    ]}
    expectedOutcomes={[
      "A website that loads fast, runs securely, and is always online when customers need to find you.",
      "Complete peace of mind knowing your website is being looked after by professionals.",
      "No downtime or security issues disrupting your online presence or losing you enquiries.",
      "Free time to focus on your trade instead of worrying about website technical issues.",
    ]}
    relatedServices={[
      { label: "Websites for Trades", href: "/services/websites-for-trades" },
      { label: "Ongoing SEO Support", href: "/services/ongoing-seo" },
      { label: "Google Business Profile", href: "/services/google-business-profile" },
    ]}
  />
);

export default HostingAndCare;
