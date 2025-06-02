import NSContainer from "@/components/ui/core/NSContainer";
import coverImg from "../../../../assets/images/venue-cover.png";
import NSBanner from "@/components/ui/core/NSBanner";
import MatchFilter from "@/components/modules/matches/MatchFilter";
import ExploreMatches from "@/components/modules/matches/ExploreMatches";
import ComplectedMatch from "@/components/modules/matches/CompleatedMatch";

const MatchesPage = () => {
  return (
    <>
      <div>
        <NSBanner
          cover={coverImg}
          title="Search, Explore, and Book the matches  Near You — Perfect for Every Sport and Skill Level"
        />
        <NSContainer>
          <div className="relative z-10 -mt-36">
            <MatchFilter />
            <ExploreMatches />
          </div>
        </NSContainer>
        <ComplectedMatch />
      </div>
    </>
  );
};

export default MatchesPage;
