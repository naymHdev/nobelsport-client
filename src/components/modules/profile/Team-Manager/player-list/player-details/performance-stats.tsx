import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PerformanceStats = () => {
  const matchData = Array.from({ length: 11 }, (_, index) => ({
    id: index + 1,
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 1,
    redCards: 0,
  }));

  const currentPage = 1;
  const totalPages = 4;

  const renderPaginationButton = (page: number, isActive = false) => (
    <Button
      key={page}
      variant={isActive ? "default" : "ghost"}
      size="sm"
      className={`w-8 h-8 p-0 ${
        isActive
          ? "bg-blue-500 hover:bg-blue-600 text-white"
          : "text-gray-600 hover:text-gray-900 border"
      }`}
    >
      {page}
    </Button>
  );

  return (
    <div className=" bg-white font-openSans">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 mt-6 text-ns-title">
        All Match Stats
      </h1>

      {/* Table */}
      <div className="rounded-lg overflow-hidden">
        <Table className="">
          <TableHeader>
            <TableRow className=" bg-ns-primary hover:bg-green-600">
              <TableHead className="text-white font-semibold px-6">
                Date
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Goals Scored
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Assists
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Yellow Cards
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Red Cards
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {matchData.map((match, index) => (
              <TableRow
                key={match.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <TableCell className="font-medium py-4 px-6">
                  {match.date}
                </TableCell>
                <TableCell className="text-center">
                  {match.goalsScored}
                </TableCell>
                <TableCell className="text-center">{match.assists}</TableCell>
                <TableCell className="text-center">
                  {match.yellowCards}
                </TableCell>
                <TableCell className="text-center">{match.redCards}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-2 mt-6">
        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0 text-gray-600 hover:text-gray-900 border"
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {[1, 2, 3, 4].map((page) =>
          renderPaginationButton(page, page === currentPage)
        )}

        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0 text-gray-600 hover:text-gray-900 border"
          //   disabled={currentPage === totalPages}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default PerformanceStats;
