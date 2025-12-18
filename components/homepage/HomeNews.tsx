"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock, FaUser } from "react-icons/fa";

const HomeNews = () => {
  const newsArticles = [
    {
      id: 1,
      image: "/news1.jpeg",
      author: "By Admin",
      date: "10/10/2025",
      title:
        "At the Nigeria Police Trust Fund 2025 Budget Presentation to the National Assembly",
      href: "/news-media",
    },
    {
      id: 2,
      image: "/news3.jpg",
      author: "By Admin",
      date: "10/10/2025",
      title:
        "At the Presentation of the 2025 Budget of the Nigeria Police Trust Fund to the National Assembly.",
      href: "/news-media",
    },
    {
      id: 3,
      image: "/news2.jpg",
      author: "By Admin",
      date: "10/10/2025",
      title:
        "FG Inaugurates New Modern Smart Divisional Police Station in Abuja.",
      href: "/news-media",
    },
  ];

  return (
    <section className="mx-auto my-15 sm:my-20 lg:my-36  bg-green-800 shadow-lg overflow-hidden py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 sm:mx-4 lg:mx-8 rounded-l-none sm:rounded-md ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
          <div className="w-12 sm:w-16 h-1 bg-white rounded-full"></div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            Latest News
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="h-full space-y-4 border-2 border-white rounded-2xl group text-white p-6 sm:p-8 lg:p-10 hover:bg-white hover:text-black transition-all duration-300 hover:shadow-xl"
            >
              {/* Article Image */}
              <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="flex flex-col gap-4 justify-between">
                {/* Metadata */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 flex-wrap">
                  <p
                    className="flex flex-row gap-2 items-center font-medium text-sm sm:text-base"
                    style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
                  >
                    <FaUser className="w-4 h-4" />
                    {article.author}
                  </p>
                  <p
                    className="flex flex-row gap-2 items-center font-medium text-sm sm:text-base"
                    style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
                  >
                    <FaClock className="w-4 h-4" />
                    <span>{article.date}</span>
                  </p>
                </div>

                {/* Title */}
                <h2
                  className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight"
                  style={{ fontFamily: "var(--font-merriweather), serif" }}
                >
                  {article.title}
                </h2>

                {/* Read More Button */}
                <Link href={article.href}>
                  <button
                    className="w-full sm:w-auto bg-white text-green-800 px-6 py-3 rounded-full font-medium group-hover:bg-green-800 group-hover:text-white transition-all duration-300 hover:shadow-lg"
                    style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
