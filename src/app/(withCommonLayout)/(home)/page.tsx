import Banner from "@/components/modules/home/Banner";
import JoinOurSiteSection from "@/components/modules/home/JoinTheMatch";
import SportsVenue from "@/components/modules/home/SportsVenue";
import ThreeSteps from "@/components/modules/home/ThreeSteps";

export default function Home() {
  return (
    <>
      <div className=" space-y-24 mb-20">
        <Banner />
        <SportsVenue />
        <JoinOurSiteSection />
        <ThreeSteps />
      </div>
    </>
  );
}
