"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import NSButton from "@/components/ui/core/NSButton";
import playerImg from "@/assets/images/john_smith.png";
import fieldView from "@/assets/images/player-view.png";
import Image from "next/image";

interface Player {
  id: string;
  name: string;
  position: string;
  avatar: string;
  jerseyNumber?: number;
}

export default function TeamBuilderModal() {
  const [open, setOpen] = useState(false);
  const [availablePlayers] = useState<Player[]>([
    {
      id: "1",
      name: "David Smith",
      position: "Goalkeeper",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "David Smith",
      position: "Defender",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "David Smith",
      position: "Defender",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "4",
      name: "David Smith",
      position: "Midfielder",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "5",
      name: "David Smith",
      position: "Forward",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "6",
      name: "David Smith",
      position: "Forward",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]);

  return (
    <>
      <NSButton
        onClick={() => setOpen(true)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
      >
        Balance your Team
      </NSButton>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full p-0">
          <DialogHeader className="p-6 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-xl font-semibold">
                  Team Builder
                </DialogTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Drag and drop players to build your dream team
                </p>
              </div>
            </div>
          </DialogHeader>

          <div className="flex flex-1 overflow-hidden">
            {/* Available Players Sidebar */}
            <div className="p-4 overflow-y-auto">
              <h3 className="font-semibold mb-4">Available Players</h3>
              <div className="space-y-2">
                {availablePlayers.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center gap-3 p-2 bg-ns-light rounded-lg"
                    draggable
                  >
                    <Image
                      src={playerImg}
                      alt={player.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {player.name}
                      </p>
                      <p className={`text-xs`}>{player.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soccer Field */}
            <div className="flex-1 p-6">
              <Image
                src={fieldView}
                alt="Soccer Field"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 p-6 pt-4">
            <Button onClick={() => setOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
