import {
  Wrench, Car, Sparkles, Heart, Building2, Briefcase, UtensilsCrossed, ShoppingBag,
  GraduationCap, SprayCan, Camera, Baby, PawPrint, Truck, ShieldCheck, Monitor,
  Gem, Dumbbell, Stethoscope, Scissors,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TradeItem {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

export interface TradeCategory {
  label: string;
  trades: TradeItem[];
}

export const tradeCategories: TradeCategory[] = [
  {
    label: "Trades & Home Services",
    trades: [
      { icon: Wrench, name: "Trades & Home Services", href: "/industries/trades-and-home-services", description: "Builders, plumbers, electricians, roofers, joiners, landscapers, heating engineers, locksmiths and more" },
    ],
  },
  {
    label: "Automotive",
    trades: [
      { icon: Car, name: "Automotive", href: "/industries/automotive", description: "Garages, MOT centres, mobile mechanics, car dealers, detailing, vehicle wraps and more" },
    ],
  },
  {
    label: "Beauty & Aesthetics",
    trades: [
      { icon: Sparkles, name: "Beauty & Aesthetics", href: "/industries/beauty-and-aesthetics", description: "Hair salons, barbers, beauty salons, nail techs, lash specialists, aesthetic clinics and more" },
    ],
  },
  {
    label: "Health & Wellbeing",
    trades: [
      { icon: Heart, name: "Health & Wellbeing", href: "/industries/health-and-wellbeing", description: "Dentists, physiotherapists, chiropractors, opticians, personal trainers, gyms and more" },
    ],
  },
  {
    label: "Property & Construction",
    trades: [
      { icon: Building2, name: "Property & Construction", href: "/industries/property-and-construction", description: "Estate agents, letting agents, architects, interior designers, developers and more" },
    ],
  },
  {
    label: "Professional Services",
    trades: [
      { icon: Briefcase, name: "Professional Services", href: "/industries/professional-services", description: "Accountants, financial advisors, mortgage brokers, solicitors, consultants and more" },
    ],
  },
  {
    label: "Hospitality & Food",
    trades: [
      { icon: UtensilsCrossed, name: "Hospitality & Food", href: "/industries/hospitality-and-food", description: "Restaurants, cafes, bars, takeaways, catering companies, bakeries and more" },
    ],
  },
  {
    label: "Retail & Ecommerce",
    trades: [
      { icon: ShoppingBag, name: "Retail & Ecommerce", href: "/industries/retail-and-ecommerce", description: "Clothing boutiques, jewellery stores, gift shops, furniture stores, homeware and more" },
    ],
  },
  {
    label: "Education & Training",
    trades: [
      { icon: GraduationCap, name: "Education & Training", href: "/industries/education-and-training", description: "Tutors, training providers, driving schools, music teachers, coaches, course creators" },
    ],
  },
  {
    label: "Cleaning & Maintenance",
    trades: [
      { icon: SprayCan, name: "Cleaning & Maintenance", href: "/industries/cleaning-and-maintenance", description: "Domestic cleaners, commercial cleaning, window cleaners, carpet cleaners, pressure washing" },
    ],
  },
  {
    label: "Events & Creative",
    trades: [
      { icon: Camera, name: "Events & Creative Services", href: "/industries/events-and-creative-services", description: "Photographers, videographers, wedding planners, florists, event planners, DJs" },
    ],
  },
  {
    label: "Childcare & Family",
    trades: [
      { icon: Baby, name: "Childcare & Family Services", href: "/industries/childcare-and-family-services", description: "Nurseries, childcare providers, kids activity centres, play centres" },
    ],
  },
  {
    label: "Pet Services",
    trades: [
      { icon: PawPrint, name: "Pet Services", href: "/industries/pet-services", description: "Dog groomers, pet shops, dog trainers, boarding kennels" },
    ],
  },
  {
    label: "Logistics & Moving",
    trades: [
      { icon: Truck, name: "Logistics & Moving", href: "/industries/logistics-and-moving", description: "Removal companies, storage facilities, courier services" },
    ],
  },
  {
    label: "Care & Support",
    trades: [
      { icon: Stethoscope, name: "Care & Support Services", href: "/industries/care-and-support", description: "Care homes, home care providers, disability support, elderly care, supported living" },
    ],
  },
  {
    label: "Security Services",
    trades: [
      { icon: ShieldCheck, name: "Security Services", href: "/industries/security-services", description: "CCTV installers, alarm companies, security guards, access control, fire safety" },
    ],
  },
  {
    label: "IT & Technology",
    trades: [
      { icon: Monitor, name: "IT & Technology", href: "/industries/it-and-technology", description: "IT support, managed services, software companies, tech consultants, SaaS businesses" },
    ],
  },
  {
    label: "Wedding Services",
    trades: [
      { icon: Gem, name: "Wedding Services", href: "/industries/wedding-services", description: "Wedding venues, wedding planners, bridal shops, cake makers, wedding photographers" },
    ],
  },
  {
    label: "Sports & Fitness",
    trades: [
      { icon: Dumbbell, name: "Sports & Fitness", href: "/industries/sports-and-fitness", description: "Gyms, personal trainers, yoga studios, martial arts, sports coaching, dance schools" },
    ],
  },
  {
    label: "Hair & Barbering",
    trades: [
      { icon: Scissors, name: "Hair & Barbering", href: "/industries/hair-and-barbering", description: "Barber shops, hair salons, mobile hairdressers, hair extensions, colour specialists" },
    ],
  },
];

export const allTrades = tradeCategories.flatMap((cat) => cat.trades);
