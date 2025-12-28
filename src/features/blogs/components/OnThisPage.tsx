import React from "react";
import { useActiveHeading } from "./useActiveHeading";

export type TocItem = { id: string; label: string };

const OnThisPage: React.FC<{ items: TocItem[] }> = ({ items }) => {
  const ids = items.map((i) => i.id);
  const activeId = useActiveHeading(ids);

  return (
    <aside
      aria-label="On this page"
      className="
        hidden lg:block
        rounded-card border border-border-subtle bg-bg-surface shadow-soft
        p-4 sticky top-24
      "
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
        On this page
      </p>

      <nav className="mt-3">
        <ul className="space-y-1.5">
          {items.map((it) => {
            const active = it.id === activeId;
            return (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  className={`
                    block rounded-md px-2 py-1 text-sm
                    ${
                      active
                        ? "bg-primary-soft text-primary font-semibold"
                        : "text-text-muted hover:text-text-main hover:bg-bg-page"
                    }
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                    focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface
                  `}
                >
                  {it.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default OnThisPage;
