import React from "react";

const AboutMissionVision: React.FC = () => {
  return (
    <section aria-labelledby="about-mission-heading" className="section-shell">
      <div className="containerr">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Mission • Vision • Values
            </p>
            <h2
              id="about-mission-heading"
              className="mt-2 text-2xl font-black text-text-main"
            >
              A calm, reliable place for health information
            </h2>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              We keep things simple: clear content, clear navigation, and a
              supportive tone.
            </p>
          </div>

          <div className="lg:col-span-2 grid gap-4 md:grid-cols-3">
            <Card
              title="Mission"
              icon="🎯"
              desc="Help patients find the right leaflet or tool quickly — with less anxiety and less searching."
            />
            <Card
              title="Vision"
              icon="🧭"
              desc="Make trusted patient education feel modern, accessible, and easy for everyone."
            />
            <Card
              title="Values"
              icon="🫶"
              desc="Clarity, kindness, and safety. We design for real people, not just clinicians."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;

const Card: React.FC<{ title: string; desc: string; icon: string }> = ({
  title,
  desc,
  icon,
}) => (
  <div className="card-base">
    <div className="flex items-start gap-3">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary text-lg"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-text-main">{title}</h3>
        <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);
