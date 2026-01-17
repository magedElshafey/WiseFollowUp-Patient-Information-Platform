import { useEffect, useState } from "react";
import {
  getSearchHistory,
  togglePin,
  removeSearch,
  clearHistory,
  SearchHistoryItem,
} from "./searchHistory";

type Props = {
  onSelect: (value: string) => void;
};

const GROUP_LABEL: Record<string, string> = {
  default: "Recent searches",
  trust_id: "Trust IDs",
  author: "Authors",
};

const SearchHistoryPanel = ({ onSelect }: Props) => {
  const [items, setItems] = useState<SearchHistoryItem[]>([]);

  useEffect(() => {
    setItems(getSearchHistory());
  }, []);

  if (items.length === 0) return null;

  const grouped = items.reduce<Record<string, SearchHistoryItem[]>>(
    (acc, item) => {
      acc[item.key] = acc[item.key] || [];
      acc[item.key].push(item);
      return acc;
    },
    {}
  );

  return (
    <section className="containerr mt-6">
      <div className="rounded-card border border-border-subtle bg-bg-surface p-5 space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-text-main">
            Your searches
          </h2>

          <button
            onClick={() => {
              clearHistory();
              setItems([]);
            }}
            className="text-xs underline text-text-muted hover:text-primary"
          >
            Clear all
          </button>
        </div>

        {Object.entries(grouped).map(([key, list]) => (
          <div key={key} className="space-y-2">
            <p className="text-xs text-text-muted font-medium">
              {GROUP_LABEL[key]}
            </p>

            <div className="flex flex-wrap gap-2">
              {list
                .sort((a, b) => Number(b.pinned) - Number(a.pinned))
                .map((item) => (
                  <div
                    key={item.id}
                    className="
                      group flex items-center gap-2
                      rounded-pill border border-border-subtle
                      px-3 py-1 text-xs bg-bg-page
                    "
                  >
                    <button
                      onClick={() => onSelect(item.value)}
                      className="hover:text-primary"
                    >
                      {item.value}
                    </button>

                    <button
                      aria-label="Pin"
                      onClick={() => {
                        togglePin(item.id);
                        setItems(getSearchHistory());
                      }}
                      className={`text-xs ${
                        item.pinned ? "text-yellow-500" : "text-text-muted"
                      }`}
                    >
                      ★
                    </button>

                    <button
                      aria-label="Remove"
                      onClick={() => {
                        removeSearch(item.id);
                        setItems(getSearchHistory());
                      }}
                      className="text-text-muted hover:text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchHistoryPanel;
