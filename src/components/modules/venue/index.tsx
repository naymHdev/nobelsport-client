import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const VenueComponents = () => {
  return (
    <>
      <div>
        {/*  --------------------------- Filtering Section --------------------------- */}
        <section className="bg-white p-8 rounded-[16px] shadow-[0px 4px 60px 0px rgba(4, 6, 15, 0.03)]">
          <h2 className=" text-2xl font-bold leading-normal font-openSans text-ns-title">
            Search and Filter Venues
          </h2>
          <div className="mt-8 relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Search className="w-5 h-5" />
            </span>
            <Input
              type="search"
              placeholder="Search venues, locations, or sports..."
              className="w-full pl-10 py-6"
            />
          </div>
          <div className=" mt-6 flex items-center gap-4"></div>
        </section>
      </div>
    </>
  );
};

export default VenueComponents;
