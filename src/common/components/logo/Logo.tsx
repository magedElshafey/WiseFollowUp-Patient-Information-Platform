import { Link } from "react-router-dom";
export interface LogoProps {
  logo?: string;
}
const Logo: React.FC<LogoProps> = ({ logo = "" }) => {
  return (
    <Link to="/" className="shrink-0">
      {logo ? (
        <img
          alt="wise followup logo"
          src={logo}
          className={`h-[44px] w-auto object-contain `}
        />
      ) : (
        <Link
          to="/"
          className="
        inline-flex items-center gap-2
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-primary
        focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
        rounded-pill
        px-1 py-0.5
      "
        >
          <div
            className="
          flex h-8 w-8 items-center justify-center
          rounded-xl bg-primary-soft
        "
            aria-hidden="true"
          >
            <span className="text-sm font-bold text-primary">WF</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-text-main">
              Wise Follow Up
            </span>
            <span className="text-[10px] text-text-muted">
              Patient-friendly leaflets
            </span>
          </div>
        </Link>
      )}
    </Link>
  );
};

export default Logo;
