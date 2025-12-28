import React from "react";

const AboutWhoItsFor: React.FC = () => {
  return (
    <section aria-labelledby="about-who-heading" className="section-shell-soft">
      <div className="containerr">
        <div className="grid gap-4 lg:grid-cols-3 items-start">
          <div className="lg:col-span-1 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Who it’s for
            </p>
            <h2
              id="about-who-heading"
              className="text-2xl font-black text-text-main"
            >
              Built for patients — helpful for clinicians too
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              The same content can support conversations during and after
              appointments.
            </p>
          </div>

          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            <Audience
              title="Patients & families"
              icon="👤"
              points={[
                "Understand your condition and follow-up",
                "Know what’s normal vs what needs urgent care",
                "Prepare better questions for your appointment",
              ]}
            />
            <Audience
              title="Clinicians"
              icon="🩺"
              points={[
                "Share leaflets to support consultations",
                "Use tools as conversation aids",
                "Reinforce safety-netting advice clearly",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoItsFor;

const Audience: React.FC<{ title: string; icon: string; points: string[] }> = ({
  title,
  icon,
  points,
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
        <ul className="mt-2 space-y-1.5 text-xs text-text-muted">
          {points.map((p) => (
            <li key={p} className="flex gap-2">
              <span aria-hidden="true" className="text-primary font-bold">
                •
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
