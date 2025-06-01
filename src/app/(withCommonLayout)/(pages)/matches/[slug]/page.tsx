import NSContainer from "@/components/ui/core/NSContainer";
import bannerImg from "../../../../../assets/images/match_details_banner_img.png";
import NSBanner from "@/components/ui/core/NSBanner";
import TournamentDetails from "@/components/modules/matches/TournamentDetails";

const TournamentDetailsPage = () => {
  return (
    <>
      <div className=" mb-10">
        <NSBanner cover={bannerImg} />
        <NSContainer>
          <TournamentDetails />
        </NSContainer>
      </div>
    </>
  );
};

export default TournamentDetailsPage;
