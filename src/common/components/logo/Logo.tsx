import { Link } from "react-router-dom";

export interface LogoProps {
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <Link
      to="/"
      aria-label="Wise Follow Up home"
      className="flex items-center shrink-0"
    >
      <div className="flex items-center h-11">
        {!src ? (
          // Skeleton
          <div
            className="
              h-11 w-32
              rounded-md
              bg-gray-200
              animate-pulse
            "
          />
        ) : (
          <img
            src={src}
            alt="Wise Follow Up logo"
            className="
              h-full
              w-auto
              object-contain
              lg:scale-[1.4]
            "
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        )}
      </div>
    </Link>
  );
};

export default Logo;
