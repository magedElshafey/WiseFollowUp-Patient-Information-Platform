import React from "react";
import { Link } from "react-router-dom";
import { Articles } from "@/features/blogs/types/blog.types";
import { useTranslation } from "react-i18next";

const BlogCardFeed: React.FC<{ post: Articles }> = ({ post }) => {
  const { t } = useTranslation();

  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="
        group block relative
        py-4

        /* ===== Padding حسب الاتجاه ===== */
        ltr:pl-4 rtl:pr-4

        /* ===== Border base حسب الاتجاه ===== */
        ltr:border-l-2 rtl:border-r-2
        border-border-subtle

        /* ===== Gradient background ===== */
        bg-no-repeat
        bg-gradient-to-b
        from-primary/60
        via-primary/40
        to-accent/40

        /* ===== Background position حسب الاتجاه ===== */
        ltr:bg-left-top
        rtl:bg-right-top

        /* ===== Initial background size ===== */
        bg-[length:2px_0%]

        /* ===== Animation ===== */
        transition-[background-size,border-color] duration-500 ease-out

        /* ===== Hover / focus ===== */
        hover:bg-[length:2px_100%]
        hover:border-transparent

        focus-visible:bg-[length:2px_100%]
        focus-visible:border-transparent

        /* ===== Accessibility ===== */
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        focus-visible:ring-offset-bg-page
      "
    >
      {/* Meta */}
      <div className="flex items-center gap-2 text-[11px] text-text-muted">
        {post.category?.name && (
          <span className="font-semibold text-primary">
            {post.category.name}
          </span>
        )}

        <span aria-hidden>•</span>

        <time dateTime={post.created_at}>
          {new Date(post.created_at).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>

        <span aria-hidden>•</span>

        <span>
          {post.reading_time} {t("minutes")}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-1 text-base font-semibold leading-snug text-text-main min-h-[2.5rem]">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="mt-1 text-sm text-text-muted line-clamp-2 min-h-[2.5rem]">
        {post.excerpt}
      </p>

      {/* Author */}
      {post.author?.name && (
        <p className="mt-3 text-xs text-text-muted">
          By <span className="font-medium">{post.author.name}</span>
        </p>
      )}
    </Link>
  );
};

export default BlogCardFeed;
