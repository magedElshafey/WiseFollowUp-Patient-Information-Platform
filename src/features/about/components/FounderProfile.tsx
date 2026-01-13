// src/components/about/FounderProfile.tsx
type Props = {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
  };
  reverse?: boolean;
};

export default function FounderProfile({
  name,
  role,
  image,
  bio,
  socials,
  reverse,
}: Props) {
  return (
    <section className="bg-bg-surface py-section-y">
      <div
        className={`containerr grid gap-12 items-center lg:grid-cols-2 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="h-[920px] w-full rounded-card object-cover shadow-soft"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-semibold text-secondary">{name}</h2>
          <p className="mt-2 text-primary font-medium">{role}</p>

          <p className="mt-6 text-lg text-text-muted whitespace-pre-line">
            {bio}
          </p>

          {/* Social */}
          <div className="mt-6 flex gap-4">
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                className="text-text-muted hover:text-primary transition"
              >
                LinkedIn
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                className="text-text-muted hover:text-primary transition"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
