import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="section-padding bg-background min-h-[60vh] flex items-center">
        <div className="container mx-auto max-w-2xl text-center">
          <span className="block text-6xl md:text-8xl font-bold font-heading text-accent mb-4">404</span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Page not found</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">Sorry, the page you're looking for doesn't exist. Let's get you back on track.</p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/"><ArrowLeft className="w-5 h-5" /> Back to Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
