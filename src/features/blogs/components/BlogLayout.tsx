import React from "react";
import OnThisPage, { type TocItem } from "./OnThisPage";

const BlogLayout: React.FC<{
  title: string;
  meta: React.ReactNode;
  toc: TocItem[];
  children: React.ReactNode;
}> = ({ title, meta, toc, children }) => {
  return (
    <main className="section-shell">
      <div className="containerr">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] items-start">
          <article className="rounded-card border border-border-subtle bg-bg-surface shadow-soft p-5 md:p-6">
            <header className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-text-main">
                {title}
              </h1>
              <div className="text-xs text-text-muted">{meta}</div>
            </header>

            <div className="prose prose-slate max-w-none mt-6">{children}</div>
          </article>

          <OnThisPage items={toc} />
        </div>
      </div>
    </main>
  );
};

export default BlogLayout;
