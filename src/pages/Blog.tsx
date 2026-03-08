import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Search, ChevronUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/data/blogPosts";
import SEOHead from "@/components/SEOHead";

const Blog = () => {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = useMemo(() => {
    let posts = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);
    if (query.trim()) {
      const q = query.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [active, query]);

  return (
    <Layout>
      <SEOHead
        title="Blog | SEO & Website Tips for Trade Businesses"
        description="Practical SEO and website advice for electricians, plumbers, builders and tradespeople. Grow your local visibility."
        canonical="https://netrades.co.uk/blog"
      />
      {/* Hero */}
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto container-tight text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-foreground/10 text-primary-foreground/80 mb-4">
            Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Local SEO Tips for Tradespeople
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Practical advice to help trade businesses in the North East get found online, win more work, and stop relying on lead generation sites.
          </p>
        </div>
      </section>

      {/* Filter + Posts */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-tight">
          {/* Search + Category Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

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
            <p className="text-center text-muted-foreground py-12">No posts found matching your search.</p>
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

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </Layout>
  );
};

export default Blog;
