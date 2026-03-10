import TradePageLayout from "@/components/TradePageLayout";
import { ShoppingBag } from "lucide-react";

const RetailAndEcommerce = () => (
  <TradePageLayout
    trade="Retail & Ecommerce"
    icon={ShoppingBag}
    heroTitle="Websites & SEO for shops, boutiques and ecommerce brands"
    heroDescription="From clothing boutiques and jewellery stores to gift shops, furniture stores, homeware shops and ecommerce brands — we help retail businesses get found online and drive more sales."
    problemsTitle="Why most retail businesses struggle online"
    problems={[
      "Customers search for products you sell but find larger retailers or Amazon instead of your shop",
      "Your website doesn't showcase your products well or make it easy for customers to buy",
      "You rely on footfall and social media but don't have a strong presence on Google",
      "Competitors with similar products rank higher because they've invested in SEO",
      "You know ecommerce could grow your business but the setup feels overwhelming",
      "You're spending on ads but not building long-term organic visibility",
    ]}
    servicesTitle="What we build for retail and ecommerce businesses"
    services={[
      { title: "Retail Website Design", description: "Beautiful, product-focused websites for boutiques, jewellers, gift shops, furniture stores, homeware shops and ecommerce brands — designed to drive sales." },
      { title: "Local SEO", description: "Rank for searches like 'jewellery shop near me', 'furniture store Newcastle', 'gift shop Middlesbrough' so local customers find your store." },
      { title: "Google Business Profile", description: "Optimised Google listing with product photos, opening hours, reviews and links to drive both online and in-store visits." },
      { title: "Product & Category Pages", description: "Optimised product and category pages that rank on Google and make it easy for customers to browse and buy." },
      { title: "Ecommerce Integration", description: "Online shopping functionality with secure checkout, payment processing and order management — without the complexity." },
      { title: "Local & Online Strategy", description: "A combined approach that drives both local footfall to your physical store and online sales through your website." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "gift shop near me",
      "jewellery store Newcastle",
      "furniture shop North East",
      "clothing boutique Middlesbrough",
      "homeware shop Teesside",
      "buy handmade gifts online",
      "independent shops near me",
      "vintage furniture North Tyneside",
    ]}
    benefitsTitle="Why retail businesses choose NE1 Digital"
    benefits={[
      { title: "Product-first design", description: "Your products are the star. We build websites with stunning product photography and intuitive browsing that drives sales." },
      { title: "Local + online visibility", description: "We help you rank locally for in-store visits AND build your online presence for ecommerce sales." },
      { title: "No platform lock-in", description: "We build websites you own and control — no monthly platform fees eating into your margins." },
      { title: "Sales tracking", description: "Track every online sale, enquiry and store visit so you know exactly how your website drives revenue." },
    ]}
    faqTitle="Common questions from retail businesses"
    faqs={[
      { question: "Which retail businesses do you work with?", answer: "We work with clothing boutiques, jewellery stores, gift shops, furniture stores, homeware shops, ecommerce brands and other retail businesses." },
      { question: "Can you build an online shop?", answer: "Yes. We build ecommerce websites with product listings, secure checkout and payment processing — all optimised for search and conversions." },
      { question: "Do I need ecommerce if I only have a physical shop?", answer: "Not necessarily, but even a brochure website with your products and location helps customers find you on Google. Many shops find that adding ecommerce opens up a whole new revenue stream." },
      { question: "How long until I see results?", answer: "Most retail businesses see improved local rankings within 4-8 weeks, with traffic and sales building over 3-6 months." },
    ]}
    ctaTitle="Ready to sell more — online and in-store?"
    ctaDescription="Book a free call and we'll show you how to get more customers finding your products on Google."
  />
);

export default RetailAndEcommerce;
