import Banner from "@/components/modules/home/Banner";
import SportsVenue from "@/components/modules/home/SportsVenue";

export default function Home() {
  return (
    <>
      <div className=" space-y-24 mb-20">
        <Banner />
        <SportsVenue />
      </div>
    </>
  );
}
