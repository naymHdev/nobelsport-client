"use client";

import NSMatchCard from "@/components/ui/core/NSMatchCard";
import { matchesData } from "@/data/data";
import { TMatchData } from "@/types/match";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ExploreMatches = () => {
  const maltyMatches: TMatchData[] | undefined = Array.from(
    { length: 12 },
    (_, index) => ({
      ...matchesData[0],
      _id: `${index + 1}`,
    })
  );

  return (
    <>
      <div>
        <h2 className=" my-12 text-ns-title font-openSans text-[30px] font-bold leading-8">
          Explore matches
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 gap-6">
          {maltyMatches?.map((match, idx) => (
            <NSMatchCard key={`${idx + 1}`} match={match} />
          ))}
        </section>

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

export default ExploreMatches;
