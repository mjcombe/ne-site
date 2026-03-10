import TradePageLayout from "@/components/TradePageLayout";
import { UtensilsCrossed } from "lucide-react";

const HospitalityAndFood = () => (
  <TradePageLayout
    trade="Hospitality & Food"
    icon={UtensilsCrossed}
    heroTitle="Websites & SEO for restaurants, cafes and food businesses"
    heroDescription="From restaurants and cafes to bars, takeaways, catering companies and bakeries — we help hospitality and food businesses get found by hungry customers searching on Google."
    problemsTitle="Why most hospitality businesses struggle to get found online"
    problems={[
      "Customers searching for restaurants or cafes near them find competitors or delivery apps instead",
      "You're paying high commissions to delivery platforms when you could be generating direct orders",
      "Your website doesn't showcase your menu, atmosphere or what makes your venue special",
      "You rely on social media but posts don't reach customers who are actively searching to eat out",
      "Your Google listing is incomplete or has outdated menus and opening hours",
      "You know you need a better online presence but the day-to-day running of the business takes priority",
    ]}
    servicesTitle="What we build for hospitality and food businesses"
    services={[
      { title: "Restaurant & Cafe Website Design", description: "Appetising, visually rich websites for restaurants, cafes, bars, takeaways, catering companies and bakeries — designed to drive reservations and orders." },
      { title: "Local SEO", description: "Rank for searches like 'restaurant near me', 'cafe Newcastle', 'catering company Middlesbrough' and every term your customers search." },
      { title: "Google Business Profile", description: "Fully optimised Google listing with menus, photos, opening hours, reviews and reservation links." },
      { title: "Menu & Ordering Pages", description: "Beautiful online menus and ordering pages that make it easy for customers to see what you offer and place orders directly." },
      { title: "Reservation Integration", description: "Online booking and table reservation integration so customers can book directly from your website or Google listing." },
      { title: "Event & Catering Pages", description: "Dedicated pages for private dining, catering services, events and special occasions — each optimised for search." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "restaurant near me",
      "cafe Newcastle",
      "bar North Shields",
      "takeaway Middlesbrough",
      "catering company North East",
      "bakery near me",
      "Sunday lunch Teesside",
      "private dining Sunderland",
    ]}
    benefitsTitle="Why hospitality businesses choose NE1 Digital"
    benefits={[
      { title: "Mouth-watering design", description: "Food is visual. We build websites with stunning photography and menus that make customers want to visit or order immediately." },
      { title: "Direct orders, fewer commissions", description: "Your own website and online ordering means fewer orders going through high-commission delivery platforms." },
      { title: "Local search visibility", description: "When someone searches 'restaurant near me', we make sure your business appears — not just on Google Maps but in organic results too." },
      { title: "Reservation tracking", description: "Track every online booking, phone call and enquiry so you know exactly how your website drives covers." },
    ]}
    faqTitle="Common questions from hospitality businesses"
    faqs={[
      { question: "Which hospitality businesses do you work with?", answer: "We work with restaurants, cafes, bars, takeaways, catering companies, bakeries and other food service businesses." },
      { question: "Can you help reduce delivery platform fees?", answer: "Yes. By driving direct orders through your own website, you keep more revenue instead of paying 20-30% commissions to delivery apps." },
      { question: "Can you integrate online ordering?", answer: "Yes. We can integrate online ordering and reservation systems directly into your website for a seamless customer experience." },
      { question: "How long until I see results?", answer: "Most hospitality businesses see improved local rankings within 4-8 weeks, with increased reservations and orders over 3-6 months." },
    ]}
    ctaTitle="Ready to fill more tables and take more orders?"
    ctaDescription="Book a free call and we'll show you how to get more customers finding and choosing your business on Google."
  />
);

export default HospitalityAndFood;
