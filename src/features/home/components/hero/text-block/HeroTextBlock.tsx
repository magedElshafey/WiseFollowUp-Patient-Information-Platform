type Props = {
  title?: string;
  desc?: string;
};

const HeroTextBlock: React.FC<Props> = ({ title, desc }) => {

  return (
    <div className="text-center">
      <h1 id="home-hero-heading" className="!min-h-[2rem] text-text-main">
        <div
          className=" prose
    max-w-full
    !text-2xl lg:!text-4xl
    !font-bold
    !tracking-tight
    break-words
    break-all
    overflow-hidden
    text-balance"
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />

      </h1>

      <p className="mt-4 min-h-[2.5rem] text-sm md:text-base text-text-muted max-w-2xl mx-auto">
        {desc}
      </p>
    </div>
  );
};

export default HeroTextBlock;
