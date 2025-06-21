import Advertisement from "@/components/modules/home/advertisement";
import Banner from "@/components/modules/home/Banner";
import JoinNowBanner from "@/components/modules/home/JoinNowBanner";
import JoinOurSiteSection from "@/components/modules/home/JoinTheMatch";
import SportsVenue from "@/components/modules/home/SportsVenue";
import Testimonials from "@/components/modules/home/Testimonial/Testimonials";
import ThreeSteps from "@/components/modules/home/ThreeSteps";

export default function Home() {
  return (
    <>
      <div className=" space-y-24 mb-20">
        <Banner />
        <SportsVenue />
        <Advertisement />
        <JoinOurSiteSection />
        <ThreeSteps />
        <Testimonials />
        <JoinNowBanner />
      </div>
    </>
  );
}
