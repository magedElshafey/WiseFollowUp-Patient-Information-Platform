// types
import type { Nav } from "../types/Nav";
import type { Lang } from "../types/Lang";

export const navLinks: Nav[] = [
  // {
  //   name: "offers",
  //   link: "/products?filter-in_offer=true",
  // },
  {
    name: "About",
    link: "/about-us",
  },

  // {
  //   name: "blogs",
  //   link: "/blogs",
  // },
  // {
  //   name: "contact us",
  //   link: "/contact-us",
  // },
  {
    name: "blogs",
    link: "/products",
  },
  {
    name: "tools & calculators",
    link: "/tools-calculators",
  },
  {
    name: "faq",
    link: "/faq",
  },
];

export const useflulLinks: Nav[] = [
  {
    name: "terms of use",
    link: "/terms-of-use",
  },
  {
    name: "terms & conditions",
    link: "/terms-conditions",
  },
  {
    name: "refund policy",
    link: "/refund-policy",
  },
  {
    name: "faq",
    link: "/faq",
  },
];
export const helpCenterLinks: Nav[] = [
  {
    name: "About",
    link: "/about",
  },

  {
    name: "blogs",
    link: "/refund-policy",
  },
];

export const LANGUAGES: Lang[] = [
  { flag: "/images/us.png", title: "english", label: "en" },
  { flag: "/images/ksa.png", title: "arabic", label: "ar" },
];
