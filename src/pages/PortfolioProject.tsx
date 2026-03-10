import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import { portfolioProjects } from "@/data/portfolioProjects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Quote } from "lucide-react";
import NotFound from "./NotFound";

const PortfolioProject = () => {
  const { slug } = useParams();
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  return (
    <Layout>
      <SEOHead
        title={`${project.title} | Portfolio — NE1 Digital`}
        description={project.description}
        canonical={`https://ne1digital.co.uk/portfolio/${project.slug}`}
      />

      {/* Hero */}
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-3">
            {project.industry}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            {project.title}
          </h1>
          <p className="text-lg text-white/75 mb-6">{project.description}</p>
          <GoogleRatingBadge />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to portfolio
          </Link>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="aspect-video rounded-xl overflow-hidden border border-border bg-muted"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Services Used */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Services Delivered
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mb-16 p-8 rounded-xl gradient-trades text-white">
              <Quote className="w-8 h-8 text-white/40 mb-4" />
              <blockquote className="text-lg md:text-xl font-medium mb-4 text-white">
                "{project.testimonial.quote}"
              </blockquote>
              <p className="text-sm text-white/80">
                <strong className="text-white">{project.testimonial.author}</strong>{" "}
                — {project.testimonial.role}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Want results like these?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's talk about how we can grow your business online.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioProject;
