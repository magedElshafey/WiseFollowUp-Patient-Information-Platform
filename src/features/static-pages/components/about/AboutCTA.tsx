import React from "react";
import Section from "@/common/components/section/Section";
import MainBtn from "@/common/components/buttons/MainBtn";
import { Link } from "react-router-dom";

const AboutCTA: React.FC = () => {
  return (
    <Section aria-labelledby="about-cta-heading" className="section-shell-soft">
      <div className="containerr">
        <div className="rounded-card border border-border-subtle bg-bg-surface shadow-soft p-5 md:p-6">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] items-center">
            <div className="space-y-2">
              <h2
                id="about-cta-heading"
                className="text-xl font-black text-text-main"
              >
                Ready to explore?
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Start with a leaflet, then use a tool if it applies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <MainBtn variant="primary" className="justify-center">
                <Link to="/explore?type=leaflets">Browse leaflets</Link>
              </MainBtn>
              <MainBtn variant="outline" className="justify-center">
                <Link to="/explore?type=tools">Explore tools</Link>
              </MainBtn>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutCTA;
