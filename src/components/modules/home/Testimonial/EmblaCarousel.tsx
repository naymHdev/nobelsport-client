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
import NSButton from "@/components/ui/core/NSButton";
import { MoveRight } from "lucide-react";
import icon from "../../../../assets/svgs/“.svg";

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
                  <Image
                    src={icon}
                    alt={"Icon"}
                    width={64}
                    height={64}
                    className="w-[22px] h-[20px] group-hover:hidden"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 25 22"
                    fill="none"
                    className=" hidden group-hover:block"
                  >
                    <path
                      d="M7.69238 1.56287L10.0391 3.20837L10.4512 3.49744L10.1406 3.89294C9.766 4.36867 9.29968 5.12297 8.74219 6.17322L8.73926 6.18005C8.19432 7.16865 7.72403 8.27591 7.33105 9.50427L7.33008 9.50818C7.0117 10.4723 6.84134 11.4037 6.8125 12.3031C6.85571 12.2986 6.89777 12.2969 6.93848 12.2953C7.15803 12.2544 7.37851 12.2338 7.59961 12.2338C8.78168 12.2338 9.84513 12.5779 10.7725 13.2679H10.7715C11.7746 13.9739 12.2285 15.1248 12.2285 16.5892C12.2285 17.8845 11.7814 19.0341 10.9043 20.0199L10.9053 20.0209C10.0405 20.9988 8.86196 21.4709 7.42871 21.473L7.42969 21.474C5.47369 21.5155 3.92956 20.9085 2.89258 19.5873L2.8877 19.5814C1.89258 18.2712 1.40625 16.6761 1.40625 14.8256C1.4063 13.5209 1.61519 12.1446 2.02637 10.6986L2.19043 10.1537C2.59543 8.87892 3.15686 7.57891 3.87109 6.2533L3.87305 6.24939L4.2041 5.66541C4.99968 4.30762 5.95031 2.96805 7.05371 1.64685L7.33398 1.31091L7.69238 1.56287ZM19.7285 1.56287L22.0752 3.20837L22.4873 3.49744L22.1758 3.89294C21.8012 4.36867 21.3358 5.12297 20.7783 6.17322L20.7744 6.18005C20.2295 7.16857 19.7601 8.27604 19.3672 9.50427L19.3652 9.50818C19.0469 10.4723 18.8775 11.4037 18.8486 12.3031C18.8919 12.2986 18.9339 12.2968 18.9746 12.2953C19.194 12.2544 19.4148 12.2338 19.6357 12.2338C20.8177 12.2339 21.8813 12.5778 22.8086 13.2679L22.8076 13.2689C23.8101 13.9749 24.2636 15.1252 24.2637 16.5892C24.2637 17.8846 23.8167 19.0341 22.9395 20.0199L22.9404 20.0209C22.0756 20.9988 20.8972 21.471 19.4639 21.473L19.4648 21.474C17.5089 21.5155 15.9647 20.9085 14.9277 19.5873L14.9229 19.5814C13.9278 18.2713 13.4424 16.676 13.4424 14.8256C13.4424 13.5209 13.6513 12.1446 14.0625 10.6986L14.2266 10.1537C14.6315 8.87902 15.1921 7.57879 15.9062 6.2533L15.9082 6.24939L16.2402 5.66541C17.0358 4.3077 17.9855 2.96797 19.0889 1.64685L19.3701 1.31091L19.7285 1.56287Z"
                      fill="white"
                      stroke="white"
                      stroke-width="0.952381"
                    />
                  </svg>
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
