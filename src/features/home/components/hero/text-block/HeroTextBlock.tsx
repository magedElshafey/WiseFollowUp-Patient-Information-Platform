// import React from "react";
// interface HeroTextBlockProps {
//   title: string;
//   desc: string;
// }
// const HeroTextBlock: React.FC<HeroTextBlockProps> = ({ title, desc }) => {
//   return (
//     <div className="flex flex-col items-center gap-3 text-center space-y-2">
//       <h1
//         id="home-hero-heading"
//         className="
//           text-2xl sm:text-3xl md:text-4xl lg:text-5xl
//           font-bold tracking-tight text-text-main
//         "
//       >
//         Clear patient leaflets{" "}
//         <span className="text-primary">and healthcare tools</span> in one place.
//       </h1>

import { parseHeroTitle } from "../utils/parseHeroTitle";

//       <p
//         id="home-hero-description"
//         className="max-w-2xl text-sm sm:text-base text-text-muted"
//       >
//         {desc}
//       </p>
//     </div>
//   );
// };

// export default HeroTextBlock;
type Props = {
  title?: string;
  desc?: string;
};

const HeroTextBlock: React.FC<Props> = ({ title, desc }) => {
  const parsedTitle = parseHeroTitle(title);

  return (
    <div className="text-center">
      {/* reserve height to avoid CLS */}
      <h1
        id="home-hero-heading"
        className="min-h-3 text-2xl md:text-4xl font-bold tracking-tight text-text-primary"
      >
        {parsedTitle.highlight && (
          <span className="text-primary mr-2">{parsedTitle.highlight}</span>
        )}
        <span>{parsedTitle.rest}</span>
      </h1>

      {/* description height reservation */}
      <p className="mt-4 min-h-3 text-sm md:text-base text-text-muted max-w-2xl mx-auto">
        {desc}
      </p>
    </div>
  );
};

export default HeroTextBlock;
