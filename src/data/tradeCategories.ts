import {
  Zap, Droplets, HardHat, Wrench, PaintBucket, Hammer, Home, Thermometer,
  Blocks, Grid3X3, Lock, DoorOpen, Shovel,
  Scissors, Sparkles, Hand, Brush, Heart,
  SprayCanIcon, Dog, Dumbbell, Camera, Car, TreePine, Bug, GraduationCap
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
    label: "Traditional Trades",
    trades: [
      { icon: Zap, name: "Electricians", href: "/trades/electricians", description: "Domestic and commercial electrical contractors" },
      { icon: Droplets, name: "Plumbers", href: "/trades/plumbers", description: "Plumbing, heating and gas engineers" },
      { icon: HardHat, name: "Builders", href: "/trades/builders", description: "General builders and construction firms" },
      { icon: Wrench, name: "Roofers", href: "/trades/roofers", description: "Roofing contractors and repair specialists" },
      { icon: PaintBucket, name: "Decorators", href: "/trades/decorators", description: "Painters, decorators and plasterers" },
      { icon: Hammer, name: "Joiners", href: "/trades/joiners", description: "Joiners, carpenters and cabinet makers" },
      { icon: Home, name: "Landscapers", href: "/trades/landscapers", description: "Garden design and landscaping services" },
      { icon: Thermometer, name: "Heating Engineers", href: "/trades/heating-engineers", description: "Boiler servicing and central heating" },
      { icon: Blocks, name: "Plasterers", href: "/trades/plasterers", description: "Plastering, rendering and skimming" },
      { icon: Grid3X3, name: "Tilers", href: "/trades/tilers", description: "Floor and wall tiling specialists" },
      { icon: HardHat, name: "Scaffolders", href: "/trades/scaffolders", description: "Scaffolding erection and hire" },
      { icon: Wrench, name: "Drainage Engineers", href: "/trades/drainage-engineers", description: "Drain repairs, CCTV surveys and unblocking" },
      { icon: Lock, name: "Locksmiths", href: "/trades/locksmiths", description: "Emergency and residential locksmith services" },
      { icon: DoorOpen, name: "Window & Door Fitters", href: "/trades/window-door-fitters", description: "UPVC, aluminium and composite installations" },
      { icon: Shovel, name: "Groundworkers", href: "/trades/groundworkers", description: "Foundations, drainage and excavation" },
    ],
  },
  {
    label: "Beauty & Wellness",
    trades: [
      { icon: Scissors, name: "Hair Salons & Barbers", href: "/trades/hair-salons", description: "Salons, barber shops and mobile hairdressers" },
      { icon: Sparkles, name: "Beauty Therapists", href: "/trades/beauty-therapists", description: "Aesthetics, facials and skin treatments" },
      { icon: Hand, name: "Nail Technicians", href: "/trades/nail-technicians", description: "Nail bars, gel nails and mobile nail techs" },
      { icon: Brush, name: "Mobile Beauty & Makeup", href: "/trades/mobile-beauty", description: "Mobile makeup artists and beauty services" },
      { icon: Heart, name: "Massage & Spa", href: "/trades/massage-therapists", description: "Massage therapists and spa services" },
    ],
  },
  {
    label: "Service Businesses",
    trades: [
      { icon: SprayCanIcon, name: "Cleaners", href: "/trades/cleaners", description: "Domestic and commercial cleaning services" },
      { icon: Dog, name: "Dog Groomers", href: "/trades/dog-groomers", description: "Pet grooming and dog grooming salons" },
      { icon: Dumbbell, name: "Personal Trainers", href: "/trades/personal-trainers", description: "PTs, fitness coaches and gym instructors" },
      { icon: Camera, name: "Photographers", href: "/trades/photographers", description: "Wedding, portrait and commercial photography" },
      { icon: GraduationCap, name: "Driving Instructors", href: "/trades/driving-instructors", description: "ADI qualified driving lesson providers" },
      { icon: Car, name: "Mechanics", href: "/trades/mechanics", description: "Mobile and garage-based vehicle repairs" },
      { icon: TreePine, name: "Garden Maintenance", href: "/trades/garden-maintenance", description: "Lawn care, hedge trimming and garden tidying" },
      { icon: Bug, name: "Pest Control", href: "/trades/pest-control", description: "Residential and commercial pest management" },
    ],
  },
];

export const allTrades = tradeCategories.flatMap((cat) => cat.trades);
