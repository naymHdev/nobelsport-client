"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import NSInput from "@/components/ui/core/NSInput";

interface AttendanceRecord {
  id: number;
  matchName: string;
  attendance: number;
  date: string;
}

export default function AttendanceForecast() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last week");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [attendanceInput, setAttendanceInput] = useState("");

  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([
    {
      id: 1,
      matchName: "Tuesday's Game",
      attendance: 8700,
      date: "2024-01-16",
    },
    {
      id: 2,
      matchName: "Tuesday's Game",
      attendance: 6200,
      date: "2024-01-17",
    },
    {
      id: 3,
      matchName: "Tuesday's Game",
      attendance: 8700,
      date: "2024-01-18",
    },
    {
      id: 4,
      matchName: "Tuesday's Game",
      attendance: 6200,
      date: "2024-01-19",
    },
    {
      id: 5,
      matchName: "Tuesday's Game",
      attendance: 6200,
      date: "2024-01-20",
    },
    {
      id: 6,
      matchName: "Tuesday's Game",
      attendance: 8700,
      date: "2024-01-21",
    },
    {
      id: 7,
      matchName: "Tuesday's Game",
      attendance: 8700,
      date: "2024-01-22",
    },
    {
      id: 8,
      matchName: "Tuesday's Game",
      attendance: 6200,
      date: "2024-01-23",
    },
  ]);

  const getAttendanceBadgeVariant = (attendance: number) => {
    return attendance >= 8000 ? "default" : "secondary";
  };

  const getAttendanceColor = (attendance: number) => {
    return attendance >= 8000
      ? "text-emerald-600 bg-emerald-50 hover:bg-emerald-100"
      : "text-amber-600 bg-amber-50 hover:bg-amber-100";
  };

  const handleSave = () => {
    if (selectedMatch && selectedDate && attendanceInput) {
      // In a real app, this would update the backend
      console.log("Saving attendance:", {
        match: selectedMatch,
        date: selectedDate,
        attendance: attendanceInput,
      });
      setIsModalOpen(false);
      // Reset form
      setSelectedMatch("");
      setSelectedDate("");
      setAttendanceInput("");
    }
  };

  return (
    <>
      <Card className=" shadow-none border-none">
        <CardHeader className="pb-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="text-xl font-semibold text-gray-900">
              Attendance Forecast
            </CardTitle>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-full sm:w-[140px] py-5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Last week">Last week</SelectItem>
                  <SelectItem value="This week">This week</SelectItem>
                  <SelectItem value="Next week">Next week</SelectItem>
                </SelectContent>
              </Select>

              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-emerald-700 hover:bg-emerald-600 text-white border-none py-5">
                    Set Attendance
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-ns-title">
                      Set Attendance
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="match-name"
                        className="text-sm font-medium text-ns-title"
                      >
                        Match Name
                      </Label>
                      <Select
                        value={selectedMatch}
                        onValueChange={setSelectedMatch}
                      >
                        <SelectTrigger className=" w-full py-5">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tuesday-game">
                            Tuesday's Game
                          </SelectItem>
                          <SelectItem value="wednesday-game">
                            Wednesday's Game
                          </SelectItem>
                          <SelectItem value="friday-game">
                            Friday's Game
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="select-date"
                        className="text-sm font-medium text-ns-title"
                      >
                        Select Date
                      </Label>
                      <Select
                        value={selectedDate}
                        onValueChange={setSelectedDate}
                      >
                        <SelectTrigger className=" w-full py-5">
                          <SelectValue placeholder="Select" />
                          <CalendarIcon className="h-4 w-4 ml-auto opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024-01-24">
                            January 24, 2024
                          </SelectItem>
                          <SelectItem value="2024-01-25">
                            January 25, 2024
                          </SelectItem>
                          <SelectItem value="2024-01-26">
                            January 26, 2024
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="attendance"
                        className="text-sm font-medium text-ns-title"
                      >
                        Attendance
                      </Label>
                      <NSInput
                        id="attendance"
                        placeholder="8700 fans"
                        value={attendanceInput}
                        onChange={(e) => setAttendanceInput(e.target.value)}
                      />
                    </div>

                    <Button
                      onClick={handleSave}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
                    >
                      Save
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-3">
            {attendanceData.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between rounded-lg p-4 bg-ns-light"
              >
                <div className="font-medium text-gray-900">
                  {record.matchName}
                </div>
                <Badge
                  variant={getAttendanceBadgeVariant(record.attendance)}
                  className={`${getAttendanceColor(
                    record.attendance
                  )}  bg-transparent font-bold text-right text-[16px]`}
                >
                  {record.attendance.toLocaleString()} fans
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
