import { ArrowLeft } from "lucide-react";
import type { BlogContentBlock, BlogPost } from "../types";

interface BlogPostPageProps {
  post?: BlogPost;
}

function formatDate(date?: string) {
  if (!date) {
    return "Helpful guide";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function blockText(block: BlogContentBlock) {
  return block.children?.map((child) => child.text).join("") || "";
}

function PortableContent({ blocks }: { blocks: BlogContentBlock[] }) {
  if (!blocks.length) {
    return (
      <p>
        This article is being prepared in Sanity. Add body content to the post
        and publish it to show the full guide here.
      </p>
    );
  }

  return (
    <>
      {blocks.map((block, index) => {
        const text = blockText(block);
        const key = block._key || `${block.style || "normal"}-${index}`;

        if (!text) {
          return null;
        }

        if (block.style === "h2") {
          return (
            <h2 key={key} className="mt-12 text-3xl font-bold">
              {text}
            </h2>
          );
        }

        if (block.style === "h3") {
          return (
            <h3 key={key} className="mt-10 text-2xl font-bold">
              {text}
            </h3>
          );
        }

        if (block.style === "blockquote") {
          return (
            <blockquote
              key={key}
              className="border-l-2 border-brand-gold pl-6 text-xl font-medium text-white/80"
            >
              {text}
            </blockquote>
          );
        }

        if (block.listItem) {
          return (
            <p key={key} className="pl-5 before:mr-3 before:text-brand-gold before:content-['•']">
              {text}
            </p>
          );
        }

        return <p key={key}>{text}</p>;
      })}
    </>
  );
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  if (!post) {
    return (
      <main className="min-h-screen bg-brand-navy px-6 pb-24 pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">
            Article not found
          </p>
          <h1 className="mb-6 text-4xl font-extrabold">
            This guide is not available.
          </h1>
          <p className="mb-10 text-brand-beige/60">
            It may have been unpublished or the link may have changed.
          </p>
          <a href="/#blog" className="btn-primary inline-flex">
            Back to blog
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-navy pb-24 pt-32">
      <article>
        <header className="mx-auto max-w-4xl px-6 text-center">
          <a
            href="/#blog"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-brand-gold transition-colors hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to guides
          </a>
          <div className="mb-6 flex flex-wrap justify-center gap-4 text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold/80">
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.author}</span>
            {post.readingTime && <span>{post.readingTime}</span>}
          </div>
          <h1 className="mb-8 text-4xl font-extrabold md:text-6xl">
            {post.title}
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-brand-beige/65">
            {post.excerpt}
          </p>
        </header>

        {post.image && (
          <div className="mx-auto mt-14 max-w-6xl px-6">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-brand-depth">
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="mx-auto mt-14 max-w-3xl space-y-7 px-6 text-lg leading-relaxed text-brand-beige/70 [&_h2]:text-white [&_h3]:text-white [&_p]:leading-relaxed">
          <PortableContent blocks={post.content} />
        </div>
      </article>
    </main>
  );
}
