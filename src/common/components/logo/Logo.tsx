import { Link } from "react-router-dom";

export interface LogoProps {
  src: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <Link
      to="/"
      aria-label="Wise Follow Up home"
      className="flex items-center shrink-0"
    >
      {/* layout box (لا يغيّر ارتفاع الناف) */}
      <div className="h-11 flex items-center overflow-visible">
        <img
          src={src}
          alt="Wise Follow Up logo"
          className="
            h-full w-auto
            object-contain
            scale-[1.4]
            origin-left
          "
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </Link>
  );
};

export default Logo;
