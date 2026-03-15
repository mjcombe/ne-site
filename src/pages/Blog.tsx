import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/data/blogPosts";
import SEOHead from "@/components/SEOHead";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";

const Blog = () => {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const [active, setActive] = useState("All");

  const filtered = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <Layout>
      <SEOHead
        title="Blog | SEO, GMB & Website Tips for Local Businesses | NE1 Digital"
        description="Practical SEO, Google Business Profile and website advice for local businesses across the North East. Grow your visibility and win more customers."
        canonical="https://ne1webdesign.co.uk/blog"
      />
      {/* Hero */}
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto container-tight text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white/80 mb-4">
            Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
            SEO Tips for Local Businesses
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Practical advice to help businesses get found online, win more work, and grow their online presence.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>

      {/* Filter + Posts */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-tight">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((post) => {
              const Icon = post.icon;
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-[hsl(var(--icon-bg))] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        {post.category}
                      </span>
                      <h2 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No posts found in this category.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
            Want Us to Handle Your SEO?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Stop guessing and start ranking. We build and optimise websites specifically for trade businesses in the North East.
          </p>
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
