import { useState, useMemo, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchSuggestions } from "./useSearchSuggestions";
import type { SearchPayload } from "../types/search.types";
import { saveSearchHistory } from "../components/searchHistory";
type Params = {
  mode: "normal" | "advanced";
  initialPayload?: SearchPayload;
};

export function useSearchController({ mode, initialPayload }: Params) {
  const navigate = useNavigate();

  const [payload, setPayload] = useState<SearchPayload>(
    initialPayload ?? { value: "" }
  );
  const [open, setOpen] = useState(false);

  /* -------------------- normalize payload -------------------- */
  const effectivePayload = useMemo<SearchPayload>(() => {
    if (mode === "normal") {
      return {
        value: typeof payload.value === "string" ? payload.value : "",
      };
    }
    return payload;
  }, [mode, payload]);

  /* -------------------- suggestions -------------------- */
  const suggestions = useSearchSuggestions(effectivePayload);

  /* -------------------- navigation -------------------- */
  const navigateToLeaflets = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    // save history
    saveSearchHistory(trimmed, (effectivePayload.key as any) ?? "default");

    navigate(`/leaflets?filter-search=${encodeURIComponent(trimmed)}`);
  };

  /* -------------------- handlers -------------------- */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOpen(false);

    if (typeof effectivePayload.value === "string") {
      navigateToLeaflets(effectivePayload.value);
    }
  };

  const handleSelect = (value: string) => {
    setOpen(false);
    navigateToLeaflets(value);
  };

  return {
    payload,
    setPayload,
    open,
    setOpen,
    suggestions,
    handleSubmit,
    handleSelect,
  };
}
