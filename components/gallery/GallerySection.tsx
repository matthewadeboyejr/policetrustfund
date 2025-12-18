"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FaUser,
  FaComment,
  FaTimes,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  date: string;
  formattedDate: {
    day: string;
    month: string;
    year: string;
  };
}

interface GalleryEvent {
  id: number;
  eventName: string;
  items: GalleryItem[];
}

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<{
    event: GalleryEvent;
    item: GalleryItem;
    index: number;
  } | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string>("all");

  const galleryEvents: GalleryEvent[] = [
    {
      id: 1,
      eventName: "LPV Technologies Visit",
      items: [
        {
          id: 1,
          type: "image",
          src: "/news1.jpeg",
          title: "A Visit To The LPV Technologies Solar Panel Assembly Factory",
          date: "2025-04-29",
          formattedDate: {
            day: "29",
            month: "APRIL",
            year: "2025",
          },
        },
        {
          id: 2,
          type: "image",
          src: "/news3.jpg",
          title: "A Visit To The LPV Technologies Solar Panel Assembly Factory",
          date: "2025-04-29",
          formattedDate: {
            day: "29",
            month: "APRIL",
            year: "2025",
          },
        },
      ],
    },
    {
      id: 2,
      eventName: "MOU Signing",
      items: [
        {
          id: 3,
          type: "image",
          src: "/news2.jpg",
          title: "MOU Signing With Family Homes Funds Limited",
          date: "2025-03-20",
          formattedDate: {
            day: "20",
            month: "MARCH",
            year: "2025",
          },
        },
        {
          id: 4,
          type: "image",
          src: "/news1.jpeg",
          title: "MOU Signing Ceremony",
          date: "2025-03-20",
          formattedDate: {
            day: "20",
            month: "MARCH",
            year: "2025",
          },
        },
      ],
    },
    {
      id: 3,
      eventName: "Budget Presentation",
      items: [
        {
          id: 5,
          type: "image",
          src: "/news3.jpg",
          title: "2025 Budget Presentation to the National Assembly",
          date: "2025-03-19",
          formattedDate: {
            day: "19",
            month: "MARCH",
            year: "2025",
          },
        },
        {
          id: 6,
          type: "video",
          src: "/videos/budget-presentation.mp4",
          thumbnail: "/news2.jpg",
          title: "Budget Presentation Video",
          date: "2025-03-19",
          formattedDate: {
            day: "19",
            month: "MARCH",
            year: "2025",
          },
        },
      ],
    },
  ];

  const allItems = galleryEvents.flatMap((event) =>
    event.items.map((item) => ({ event, item }))
  );

  const filteredItems =
    selectedEvent === "all"
      ? allItems
      : allItems.filter(({ event }) => event.id.toString() === selectedEvent);

  const openModal = (event: GalleryEvent, item: GalleryItem) => {
    const index = event.items.findIndex((i) => i.id === item.id);
    setSelectedItem({ event, item, index });
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const navigateMedia = (direction: "prev" | "next") => {
    if (!selectedItem) return;

    const { event, index } = selectedItem;
    let newIndex = direction === "next" ? index + 1 : index - 1;
    let newEvent = event;

    // Handle wrapping within the same event
    if (newIndex < 0) {
      newIndex = event.items.length - 1;
    } else if (newIndex >= event.items.length) {
      newIndex = 0;
    }

    setSelectedItem({
      event: newEvent,
      item: newEvent.items[newIndex],
      index: newIndex,
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString();
    const months = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString();
    return { day, month, year };
  };

  return (
    <>
      <section className="bg-white min-h-screen py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8 sm:mb-12">
            <div className="w-12 sm:w-16 h-1 bg-[#006400] rounded-full mb-4"></div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-merriweather), serif" }}
            >
              Gallery
            </h1>
            <p
              className="text-gray-600 text-base sm:text-lg mb-6"
              style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
            >
              Explore our collection of images and videos from various events
              and activities
            </p>

            {/* Event Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedEvent("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedEvent === "all"
                    ? "bg-[#006400] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
              >
                All Events
              </button>
              {galleryEvents.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event.id.toString())}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedEvent === event.id.toString()
                      ? "bg-[#006400] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
                >
                  {event.eventName}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map(({ event, item }) => (
              <div
                key={`${event.id}-${item.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => openModal(event, item)}
              >
                {/* Media Container */}
                <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.thumbnail || item.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#006400] rounded-full flex items-center justify-center">
                          <FaPlay className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Date Overlay */}
                  <div className="absolute bottom-0 left-0 bg-[#006400] text-white px-4 py-3">
                    <div
                      className="text-3xl font-bold leading-none"
                      style={{
                        fontFamily: "var(--font-merriweather), serif",
                      }}
                    >
                      {item.formattedDate.day}
                    </div>
                    <div
                      className="text-xs font-medium mt-1"
                      style={{
                        fontFamily: "var(--font-work-sans), sans-serif",
                      }}
                    >
                      {item.formattedDate.month}, {item.formattedDate.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Metadata */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: "var(--font-work-sans), sans-serif",
                      }}
                    >
                      <FaUser className="w-4 h-4 text-[#006400]" />
                      <span>by Admin</span>
                    </div>
                    <div
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: "var(--font-work-sans), sans-serif",
                      }}
                    >
                      <FaComment className="w-4 h-4 text-[#006400]" />
                      <span>0 Comments</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#006400] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-merriweather), serif" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            {selectedItem.event.items.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateMedia("prev");
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                >
                  <FaChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateMedia("next");
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                >
                  <FaChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Media Content */}
            <div className="relative w-full h-[90vh] flex items-center justify-center">
              {selectedItem.item.type === "image" ? (
                <Image
                  src={selectedItem.item.src}
                  alt={selectedItem.item.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <video
                  src={selectedItem.item.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Media Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-merriweather), serif" }}
              >
                {selectedItem.item.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-work-sans), sans-serif",
                  }}
                >
                  <FaUser className="w-4 h-4" />
                  <span>by Admin</span>
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-work-sans), sans-serif",
                  }}
                >
                  <span>
                    {selectedItem.item.formattedDate.day}{" "}
                    {selectedItem.item.formattedDate.month},{" "}
                    {selectedItem.item.formattedDate.year}
                  </span>
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-work-sans), sans-serif",
                  }}
                >
                  <span>
                    {selectedItem.index + 1} of{" "}
                    {selectedItem.event.items.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
