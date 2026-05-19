import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "../types";

interface BlogSectionProps {
  posts: BlogPost[];
}

function formatDate(date?: string) {
  if (!date) {
    return "Helpful guide";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogSection({ posts }: BlogSectionProps) {
  if (!posts.length) {
    return null;
  }

  return (
    <section id="blog" className="bg-brand-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">
              Helpful content for{" "}
              <span className="text-brand-gold">better website decisions</span>
            </h2>
            <p className="text-lg text-brand-beige/60">
              Practical guides on website strategy, SEO basics, conversion,
              tracking, mobile experience, and maintaining a stronger digital
              foundation.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-colors hover:bg-white/[0.06]"
            >
              <a href={`/blog/${post.slug}`} className="block">
                <div className="aspect-[4/3] overflow-hidden bg-brand-depth">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-brand-gold/40">
                      <span className="font-display text-5xl font-black">C</span>
                    </div>
                  )}
                </div>
                <div className="space-y-5 p-7">
                  <div className="flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold/80">
                    <span>{formatDate(post.publishedAt)}</span>
                    {post.readingTime && <span>{post.readingTime}</span>}
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-brand-gold">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-brand-beige/60">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold">
                    Read more
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
