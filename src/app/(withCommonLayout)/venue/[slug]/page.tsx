import NSContainer from "@/components/ui/core/NSContainer";

type TVenueDetailsPageProps = {
  params: Promise<{ slug: string }>;
};
const VenueDetailsPage = async ({ params }: TVenueDetailsPageProps) => {
  const { slug } = await params;

  return (
    <>
      <div>
        <NSContainer>
          <div>{slug}</div>
        </NSContainer>
      </div>
    </>
  );
};

export default VenueDetailsPage;
