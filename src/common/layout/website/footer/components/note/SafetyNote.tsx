const SafetyNote: React.FC = () => {
  return (
    <section
      aria-label="Safety note"
      className="
        mt-6 rounded-card bg-bg-page border border-border-subtle
        px-4 py-3 sm:px-5 sm:py-3.5
        flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between
      "
    >
      <div className="flex items-start gap-2">
        <span
          aria-hidden="true"
          className="
            mt-0.5 inline-flex h-6 w-6 items-center justify-center
            rounded-full bg-primary-soft text-xs font-semibold text-primary
          "
        >
          i
        </span>
        <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed">
          Wise Follow Up is designed to support – not replace – advice from your
          own doctor, optometrist, or healthcare team. Always follow the
          instructions given to you in clinic if they differ from what you read
          here.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 text-[11px] mt-1 sm:mt-0">
        <span className="inline-flex items-center rounded-pill bg-bg-surface px-3 py-1 border border-border-subtle text-text-muted">
          ✅ Plain-language information
        </span>
        <span className="inline-flex items-center rounded-pill bg-bg-surface px-3 py-1 border border-border-subtle text-text-muted">
          👁️ Focused on eye care
        </span>
      </div>
    </section>
  );
};
export default SafetyNote;
