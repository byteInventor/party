"use client";

import { GalleryInfo } from "@/types/galleryInfo";
import Image from "next/image";
import galleryInfoData from "./galleryInfoData";
import { useRef } from "react";

const Gallerys = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll left/right by 300px (adjustable)
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 pt-16 dark:bg-gray-900">
      <div className="px-8 sm:px-10 lg:px-24">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl dark:text-gray-100">
          Gallery
        </h2>
        <div className="group relative">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent flex snap-x snap-mandatory overflow-x-auto scroll-smooth px-2 py-4 sm:px-4"
          >
            <div className="inline-flex space-x-4 sm:space-x-6">
              {galleryInfoData.map((Gallery, index) => (
                <SingleGallery
                  key={Gallery.id}
                  Gallery={Gallery}
                  index={index}
                />
              ))}
            </div>
          </div>
          {/* Navigation arrows */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white p-3 text-gray-600 shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:opacity-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-700"
            aria-label="Scroll to previous gallery item"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white p-3 text-gray-600 shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:opacity-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-700"
            aria-label="Scroll to next gallery item"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallerys;

const SingleGallery = ({
  Gallery,
  index,
}: {
  Gallery: GalleryInfo;
  index: number;
}) => {
  const { href, image, name } = Gallery;

  return (
    <div
      className="animate-fade-in flex w-32 snap-start flex-col items-center rounded-xl bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-40 md:w-48 dark:bg-gray-800"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full justify-center p-4"
        aria-label={`View ${name} gallery`}
      >
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="rounded-md"
          style={{ objectFit: "contain" }}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
          loading="lazy"
        />
      </a>
      <h4 className="mt-2 w-full px-4 pb-4 text-center text-base font-semibold text-gray-800 sm:text-lg dark:text-gray-100">
        {name}
      </h4>
    </div>
  );
};
