"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaClock, FaUser, FaArrowRight, FaSearch } from "react-icons/fa";

interface NewsArticle {
  id: number;
  image: string;
  author: string;
  date: string;
  title: string;
  excerpt?: string;
  href: string;
  category?: string;
}

const NewsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      image: "/news1.jpeg",
      author: "By Admin",
      date: "10/10/2025",
      title:
        "At the Nigeria Police Trust Fund 2025 Budget Presentation to the National Assembly",
      excerpt:
        "The Nigeria Police Trust Fund presented its 2025 budget to the National Assembly, outlining key initiatives and funding priorities for the upcoming fiscal year.",
      href: "/news/1",
      category: "Budget",
    },
    {
      id: 2,
      image: "/news3.jpg",
      author: "By Admin",
      date: "10/10/2025",
      title:
        "At the Presentation of the 2025 Budget of the Nigeria Police Trust Fund to the National Assembly.",
      excerpt:
        "A comprehensive presentation detailing the strategic allocation of resources for police infrastructure, training, and welfare programs across Nigeria.",
      href: "/news/2",
      category: "Budget",
    },
    {
      id: 3,
      image: "/news2.jpg",
      author: "By Admin",
      date: "10/10/2025",
      title:
        "FG Inaugurates New Modern Smart Divisional Police Station in Abuja.",
      excerpt:
        "The Federal Government officially inaugurated a state-of-the-art smart police station in Abuja, equipped with modern technology and facilities to enhance policing operations.",
      href: "/news/3",
      category: "Infrastructure",
    },
  ];

  const filteredArticles = newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-white min-h-screen py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6">
            <div>
              <div className="w-12 sm:w-16 h-1 bg-[#006400] rounded-full mb-4"></div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-merriweather), serif" }}
              >
                Latest News
              </h1>
              <p
                className="text-gray-600 text-base sm:text-lg"
                style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
              >
                Stay updated with the latest developments and initiatives from
                the Nigeria Police Trust Fund
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006400] focus:border-transparent"
              style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
            />
          </div>
        </div>

        {/* News Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[#006400]"
              >
                {/* Article Image */}
                <Link href={article.href}>
                  <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {article.category && (
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 bg-[#006400] text-white text-xs font-semibold rounded-full"
                          style={{
                            fontFamily: "var(--font-work-sans), sans-serif",
                          }}
                        >
                          {article.category}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Article Content */}
                <div className="p-6 sm:p-8">
                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: "var(--font-work-sans), sans-serif",
                      }}
                    >
                      <FaUser className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: "var(--font-work-sans), sans-serif",
                      }}
                    >
                      <FaClock className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={article.href}>
                    <h2
                      className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#006400] transition-colors duration-300 leading-tight"
                      style={{ fontFamily: "var(--font-merriweather), serif" }}
                    >
                      {article.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  {article.excerpt && (
                    <p
                      className="text-gray-600 mb-6 line-clamp-3 leading-relaxed"
                      style={{
                        fontFamily: "var(--font-work-sans), sans-serif",
                      }}
                    >
                      {article.excerpt}
                    </p>
                  )}

                  {/* Read More Link */}
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-[#006400] font-semibold hover:text-[#004d00] transition-colors duration-300 group/link"
                    style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
                  >
                    <span>Read More</span>
                    <FaArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p
              className="text-gray-600 text-lg"
              style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
            >
              No news articles found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
