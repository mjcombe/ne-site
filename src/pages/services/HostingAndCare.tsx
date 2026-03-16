import ServicePageLayout from "@/components/ServicePageLayout";

const HostingAndCare = () => (
  <ServicePageLayout
    title="Reliable website hosting and care for your business"
    subtitle="Hosting & Care"
    description="Your website needs to be fast, secure, and always online. We handle all the technical stuff — hosting, updates, security, and backups — so you never have to worry about it."
    whoIsItFor={[
      "Businesses that want hassle-free website management",
      "Companies that don't want to deal with hosting and updates themselves",
      "Businesses whose websites have been hacked or run slowly",
      "Any business that needs reliable uptime and fast load speeds",
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
      "Free time to focus on running your business instead of worrying about technical issues.",
    ]}
    relatedServices={[
      { label: "Websites for Businesses", href: "/services/websites-for-trades" },
      { label: "Ongoing SEO Support", href: "/services/ongoing-seo" },
      { label: "Google Business Profile", href: "/services/google-business-profile" },
    ]}
  />
);

export default HostingAndCare;
