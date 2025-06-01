import NSContainer from "@/components/ui/core/NSContainer";
import matchBanner from "../../../../../../assets/images/match_details_banner_img.png";
import NSBanner from "@/components/ui/core/NSBanner";
import MatchDetails from "@/components/modules/matches/MatchDetails";
import { matchesData } from "@/data/data";

interface IMatchDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const MatchDetailsPage = async ({ params }: IMatchDetailsPageProps) => {
  const { slug } = await params;

  const allMatches = matchesData.flatMap((tournament) => tournament.matches);
  const matchDetails = allMatches.find((match) => match._id === slug);
  //   console.log("matchDetails", matchDetails);

  return (
    <>
      <NSBanner cover={matchBanner} />
      <NSContainer className="mb-10">
        <div>
          <MatchDetails matchData={matchDetails} />
        </div>
      </NSContainer>
    </>
  );
};

export default MatchDetailsPage;
