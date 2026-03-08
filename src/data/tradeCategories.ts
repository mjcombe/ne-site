import {
  Zap, Droplets, HardHat, Wrench, PaintBucket, Hammer, Home, Thermometer,
  Blocks, Grid3X3, Lock, DoorOpen, Shovel,
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
    label: "Trades We Work With",
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
];

export const allTrades = tradeCategories.flatMap((cat) => cat.trades);
