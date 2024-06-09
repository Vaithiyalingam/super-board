import React from "react";
import Image from "next/image"; // If you're using Next.js
import { TNextImage } from "../../utils/icons";

interface OverlappingImagesProps {
  images: TNextImage[];
}

export const OverlappingImages: React.FC<OverlappingImagesProps> = ({
  images,
}) => {
  return (
    <div className="relative w-10 h-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{ left: `${index * 10}px` }}
        >
          <Image
            src={image.src}
            alt={`Overlapping image ${index + 1}`}
            width={20}
            height={20}
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default OverlappingImages;
