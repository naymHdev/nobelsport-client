"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import Image from "next/image";
import { IoMdCloudUpload } from "react-icons/io";

interface UploadedFile {
  name: string;
  preview: string;
}

export default function BannerColorSettings() {
  const [uploadedBanner, setUploadedBanner] = useState<UploadedFile | null>({
    name: "stadium-banner.jpg",
    preview: "/images/stadium-banner.jpg",
  });
  const [isDragOver, setIsDragOver] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#2563EB");
  const [secondaryColor, setSecondaryColor] = useState("#10B981");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const colorOptions = [
    "#EF4444", // red
    "#3B82F6", // blue
    "#10B981", // green
    "#F59E0B", // orange
    "#8B5CF6", // purple
    "#EC4899", // pink
    "#2563EB", // blue variant
    "#6B7280", // gray
  ];

  const handleFileSelect = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];

      // Check file type
      if (!file.type.match(/^image\/(png|jpg|jpeg)$/)) {
        alert("Please select a PNG or JPG file");
        return;
      }

      // Check file size (2MB limit)
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be less than 2MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedBanner({
          name: file.name,
          preview: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteBanner = () => {
    setUploadedBanner(null);
  };

  const ColorPicker = ({
    selectedColor,
    onColorChange,
    label,
  }: {
    selectedColor: string;
    onColorChange: (color: string) => void;
    label: string;
  }) => (
    <Card className="space-y-3 p-6 border-none shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className=" text-xl font-semibold text-ns-title">{label}</h3>
          <p className="text-sm text-muted-foreground">
            Select primary brand color
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="w-8 h-8 rounded border-2 border-white shadow-md"
            style={{ backgroundColor: selectedColor }}
          />
          <span className="text-sm font-mono">
            {selectedColor.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="flex space-x-2">
        {colorOptions.map((color) => (
          <button
            key={color}
            className={`w-12 h-8 rounded cursor-pointer border-2 transition-all ${
              selectedColor === color
                ? "border-gray-400 scale-110"
                : "border-transparent hover:scale-105"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => onColorChange(color)}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
    </Card>
  );

  return (
    <div className="w-full font-openSans">
      <div className="pt-6 space-y-8">
        {/* Banner Image Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-ns-title">Banner Image</h3>

          {!uploadedBanner ? (
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragOver
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300 bg-gray-50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center space-y-4">
                <IoMdCloudUpload className="h-12 w-12 text-gray-400" />
                <Button
                  onClick={handleChooseFile}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Choose File
                </Button>
                <p className="text-sm text-muted-foreground">
                  PNG, JPG up to 2MB
                </p>
              </div>
            </div>
          ) : (
            <div className="relative">
              <Image
                src={uploadedBanner.preview || "/placeholder.svg"}
                alt="Banner preview"
                width={800}
                height={500}
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 rounded-full"
                onClick={handleDeleteBanner}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => handleFileSelect(e.target.files)}
            className="hidden"
          />
        </div>

        {/* Primary Color Section */}
        <ColorPicker
          selectedColor={primaryColor}
          onColorChange={setPrimaryColor}
          label="Primary Color"
        />

        {/* Secondary Color Section */}
        <ColorPicker
          selectedColor={secondaryColor}
          onColorChange={setSecondaryColor}
          label="Secondary Color"
        />
      </div>
    </div>
  );
}
