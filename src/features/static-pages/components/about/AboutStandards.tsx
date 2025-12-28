import React from "react";
import { Link } from "react-router-dom";

const AboutStandards: React.FC = () => {
  return (
    <section
      aria-labelledby="about-standards-heading"
      className="section-shell"
    >
      <div className="containerr">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-start">
          <div className="rounded-card border border-border-subtle bg-bg-surface shadow-soft p-5 md:p-6">
            <h2
              id="about-standards-heading"
              className="text-xl font-black text-text-main"
            >
              Our standards (simple & honest)
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Standard
                title="Transparency"
                desc="We aim to be clear about what the site is and is not."
              />
              <Standard
                title="Accessibility"
                desc="Keyboard-friendly, readable typography, and calm layout."
              />
              <Standard
                title="Privacy"
                desc="We treat privacy seriously and keep tracking minimal."
              />
              <Standard
                title="Safety-first"
                desc="Every page reinforces safety-netting and next steps."
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                to="/privacy"
                className="rounded-pill border border-border-subtle bg-bg-page px-4 py-2 text-sm font-semibold text-text-main hover:bg-bg-alt
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="rounded-pill border border-border-subtle bg-bg-page px-4 py-2 text-sm font-semibold text-text-main hover:bg-bg-alt
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page"
              >
                Terms
              </Link>
              <Link
                to="/cookies"
                className="rounded-pill border border-border-subtle bg-bg-page px-4 py-2 text-sm font-semibold text-text-main hover:bg-bg-alt
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page"
              >
                Cookies
              </Link>
            </div>
          </div>

          <aside className="card-base">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Short promise
            </p>
            <p className="text-sm font-semibold text-text-main">
              We optimise for clarity, not complexity.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              If a page feels confusing, we want to know — so we can improve it.
            </p>
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-white hover:brightness-110
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page"
            >
              Send feedback
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutStandards;

const Standard: React.FC<{ title: string; desc: string }> = ({
  title,
  desc,
}) => (
  <div className="rounded-card border border-border-subtle bg-bg-page p-4">
    <p className="text-sm font-semibold text-text-main">{title}</p>
    <p className="mt-1 text-xs text-text-muted leading-relaxed">{desc}</p>
  </div>
);
