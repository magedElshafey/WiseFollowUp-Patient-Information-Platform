import { Card } from "../types/vision.types";

export default function MissionVisionMessage({ data }: { data: Card[] }) {
  return (
    <section className="py-5 md:my-6 lg:py-7 xl:py-8 2xl:py-10">
      <div className="containerr">
        <div className="grid gap-8 md:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.title}
              className="rounded-card bg-bg-surface p-8 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-secondary">
                {item.title}
              </h3>
              <p className="mt-4 text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
