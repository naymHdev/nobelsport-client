"use client";

import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export function ImageGallery({ images = [], title }: ImageGalleryProps) {
  // If no images are provided, return null
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Featured large image (first image) */}
        <div className="relative rounded-lg overflow-hidden cursor-pointer md:row-span-2 h-full">
          <Dialog>
            <DialogTrigger asChild>
              <div className="h-[300px] sm:h-[400px] md:h-full w-full relative rounded-lg overflow-hidden hover:opacity-95 transition-opacity">
                <Image
                  src={images[1] || "/placeholder.svg"}
                  alt={`${title} - Featured image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </DialogTrigger>
          </Dialog>
        </div>

        {/* Grid of smaller images (remaining images) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {images.slice(2, 6).map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative rounded-lg overflow-hidden cursor-pointer aspect-square hover:opacity-95 transition-opacity">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${title} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </DialogTrigger>
            </Dialog>
          ))}
        </div>
      </div>
    </>
  );
}
