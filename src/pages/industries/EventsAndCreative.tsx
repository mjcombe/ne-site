import TradePageLayout from "@/components/TradePageLayout";
import { Camera } from "lucide-react";

const EventsAndCreative = () => (
  <TradePageLayout
    trade="Events & Creative Services"
    icon={Camera}
    category="beauty"
    heroTitle="Websites & SEO for photographers, videographers and creative businesses"
    heroDescription="From photographers and videographers to wedding planners, florists, event planners and DJs — we help creative and events businesses get found by clients searching on Google."
    problemsTitle="Why most creative businesses struggle to get found online"
    problems={[
      "Your portfolio is stunning but potential clients can't find you when they search Google",
      "You rely on Instagram and social media but those platforms don't capture high-intent search traffic",
      "Wedding and event directories charge commissions or annual fees for listing your business",
      "Competitors with less talent but better websites are booking the clients you should be getting",
      "Your website doesn't do justice to your creative work or make it easy to enquire",
      "You know SEO matters but don't have time to learn it while running your creative business",
    ]}
    servicesTitle="What we build for creative and events businesses"
    services={[
      { title: "Creative Portfolio Website", description: "Visually stunning websites for photographers, videographers, wedding planners, florists, event planners and DJs — designed to showcase your work and drive bookings." },
      { title: "Local SEO", description: "Rank for searches like 'wedding photographer near me', 'videographer Newcastle', 'florist Middlesbrough' and every term your clients search." },
      { title: "Google Business Profile", description: "Optimised Google listing with portfolio images, reviews and service details so clients find and trust you instantly." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — photographer in Durham, wedding planner in Sunderland, DJ in Teesside." },
      { title: "Portfolio Galleries", description: "Beautifully organised photo and video galleries sorted by event type, style or venue — your best marketing tool." },
      { title: "Enquiry & Booking Forms", description: "Event-specific enquiry forms with date pickers and service selection that capture quality leads." },
    ]}
    searchTermsTitle="Searches your clients are making right now"
    searchTerms={[
      "wedding photographer near me",
      "videographer Newcastle",
      "florist North East",
      "event planner Middlesbrough",
      "wedding DJ Teesside",
      "photographer North Tyneside",
      "wedding flowers Sunderland",
      "event photographer near me",
    ]}
    benefitsTitle="Why creative businesses choose NE1 Digital"
    benefits={[
      { title: "Portfolio-first design", description: "Your work IS your marketing. We build websites that showcase your portfolio in the most impactful way possible." },
      { title: "Beyond social media", description: "Instagram is great but it doesn't capture people actively searching for a photographer or planner. Google does — and we get you ranking there." },
      { title: "Event-type targeting", description: "We create dedicated pages for weddings, corporate events, portraits — capturing different types of client searches." },
      { title: "Direct bookings", description: "Your own website means enquiries come straight to you — no directory commissions or lead-sharing." },
    ]}
    faqTitle="Common questions from creative businesses"
    faqs={[
      { question: "Which creative businesses do you work with?", answer: "We work with photographers, videographers, wedding planners, florists, event planners, DJs and other creative service providers." },
      { question: "How important is a website if I have a strong Instagram?", answer: "Very important. Instagram shows your work to followers, but Google captures people actively searching to hire a creative professional. These are high-intent leads ready to book." },
      { question: "Can you help with wedding-specific SEO?", answer: "Absolutely. Wedding searches are highly localised and we create targeted content for wedding photography, flowers, planning and entertainment in your area." },
      { question: "How long until I see results?", answer: "Most creative businesses see improved rankings within 4-8 weeks, with quality enquiries building over 3-6 months." },
    ]}
    ctaTitle="Ready to book more clients from Google?"
    ctaDescription="Book a free call and we'll show you how to get more enquiries, bookings and clients without relying solely on social media."
  />
);

export default EventsAndCreative;
