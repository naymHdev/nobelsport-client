import VenueDetails from "@/components/modules/venue/VenueDetails";
import NSContainer from "@/components/ui/core/NSContainer";
import { venues } from "@/data/data";

type TVenueDetailsPageProps = {
  params: Promise<{ slug: string }>;
};
const VenueDetailsPage = async ({ params }: TVenueDetailsPageProps) => {
  const { slug } = await params;

  // const venueDetails = venues?.find((venue) => venue._id === slug);
  const venueDetails = venues[0]
  // console.log("venueDetails", venueDetails);

  return (
    <>
      <div>
        <NSContainer>
          <div className=" my-8">
            <VenueDetails venueDetails={venueDetails} />
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default VenueDetailsPage;
