import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import { portfolioProjects } from "@/data/portfolioProjects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, ExternalLink, X } from "lucide-react";
import NotFound from "./NotFound";
import { useState, useCallback, useEffect } from "react";

const PortfolioProject = () => {
  const { slug } = useParams();
  const project = portfolioProjects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && project)
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % project.images.length : 0));
      if (e.key === "ArrowLeft" && project)
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + project.images.length) % project.images.length : 0
        );
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightboxIndex, project, closeLightbox]);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group aspect-video rounded-xl overflow-hidden border border-border bg-muted cursor-pointer relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/60 px-4 py-2 rounded-full">
                    View full size
                  </span>
                </div>
              </button>
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

          {/* Description & View Website */}
          <div className="mb-16">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {project.description}
            </p>
            {project.websiteUrl && (
              <Button variant="default" size="lg" asChild>
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                  View Website <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
          </div>

          {/* Results */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Results</h2>
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl font-light transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + project.images.length) % project.images.length);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={project.images[lightboxIndex]}
            alt={`${project.title} screenshot ${lightboxIndex + 1}`}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl font-light transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % project.images.length);
            }}
            aria-label="Next image"
          >
            ›
          </button>
          <div className="absolute bottom-6 text-white/60 text-sm">
            {lightboxIndex + 1} / {project.images.length}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PortfolioProject;
