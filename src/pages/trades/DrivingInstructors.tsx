import TradePageLayout from "@/components/TradePageLayout";
import { GraduationCap } from "lucide-react";
import heroImage from "@/assets/trade-builder.jpg";

const DrivingInstructors = () => (
  <TradePageLayout
    category="services"
    trade="Driving Instructors"
    icon={GraduationCap}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring driving instructors more pupils"
    heroDescription="Whether you're an independent ADI or run a small driving school, we help driving instructors get found by learner drivers and parents searching for lessons in their local area."
    problemsTitle="Why most driving instructors struggle online"
    problems={[
      "National driving school chains dominate Google results with big marketing budgets",
      "Learners searching 'driving lessons near me' find Red, AA, or BSM instead of you",
      "You rely on word of mouth and Facebook but have no Google presence",
      "Your website is basic and doesn't convey your pass rates or teaching quality",
      "Lead generation companies charge per pupil and the quality is inconsistent",
      "You cover a wide area but don't rank for driving lesson searches in any specific town",
    ]}
    servicesTitle="What we build for driving instructors"
    services={[
      { title: "Driving Instructor Website Design", description: "Professional websites that showcase your pass rates, teaching style, car details, and pupil reviews — designed to win new learners." },
      { title: "Local SEO for Driving Instructors", description: "Rank for 'driving lessons near me', 'driving instructor Newcastle' and area-specific searches across your coverage." },
      { title: "Google Business Profile", description: "Optimised listing with reviews from passed pupils, your ADI badge info, and accurate coverage areas." },
      { title: "Service Area Pages", description: "Individual pages for every town you cover — 'driving lessons in Durham', 'driving instructor Sunderland' — maximising local visibility." },
      { title: "Pass Rate & Testimonials", description: "Prominent display of your pass rates, pupil testimonials, and teaching approach — the details learners and parents care about." },
      { title: "Lesson Package Pages", description: "Clear pricing with lesson packages, intensive courses, and special offers that make it easy for learners to choose you." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "driving lessons near me",
      "driving instructor Newcastle",
      "automatic driving lessons Sunderland",
      "intensive driving course Durham",
      "female driving instructor near me",
      "cheap driving lessons North East",
      "driving lessons Gateshead",
      "pass plus near me",
    ]}
    benefitsTitle="Why driving instructors choose NE1 Web Digital"
    benefits={[
      { title: "Compete with national chains", description: "Local SEO helps independent instructors outrank national chains in their specific area — where learners actually want lessons." },
      { title: "Pass rate prominence", description: "Your first-time pass rate and pupil success stories displayed front and centre — the most persuasive factor for new learners." },
      { title: "Multi-area coverage", description: "Rank in every town you offer lessons — not just your home postcode. Service area pages maximise your reach." },
      { title: "Direct pupil enquiries", description: "Your own website means pupils come directly to you — no lead generation fees or shared leads." },
    ]}
    faqTitle="Common questions from driving instructors"
    faqs={[
      { question: "Can I really compete with Red and AA online?", answer: "Locally, yes. Learners and parents often prefer independent instructors. Local SEO puts you ahead of national chains for area-specific searches, and genuine pupil reviews build real trust." },
      { question: "How important are reviews for a driving instructor?", answer: "Extremely. Reviews from passed pupils (especially mentioning pass rates) are the most powerful trust signal. We help you collect and display them effectively." },
      { question: "Should I target automatic lessons specifically?", answer: "If you offer automatic lessons, absolutely. 'Automatic driving lessons near me' is a growing search with less competition — a great opportunity for automatic instructors." },
      { question: "Can you help with intensive course marketing?", answer: "Yes. We create dedicated intensive/crash course pages targeting learners who need to pass quickly — a separate, high-value search category." },
    ]}
    ctaTitle="Ready to fill your lesson diary from Google?"
    ctaDescription="Stop competing with national chains on their terms. Build a local online presence that brings learner drivers directly to you."
  />
);

export default DrivingInstructors;
