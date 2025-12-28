type HeroBadgeProps = {
  label: string;
};

const HeroBadge: React.FC<HeroBadgeProps> = ({ label }) => (
  <span
    className="
      inline-flex items-center gap-2
      rounded-pill bg-bg-surface/80
      border border-border-subtle
      px-3 py-1
    "
  >
    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
    <span>{label}</span>
  </span>
);

export default HeroBadge;
