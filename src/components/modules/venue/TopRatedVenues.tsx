import NSVenueCard from "@/components/ui/core/NSVenueCard";
import { venues } from "@/data/data";
import { TVenue } from "@/types/venue";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const TopRatedVenues = () => {
  const maltyVenues: TVenue[] | undefined = Array.from(
    { length: 12 },
    (_, index) => ({
      ...venues[0],
      _id: `${index + 1}`,
    })
  );

  return (
    <>
      <div className="">
        <h2 className=" my-12 text-ns-title font-openSans text-[30px] font-bold leading-8">
          Top Rated Venues
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {maltyVenues?.map((venue, idx) => (
            <NSVenueCard key={idx} venue={venue} />
          ))}
        </div>

        {/* ------------------------ Pagination ------------------------ */}
        <div className="flex items-center justify-center m-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem className=" border rounded-[8px]">
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem className=" border rounded-[8px]"></PaginationItem>
              <PaginationItem className=" border rounded-[8px]">
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem className=" border rounded-[8px] bg-ns-secondary text-white">
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem className=" border rounded-[8px]">
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem className=" border rounded-[8px]">
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem className=" border rounded-[8px]"></PaginationItem>
              <PaginationItem className=" border rounded-[8px]">
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default TopRatedVenues;
