"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

interface SubMenuItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
  submenu?: SubMenuItem[];
}

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks: NavLink[] = [
    { label: "HOME", href: "/", isActive: true },
    {
      label: "ABOUT",
      href: "/about",
      submenu: [
        { label: "Leadership", href: "/about/leadership" },
        { label: "Mandate", href: "/about/mandate" },
      ],
    },
    {
      label: "REGULATIONS",
      href: "/regulations",
      submenu: [
        { label: "Leadership", href: "/about/leadership" },
        { label: "Mandate", href: "/about/mandate" },
      ],
    },
    { label: "NEWS/MEDIA", href: "/news-media" },
    { label: "CONTACT", href: "/contact" },
    { label: "RESOLVE TRADE PROBLEM", href: "/resolve-trade-problem" },
  ];

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="w-full">
      {/* Top Utility Bar */}
      <div className="bg-[#006400] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          {/* Left Side - Latest News Button */}
          <div className="flex items-center gap-4">
            <button className="bg-[#004d00] hover:bg-[#003d00] px-4 py-1.5 rounded transition-colors font-medium">
              Latest news
            </button>
            <span className="hidden md:inline text-xs">
              COMMUNIQUE OF THE PRIVATE AND
            </span>
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <FaPhone className="w-3.5 h-3.5" />
              <span>+2349060006537 | +2349060006536</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="w-3.5 h-3.5" />
              <span>info@nptf.gov.ng</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-sm  ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Left Side - Logo and Site Title */}
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/" className="flex items-center gap-3 group">
                {/* Nigerian Coat of Arms - placeholder */}
                <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                  <Image
                    src="/logo-dark.png"
                    alt="Nigerian Coat of Arms"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              <ul className="flex items-center gap-1 relative">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={() =>
                      link.submenu && handleMouseEnter(link.label)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`nav-link font-bold px-3 py-2 text-sm transition-colors flex items-center gap-1 ${
                        link.isActive
                          ? "text-gray-900 font-semibold"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                      {link.submenu && (
                        <FaChevronDown
                          className={`w-3 h-3 transition-transform ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {link.submenu && openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50">
                        <ul className="flex flex-col">
                          {link.submenu.map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                href={subItem.href}
                                className="nav-link block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Language Selector and Search */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <button
                className="hidden md:flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors"
                aria-label="Select language"
              >
                <HiOutlineGlobeAlt className="w-5 h-5 text-gray-700" />
              </button>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className={`w-48 md:w-28 h-9 px-3 pr-10 border rounded-full text-sm transition-all ${
                      isSearchFocused
                        ? "border-[#006400] ring-1 ring-[#006400]"
                        : "border-gray-300"
                    } focus:outline-none`}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#006400] rounded-full flex items-center justify-center hover:bg-[#004d00] transition-colors"
                    aria-label="Search"
                  >
                    <FaSearch className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </form>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <FaBars className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Sidebar */}
          <>
            {/* Backdrop */}
            <div
              className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ${
                isMobileMenuOpen
                  ? "opacity-50 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <div
              className={`fixed top-0 left-0 h-full w-80 bg-gray-800 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <span className="nav-link text-white text-lg font-bold">
                    Home
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-700 rounded transition-colors"
                    aria-label="Close menu"
                  >
                    <FaTimes className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                  <ul className="flex flex-col">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`nav-link flex items-center justify-between px-4 py-3 text-white hover:bg-gray-700 transition-colors ${
                            link.isActive ? "bg-gray-700" : ""
                          }`}
                        >
                          <span>{link.label}</span>
                          <FaChevronRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      </li>
                    ))}

                    {/* Language Selector */}
                    <li>
                      <button
                        className="nav-link flex items-center justify-between w-full px-4 py-3 text-white hover:bg-gray-700 transition-colors"
                        aria-label="Select language"
                      >
                        <div className="flex items-center gap-2">
                          <HiOutlineGlobeAlt className="w-5 h-5" />
                          <span>Language</span>
                        </div>
                        <FaChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    </li>
                  </ul>
                </nav>

                {/* Search Bar at Bottom */}
                <div className="p-4 border-t border-gray-700">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                      className="w-full h-10 px-4 pr-12 bg-white rounded-full text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#006400]"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                      aria-label="Search"
                    >
                      <FaSearch className="w-4 h-4 text-white" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
