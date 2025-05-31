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
    <div className="max-w-full px-4 sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto flex flex-col items-center text-center">
      {section && (
        <h2 className="text-ns-secondary font-semibold uppercase font-open-sans
          text-xs sm:text-sm lg:text-base tracking-[3%] leading-[1.2]">
          {section}
        </h2>
      )}

      <div className="mt-6 sm:mt-8 gap-2 lg:gap-4 text-center
        font-bebas font-normal capitalize tracking-normal">
        <h1 className="text-transparent bg-gradient-to-br from-[#007A33] to-[#0032A0] bg-clip-text
          text-4xl sm:text-5xl lg:text-[70px] lg:leading-[83.81px]">
          {leftTitle}
        </h1>

        <h1 className="text-transparent bg-gradient-to-br from-[#FFB81C] to-[#E03C31] bg-clip-text
          text-4xl sm:text-5xl lg:text-[70px] lg:leading-[83.81px]">
          {rightTitle}
        </h1>
      </div>

      <p className="mt-4 text-ns-foreground font-open-sans text-base sm:text-lg leading-[1.3] max-w-xl mx-auto">
        {subTitle}
      </p>
    </div>
  );
};

export default NSSectionTitle;
