// src/features/search-advanced/components/SearchSuggestionsPortal.tsx
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  anchorRef: React.RefObject<HTMLElement>;
  children: React.ReactNode;
};

const SearchSuggestionsPortal = ({ open, anchorRef, children }: Props) => {
  if (!open || !anchorRef.current) return null;

  const rect = anchorRef.current.getBoundingClientRect();

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: rect.bottom + 6,
        left: rect.left,
        width: rect.width,
        zIndex: 50,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default SearchSuggestionsPortal;
