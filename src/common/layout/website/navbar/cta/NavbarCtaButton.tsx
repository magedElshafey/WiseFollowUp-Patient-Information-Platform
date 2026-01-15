import MainBtn from "@/common/components/buttons/MainBtn";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NavbarCtaButton: React.FC = () => {
  const { t } = useTranslation();
  return (
    <MainBtn
      variant="primary"
      className="text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5"
    >
      <Link to="/leaflets">{t("Browse leaflets")}</Link>
    </MainBtn>
  );
};
export default NavbarCtaButton;
