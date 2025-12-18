'use client';
import React, { useState } from "react";
import Image from "next/image";

const GallerySection: React.FC = () => {
  const allImages: string[] = [
    "/gallery/g18.jpg",
    "/gallery/g15.jpg",
    "/gallery/g3.jpg",
    "/gallery/g13.jpg",
    "/gallery/g12.jpg",
    "/gallery/g7.jpg",
    "/gallery/g8.jpg",
    "/gallery/g9.jpeg",
    "/gallery/g10.jpg",
  ];

  const [visible, setVisible] = useState<number>(9);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <section className="py-16 px-6">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block text-white">
          Our Awesome Gallery
        </h2>
         <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Explore moments that reflect our work culture, team collaboration, and commitment to delivering reliable IT and internet solutions. Our gallery highlights the people, projects, and environments that define Duranta Online Ltd. and our dedication to quality and customer satisfaction.
        </p>
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto space-y-4">
        {allImages.slice(0, visible).map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 break-inside-avoid"
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visible < allImages.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-orange-600 transition flex items-center gap-2"
          >
            Load More <span>⟳</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
