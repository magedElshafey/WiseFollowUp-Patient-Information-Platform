export type NavLinkItem = {
  id: string;
  label: string;
  href: string;
};

export const DEFAULT_LINKS: NavLinkItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
];
