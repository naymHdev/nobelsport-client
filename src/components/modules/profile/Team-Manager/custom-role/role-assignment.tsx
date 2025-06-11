"use client";

import { useState } from "react";
import { Plus, UserCheck, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import profileImg from "@/assets/images/john_smith.png";
import Image from "next/image";
import NSButton from "@/components/ui/core/NSButton";
import RoleAssignModal from "./assign-role-modal";

interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
  roleColor: "blue" | "green" | "purple" | "orange";
  permissions: string[];
}

const users: User[] = [
  {
    id: "1",
    name: "Jane Cooper",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Team Captain",
    roleColor: "blue",
    permissions: ["Can create matches"],
  },
  {
    id: "2",
    name: "Leslie Alexander",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Co-Organizer",
    roleColor: "blue",
    permissions: ["Can Create teams"],
  },
  {
    id: "3",
    name: "Wade Warren",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Financial Admin",
    roleColor: "blue",
    permissions: ["Can collect Payments"],
  },
];

function UserCard({ user }: { user: User }) {
  const [isChangeDialogOpen, setIsChangeDialogOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);

  const handleChange = () => {
    console.log(`Changing role for ${user.name}`);
    setIsChangeDialogOpen(false);
  };

  const handleRemove = () => {
    console.log(`Removing ${user.name}`);
    setIsRemoveDialogOpen(false);
  };

  return (
    <Card className="w-full font-openSans border-none">
      <CardContent className="md:p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className=" flex flex-col md:flex-row md:items-center gap-3">
            <Avatar className="h-8 w-8">
              <Image
                src={profileImg}
                alt={user.name}
                width={50}
                height={50}
                className=" rounded-full w-8 h-8 object-cover"
              />
            </Avatar>
            <h3 className="md:text-lg font-semibold md:font-bold text-ns-title">
              {user.name}
            </h3>
          </div>
          <div>
            <Badge className="mt-1 bg-blue-100 text-blue-700 hover:bg-blue-100 rounded-full px-2 py-1">
              {user.role}
            </Badge>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-ns-title mb-2">
            Permissions
          </h4>
          <ul className="space-y-1">
            {user.permissions.map((permission, index) => (
              <li
                key={index}
                className="text-[16px] text-ns-foreground flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                {permission}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2">
          <Dialog
            open={isChangeDialogOpen}
            onOpenChange={setIsChangeDialogOpen}
          >
            <DialogTrigger asChild>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 py-5 hover:cursor-pointer">
                <UserCheck className="w-4 h-4 mr-2" />
                Change
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Change Role</DialogTitle>
                <DialogDescription>
                  Change the role for {user.name}. This will update their
                  permissions accordingly.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end gap-2 mt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsChangeDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleChange}>Confirm Change</Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog
            open={isRemoveDialogOpen}
            onOpenChange={setIsRemoveDialogOpen}
          >
            <DialogTrigger asChild className="flex-1 w-full">
              <Button className=" bg-ns-light hover:bg-ns-foreground hover:text-ns-light hover:cursor-pointer text-ns-title py-5">
                <Trash2 className="w-4 h-4" /> Remove
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Remove User</DialogTitle>
                <DialogDescription>
                  Are you sure you want to remove {user.name} from their role?
                  This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end gap-2 mt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsRemoveDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleRemove}>
                  Remove
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}

export default function RoleAssignment() {
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);

  const handleAssignRole = () => {
    console.log("Assigning new role");
    setIsAssignDialogOpen(false);
  };

  return (
    <Card className="min-h-screen p-6 mt-8 border-none shadow-none">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Role Assignment</h1>

          <Dialog
            open={isAssignDialogOpen}
            onOpenChange={setIsAssignDialogOpen}
          >
            <DialogTrigger asChild>
              <RoleAssignModal />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Assign New Role</DialogTitle>
                <DialogDescription>
                  Select a user and assign them a role with specific
                  permissions.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end gap-2 mt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsAssignDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleAssignRole}>Assign Role</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* User Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </Card>
  );
}
