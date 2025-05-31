import NSButton from "@/components/ui/core/NSButton";
import NSContainer from "@/components/ui/core/NSContainer";
import NSMatchCard from "@/components/ui/core/NSMatchCard";
import NSSectionTitle from "@/components/ui/core/NSSectionTitle";
import { matchesData } from "@/data/data";
import { TMatchData } from "@/types/match";
import Link from "next/link";

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

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 gap-6">
            {matches?.map((match, idx) => (
              <NSMatchCard key={`${idx + 1}`} match={match} />
            ))}
          </div>

          <div className=" flex items-center justify-center mt-14">
            <Link href="/matches">
              <NSButton className=" text-center text-ns-secondary font-openSans text-lg font-normal leading-normal border-2 border-ns-secondary rounded-full px-[34px] py-[14px] bg-transparent hover:bg-transparent ">
                View All Venues
              </NSButton>
            </Link>
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default JoinOurMatchSection;
