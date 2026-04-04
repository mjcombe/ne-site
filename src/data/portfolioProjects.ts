import portfolioOndaPilates1 from "@/assets/portfolio-ondapilates-1.png";
import portfolioOndaPilates2 from "@/assets/portfolio-ondapilates-2.png";
import portfolioOndaPilates3 from "@/assets/portfolio-ondapilates-3.png";
import portfolioOndaPilates4 from "@/assets/portfolio-ondapilates-4.png";
import portfolioNewcastleCare1 from "@/assets/portfolio-newcastlecare-1.png";
import portfolioNewcastleCare2 from "@/assets/portfolio-newcastlecare-2.png";
import portfolioNewcastleCare3 from "@/assets/portfolio-newcastlecare-3.png";
import portfolioNewcastleCare4 from "@/assets/portfolio-newcastlecare-4.png";
import portfolioIntegrity1 from "@/assets/portfolio-integrity-plumb-1.webp";
import portfolioIntegrity2 from "@/assets/portfolio-integrity-plumb-2.webp";
import portfolioIntegrity3 from "@/assets/portfolio-integrity-plumb-3.webp";
import portfolioIntegrity4 from "@/assets/portfolio-integrity-plumb-4.webp";
import portfolioSkinrenu1 from "@/assets/portfolio-skinrenu-1.png";
import portfolioSkinrenu2 from "@/assets/portfolio-skinrenu-2.png";
import portfolioSkinrenu3 from "@/assets/portfolio-skinrenu-3.png";
import portfolioSkinrenu4 from "@/assets/portfolio-skinrenu-4.png";
import portfolioNewcastleTherapy1 from "@/assets/portfolio-newcastletherapy-1.png";
import portfolioNewcastleTherapy2 from "@/assets/portfolio-newcastletherapy-2.png";
import portfolioNewcastleTherapy3 from "@/assets/portfolio-newcastletherapy-3.png";
import portfolioNewcastleTherapy4 from "@/assets/portfolio-newcastletherapy-4.png";
import portfolioTynemouthYoga1 from "@/assets/portfolio-tynemouthyoga-1.png";
import portfolioTynemouthYoga2 from "@/assets/portfolio-tynemouthyoga-2.png";
import portfolioTynemouthYoga3 from "@/assets/portfolio-tynemouthyoga-3.png";
import portfolioTynemouthYoga4 from "@/assets/portfolio-tynemouthyoga-4.png";

export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  thumbnail: string;
  websiteUrl?: string;
  images: string[];
  services: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "onda-pilates-website",
    title: "ŌNDA Pilates",
    client: "ŌNDA Pilates",
    industry: "Pilates & Wellness",
    description:
      "A sleek, premium website designed for ŌNDA Pilates, a new reformer pilates studio opening in Durham city centre. The site was built to capture the studio's modern brand identity, showcase class offerings, and drive waitlist sign-ups ahead of launch. With a strong focus on visual impact and user experience, the site positions ŌNDA as a destination studio from day one.",
    thumbnail: portfolioOndaPilates1,
    websiteUrl: "https://www.ondapilates.co.uk/",
    images: [portfolioOndaPilates1, portfolioOndaPilates2, portfolioOndaPilates3, portfolioOndaPilates4],
    services: ["Website Design"],
    results: [
      "Premium pre-launch website built to establish brand presence",
      "Waitlist sign-ups driven through compelling landing pages",
      "Class structure and studio details presented clearly",
      "Strong visual identity established ahead of studio opening",
    ],
  },
  {
    slug: "tynemouth-yoga-website",
    title: "Tynemouth Yoga Collective",
    client: "Tynemouth Yoga Collective",
    industry: "Yoga & Wellness",
    description:
      "A modern, calming website designed for Tynemouth Yoga Collective, a yoga studio based on the beautiful Tynemouth coast. The site was built to reflect the studio's welcoming atmosphere, showcase classes and instructors, and make it easy for visitors to book sessions. Local SEO was implemented from launch to improve visibility for yoga searches across Tynemouth and the wider North East.",
    thumbnail: portfolioTynemouthYoga1,
    websiteUrl: "https://tynemouthyoga.co.uk/",
    images: [portfolioTynemouthYoga1, portfolioTynemouthYoga2, portfolioTynemouthYoga3, portfolioTynemouthYoga4],
    services: ["Website Design", "Local SEO", "Google Business Profile"],
    results: [
      "Beautiful website launched to reflect the studio's brand",
      "Improved visibility for yoga searches in Tynemouth",
      "Increased class bookings from new students",
      "Strong foundation for ongoing SEO and local growth",
    ],
  },
  {
    slug: "newcastle-therapy-website",
    title: "Newcastle Therapy",
    client: "Newcastle Therapy",
    industry: "Counselling & Psychotherapy",
    description:
      "A calming, professional website designed for Newcastle Therapy, a counselling and psychotherapy practice based in Newcastle upon Tyne. The site was built to create a welcoming first impression, clearly present the services available, and make it easy for potential clients to book a free consultation. Local SEO was implemented from launch to improve visibility for therapy searches across Newcastle and surrounding areas.",
    thumbnail: portfolioNewcastleTherapy1,
    websiteUrl: "https://newcastletherapy.co.uk/",
    images: [portfolioNewcastleTherapy1, portfolioNewcastleTherapy2, portfolioNewcastleTherapy3, portfolioNewcastleTherapy4],
    services: ["Website Design", "Local SEO", "Google Business Profile", "Service Area Pages"],
    results: [
      "Professional website launched to build trust with potential clients",
      "Improved visibility for therapy searches in Newcastle",
      "Increased consultation bookings from new clients",
      "Strong foundation for ongoing SEO and local growth",
    ],
  },
  {
    slug: "skin-renu-website",
    title: "Skin Renu",
    client: "Skin Renu",
    industry: "Aesthetics & Beauty",
    description:
      "A premium website designed for Skin Renu, a medically led aesthetics clinic based in the heart of Newcastle upon Tyne. The site was built to reflect the clinic's refined brand, showcase their range of treatments, and make it easy for clients to book consultations. Local SEO was implemented from launch to improve visibility for aesthetic treatment searches across Newcastle.",
    thumbnail: portfolioSkinrenu1,
    websiteUrl: "https://skinrenu.co.uk/",
    images: [portfolioSkinrenu1, portfolioSkinrenu2, portfolioSkinrenu3, portfolioSkinrenu4],
    services: ["Website Design", "Local SEO", "Google Business Profile"],
    results: [
      "Premium website launched to reflect the clinic's brand",
      "Improved visibility for aesthetics searches in Newcastle",
      "Increased consultation bookings from new clients",
      "Strong foundation for ongoing SEO growth",
    ],
  },
  {
    slug: "newcastle-care-website",
    title: "Newcastle Care",
    client: "Newcastle Care",
    industry: "Home Care Services",
    description:
      "A brand new website created for Newcastle Care, a professional home care provider supporting individuals and families across Newcastle and the surrounding areas. The goal was to design a modern, trustworthy website that clearly communicates the services available while making it simple for families to enquire about care.\n\nThe site was built with a clean layout, clear service pages and strong calls to action to help visitors quickly understand the support available. Local SEO was implemented from launch to improve visibility in Google for home care searches across Newcastle, helping the business attract more enquiries from local families.",
    thumbnail: portfolioNewcastleCare1,
    websiteUrl: "https://newcastlecare.co.uk/",
    images: [portfolioNewcastleCare1, portfolioNewcastleCare2, portfolioNewcastleCare3, portfolioNewcastleCare4],
    services: ["Website Design", "Local SEO", "Google Business Profile"],
    results: [
      "New professional website launched to support local growth",
      "Improved visibility for home care searches in Newcastle",
      "Increased enquiries from families seeking care support",
      "Strong foundation for ongoing SEO and Google Business Profile growth",
    ],
  },
  {
    slug: "integrity-plumb-website",
    title: "Integrity Plumb",
    client: "Integrity Plumb",
    industry: "Plumbing & Heating",
    description:
      "A full website design and local SEO project for Integrity Plumb, a trusted plumbing and heating company based in County Durham. We built a professional, high-converting website with service pages, area pages, and Google Business Profile optimisation — helping them stand out in local search results across Murton, Seaham, Sunderland and the wider County Durham area.",
    thumbnail: portfolioIntegrity4,
    websiteUrl: "https://integrityplumb.co.uk",
    images: [portfolioIntegrity4, portfolioIntegrity2, portfolioIntegrity1, portfolioIntegrity3],
    services: ["Website Design", "Local SEO", "Google Business Profile", "Service Area Pages"],
    results: [
      "Professional website launched to support local growth",
      "Page 1 rankings for key plumbing searches in County Durham",
      "Increased enquiries from homeowners across the region",
      "Google Business Profile views up significantly",
    ],
    testimonial: {
      quote:
        "NE1 Digital built us a website that actually brings in work. We're getting calls every week now from people finding us on Google. Brilliant service from start to finish.",
      author: "Luke",
      role: "Owner, Integrity Plumb",
    },
  },
];
