"use client";

import { useState } from "react";
import { Plus, UserCheck, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
            />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{user.name}</h3>
            <Badge
              variant="secondary"
              className="mt-1 bg-blue-100 text-blue-700 hover:bg-blue-100"
            >
              {user.role}
            </Badge>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Permissions
          </h4>
          <ul className="space-y-1">
            {user.permissions.map((permission, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-center gap-2"
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
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
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
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Trash2 className="w-4 h-4" />
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
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Assign Role
              </Button>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </Card>
  );
}
