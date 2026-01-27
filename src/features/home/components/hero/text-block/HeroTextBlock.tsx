import HtmlConverter from "@/common/components/htmlConverter/HtmlConverter";
// import { parseHeroTitle } from "../utils/parseHeroTitle";

type Props = {
  title?: string;
  desc?: string;
};

const HeroTextBlock: React.FC<Props> = ({ title, desc }) => {
  // const parsedTitle = parseHeroTitle(title);

  return (
    <div className="text-center">
      <h1
        id="home-hero-heading"
        className="!min-h-[2rem] !text-2xl !md:text-4xl !font-bold !tracking-tight text-text-primary"
      >
        <HtmlConverter html={title} />
        {/* {parsedTitle.highlight && (
          <span className="text-primary mr-2">{parsedTitle.highlight}</span>
        )}
        <span>{parsedTitle.rest}</span> */}
      </h1>

      <p className="mt-4 min-h-[2.5rem] text-sm md:text-base text-text-muted max-w-2xl mx-auto">
        {desc}
      </p>
    </div>
  );
};

export default HeroTextBlock;
