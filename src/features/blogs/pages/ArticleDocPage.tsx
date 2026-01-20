import React, { useMemo } from "react";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import PageSeo from "@/common/components/seo/PageSeo";
import { seoConfig } from "@/common/components/seo/seo.config";
import { buildBlogStructuredData } from "../utils/buildBlogStructuredData";
import BlogHeader from "@/features/blogs/components/BlogHeader";
import BlogAside from "@/features/blogs/components/BlogAside";
import MobileToc from "@/features/blogs/components/MobileToc";
import HtmlConverter from "@/common/components/htmlConverter/HtmlConverter";
import type { TocItem } from "@/features/blogs/types/TocItem";
import type { UseQueryResult } from "@tanstack/react-query";

import { useSectionsWithIds } from "@/features/blogs/hooks/useSectionsWithIds";
import { useTocOffsetCssVar } from "@/features/blogs/hooks/useTocOffsetCssVar";
import { useActiveHeadingObserver } from "@/features/blogs/hooks/useActiveHeadingObserver";
export type ArticleSeoType = "blog" | "none";

type Props = {
  useQueryHook: () => UseQueryResult<any>;
  skeletonType?: string;
  tocFromData?: boolean;

  /** يحدد هل الصفحة Blog ولا لأ */
  seoType?: ArticleSeoType;
};

const ArticleDocPage: React.FC<Props> = ({
  useQueryHook,
  tocFromData = true,
  seoType = "none",
}) => {
  const query = useQueryHook();
  const post = seoType === "blog" ? query.data : query?.data?.data;
  console.log("cookies post", post);

  const sections = useMemo(() => post?.content ?? [], [post]);
  const sectionsWithIds = useSectionsWithIds(sections);

  const tocItems: TocItem[] = useMemo(() => {
    if (!tocFromData) return [];
    return sectionsWithIds
      .filter((s) => String(s.heading || "").trim().length > 0)
      .map((s) => ({ id: s._id, text: s.heading, level: 2 }));
  }, [sectionsWithIds, tocFromData]);

  const activeId = useActiveHeadingObserver(tocItems);
  useTocOffsetCssVar(post);

  return (
    <FetchHandler queryResult={query} skeletonType={"article-page"}>
      {post?.is_active ? (
        <>
          {/* ================= SEO (Blog only) ================= */}
          {seoType === "blog" && (
            <PageSeo
              title={post.meta_title || post.title}
              description={post.meta_description || post.excerpt}
              canonicalPath={`/blogs/${post.slug}`}
              ogType="article"
              ogImage={post.images?.[0]}
              publishedTime={post.published_at}
              structuredData={buildBlogStructuredData(
                post,
                `${seoConfig.siteUrl}/blogs/${post.slug}`,
              )}
            />
          )}

          {/* ================= HEADER ================= */}
          <BlogHeader post={post} />

          {/* ================= CONTENT ================= */}
          <main className="containerr mt-8 lg:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Article */}
              <article
                className="
                  prose max-w-none col-span-4
                  bg-bg-surface
                  border border-border-subtle
                  rounded-card
                  p-6
                  prose-headings:text-text-main
                  prose-p:text-text-muted
                  prose-strong:text-text-main
                  prose-a:text-primary
                "
              >
                {sectionsWithIds.map((sec) => (
                  <section
                    key={sec._id}
                    className="scroll-mt-[calc(var(--toc-offset)+16px)]"
                  >
                    <h2 id={sec._id}>{sec.heading}</h2>
                    <HtmlConverter html={sec.content} sanitize />
                  </section>
                ))}
              </article>

              {/* Aside */}
              <aside className="hidden lg:block">
                <div className="sticky top-48">
                  <BlogAside tocItems={tocItems} activeId={activeId} />
                </div>
              </aside>
            </div>
          </main>

          <MobileToc tocItems={tocItems} activeId={activeId} />
        </>
      ) : null}
    </FetchHandler>
  );
};

export default React.memo(ArticleDocPage);
