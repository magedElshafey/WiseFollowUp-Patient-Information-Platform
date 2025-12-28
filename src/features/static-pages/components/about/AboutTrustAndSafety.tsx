import React from "react";

const AboutTrustAndSafety: React.FC = () => {
  return (
    <section aria-labelledby="about-trust-heading" className="section-shell">
      <div className="containerr">
        <div className="rounded-card border border-border-subtle bg-bg-surface shadow-soft p-5 md:p-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-start">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                Trust & safety
              </p>
              <h2
                id="about-trust-heading"
                className="text-2xl font-black text-text-main"
              >
                Clear, careful, and patient-safe
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                We design our pages to reduce confusion and avoid risky
                interpretation.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              <Item
                icon="✅"
                title="Plain language"
                desc="We explain terms, avoid jargon, and keep pages scannable."
              />
              <Item
                icon="🧪"
                title="Evidence-aware"
                desc="Content is written to support follow-up decisions, not replace care."
              />
              <Item
                icon="🧭"
                title="Clear next steps"
                desc="Each leaflet includes what to do next and warning signs."
              />
              <Item
                icon="🧩"
                title="Accessible design"
                desc="Readable typography, contrast, and keyboard-friendly UI."
              />
            </ul>
          </div>

          <div
            role="note"
            className="mt-5 rounded-card border border-border-subtle bg-primary-soft/60 p-4"
          >
            <p className="text-xs text-text-muted leading-relaxed">
              <span className="font-semibold text-text-main">Important:</span>{" "}
              This website provides guidance only and does not replace medical
              advice. If symptoms are severe or sudden, seek urgent care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrustAndSafety;

const Item: React.FC<{ icon: string; title: string; desc: string }> = ({
  icon,
  title,
  desc,
}) => (
  <li className="rounded-card border border-border-subtle bg-bg-page p-4">
    <div className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-surface text-lg"
      >
        {icon}
      </span>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-text-main">{title}</p>
        <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  </li>
);
