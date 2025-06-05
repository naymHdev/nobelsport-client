"use client";

import Link from "next/link";
import NSContainer from "../ui/core/NSContainer";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import NSButton from "../ui/core/NSButton";
import Locations from "../Locations";
import TopBar from "./TopBar";
import logo from "../../assets/images/nb-sport-logo.png";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import notify from "@/assets/icons/message-icon.png";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const user = true;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/venue", label: "Venue" },
    { href: "/matches", label: "Matches" },
    { href: "/how-it-works", label: "How It Works" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <TopBar />
      <div className="w-full h-[75px] relative">
        <NSContainer>
          <div className="mt-2 flex items-center justify-between h-[71px]">
            {/* Logo */}
            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex-shrink-0">
              <Image
                src={logo || "/placeholder.svg"}
                alt="Logo"
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 font-normal text-lg font-openSans">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "transition-colors duration-200 hover:text-ns-primary",
                    pathname === href
                      ? "text-ns-primary font-extrabold"
                      : "text-ns-foreground font-normal"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className=" flex items-center gap-3 lg:gap-6">
              {user ? (
                <div className=" flex items-center gap-3">
                  <div>
                    <Link href={"/messages"}>
                      <Image
                        src={notify || "/placeholder.svg"}
                        alt="Logo"
                        className=" w-5 h-5 object-cover"
                        height={80}
                        width={80}
                      />
                    </Link>
                  </div>
                  <div className="relative">
                    <IoIosNotificationsOutline size={24} />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500 animate-ping" />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500" />
                  </div>

                  <Link href={"/profile"}>
                    <Avatar>
                      <AvatarImage src="https://shorturl.at/Ge8HU" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Link>
                </div>
              ) : (
                <div className=" flex items-center gap-4">
                  <NSButton className="text-ns-primary font-normal bg-transparent text-sm lg:text-base px-3 lg:px-4">
                    Sign In
                  </NSButton>
                  <Link href={"/join-as"}>
                    <NSButton className="font-normal text-sm lg:text-base px-3 lg:px-4">
                      Join Now
                    </NSButton>
                  </Link>
                </div>
              )}
              <div className="hidden lg:block">
                <Locations />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-ns-title hover:text-ns-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </NSContainer>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#F5F5F5] shadow-lg border-t z-50">
            <NSContainer>
              <div className="py-4 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeMobileMenu}
                      className={clsx(
                        "block py-2 px-4 rounded-md transition-colors duration-200",
                        pathname === href
                          ? "text-ns-primary font-extrabold bg-ns-primary/10"
                          : "text-ns-foreground font-normal hover:text-ns-primary hover:bg-gray-50"
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="pt-4 border-t space-y-3">
                  <NSButton
                    className="w-full text-ns-primary font-normal bg-transparent border border-ns-primary"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </NSButton>
                  <NSButton
                    className="w-full font-normal"
                    onClick={closeMobileMenu}
                  >
                    Join Now
                  </NSButton>
                  <div className="pt-2">
                    <Locations />
                  </div>
                </div>
              </div>
            </NSContainer>
          </div>
        )}

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/20 z-40"
            onClick={closeMobileMenu}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
