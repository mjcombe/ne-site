import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PasswordGate from "./components/PasswordGate";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
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

// Industry Pages
const TradesAndHomeServices = lazy(() => import("./pages/industries/TradesAndHomeServices"));
const Automotive = lazy(() => import("./pages/industries/Automotive"));
const BeautyAndAesthetics = lazy(() => import("./pages/industries/BeautyAndAesthetics"));
const HealthAndWellbeing = lazy(() => import("./pages/industries/HealthAndWellbeing"));
const PropertyAndConstruction = lazy(() => import("./pages/industries/PropertyAndConstruction"));
const ProfessionalServices = lazy(() => import("./pages/industries/ProfessionalServices"));
const HospitalityAndFood = lazy(() => import("./pages/industries/HospitalityAndFood"));
const RetailAndEcommerce = lazy(() => import("./pages/industries/RetailAndEcommerce"));
const EducationAndTraining = lazy(() => import("./pages/industries/EducationAndTraining"));
const CleaningAndMaintenance = lazy(() => import("./pages/industries/CleaningAndMaintenance"));
const EventsAndCreative = lazy(() => import("./pages/industries/EventsAndCreative"));
const ChildcareAndFamily = lazy(() => import("./pages/industries/ChildcareAndFamily"));
const PetServices = lazy(() => import("./pages/industries/PetServices"));
const LogisticsAndMoving = lazy(() => import("./pages/industries/LogisticsAndMoving"));
const CareAndSupport = lazy(() => import("./pages/industries/CareAndSupport"));
const SecurityServices = lazy(() => import("./pages/industries/SecurityServices"));
const ITAndTechnology = lazy(() => import("./pages/industries/ITAndTechnology"));
const WeddingServices = lazy(() => import("./pages/industries/WeddingServices"));
const SportsAndFitness = lazy(() => import("./pages/industries/SportsAndFitness"));
const HairAndBarbering = lazy(() => import("./pages/industries/HairAndBarbering"));

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
const LandingPage = lazy(() => import("./pages/LandingPage"));
const LandingTrades = lazy(() => import("./pages/landing/LandingTrades"));
const Locations = lazy(() => import("./pages/Locations"));
const Location = lazy(() => import("./pages/Location"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioProject = lazy(() => import("./pages/PortfolioProject"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <>

    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnNavigate />
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
              {/* Industry Pages */}
              <Route path="/industries/trades-and-home-services" element={<TradesAndHomeServices />} />
              <Route path="/industries/automotive" element={<Automotive />} />
              <Route path="/industries/beauty-and-aesthetics" element={<BeautyAndAesthetics />} />
              <Route path="/industries/health-and-wellbeing" element={<HealthAndWellbeing />} />
              <Route path="/industries/property-and-construction" element={<PropertyAndConstruction />} />
              <Route path="/industries/professional-services" element={<ProfessionalServices />} />
              <Route path="/industries/hospitality-and-food" element={<HospitalityAndFood />} />
              <Route path="/industries/retail-and-ecommerce" element={<RetailAndEcommerce />} />
              <Route path="/industries/education-and-training" element={<EducationAndTraining />} />
              <Route path="/industries/cleaning-and-maintenance" element={<CleaningAndMaintenance />} />
              <Route path="/industries/events-and-creative-services" element={<EventsAndCreative />} />
              <Route path="/industries/childcare-and-family-services" element={<ChildcareAndFamily />} />
              <Route path="/industries/pet-services" element={<PetServices />} />
              <Route path="/industries/logistics-and-moving" element={<LogisticsAndMoving />} />
              <Route path="/industries/care-and-support" element={<CareAndSupport />} />
              <Route path="/industries/security-services" element={<SecurityServices />} />
              <Route path="/industries/it-and-technology" element={<ITAndTechnology />} />
              <Route path="/industries/wedding-services" element={<WeddingServices />} />
              <Route path="/industries/sports-and-fitness" element={<SportsAndFitness />} />
              <Route path="/industries/hair-and-barbering" element={<HairAndBarbering />} />
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
              {/* WordPress migrated posts at root-level URLs */}
              <Route path="/10-common-website-mistakes-north-east-businesses-make-and-how-to-fix-them" element={<BlogPost />} />
              <Route path="/5-simple-ideas-for-improving-your-website" element={<BlogPost />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/go" element={<LandingPage />} />
              <Route path="/go/trades" element={<LandingTrades />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/locations/:slug" element={<Location />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<PortfolioProject />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
