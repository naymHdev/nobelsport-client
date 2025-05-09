import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { testimonialsData } from "@/data/data";
import { TTestimonial } from "@/types/testimonial";
import Image from "next/image";
import cote from "../../../../assets/icons/cotetion.png";
import NSButton from "@/components/ui/core/NSButton";
import { MoveRight } from "lucide-react";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const testimonialArray: TTestimonial[] | undefined = Array.from(
    { length: 30 },
    (_, index) => ({
      ...testimonialsData[0],
      _id: `${index + 1}`,
    })
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container gap-8 py-1">
          {testimonialArray?.map((review, idx) => (
            <div
              className="embla__slide bg-white hover:bg-ns-primary group p-[30px] rounded-3xl"
              key={idx + 1}
            >
              <div className=" flex items-center justify-between">
                <div className=" flex items-center gap-5">
                  <div className=" rounded-full">
                    <Image
                      src={review.profile_img}
                      alt={review.name}
                      width={100}
                      height={100}
                      className=" rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className=" text-ns-title group-hover:text-white font-openSans text-[23px] font-semibold leading-[30px] capitalize">
                      {review.name}
                    </h3>
                    <p className=" font-openSans text-ns-secondary group-hover:text-[#FFB81C] font-semibold leading-6">
                      {review.gender} Player
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" text-6xl">
                    <Image src={cote} alt="cote" width={20} height={20} />
                  </p>
                </div>
              </div>
              <div className="mt-[22px]">
                <h2 className=" text-ns-title group-hover:text-white font-bebas leading-9 font-normal text-[30px]">
                  {review.player_experience}
                </h2>
                <p className="mt-[22px] text-ns-foreground group-hover:text-white font-normal font-openSans leading-6 text-[17px]">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------ Handle Dot Button ---------------- */}
      <div className=" absolute -top-[90px]">
        <div className=" flex items-center gap-4">
          <div className=" bg-white rounded-full">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className=" bg-white rounded-full">
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
      <div className=" absolute -top-[90px] right-0 border-b border-b-ns-secondary">
        <NSButton className=" flex items-center gap-2 bg-transparent text-ns-secondary font-normal text-xl leading-normal font-openSans">
          See All.. <MoveRight />
        </NSButton>
      </div>
    </section>
  );
};

export default EmblaCarousel;
