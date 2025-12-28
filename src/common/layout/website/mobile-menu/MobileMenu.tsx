import MainBtn from "@/common/components/buttons/MainBtn";
import NavbarLanguageToggle from "../navbar/lang-menu/LangMenu";
import { NavLinkItem } from "../navbar/data/navbarData";
import { NavLink, useLocation } from "react-router-dom";

type MobileMenuProps = {
  isOpen: boolean;
  links: NavLinkItem[];
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, links }) => {
  const location = useLocation();
  const isActiveLink = (href: string) => {
    const url = new URL(href, window.location.origin);

    const targetPath = url.pathname; // /explore
    const targetType = url.searchParams.get("type"); // leaflets/tools

    const currentPath = location.pathname; // /explore
    const currentType = new URLSearchParams(location.search).get("type");

    return currentPath === targetPath && currentType === targetType;
  };
  if (!isOpen) return null;

  return (
    <div
      id="primary-mobile-nav"
      className="
        md:hidden
        border-t border-border-subtle
        pb-4
      "
    >
      <nav aria-label="Mobile main navigation" className="pt-3 space-y-3">
        <ul className="space-y-1 ">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link?.href}
                  className={`w-full text-start px-3 py-2 rounded-card transition-colors ${
                    isActiveLink(link?.href)
                      ? "text-primary font-semibold"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <NavbarLanguageToggle />
          <MainBtn variant="primary" className="flex-1 text-xs py-2">
            Browse leaflets
          </MainBtn>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
