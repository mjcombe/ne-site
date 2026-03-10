import TradePageLayout from "@/components/TradePageLayout";
import { Baby } from "lucide-react";

const ChildcareAndFamily = () => (
  <TradePageLayout
    trade="Childcare & Family Services"
    icon={Baby}
    heroTitle="Websites & SEO for nurseries, childcare providers and family businesses"
    heroDescription="From nurseries and childcare providers to kids activity centres and play centres — we help childcare and family businesses get found by parents searching on Google."
    problemsTitle="Why most childcare businesses struggle to get found online"
    problems={[
      "Parents searching for nurseries and childcare near them find competitors or directory listings instead",
      "Your website doesn't showcase your facilities, staff qualifications or the care you provide",
      "You rely on local reputation but new families moving to the area can't find you online",
      "Your Ofsted rating and credentials aren't prominently displayed to build parental confidence",
      "Competitors with newer, more professional websites are filling their waiting lists faster",
      "You know you need a better online presence but running a childcare setting leaves no time for marketing",
    ]}
    servicesTitle="What we build for childcare and family businesses"
    services={[
      { title: "Childcare Website Design", description: "Warm, welcoming websites for nurseries, childminders, kids activity centres and play centres — designed to give parents confidence and generate enquiries." },
      { title: "Local SEO", description: "Rank for searches like 'nursery near me', 'childcare Newcastle', 'kids activities Middlesbrough' and every term local parents search." },
      { title: "Google Business Profile", description: "Optimised Google listing with facility photos, reviews, opening hours and key information parents need." },
      { title: "Service Area Pages", description: "Location pages for every area you serve — nursery in North Shields, play centre in Sunderland, kids activities in Darlington." },
      { title: "Trust & Credentials Display", description: "Prominent display of Ofsted ratings, DBS checks, qualifications and insurance to build parental trust." },
      { title: "Enquiry & Registration Forms", description: "Easy-to-use enquiry forms and waiting list registration to capture interested parents." },
    ]}
    searchTermsTitle="Searches parents are making right now"
    searchTerms={[
      "nursery near me",
      "childcare Newcastle",
      "kids activities Middlesbrough",
      "play centre North East",
      "childminder near me",
      "after school club Teesside",
      "baby groups North Tyneside",
      "holiday club Sunderland",
    ]}
    benefitsTitle="Why childcare businesses choose NE1 Digital"
    benefits={[
      { title: "Trust-building design", description: "Parents need to feel confident before enquiring. We build warm, professional websites that showcase your setting, staff and values." },
      { title: "Credential prominence", description: "Ofsted ratings, qualifications and DBS checks displayed prominently — the information parents actively look for." },
      { title: "Local family reach", description: "Service area pages ensure you're visible to parents searching for childcare in every area you serve." },
      { title: "Waitlist generation", description: "Enquiry forms and registration pages that keep your waiting list full with quality family leads." },
    ]}
    faqTitle="Common questions from childcare businesses"
    faqs={[
      { question: "Which childcare businesses do you work with?", answer: "We work with nurseries, childminders, childcare providers, kids activity centres, play centres, after school clubs and similar family services." },
      { question: "How important is a website for a nursery?", answer: "Essential. Parents research nurseries extensively online before visiting. A professional website with photos, Ofsted rating and clear information is often the deciding factor." },
      { question: "Can you help us rank above directory sites?", answer: "Yes. With proper local SEO and a well-optimised website, we help nurseries and childcare providers rank above generic directory listings in their area." },
      { question: "How long until I see results?", answer: "Most childcare businesses see improved local rankings within 4-8 weeks, with parent enquiries building over 3-6 months." },
    ]}
    ctaTitle="Ready to fill your nursery with more families?"
    ctaDescription="Book a free call and we'll show you how to get more parent enquiries and registrations from Google."
  />
);

export default ChildcareAndFamily;
