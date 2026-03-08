import {
  Search, MapPin, Star, Globe, FileText, Smartphone,
  TrendingUp, Users, MessageSquare, Shield, Zap, Droplets, HardHat, Wrench, Thermometer
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  icon: LucideIcon;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-local-seo-matters-for-tradesmen-north-east",
    title: "Why Local SEO Matters for Tradesmen in the North East",
    metaDescription: "Discover why local SEO is essential for trade businesses in Newcastle, Sunderland and the North East. Get found by customers searching for your services nearby.",
    excerpt: "Most homeowners search for tradespeople on Google before picking up the phone. If your business isn't showing up in local search results, you're handing work to competitors.",
    icon: Search,
    date: "2026-02-28",
    readTime: "5 min read",
    category: "Local SEO",
    content: [
      "When a homeowner in Newcastle has a leaking tap or needs a new consumer unit fitted, the first thing they do is grab their phone and search 'plumber near me' or 'electrician Newcastle'. If your trade business isn't appearing in those results, you're invisible — and your competitors are picking up the work instead.",
      "Local SEO is the practice of optimising your online presence so that your business appears in geographically relevant search results. For tradespeople operating in the North East — whether you're covering Newcastle, Gateshead, Sunderland, North Shields or the wider Tyne and Wear area — this is arguably the most important marketing investment you can make. Our [local SEO service](/services/local-seo) is designed specifically for trades like yours.",
      "## Why Local Searches Convert Better",
      "Unlike general web searches, local searches carry strong buying intent. Someone searching 'roofer North Shields' isn't casually browsing — they need a [roofer](/trades/roofers), and they need one soon. Studies show that 76% of people who search for something nearby visit a business within a day, and 28% of those searches result in a purchase.",
      "## Google's Local Pack: The Prime Real Estate",
      "The local pack — that map with three business listings at the top of Google — is where most clicks happen for trade searches. Appearing here means your business name, reviews, phone number and directions are front and centre. To get into this pack, you need a well-optimised [Google Business Profile](/services/google-business-profile), consistent local citations, and genuine customer reviews. Read our [complete guide to Google Business Profile](/blog/google-business-profile-guide-tradespeople) for a step-by-step walkthrough.",
      "## What Happens Without Local SEO",
      "Without local SEO, your website might rank for generic terms but miss the customers who are actually ready to hire. You'll rely on word of mouth alone, pay over the odds for lead generation sites that take a cut, and watch newer competitors overtake you simply because they've invested in their online presence. We explain [why SEO beats lead gen sites](/blog/how-seo-beats-lead-generation-sites-tradespeople) in more detail.",
      "## Getting Started",
      "The good news is that local SEO for tradespeople doesn't have to be complicated. Start with claiming and verifying your Google Business Profile, ensure your name, address and phone number are consistent across the web, and begin [collecting reviews from satisfied customers](/blog/how-to-get-more-google-reviews-trade-business). These three steps alone can dramatically improve your visibility in local search results across the North East.",
      "If you want to go further, dedicated [service area pages](/services/service-area-pages), locally-focused content, and technical SEO improvements can help you dominate your patch and keep your diary full year-round. Our [ongoing SEO support](/services/ongoing-seo) takes care of all of this for you."
    ]
  },
  {
    slug: "google-business-profile-guide-tradespeople",
    title: "The Complete Google Business Profile Guide for Tradespeople",
    metaDescription: "Step-by-step guide to setting up and optimising your Google Business Profile as a tradesperson. Get more calls and enquiries from local customers.",
    excerpt: "Your Google Business Profile is often the first thing potential customers see. Here's how to make it work harder for your trade business.",
    icon: MapPin,
    date: "2026-02-21",
    readTime: "7 min read",
    category: "Google Business",
    content: [
      "Your Google Business Profile (GBP) is one of the most powerful free tools available to any tradesperson. It's what shows up when someone searches for your business name, and it's what feeds the map results when people search for trades in their area. Yet most tradespeople either haven't claimed theirs or have barely filled it in. Our [Google Business Profile service](/services/google-business-profile) can handle all of this for you.",
      "## Claiming and Verifying Your Profile",
      "If you haven't already, head to business.google.com and search for your business. If it exists, claim it. If not, create a new listing. Google will verify you own the business — usually by sending a postcard with a code to your registered address, though phone and email verification are sometimes available.",
      "## Choosing the Right Categories",
      "Your primary category is crucial. If you're an [electrician](/trades/electricians), select 'Electrician' — not 'Contractor' or 'Handyman'. You can add secondary categories too: 'Electrical installation service', 'Emergency electrician', and so on. The more specific and accurate your categories, the better Google can match you to relevant searches.",
      "## Writing Your Business Description",
      "You get 750 characters. Use them wisely. Mention the services you offer, the areas you cover, and what makes you different. Include natural mentions of locations — 'serving Newcastle, Gateshead, and the wider North East' — but don't stuff keywords unnaturally.",
      "## Photos and Updates",
      "Businesses with photos receive 42% more requests for directions and 35% more click-throughs to their websites. Upload photos of completed work, your van, your team, and before-and-after shots. Post regular updates about completed projects or seasonal services to keep your profile active.",
      "## Managing Reviews",
      "Reviews are the single biggest factor in local search rankings after your basic profile information. Ask every satisfied customer to leave a Google review. Respond to every review — positive or negative — professionally and promptly. A business with 50 genuine reviews will almost always outrank one with 5, all else being equal. For detailed strategies, read our guide on [how to get more Google reviews](/blog/how-to-get-more-google-reviews-trade-business).",
      "## Common Mistakes to Avoid",
      "Don't use a PO Box as your address if you serve customers at their location — use your actual business address or set up as a service-area business. Don't create multiple profiles for the same business. Don't buy fake reviews — Google is increasingly good at detecting and penalising this. Keep your opening hours accurate and update them for bank holidays. For more on ranking in maps, see our guide to [ranking higher on Google Maps](/blog/how-to-rank-higher-google-maps-tradespeople)."
    ]
  },
  {
    slug: "how-to-get-more-google-reviews-trade-business",
    title: "How to Get More Google Reviews for Your Trade Business",
    metaDescription: "Practical strategies for tradespeople to earn more 5-star Google reviews. Build trust, boost local rankings, and win more work in your area.",
    excerpt: "Reviews are the modern word of mouth. Learn practical ways to consistently earn 5-star reviews that bring in more work.",
    icon: Star,
    date: "2026-02-14",
    readTime: "5 min read",
    category: "Reviews",
    content: [
      "For tradespeople, reputation is everything. In the past, word of mouth spread through neighbours chatting over fences. Today, it happens through Google reviews. A strong review profile doesn't just build trust — it directly impacts whether your business appears in [local search results](/blog/why-local-seo-matters-for-tradesmen-north-east).",
      "## Why Reviews Matter More Than You Think",
      "Google uses reviews as a ranking signal. Businesses with more reviews and higher ratings tend to appear higher in search results and the [local map pack](/blog/how-to-rank-higher-google-maps-tradespeople). Beyond rankings, reviews influence the click-through rate — a business with 4.8 stars and 80 reviews will get far more enquiries than one with 3.5 stars and 12 reviews.",
      "## The Best Time to Ask",
      "Timing is everything. The ideal moment to ask for a review is right after you've completed a job and the customer has expressed satisfaction. This could be when they compliment your work, when you're doing the final walkthrough, or in a follow-up message the same day.",
      "## Make It Easy",
      "The biggest barrier to getting reviews is friction. Create a direct link to your Google review page and share it via text message after completing a job. You can generate this link from your [Google Business Profile](/services/google-business-profile) dashboard. A simple message like 'Thanks for choosing us! If you were happy with the work, a quick Google review would really help: [link]' works brilliantly.",
      "## Responding to Reviews",
      "Always respond to reviews. Thank positive reviewers by name and mention the specific job if appropriate — 'Thanks John, glad the new boiler is keeping you warm!' For negative reviews, stay professional, acknowledge the concern, and offer to resolve it offline. Future customers will judge you by how you handle criticism as much as the criticism itself.",
      "## Building a Review Culture",
      "Make asking for reviews part of your standard process. Some tradespeople include a review request on their invoice, others send a follow-up text. Whatever method you choose, consistency is key. Aim for a steady stream of reviews rather than bursts — Google values recency as well as quantity.",
      "## What Not to Do",
      "Never offer incentives for reviews — this violates Google's policies. Don't ask friends or family to leave fake reviews. Don't review-gate (only asking customers you think will leave positive reviews). Authenticity is paramount, and Google's detection systems are increasingly sophisticated. Need help managing your online presence? Check out our [Google Business Profile service](/services/google-business-profile)."
    ]
  },
  {
    slug: "service-area-pages-seo-tradespeople",
    title: "Why Every Tradesperson Needs Service Area Pages for SEO",
    metaDescription: "Learn how service area pages help tradespeople rank in multiple locations across the North East. Attract more local customers with targeted landing pages.",
    excerpt: "Want to rank in multiple towns and areas? Service area pages are the key to expanding your local reach without opening new premises.",
    icon: FileText,
    date: "2026-02-07",
    readTime: "6 min read",
    category: "Local SEO",
    content: [
      "If you're a [plumber](/trades/plumbers) based in North Shields but you also cover Whitley Bay, Tynemouth, Wallsend, and Newcastle, you have a problem: Google typically ranks you for the area where your business is physically located. [Service area pages](/services/service-area-pages) solve this by creating dedicated, optimised pages for each location you serve.",
      "## What Are Service Area Pages?",
      "A service area page is a dedicated page on your website targeting a specific location where you offer your services. Instead of one generic 'Areas We Cover' page with a list of towns, you create individual pages like 'Plumber in Whitley Bay', 'Plumber in Wallsend', and 'Plumber in Tynemouth'.",
      "## Why They Work",
      "Each page gives Google a clear signal that you serve that specific area. When someone searches 'plumber Whitley Bay', your dedicated page has a much better chance of ranking than a generic homepage that mentions Whitley Bay in passing. The page can include location-specific content, mention local landmarks or areas, and target the exact search terms people in that area use. This is a core part of any [local SEO strategy](/services/local-seo).",
      "## What Makes a Good Service Area Page",
      "A good service area page isn't just your homepage with the town name swapped in. It should include unique content about the services you provide in that area, mention specific neighbourhoods or estates, reference any relevant local knowledge, and include a clear call to action. The content should be genuinely useful to someone in that area looking for your services.",
      "## How Many Pages Do You Need?",
      "Focus on quality over quantity. Start with your primary service areas — the towns and areas where you do the most work and want to attract more customers. For most North East tradespeople, 5-15 service area pages covering your main patch is a good starting point. You can always add more as your business grows.",
      "## Avoiding Common Pitfalls",
      "The biggest mistake is creating thin, duplicate pages where only the town name changes. Google will see through this and may penalise your site. Each page needs unique, valuable content. Another mistake is targeting areas you don't actually serve — this damages trust and wastes everyone's time. Avoid the other [common website mistakes tradespeople make](/blog/website-mistakes-tradespeople-make).",
      "## Linking and Structure",
      "Link your service area pages from your main navigation or a dedicated 'Areas We Cover' section. Internal linking between related pages helps Google understand your site structure. Each page should link back to your main service pages and include your contact details prominently. Strong [local citations](/blog/local-citations-guide-tradespeople-north-east) also support your area pages."
    ]
  },
  {
    slug: "website-mistakes-tradespeople-make",
    title: "7 Website Mistakes That Cost Tradespeople Customers",
    metaDescription: "Avoid these common website mistakes that drive potential customers away. Essential tips for electricians, plumbers, builders and other tradespeople.",
    excerpt: "Your website might be turning customers away without you realising. Here are the most common mistakes we see — and how to fix them.",
    icon: Globe,
    date: "2026-01-31",
    readTime: "6 min read",
    category: "Websites",
    content: [
      "Your website is often the first impression a potential customer has of your business. If it's slow, confusing, or looks like it was built in 2010, people will hit the back button and call a competitor instead. Here are the seven most common website mistakes we see tradespeople make. Need a professional site? See our [websites for trades](/services/websites-for-trades) service.",
      "## 1. No Clear Phone Number",
      "This sounds obvious, but you'd be surprised how many trade websites bury the phone number. It should be visible in the header on every page, clickable on mobile, and prominent in your hero section. A homeowner with a burst pipe doesn't want to hunt for your contact details. Read more about [why mobile search matters](/blog/mobile-search-tradespeople-guide).",
      "## 2. Not Mobile-Friendly",
      "Over 60% of local searches happen on mobile devices. If your website doesn't work properly on a phone — tiny text, horizontal scrolling, buttons too small to tap — you're losing more than half your potential customers. Every trade website must be fully responsive.",
      "## 3. No Social Proof",
      "Homeowners are trusting you with their property. They want reassurance. Display your [Google reviews](/blog/how-to-get-more-google-reviews-trade-business) prominently, show accreditations (Gas Safe, NICEIC, etc.), and include before-and-after photos of your work. If you have testimonials, use them.",
      "## 4. Slow Loading Speed",
      "A website that takes more than 3 seconds to load will lose nearly half its visitors. Common culprits for trade websites are oversized photos uploaded straight from a phone, cheap hosting, and bloated website builders. Compress your images and invest in decent [hosting](/services/hosting-and-care).",
      "## 5. Generic Content",
      "If your website could belong to any tradesperson in any town, it's not working hard enough. Mention the specific areas you serve, the types of properties you work on, and the specific services you offer. 'We provide a full range of electrical services across Newcastle and Gateshead' is better than 'We do electrics'. [Service area pages](/services/service-area-pages) can help with this.",
      "## 6. No Clear Call to Action",
      "Every page should guide the visitor toward contacting you. Whether it's a 'Get a Free Quote' button, a contact form, or a prominent phone number, make it obvious what you want the visitor to do next. Don't make them think about it.",
      "## 7. Ignoring SEO Basics",
      "A beautiful website that nobody can find is useless. At minimum, every page needs a unique title tag and meta description, your content should mention the services and areas you cover naturally, and your site should be submitted to Google Search Console. These basics alone put you ahead of most competitors. Our [SEO for trades](/services/seo) service covers all of this and more."
    ]
  },
  {
    slug: "mobile-search-tradespeople-guide",
    title: "Why Mobile Search Is Everything for Trade Businesses",
    metaDescription: "Over 60% of local trade searches happen on mobile. Ensure your trade business captures mobile customers with these essential optimisation tips.",
    excerpt: "Your next customer is searching for you on their phone right now. Is your business ready to capture that enquiry?",
    icon: Smartphone,
    date: "2026-01-24",
    readTime: "4 min read",
    category: "Mobile",
    content: [
      "Think about the last time you needed a tradesperson. Chances are, you pulled out your phone and searched. Your customers do exactly the same thing — and if your business isn't optimised for mobile search, you're missing out on the majority of potential enquiries.",
      "## The Numbers Don't Lie",
      "Over 60% of Google searches now happen on mobile devices, and for local service searches like 'electrician near me' or 'emergency [plumber](/trades/plumbers) Newcastle', that figure is even higher. Google has adopted mobile-first indexing, meaning it primarily uses the mobile version of your site for ranking and indexing.",
      "## What Mobile Users Expect",
      "Mobile users are typically in a hurry. They want your phone number immediately visible and clickable (tap-to-call). They want to see your reviews at a glance. They want to know if you cover their area. And they want your page to load in under 3 seconds. Anything that adds friction — pinching to zoom, hunting for contact info, waiting for slow images — and they'll bounce to the next result. Don't make these [common website mistakes](/blog/website-mistakes-tradespeople-make).",
      "## Click-to-Call Is King",
      "For tradespeople, the most valuable action a website visitor can take is calling you. On mobile, this should be effortless. Your phone number should be in the header, sticky on scroll, and formatted as a clickable tel: link. A prominent 'Call Now' button can increase mobile enquiries significantly.",
      "## Google Maps and Mobile",
      "When someone searches on mobile, Google Maps results are even more prominent than on desktop. This makes your [Google Business Profile](/services/google-business-profile) doubly important for mobile users. Ensure your location is accurate, your hours are correct, and you have recent reviews. Learn [how to rank higher on Google Maps](/blog/how-to-rank-higher-google-maps-tradespeople).",
      "## Testing Your Mobile Experience",
      "Pull out your phone and visit your own website. Can you find your phone number in under 2 seconds? Does the page load quickly? Is the text readable without zooming? Can you easily navigate to key information? If the answer to any of these is no, you're losing mobile customers every day. Our [websites for trades](/services/websites-for-trades) are built mobile-first from day one."
    ]
  },
  {
    slug: "how-seo-beats-lead-generation-sites-tradespeople",
    title: "How SEO Beats Lead Generation Sites for Tradespeople",
    metaDescription: "Stop paying per lead. Discover why investing in SEO gives tradespeople better quality leads at lower cost than Checkatrade, MyBuilder, and Bark.",
    excerpt: "Tired of paying for shared leads on Checkatrade or Bark? Here's why investing in your own SEO delivers better results for less money.",
    icon: TrendingUp,
    date: "2026-01-17",
    readTime: "6 min read",
    category: "SEO Strategy",
    content: [
      "Lead generation platforms like Checkatrade, MyBuilder, and Bark have become a go-to for tradespeople looking for work. But there's a growing frustration: you're paying for leads that are shared with multiple competitors, the quality varies wildly, and the costs add up month after month with nothing to show for it long-term.",
      "## The Lead Gen Problem",
      "When you pay for a lead on a platform, you're typically one of 3-5 tradespeople receiving the same enquiry. You're competing on price before the customer even knows who you are. The platform owns the customer relationship, not you. And next month, you start from zero again — the leads stop the moment you stop paying.",
      "## How SEO Is Different",
      "With [SEO](/services/seo), when someone searches '[electrician](/trades/electricians) North Shields' and finds your website, they're coming directly to you. There's no competition on the same page. They see your reviews, your work, your brand. The enquiry is yours alone, and the trust is already building before they pick up the phone.",
      "## The Cost Comparison",
      "A typical tradesperson might spend £200-500 per month on lead generation sites. SEO investment might be similar, but the difference is cumulative. After six months of SEO work, your website is ranking and generating leads organically. Stop paying a lead gen site and the leads stop immediately. Stop investing in SEO and your rankings continue to deliver for months or years.",
      "## Quality of Leads",
      "SEO leads tend to be higher quality because the customer has found you specifically. They've read about your services, seen your [Google reviews](/blog/how-to-get-more-google-reviews-trade-business), and chosen to contact you — not just clicked a button that sends their details to five strangers. This means higher conversion rates, better margins, and customers who value your work.",
      "## Building a Long-Term Asset",
      "Your website is a business asset that appreciates over time. Every piece of content, every review, every backlink adds value. Lead generation platforms give you nothing lasting — they're a rental model. SEO is ownership. After 12-18 months of consistent [ongoing SEO work](/services/ongoing-seo), most tradespeople find they can reduce or eliminate their lead gen spend entirely.",
      "## The Smart Approach",
      "We're not suggesting you ditch lead gen sites overnight. Use them as a bridge while your SEO builds momentum. But shift your budget gradually toward your own online presence. Within a year, you'll have a sustainable source of high-quality, exclusive leads that doesn't depend on a third party. [Get started](/get-started) with us today."
    ]
  },
  {
    slug: "what-makes-good-trade-website",
    title: "What Makes a Good Website for a Trade Business in 2026",
    metaDescription: "The essential elements every trade business website needs in 2026. From design to SEO, discover what turns visitors into paying customers.",
    excerpt: "A good trade website in 2026 does more than look professional — it actively generates enquiries. Here's what separates the best from the rest.",
    icon: Users,
    date: "2026-01-10",
    readTime: "7 min read",
    category: "Websites",
    content: [
      "The days of a basic brochure website being 'good enough' for a trade business are over. In 2026, your website needs to work as your hardest-working salesperson — building trust, answering questions, and converting visitors into enquiries around the clock. See our [websites for trades](/services/websites-for-trades) service to learn what we build.",
      "## Speed and Performance",
      "Your website should load in under 2 seconds. This isn't just about user experience — Google uses page speed as a ranking factor. Fast-loading sites rank higher and convert better. This means optimised images, clean code, and quality [hosting](/services/hosting-and-care). If your site takes more than 3 seconds to load, you're losing nearly half your visitors.",
      "## Trust Signals Front and Centre",
      "Trade customers are letting strangers into their homes. They need reassurance. Your website should prominently display [Google reviews](/blog/how-to-get-more-google-reviews-trade-business), industry accreditations (Gas Safe, NICEIC, FENSA, etc.), insurance details, and examples of completed work. These trust signals should be visible without scrolling on your homepage.",
      "## Clear Service Pages",
      "Don't cram all your services onto one page. Create individual pages for each main service you offer. 'Boiler Installation', 'Boiler Repair', and 'Central Heating Installation' as separate pages perform far better in search than a single 'Our Services' page that lists everything. Each page should explain what the service involves, who it's for, and include a clear call to action.",
      "## Local Focus",
      "Your website should make it immediately clear where you operate. [Service area pages](/services/service-area-pages) for your key locations, mentions of local areas throughout your content, and embedded Google Maps all help both users and search engines understand your service area. This is fundamental to [local SEO](/services/local-seo).",
      "## Professional Photography",
      "Stock photos of smiling workmen in hard hats fool nobody. Use real photos of your work, your team, and your van. Before-and-after shots are incredibly effective. You don't need a professional photographer — modern phones take excellent photos. Just ensure good lighting and tidy compositions.",
      "## Mobile-First Design",
      "With over 60% of trade searches happening on mobile, your website must work flawlessly on phones. Large tap targets, clickable phone numbers, readable text without zooming, and fast load times on mobile networks are non-negotiable. Read our full guide on [why mobile search matters](/blog/mobile-search-tradespeople-guide).",
      "## Ongoing Content",
      "A website that hasn't been updated in two years signals a business that might not still be trading. Regular blog posts, new project photos, and updated service information keep your site fresh for both visitors and search engines. Even one quality blog post per month makes a significant difference to your search visibility. Our [ongoing SEO support](/services/ongoing-seo) includes regular content updates."
    ]
  },
  {
    slug: "local-citations-guide-tradespeople-north-east",
    title: "Local Citations: The Hidden SEO Weapon for North East Tradespeople",
    metaDescription: "How local citations boost your trade business visibility in the North East. Learn which directories matter and how to build consistent citations.",
    excerpt: "Local citations are one of the simplest yet most overlooked ways to improve your search rankings. Here's what you need to know.",
    icon: MessageSquare,
    date: "2026-01-03",
    readTime: "5 min read",
    category: "Local SEO",
    content: [
      "A local citation is any online mention of your business name, address, and phone number (NAP). These citations appear in business directories, social media platforms, industry websites, and local listings. For tradespeople in the North East, building consistent local citations is one of the most effective ways to improve [local search rankings](/blog/why-local-seo-matters-for-tradesmen-north-east).",
      "## Why Citations Matter",
      "Google uses citations to verify that your business is legitimate and to confirm your location. The more consistent citations you have across trusted websites, the more confident Google is about showing your business in local search results. Think of each citation as a vote of confidence for your business.",
      "## Key Directories for Tradespeople",
      "Start with the essentials: [Google Business Profile](/services/google-business-profile), Bing Places, Apple Maps, Yell.com, Thomson Local, and FreeIndex. Then add industry-specific directories relevant to your trade — Checkatrade, TrustATrader, MyBuilder, and RatedPeople. For North East businesses specifically, local chamber of commerce listings add valuable local signals.",
      "## Consistency Is Everything",
      "The single most important thing about citations is consistency. Your business name, address, and phone number must be exactly the same everywhere. 'J Smith Plumbing' on Google and 'John Smith Plumbing Services' on Yell sends mixed signals. Even small differences like 'St' vs 'Street' or '0191' vs '+44 191' can cause issues.",
      "## Auditing Your Existing Citations",
      "Before building new citations, audit what's already out there. Search for your business name and phone number to find existing listings. Check that the information is correct and consistent. Update any outdated or incorrect listings — old addresses and phone numbers are a common problem for tradespeople who've moved or changed numbers.",
      "## Building Citations Strategically",
      "Don't try to submit to 100 directories in one day. Build citations gradually and naturally over time. Focus on high-quality, relevant directories first. Each listing should be fully completed — fill in every field, add your website URL, write a unique description, and upload your logo where possible. This work pairs well with optimising your [Google Business Profile](/blog/google-business-profile-guide-tradespeople).",
      "## North East Specific Opportunities",
      "Look for local directories and listings specific to the North East. Local council websites sometimes have trade directories, community websites may list local services, and regional news sites sometimes offer business listings. These hyper-local citations carry extra weight for ranking in North East search results. Combine this with [service area pages](/blog/service-area-pages-seo-tradespeople) for maximum local visibility."
    ]
  },
  {
    slug: "how-to-rank-higher-google-maps-tradespeople",
    title: "How to Rank Higher on Google Maps as a Tradesperson",
    metaDescription: "Proven strategies to improve your Google Maps ranking as a tradesperson. Dominate the local map pack and get more calls from nearby customers.",
    excerpt: "The Google Maps 3-pack is prime real estate for tradespeople. Here's how to claim your spot and stay there.",
    icon: Shield,
    date: "2025-12-27",
    readTime: "6 min read",
    category: "Google Maps",
    content: [
      "When someone searches for a tradesperson on Google, the first thing they see is the map pack — three local businesses displayed with a map, ratings, and contact details. For tradespeople, appearing in this map pack is often more valuable than ranking first in the regular search results. Here's how to get there and stay there.",
      "## The Three Ranking Factors",
      "Google determines map pack rankings based on three main factors: relevance (how well your profile matches the search), distance (how close you are to the searcher), and prominence (how well-known and trusted your business is online). You can't control distance, but you can significantly influence relevance and prominence.",
      "## Optimise Your Google Business Profile",
      "This is the foundation. Complete every section of your [Google Business Profile](/services/google-business-profile) — business name, categories, description, services, hours, service area, attributes, and photos. The more complete your profile, the more signals Google has to determine your relevance. Read our [complete GBP guide](/blog/google-business-profile-guide-tradespeople) for detailed instructions.",
      "## Reviews: Quality, Quantity, and Recency",
      "Reviews are the biggest prominence signal for map pack rankings. You need a high volume of reviews, a high average rating, and recent reviews. A business with 5 reviews from 2023 will be outranked by one with 50 reviews from the past year. Make asking for reviews a standard part of your job completion process. Our [guide to getting more reviews](/blog/how-to-get-more-google-reviews-trade-business) has practical strategies.",
      "## Respond to Every Review",
      "Google has confirmed that responding to reviews improves your local ranking. Respond to every review — positive and negative. Keep responses professional and personalised. Mention the service you provided and the area when natural — 'Glad we could help with the rewire at your home in Jesmond!'",
      "## Build Local Citations",
      "Consistent business listings across directories support your map pack ranking. Ensure your NAP (name, address, phone) is identical everywhere. Focus on quality directories relevant to your trade and your area. Our [local citations guide](/blog/local-citations-guide-tradespeople-north-east) covers the key directories for North East tradespeople.",
      "## Your Website Matters Too",
      "While the map pack is driven primarily by your Google Business Profile, your [website](/services/websites-for-trades) plays a supporting role. A well-optimised website with [local content](/services/local-seo), proper schema markup, and strong technical SEO sends additional signals that boost your map pack position. Link your GBP to your website and ensure the information matches exactly.",
      "## Engagement Signals",
      "Google tracks how users interact with your listing — clicks for directions, clicks to call, website visits. Higher engagement suggests a popular, relevant business. Having a compelling profile with good photos, complete information, and strong reviews naturally drives higher engagement.",
      "## Patience and Consistency",
      "Map pack rankings don't change overnight. It typically takes 3-6 months of consistent effort to see significant movement. Keep optimising your profile, gathering reviews, building citations, and improving your website. The tradespeople who commit to this process consistently are the ones who dominate their local map results. Our [ongoing SEO support](/services/ongoing-seo) handles all of this for you month after month."
    ]
  }
];
