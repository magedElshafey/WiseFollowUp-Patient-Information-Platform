import { AboutInfo } from "../types/aboutInfo.types";

export default function ClosingStatement({ data }: { data: AboutInfo }) {
  return (
    <section className="bg-gradient-to-br from-primary-soft via-bg-alt to-bg-surface py-section-y">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-secondary">
          {data?.heading}
        </h2>

        <p className="mt-6 text-lg text-text-muted whitespace-pre-line">
          {data?.description.join("\n")}
        </p>
      </div>
    </section>
  );
}
