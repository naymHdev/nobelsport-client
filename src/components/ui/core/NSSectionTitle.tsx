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
    <>
      <div className=" flex flex-col items-center justify-center text-center w-7/12 mx-auto">
        <div>
          <h2 className="text-ns-secondary font-semibold text-[14px] leading-[17.14px] tracking-[3%] text-center uppercase font-open-sans">
            {section}
          </h2>
        </div>

        <div className=" mt-[22px]">
          <div className=" flex items-center justify-center text-center gap-2 font-bebas font-normal text-[70px] leading-[83.81px] tracking-normal capitalize">
            <h1 className="text-transparent bg-gradient-to-br from-[#007A33] to-[#0032A0] bg-clip-text">
              {leftTitle}
            </h1>

            <h1 className="text-transparent bg-gradient-to-br from-[#FFB81C] to-[#E03C31] bg-clip-text">
              {rightTitle}
            </h1>
          </div>
          <p className=" text-ns-foreground font-openSans text-base font-normal leading-[20.95px] tracking-[0px] text-center">
            {subTitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default NSSectionTitle;
