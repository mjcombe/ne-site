import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load pages for performance
const Services = lazy(() => import("./pages/Services"));
const WebsitesForTrades = lazy(() => import("./pages/services/WebsitesForTrades"));
const LocalSEO = lazy(() => import("./pages/services/LocalSEO"));
const GoogleBusinessProfile = lazy(() => import("./pages/services/GoogleBusinessProfile"));
const ServiceAreaPages = lazy(() => import("./pages/services/ServiceAreaPages"));
const HostingAndCare = lazy(() => import("./pages/services/HostingAndCare"));
const OngoingSEO = lazy(() => import("./pages/services/OngoingSEO"));
const SEO = lazy(() => import("./pages/services/SEO"));
const AISEO = lazy(() => import("./pages/services/AISEO"));
const WhoWeHelp = lazy(() => import("./pages/WhoWeHelp"));

// Traditional Trades
const Electricians = lazy(() => import("./pages/trades/Electricians"));
const Plumbers = lazy(() => import("./pages/trades/Plumbers"));
const Builders = lazy(() => import("./pages/trades/Builders"));
const Roofers = lazy(() => import("./pages/trades/Roofers"));
const Decorators = lazy(() => import("./pages/trades/Decorators"));
const Joiners = lazy(() => import("./pages/trades/Joiners"));
const Landscapers = lazy(() => import("./pages/trades/Landscapers"));
const HeatingEngineers = lazy(() => import("./pages/trades/HeatingEngineers"));
const Plasterers = lazy(() => import("./pages/trades/Plasterers"));
const Tilers = lazy(() => import("./pages/trades/Tilers"));
const Scaffolders = lazy(() => import("./pages/trades/Scaffolders"));
const DrainageEngineers = lazy(() => import("./pages/trades/DrainageEngineers"));
const Locksmiths = lazy(() => import("./pages/trades/Locksmiths"));
const WindowDoorFitters = lazy(() => import("./pages/trades/WindowDoorFitters"));
const Groundworkers = lazy(() => import("./pages/trades/Groundworkers"));

// Beauty & Wellness
const HairSalons = lazy(() => import("./pages/trades/HairSalons"));
const BeautyTherapists = lazy(() => import("./pages/trades/BeautyTherapists"));
const NailTechnicians = lazy(() => import("./pages/trades/NailTechnicians"));
const MobileBeauty = lazy(() => import("./pages/trades/MobileBeauty"));
const MassageTherapists = lazy(() => import("./pages/trades/MassageTherapists"));

// Service Businesses
const Cleaners = lazy(() => import("./pages/trades/Cleaners"));
const DogGroomers = lazy(() => import("./pages/trades/DogGroomers"));
const PersonalTrainers = lazy(() => import("./pages/trades/PersonalTrainers"));
const Photographers = lazy(() => import("./pages/trades/Photographers"));
const DrivingInstructors = lazy(() => import("./pages/trades/DrivingInstructors"));
const Mechanics = lazy(() => import("./pages/trades/Mechanics"));
const GardenMaintenance = lazy(() => import("./pages/trades/GardenMaintenance"));
const PestControl = lazy(() => import("./pages/trades/PestControl"));

const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const ResultsPage = lazy(() => import("./pages/ResultsPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQPage = lazy(() => import("./pages/FAQ"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Locations = lazy(() => import("./pages/Locations"));
const Location = lazy(() => import("./pages/Location"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/websites-for-trades" element={<WebsitesForTrades />} />
            <Route path="/services/local-seo" element={<LocalSEO />} />
            <Route path="/services/google-business-profile" element={<GoogleBusinessProfile />} />
            <Route path="/services/service-area-pages" element={<ServiceAreaPages />} />
            <Route path="/services/hosting-and-care" element={<HostingAndCare />} />
            <Route path="/services/ongoing-seo" element={<OngoingSEO />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/ai-seo" element={<AISEO />} />
            <Route path="/who-we-help" element={<WhoWeHelp />} />
            {/* Traditional Trades */}
            <Route path="/trades/electricians" element={<Electricians />} />
            <Route path="/trades/plumbers" element={<Plumbers />} />
            <Route path="/trades/builders" element={<Builders />} />
            <Route path="/trades/roofers" element={<Roofers />} />
            <Route path="/trades/decorators" element={<Decorators />} />
            <Route path="/trades/joiners" element={<Joiners />} />
            <Route path="/trades/landscapers" element={<Landscapers />} />
            <Route path="/trades/heating-engineers" element={<HeatingEngineers />} />
            <Route path="/trades/plasterers" element={<Plasterers />} />
            <Route path="/trades/tilers" element={<Tilers />} />
            <Route path="/trades/scaffolders" element={<Scaffolders />} />
            <Route path="/trades/drainage-engineers" element={<DrainageEngineers />} />
            <Route path="/trades/locksmiths" element={<Locksmiths />} />
            <Route path="/trades/window-door-fitters" element={<WindowDoorFitters />} />
            <Route path="/trades/groundworkers" element={<Groundworkers />} />
            {/* Beauty & Wellness */}
            <Route path="/trades/hair-salons" element={<HairSalons />} />
            <Route path="/trades/beauty-therapists" element={<BeautyTherapists />} />
            <Route path="/trades/nail-technicians" element={<NailTechnicians />} />
            <Route path="/trades/mobile-beauty" element={<MobileBeauty />} />
            <Route path="/trades/massage-therapists" element={<MassageTherapists />} />
            {/* Service Businesses */}
            <Route path="/trades/cleaners" element={<Cleaners />} />
            <Route path="/trades/dog-groomers" element={<DogGroomers />} />
            <Route path="/trades/personal-trainers" element={<PersonalTrainers />} />
            <Route path="/trades/photographers" element={<Photographers />} />
            <Route path="/trades/driving-instructors" element={<DrivingInstructors />} />
            <Route path="/trades/mechanics" element={<Mechanics />} />
            <Route path="/trades/garden-maintenance" element={<GardenMaintenance />} />
            <Route path="/trades/pest-control" element={<PestControl />} />
            {/* Other */}
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:slug" element={<Location />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
