import NSContainer from "@/components/ui/core/NSContainer";
import NSMatchCard from "@/components/ui/core/NSMatchCard";
import NSSectionTitle from "@/components/ui/core/NSSectionTitle";
import { matchesData } from "@/data/data";
import { TMatchData } from "@/types/match";

const JoinOurMatchSection = () => {
  const matches: TMatchData[] | undefined = Array.from(
    { length: 3 },
    (_, index) => ({
      ...matchesData[0],
      _id: `${index + 1}`,
    })
  );

  return (
    <>
      <div>
        <NSContainer>
          <NSSectionTitle
            section="JOIN OUR SITE"
            leftTitle="JOIN THE GAME WITH"
            rightTitle="NOBLESPORT"
            subTitle="Find and organize community sports matches, track your performance, and connect with teams and venues. Whether you're a player, team manager, or venue owner, NobleSport brings the action to you."
          />

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {matches?.map((match, idx) => (
              <NSMatchCard key={`${idx + 1}`} match={match} />
            ))}
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default JoinOurMatchSection;
