export default function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="
        inline-flex items-center justify-center gap-2
        rounded-pill
        border border-border-subtle
        bg-bg-page
        px-3 py-2
        text-sm font-medium text-text-main
        hover:bg-primary-soft hover:text-primary
        transition
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-primary
        focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface
      "
    >
      {children}
    </a>
  );
}
