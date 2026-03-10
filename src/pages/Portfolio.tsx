import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import { Link } from "react-router-dom";
import { portfolioProjects } from "@/data/portfolioProjects";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <Layout>
      <SEOHead
        title="Portfolio | NE1 Digital — Our Work"
        description="Browse our portfolio of websites, SEO campaigns and digital marketing projects for local businesses across the UK."
        canonical="https://ne1digital.co.uk/portfolio"
      />

      {/* Hero */}
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-3">
            Our Work
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Portfolio
          </h1>
          <p className="text-lg text-white/75 mb-6">
            Real results for real businesses. See how we've helped local companies grow online with stunning websites and powerful SEO.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/portfolio/${project.slug}`}
                className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {project.industry}
                  </span>
                  <h2 className="text-lg font-bold mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    View project <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
