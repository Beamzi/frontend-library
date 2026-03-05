import GalleryCarousel from "@/components/GalleryCarousel";
import { gallerySectionContent } from "@/data/sections/gallery";
import React from "react";

export default function GalleryPage() {
  return (
    <div>
      <GalleryCarousel
        content={gallerySectionContent}
        hasControls={true}
        hasPredominateInfo={true}
      />
    </div>
  );
}
