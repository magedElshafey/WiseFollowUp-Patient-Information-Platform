import Navbar from "../navbar/Navbar";
import { LogoProps } from "@/common/components/logo/Logo";
const StickyNavbar: React.FC<LogoProps> = ({ src }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
         
        `}
      >
        <Navbar src={src} />
      </div>
    </>
  );
};

export default StickyNavbar;
