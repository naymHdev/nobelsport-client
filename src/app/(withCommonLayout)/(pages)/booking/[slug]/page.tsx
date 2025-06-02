import MatchPaymentForm from "@/components/modules/matches/MatchPaymentForm";
import NSContainer from "@/components/ui/core/NSContainer";
import { matchesData } from "@/data/data";

type BookingPageParams = {
  params: Promise<{ slug: string }>;
};

const BookingPage = async ({ params }: BookingPageParams) => {
  const { slug } = await params;

  const matchDetails = matchesData.flatMap((matches) =>
    matches.matches.find((match) => match._id === slug)
  );
  //   console.log("matchDetails", matchDetails);

  return (
    <>
      <NSContainer className=" my-10">
        <MatchPaymentForm matchDetails={matchDetails[0]} />
      </NSContainer>
    </>
  );
};

export default BookingPage;
