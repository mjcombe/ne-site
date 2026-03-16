import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const latestPosts = blogPosts.slice(0, 8);

const BlogCarousel = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              From the Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tips & insights for trade businesses
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline shrink-0"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {latestPosts.map((post) => (
              <CarouselItem key={post.slug} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Link
                  to={post.urlPath || `/blog/${post.slug}`}
                  className="block h-full rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all group overflow-hidden"
                >
                  <div className="p-5 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-accent bg-icon-bg px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-4">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 hidden md:flex" />
          <CarouselNext className="-right-4 hidden md:flex" />
        </Carousel>

        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-6 sm:hidden"
        >
          View all posts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default BlogCarousel;
