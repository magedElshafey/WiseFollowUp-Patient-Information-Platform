const LeafletCardSkeleton = () => (
  <div
    aria-hidden
    className="rounded-card bg-bg-surface p-5 shadow-soft animate-pulse space-y-3"
  >
    <div className="h-4 w-3/4 bg-border-subtle rounded" />
    <div className="h-3 w-full bg-border-subtle rounded" />
    <div className="h-3 w-5/6 bg-border-subtle rounded" />
  </div>
);

export default LeafletCardSkeleton;
