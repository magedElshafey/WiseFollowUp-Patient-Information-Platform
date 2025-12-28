import React from "react";
import Section from "@/common/components/section/Section";
import MainBtn from "@/common/components/buttons/MainBtn";
import { Link } from "react-router-dom";

const AboutHero: React.FC = () => {
  return (
    <Section
      aria-labelledby="about-hero-heading"
      className="
        section-shell
        relative overflow-hidden
        bg-gradient-to-b from-primary-soft via-bg-page to-bg-alt
      "
    >
      {/* soft blobs */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="containerr">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              About Wise Follow Up
            </p>

            <h1
              id="about-hero-heading"
              className="text-3xl md:text-4xl font-black text-text-main leading-tight"
            >
              Patient information made easier to find — and easier to
              understand.
            </h1>

            <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-2xl">
              Wise Follow Up helps people in the UK quickly reach the right
              leaflet or tool without getting lost in complicated medical
              websites.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <MainBtn variant="primary" className="justify-center">
                <Link to="/explore?type=leaflets">Browse leaflets</Link>
              </MainBtn>

              <MainBtn variant="outline" className="justify-center">
                <Link to="/explore?type=tools">Explore tools</Link>
              </MainBtn>
            </div>

            <p className="text-xs text-text-muted">
              Not an emergency service. If you think it is urgent, call 999 or
              go to A&amp;E.
            </p>
          </div>

          {/* Side card */}
          <aside aria-label="What we focus on" className="card-base gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Our focus
            </p>

            <ul className="space-y-2 text-sm text-text-main">
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-soft text-primary text-[11px] font-bold"
                >
                  ✓
                </span>
                <span>Plain language, patient-first tone</span>
              </li>

              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-soft text-primary text-[11px] font-bold"
                >
                  ✓
                </span>
                <span>Fast browsing with clear categories</span>
              </li>

              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-soft text-primary text-[11px] font-bold"
                >
                  ✓
                </span>
                <span>Helpful tools &amp; calculators where relevant</span>
              </li>
            </ul>

            <div
              role="note"
              className="rounded-card border border-border-subtle bg-primary-soft/60 p-3"
            >
              <p className="text-xs text-text-muted leading-relaxed">
                Information here is for guidance only and does not replace
                medical advice. Always follow your clinician’s instructions.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
};

export default AboutHero;
