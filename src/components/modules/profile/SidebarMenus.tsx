"use client";

import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { ImStatsBars } from "react-icons/im";
import { IoBookOutline, IoSettingsOutline } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";

const SidebarMenus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sideMenus = [
    {
      icon: <CgProfile className=" w-6 h-6" />,
      title: "Profile Management",
      link: "/profile/profile-management",
    },
    {
      icon: <ImStatsBars className=" w-6 h-6" />,
      title: "Stats Tracking",
      link: "/profile/stats-tracking",
    },
    {
      icon: <IoBookOutline className=" w-6 h-6" />,
      title: "Team & Match History",
      link: "/profile/team-match-history",
    },
    {
      icon: <LuCrown className=" w-6 h-6" />,
      title: "Subscription",
      link: "/profile/subscription",
    },
    {
      icon: <IoSettingsOutline className=" w-6 h-6" />,
      title: "Settings",
      link: "/profile/settings",
    },
  ];

  // Close sidebar on escape key press for accessibility
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/*  ----------- Mobile Hamburger Button ----------- */}
      <button
        className="md:hidden fixed top-2 left-4 z-[100] p-2  text-white focus:outline-none"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close sidebar menu" : "Open sidebar menu"}
      >
        {/* -------------- Hamburger icon --------------- */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              stroke="black"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile when sidebar open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* ---------------- Sidebar ---------------- */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-md
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:shadow-none md:w-72`}
      >
        <div className="py-4 font-openSans flex flex-col h-full">
          {/* ---------------- User Profile ---------------- */}
          <div className="flex flex-col items-center text-center justify-center px-4">
            <Avatar className="w-[128px] h-[128px]">
              <AvatarImage src="https://res.cloudinary.com/dgrg4lmww/image/upload/v1748922029/Ellipse_961_tsyc71.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold text-ns-title mb-1 mt-4">
              Robert Fox
            </h3>
            <p className="text-ns-foreground text-center">Free Player</p>
          </div>

          {/*----------------- Menus ---------------- */}
          <nav className="mt-5 flex-1 overflow-y-auto">
            {sideMenus.map((menu, idx) => (
              <Link
                key={idx}
                href={menu.link}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer hover:bg-ns-secondary hover:transition-all hover:duration-300 px-4 group"
              >
                <div className="flex items-center gap-3 mt-3 py-2">
                  <span className="group-hover:text-white">{menu.icon}</span>
                  <span className="text-[#374151] text-[16px] group-hover:text-white">
                    {menu.title}
                  </span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SidebarMenus;
