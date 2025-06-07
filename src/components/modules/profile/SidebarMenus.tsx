"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { ImStatsBars } from "react-icons/im";
import { IoBookOutline, IoSettingsOutline } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { HiMiniBars3BottomRight, HiOutlineCamera } from "react-icons/hi2";
import Image from "next/image";
import { TbHomeStats, TbSmartHome } from "react-icons/tb";
import { AiOutlineBars } from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";

const SidebarMenus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImage, setIsImage] = useState<string | null>(null);
  const pathname = usePathname();

  // Example role, this can come from user authentication or context
  const role = "venueOwner";

  // Role-based menus
  const roleMenus = {
    player: [
      {
        icon: <CgProfile className="w-6 h-6" />,
        title: "Profile Management",
        link: "/profile/profile-management",
      },
      {
        icon: <ImStatsBars className="w-6 h-6" />,
        title: "Stats Tracking",
        link: "/profile/stats-tracking",
      },
      {
        icon: <IoBookOutline className="w-6 h-6" />,
        title: "Team & Match History",
        link: "/profile/team-match-history",
      },
      {
        icon: <LuCrown className="w-6 h-6" />,
        title: "Subscription",
        link: "/profile/subscription",
      },
      {
        icon: <IoSettingsOutline className="w-6 h-6" />,
        title: "Settings",
        link: "/profile/settings",
      },
    ],
    venueOwner: [
      {
        icon: <CgProfile className="w-6 h-6" />,
        title: "Profile Management",
        link: "/profile/profile-management",
      },
      // {
      //   icon: <TbSmartHome className="w-6 h-6" />,
      //   title: "Venue Details",
      //   link: "/profile/venue-details",
      // },
      {
        icon: <TbHomeStats className="w-6 h-6" />,
        title: "Venue Stats",
        link: "/profile/venue-stats",
      },
      {
        icon: <AiOutlineBars className="w-6 h-6" />,
        title: "Custom Report",
        link: "/profile/custom-report",
      },
      {
        icon: <IoBookOutline className="w-6 h-6" />,
        title: "Venue List",
        link: "/profile/venue-order-list",
      },
      {
        icon: <LuCrown className="w-6 h-6" />,
        title: "Subscription",
        link: "/profile/subscription",
      },
      {
        icon: <BiMessageSquareDots className="w-6 h-6" />,
        title: "Support Message",
        link: "/profile/support-message",
      },
      {
        icon: <FaRegStar className="w-6 h-6" />,
        title: "Review Management",
        link: "/profile/review-management",
      },
      {
        icon: <IoSettingsOutline className="w-6 h-6" />,
        title: "Settings",
        link: "/profile/settings",
      },
    ],
  };

  // Get the current menu items based on the user's role
  const menus = roleMenus[role] || [];

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setIsImage(imageUrl);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden z-[100] p-2 focus:outline-none text-ns-title"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close sidebar menu" : "Open sidebar menu"}
      >
        <HiMiniBars3BottomRight size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none lg:w-72`}
      >
        <div className="py-4 font-openSans lg:flex flex-col h-full">
          {/* User Profile */}
          <div className="flex flex-col items-center text-center justify-center px-4 relative">
            <div className="w-[128px] h-[128px] rounded-full overflow-hidden">
              <Image
                src={
                  isImage ||
                  "https://res.cloudinary.com/dgrg4lmww/image/upload/v1748922029/Ellipse_961_tsyc71.png"
                }
                alt="User Avatar"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-ns-title mb-1 mt-4">
              Robert Fox
            </h3>
            <p className="text-ns-foreground text-center">Free Player</p>

            {/* Image Upload Button */}
            <label
              htmlFor="upload-avatar"
              className="absolute bottom-20 right-20 bg-[#E5E7EB] p-2 rounded-full shadow-md cursor-pointer"
            >
              <HiOutlineCamera />
              <input
                type="file"
                id="upload-avatar"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {/* Menus */}
          <nav className="mt-5 flex-1 overflow-y-auto">
            {menus.map((menu, idx) => {
              const isActive = pathname === menu.link;
              return (
                <Link
                  key={idx}
                  href={menu.link}
                  onClick={() => setIsOpen(false)}
                  className={`block cursor-pointer px-4 group ${
                    isActive
                      ? "bg-ns-secondary text-white"
                      : "hover:bg-ns-secondary hover:text-white"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mt-3 py-2 ${
                      isActive
                        ? "text-white"
                        : "text-ns-title group-hover:text-white"
                    }`}
                  >
                    <span
                      className={
                        isActive ? "text-white" : "group-hover:text-white"
                      }
                    >
                      {menu.icon}
                    </span>
                    <span>{menu.title}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SidebarMenus;
