"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const matchData = [
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Win",
  },
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Lose",
  },
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Win",
  },
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Win",
  },
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Lose",
  },
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Lose",
  },
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Lose",
  },
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Win",
  },
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Lose",
  },
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Win",
  },
  {
    date: "Jan 15, 2025",
    goalsScored: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    result: "Win",
  },
];

export default function MatchResultsTable() {
  return (
    <Card className="shadow-none border-none bg-transparent p-0">
      <CardContent className="p-0">
        <div className="rounded-lg overflow-hidden border-none">
          <Table>
            <TableHeader>
              <TableRow className=" bg-ns-primary hover:bg-green-600">
                <TableHead className="text-white font-semibold text-center py-4">
                  Date
                </TableHead>
                <TableHead className="text-white font-semibold text-center py-4">
                  Goals Scored
                </TableHead>
                <TableHead className="text-white font-semibold text-center py-4">
                  Assists
                </TableHead>
                <TableHead className="text-white font-semibold text-center py-4">
                  Yellow Cards
                </TableHead>
                <TableHead className="text-white font-semibold text-center py-4">
                  Red Cards
                </TableHead>
                <TableHead className="text-white font-semibold text-center py-4">
                  Result
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matchData.map((match, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="text-center py-4 text-gray-700">
                    {match.date}
                  </TableCell>
                  <TableCell className="text-center py-4 text-gray-700">
                    {match.goalsScored}
                  </TableCell>
                  <TableCell className="text-center py-4 text-gray-700">
                    {match.assists}
                  </TableCell>
                  <TableCell className="text-center py-4 text-gray-700">
                    {match.yellowCards}
                  </TableCell>
                  <TableCell className="text-center py-4 text-gray-700">
                    {match.redCards}
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <span
                      className={`font-medium ${
                        match.result === "Win"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {match.result}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
