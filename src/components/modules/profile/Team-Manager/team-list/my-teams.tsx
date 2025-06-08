import { Button } from "@/components/ui/button";
import { Eye, MessageSquare, PenSquare } from "lucide-react";
import { Team } from "./constant";
import Image from "next/image";
import fbLogo from "@/assets/images/fb-logo.png";
import TeamDetailsModal from "./team-details.modal";

interface MyTeamsProps {
  getCurrentPageItems: () => Team[];
  isLoading: boolean;
  handleToggleVisibility: (teamId: string) => void;
}

const MyTeams = ({
  getCurrentPageItems,
  isLoading,
  handleToggleVisibility,
}: MyTeamsProps) => {
  const handleMessageTeam = (teamId: string) => {
    console.log("Message team:", teamId);
  };

  const handleEditTeam = (teamId: string) => {
    console.log("Edit team:", teamId);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : getCurrentPageItems().length > 0 ? (
        <div className="space-y-4">
          {getCurrentPageItems().map((team: Team) => (
            <div
              key={team.id}
              className="border border-gray-200 rounded-lg p-4 flex justify-between"
            >
              <div>
                <div className="flex items-center space-x-3">
                  <Image
                    src={fbLogo || "/placeholder.svg"}
                    alt={`${team.name} logo`}
                    width={100}
                    height={100}
                    className="w-10 h-10 rounded-full bg-yellow-400"
                  />
                  <span className="text-2xl text-ns-title font-semibold">
                    {team.name}
                  </span>
                </div>
                <div className=" flex flex-col md:flex-row items-start md:items-center gap-3 mt-6">
                  <Button
                    onClick={() => handleEditTeam(team.id)}
                    className="bg-amber-500 hover:bg-amber-600 text-white"
                    size="sm"
                  >
                    <PenSquare className="h-4 w-4 mr-1" />
                    Edit Team
                  </Button>
                  <Button
                    onClick={() => handleMessageTeam(team.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    size="sm"
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Message Team
                  </Button>
                </div>
              </div>
              <div className="">
                <TeamDetailsModal />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          No teams found. Try adjusting your filter or create a new team.
        </div>
      )}
    </>
  );
};

export default MyTeams;
