export type NavLinkItem = {
  id: string;
  label: string;
  href: string;
};

export const DEFAULT_LINKS: NavLinkItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "leaflets", label: "Leaflets", href: "/explore?type=leaflets" },
  { id: "tools", label: "Tools & calculators", href: "/explore?type=tools" },
  { id: "about", label: "About", href: "/about" },
];
