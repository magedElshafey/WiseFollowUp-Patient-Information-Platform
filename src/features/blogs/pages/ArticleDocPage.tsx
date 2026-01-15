import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import BlogHeader from "@/features/blogs/components/BlogHeader";
import BlogAside from "@/features/blogs/components/BlogAside";
import MobileToc from "@/features/blogs/components/MobileToc";
import HtmlConverter from "@/common/components/htmlConverter/HtmlConverter";
import i18n from "@/lib/i18n/i18n";
import { useTranslation } from "react-i18next";
import type { Articles } from "@/features/blogs/types/blog.types";
import type { TocItem } from "@/features/blogs/types/TocItem";
import type { UseQueryResult } from "@tanstack/react-query";
import { useSectionsWithIds } from "@/features/blogs/hooks/useSectionsWithIds";
import { useTocOffsetCssVar } from "@/features/blogs/hooks/useTocOffsetCssVar";
import { useActiveHeadingObserver } from "@/features/blogs/hooks/useActiveHeadingObserver";

type Props = {
  useQueryHook: () => UseQueryResult<Articles, unknown>;
  skeletonType?: string;
  tocFromData?: boolean;
  showBackButton?: boolean;
};

const ArticleDocPage: React.FC<Props> = ({
  useQueryHook,
  tocFromData = true,
  showBackButton = true,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const query = useQueryHook();

  const sections = useMemo(() => query.data?.content ?? [], [query.data]);
  const sectionsWithIds = useSectionsWithIds(sections);

  const tocItems: TocItem[] = useMemo(() => {
    if (!tocFromData) return [];
    return sectionsWithIds
      .filter((s) => String(s.heading || "").trim().length > 0)
      .map((s) => ({ id: s._id, text: s.heading, level: 2 }));
  }, [sectionsWithIds, tocFromData]);

  const activeId = useActiveHeadingObserver(tocItems);
  useTocOffsetCssVar(query.data);

  return (
    <FetchHandler queryResult={query} skeletonType="hero">
      {query?.data?.is_active && query.data ? (
        <div>
          <BlogHeader post={query.data} />

          <main className="containerr py-10 bg-bg-page">
            {showBackButton && (
              <button
                onClick={() => navigate(-1)}
                className="mb-6 text-xs text-text-muted hover:text-primary transition"
              >
                {i18n.language === "ar" ? "→" : "←"} {t("Back")}
              </button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
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
                  hover:prose-a:underline
                "
              >
                {sectionsWithIds.map((sec) => (
                  <section
                    key={sec._id}
                    className="scroll-mt-[calc(var(--toc-offset)+16px)]"
                  >
                    <h2 id={sec._id} className="text-primary">
                      {sec.heading}
                    </h2>

                    <HtmlConverter
                      html={sec.content}
                      sanitize
                      className="!text-text-muted"
                    />
                  </section>
                ))}
              </article>

              <aside className="hidden lg:block relative">
                <div className="sticky top-48 z-20">
                  <BlogAside tocItems={tocItems} activeId={activeId} />
                </div>
              </aside>
            </div>
          </main>

          <MobileToc tocItems={tocItems} activeId={activeId} />
        </div>
      ) : null}
    </FetchHandler>
  );
};

export default React.memo(ArticleDocPage);
