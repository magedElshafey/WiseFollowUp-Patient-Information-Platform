// src/components/about/OurStory.tsx
export default function OurStory() {
  return (
    <section className="bg-bg-surface py-section-y">
      <div className="containerr">
        <h2 className="text-4xl font-semibold text-secondary">Our Story</h2>

        <div className="mt-8 space-y-4 text-lg text-text-muted">
          <p>
            During clinical training, we repeatedly saw patients leave
            consultations unsure about their diagnosis, treatment, or next
            steps.
          </p>

          <p>
            Medical leaflets were often missing, outdated, or written in complex
            terminology that patients could not easily understand.
          </p>

          <p>
            WiseFollowUp was born from this gap — a commitment to make
            healthcare information clearer, safer, and more human.
          </p>
        </div>
      </div>
    </section>
  );
}
