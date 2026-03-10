import TradePageLayout from "@/components/TradePageLayout";
import { GraduationCap } from "lucide-react";

const EducationAndTraining = () => (
  <TradePageLayout
    trade="Education & Training"
    icon={GraduationCap}
    category="services"
    heroTitle="Websites & SEO for tutors, training providers and educators"
    heroDescription="From tutors and training providers to driving schools, music teachers, coaches and course creators — we help education and training businesses get found by students and clients searching on Google."
    problemsTitle="Why most education businesses struggle to get found online"
    problems={[
      "Students and parents search Google for tutors and training but find directories or larger providers instead",
      "You rely on word of mouth and don't have a professional website that builds credibility",
      "Your courses and services aren't visible to people actively searching for them online",
      "Competitors with less experience or qualifications rank higher because they have better websites",
      "You're listed on tutor directories but they charge fees and don't generate consistent leads",
      "You know you need an online presence but don't have time to build and manage one",
    ]}
    servicesTitle="What we build for education and training businesses"
    services={[
      { title: "Education Website Design", description: "Professional websites for tutors, training providers, driving schools, music teachers, coaches and course creators — designed to attract students and build trust." },
      { title: "Local SEO", description: "Rank for searches like 'tutor near me', 'driving school Newcastle', 'music teacher Middlesbrough' and every term your students search for." },
      { title: "Google Business Profile", description: "Optimised Google listing with qualifications, reviews, service details and accurate contact information." },
      { title: "Course & Service Pages", description: "Dedicated pages for each course or service you offer — GCSE maths tutoring, guitar lessons, management training — each optimised for search." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — tutor in Sunderland, driving school in Gateshead, coach in Darlington." },
      { title: "Enquiry & Booking Forms", description: "Simple enquiry forms and booking integration that makes it easy for students and parents to get in touch." },
    ]}
    searchTermsTitle="Searches your students are making right now"
    searchTerms={[
      "tutor near me",
      "driving school Newcastle",
      "music teacher North East",
      "GCSE maths tutor Middlesbrough",
      "first aid training Teesside",
      "guitar lessons near me",
      "life coach North Tyneside",
      "online course creator UK",
    ]}
    benefitsTitle="Why education businesses choose NE1 Digital"
    benefits={[
      { title: "Credibility-building design", description: "Parents and students need to trust you. We build websites that showcase your qualifications, experience, testimonials and teaching approach." },
      { title: "Subject & course targeting", description: "We target the specific subjects and courses people search for — not just generic 'tutor' terms." },
      { title: "Local student acquisition", description: "Service area pages ensure you rank when students search for educational services in your specific area." },
      { title: "Direct enquiries", description: "Your own website means enquiries come directly to you — no directory fees or lead-sharing." },
    ]}
    faqTitle="Common questions from education businesses"
    faqs={[
      { question: "Which education businesses do you work with?", answer: "We work with tutors, training providers, driving schools, music teachers, coaches, course creators and other education and training businesses." },
      { question: "Can you help me sell courses online?", answer: "Yes. We can build websites with course listings, booking functionality and even integrate with course delivery platforms." },
      { question: "How important is SEO for tutors?", answer: "Very important. Most parents and students now search Google when looking for tutors and training. Ranking well locally means a consistent stream of new student enquiries." },
      { question: "How long until I see results?", answer: "Most education businesses see improved rankings within 4-8 weeks, with student enquiries building over 3-6 months." },
    ]}
    ctaTitle="Ready to attract more students and clients?"
    ctaDescription="Book a free call and we'll show you how to get more enrolments, enquiries and students from Google."
  />
);

export default EducationAndTraining;
