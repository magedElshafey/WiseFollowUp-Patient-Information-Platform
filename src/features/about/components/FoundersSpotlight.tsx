// src/components/about/FoundersSpotlight.tsx
import { founders } from "../data/team";

export default function FoundersSpotlight() {
  return (
    <section className="bg-bg-alt py-section-y">
      <div className="containerr">
        <h2 className="text-3xl font-semibold text-secondary">
          Meet the Founders
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="flex gap-6 rounded-card bg-bg-surface p-6 shadow-soft"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="h-36 w-36 rounded-card object-cover"
              />

              <div>
                <h3 className="text-xl font-medium text-secondary">
                  {founder.name}
                </h3>
                <p className="text-sm text-primary">{founder.role}</p>
                <p className="mt-3 text-text-muted">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
