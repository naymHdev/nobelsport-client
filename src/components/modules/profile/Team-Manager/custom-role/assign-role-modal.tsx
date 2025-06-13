"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NSButton from "@/components/ui/core/NSButton";
import { Plus } from "lucide-react";
import NSInput from "@/components/ui/core/NSInput";

export default function RoleAssignModal() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("Leslie Alexander");
  const [email, setEmail] = useState("lesliealexander@gmail.com");
  const [selectedRole, setSelectedRole] = useState("");

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving:", { userName, email, selectedRole });
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <NSButton className="flex text-xs md:text-base items-center gap-1 md:gap-2 rounded-lg px-3">
            <Plus className=" size-4 md:size-6" />
            <span>Assign Role</span>
          </NSButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-ns-title">
              Assign Role
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="userName" className="text-sm font-medium">
                User Name
              </Label>
              <NSInput id="userName" value={userName} className="w-full" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <NSInput id="email" value={email} className="w-full" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium">
                Select Role
              </Label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-full py-5">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                  <SelectItem value="contributor">Contributor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <NSButton
              onClick={handleSave}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3"
            >
              Save
            </NSButton>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
