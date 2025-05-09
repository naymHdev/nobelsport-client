"use client";

import NSContainer from "@/components/ui/core/NSContainer";
import NSSectionTitle from "@/components/ui/core/NSSectionTitle";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const Testimonials = () => {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };

  return (
    <>
      <div>
        <NSContainer>
          <NSSectionTitle
            section="Client Testimonials"
            leftTitle="What Our"
            rightTitle="Members Say"
            subTitle="Discover what our players, fans, and supporters are saying about their experiences with us. From exciting game moments to the community we’ve built."
          />
          <div className=" mt-32">
            <EmblaCarousel options={OPTIONS} />
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default Testimonials;
