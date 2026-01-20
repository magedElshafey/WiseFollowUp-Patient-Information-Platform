import { useState } from "react";

interface ImageWithPlaceholderProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function TrustImagePlaceHolder({
  src,
  alt = "",
  className = "",
}: ImageWithPlaceholderProps) {
  const [error, setError] = useState(false);

  const showImage = src && !error;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <div aria-hidden className="absolute inset-0 bg-primary/10" />

      {showImage && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setError(true)}
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}
    </div>
  );
}
