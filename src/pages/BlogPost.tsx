import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/data/blogPosts";

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
                  {block}
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
