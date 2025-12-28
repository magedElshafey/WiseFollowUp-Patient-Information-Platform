import React from "react";
import { Link } from "react-router-dom";
import MainBtn from "@/common/components/buttons/MainBtn";

const AboutWhatYouWillFind: React.FC = () => {
  return (
    <section aria-labelledby="about-find-heading" className="section-shell">
      <div className="containerr">
        <div className="grid gap-4 lg:grid-cols-2 items-start">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              What you’ll find
            </p>
            <h2
              id="about-find-heading"
              className="text-2xl font-black text-text-main"
            >
              Leaflets + tools (nothing confusing)
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Two simple libraries: patient leaflets and healthcare tools. Same
              search. Same filters.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-base">
              <h3 className="text-sm font-semibold text-text-main">
                Patient leaflets
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Plain-language pages with key facts, common questions, and what
                to do next.
              </p>
              <div className="mt-3">
                <MainBtn variant="outline" className="w-full justify-center">
                  <Link to="/explore?type=leaflets">Browse leaflets</Link>
                </MainBtn>
              </div>
            </div>

            <div className="card-base">
              <h3 className="text-sm font-semibold text-text-main">
                Tools & calculators
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Quick checklists and calculators designed to support safer
                follow-up decisions.
              </p>
              <div className="mt-3">
                <MainBtn variant="outline" className="w-full justify-center">
                  <Link to="/explore?type=tools">Explore tools</Link>
                </MainBtn>
              </div>
            </div>
          </div>
        </div>

        <div
          role="note"
          className="mt-5 rounded-card border border-border-subtle bg-accent-soft/60 p-4"
        >
          <p className="text-xs text-text-muted leading-relaxed">
            <span className="font-semibold text-text-main">Tip:</span> If you’re
            unsure what you need, start with a leaflet. If a tool applies, we’ll
            link it from the leaflet page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutWhatYouWillFind;
