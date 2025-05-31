import { ReviewsPage } from "@/components/modules/reviews/ReviewsPage";
import NSContainer from "@/components/ui/core/NSContainer";

const AllReviewsPage = async () => {
  return (
    <>
      <div>
        <NSContainer>
          <div>
            <ReviewsPage />
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default AllReviewsPage;
