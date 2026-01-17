
const STORAGE_KEY = "leaflets_search_history";
const MAX_ITEMS = 12;

export type SearchKey = "default" | "trust_id" | "author";

export interface SearchHistoryItem {
  id: string;
  value: string;
  key: SearchKey;
  pinned: boolean;
  timestamp: number;
}

const safeParse = <T>(value: string | null, fallback: T): T => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export function getSearchHistory(): SearchHistoryItem[] {
  return safeParse(localStorage.getItem(STORAGE_KEY), []);
}

function persist(items: SearchHistoryItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function saveSearchHistory(
  value: string,
  key: SearchKey = "default"
) {
  const items = getSearchHistory();

  const filtered = items.filter(
    (i) => !(i.value === value && i.key === key)
  );

  const next: SearchHistoryItem[] = [
    {
      id: crypto.randomUUID(),
      value,
      key,
      pinned: false,
      timestamp: Date.now(),
    },
    ...filtered,
  ];

  persist(next.slice(0, MAX_ITEMS));
}

export function togglePin(id: string) {
  const items = getSearchHistory().map((i) =>
    i.id === id ? { ...i, pinned: !i.pinned } : i
  );
  persist(items);
}

export function removeSearch(id: string) {
  persist(getSearchHistory().filter((i) => i.id !== id));
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
}
