import React from "react";

const steps = [
  {
    n: 1,
    title: "Search or browse",
    desc: "Type a symptom, condition, procedure, or medicine — or browse by body system.",
  },
  {
    n: 2,
    title: "Open a leaflet",
    desc: "Read a clear summary with key points, what to expect, and when to seek urgent help.",
  },
  {
    n: 3,
    title: "Use a related tool",
    desc: "When available, run a quick calculator or checklist that supports safer follow-up decisions.",
  },
];

const AboutHowItWorks: React.FC = () => {
  return (
    <section aria-labelledby="about-how-heading" className="section-shell-soft">
      <div className="containerr">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-start">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              How it works
            </p>
            <h2
              id="about-how-heading"
              className="text-2xl font-black text-text-main"
            >
              From question → to the right page in seconds
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              We organize information the way people actually search: by
              problem, not by medical jargon.
            </p>
          </div>

          <ol className="grid gap-3">
            {steps.map((s) => (
              <li key={s.n} className="card-base">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-black"
                  >
                    {s.n}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-text-main">
                      {s.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutHowItWorks;
