import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight, Globe, Search, MapPin, FileText, TrendingUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/data/blogPosts";
import { tradeCategories } from "@/data/tradeCategories";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

const relatedServiceLinks = [
  { label: "Trade Websites", href: "/services/websites-for-trades", icon: Globe },
  { label: "Local SEO", href: "/services/local-seo", icon: Search },
  { label: "Google Business Profile", href: "/services/google-business-profile", icon: MapPin },
  { label: "Service Area Pages", href: "/services/service-area-pages", icon: FileText },
  { label: "Ongoing SEO", href: "/services/ongoing-seo", icon: TrendingUp },
];

// Parse markdown-style links [text](/url) into React elements
const renderWithLinks = (text: string) => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <Link
          key={i}
          to={match[2]}
          className="text-primary font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          {match[1]}
        </Link>
      );
    }
    return part;
  });
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const Icon = post.icon;
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  return (
    <Layout>
      <SEOHead
        title={`${post.title} | NE Trades Blog`}
        description={post.excerpt.slice(0, 155)}
        canonical={`https://netrades.co.uk/blog/${post.slug}`}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "https://netrades.co.uk/" },
            { name: "Blog", url: "https://netrades.co.uk/blog" },
            { name: post.title, url: `https://netrades.co.uk/blog/${post.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: "NE Trades" },
            publisher: { "@id": "https://netrades.co.uk/#organization" },
            mainEntityOfPage: `https://netrades.co.uk/blog/${post.slug}`,
          },
        ]}
      />
      {/* Hero */}
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto container-tight">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary-foreground/80" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
              {post.category}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-heading font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <article className="prose prose-lg max-w-none">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-xl md:text-2xl font-heading font-bold text-foreground mt-10 mb-4"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-5">
                  {renderWithLinks(block)}
                </p>
              );
            })}
          </article>

          {/* Post Navigation */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="line-clamp-1">{prevPost.title}</span>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors sm:text-right"
              >
                <span className="line-clamp-1">{nextPost.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedServiceLinks.map((service, i) => {
              const SIcon = service.icon;
              return (
                <Link
                  key={i}
                  to={service.href}
                  className="group flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <SIcon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground flex-1">{service.label}</span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Trades */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">We Help These Trades</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {tradeCategories[0].trades.slice(0, 6).map((trade) => {
              const TIcon = trade.icon;
              return (
                <Link
                  key={trade.href}
                  to={trade.href}
                  className="group flex items-center gap-2 p-3 rounded-lg bg-card border border-border hover:border-accent/30 hover:shadow-sm transition-all"
                >
                  <TIcon className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{trade.name}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-4">
            <Link to="/who-we-help" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
              See all trades we work with <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
            Need Help With Your Local SEO?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We specialise in helping tradespeople across the North East get found online and win more work.
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

export default BlogPost;
