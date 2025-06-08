"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function CreateTeamModal() {
  const [open, setOpen] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleCreateTeam = () => {
    console.log("Create team clicked");
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Team Name:", teamName);
    console.log("Logo File:", selectedFile);
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white"
      >
        <Plus className="h-4 w-4 mr-2" />
        Create Team
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md font-openSans">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className=" text-[16px] font-semibold font-openSans text-ns-title">
              Create Team
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <label
                htmlFor="team-name"
                className="text-sm font-semibold text-ns-title"
              >
                Team Name
              </label>
              <Input
                id="team-name"
                placeholder="Victory FC"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className=" px-3 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-ns-title text-sm font-semibold">
                <div className="h-5 w-5 flex items-center justify-center">
                  <AiOutlineCloudDownload size={20} />
                </div>
                <label>Upload Logo</label>
              </div>

              <div
                className={`border-2 border-dashed rounded-md ${
                  dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
                } h-40 flex flex-col items-center justify-center cursor-pointer`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={handleButtonClick}
              >
                {selectedFile ? (
                  <div className="text-center">
                    <p className="text-sm font-medium">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm font-medium">
                      Drag & Drop your logo here
                    </p>
                    <p className="text-xs text-gray-500 mt-1">OR</p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mt-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleButtonClick();
                      }}
                    >
                      Choose File
                    </Button>
                  </>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Create</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
