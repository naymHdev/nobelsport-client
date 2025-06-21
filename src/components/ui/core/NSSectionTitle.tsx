type TSectionTitleProps = {
  section?: string;
  leftTitle: string;
  rightTitle: string;
  subTitle: string;
};

const NSSectionTitle = ({
  section,
  leftTitle,
  rightTitle,
  subTitle,
}: TSectionTitleProps) => {
  return (
    <div className=" px-4 w-full flex flex-col items-center justify-center text-center">
      {section && (
        <h2
          className="text-ns-secondary font-semibold uppercase font-open-sans
          text-xs sm:text-sm lg:text-base tracking-[3%] leading-[1.2]"
        >
          {section}
        </h2>
      )}

      <div
        className="mt-6 sm:mt-8 gap-2 lg:gap-4 text-center
        font-bebas font-bold tracking-normal uppercase"
      >
        <span
          className="text-transparent bg-gradient-to-br from-[#007A33] to-[#0032A0] bg-clip-text
          text-4xl sm:text-5xl lg:text-[60px] lg:leading-[80px]"
        >
          {leftTitle}
        </span>

        <span
          className="text-transparent bg-gradient-to-br from-[#FFB81C] to-[#E03C31] bg-clip-text
          text-4xl sm:text-5xl lg:text-[60px] lg:leading-[80px]"
        >
          {rightTitle}
        </span>
      </div>

      <p className="mt-4 text-ns-foreground font-open-sans text-base sm:text-lg leading-[1.3] max-w-xl mx-auto">
        {subTitle}
      </p>
    </div>
  );
};

export default NSSectionTitle;
