import { Link } from "react-router-dom";
interface SectionHeaderProps {
  title: string;
  titleId: string;
  description?: string;
  hasViewAll?: boolean;
  path?: string;
  viewAllText?: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleId,
  description = "",
  hasViewAll = true,
  path = "/",
  viewAllText = "View all →",
}) => {
  return (
    <header className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2
          id={titleId}
          className="text-lg md:text-xl xl:text-2xl 2xl:text-4xl font-semibold text-primary"
        >
          {title}
        </h2>
        {description && (
          <p className="text-sm text-text-muted">{description}</p>
        )}
      </div>
      {hasViewAll && (
        <Link
          to={path}
          className="
              text-sm font-medium text-primary
              hover:underline
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-primary
              focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
              rounded-sm
            "
        >
          {viewAllText}
        </Link>
      )}
    </header>
  );
};

export default SectionHeader;
