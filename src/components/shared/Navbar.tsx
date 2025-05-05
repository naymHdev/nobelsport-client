"use client";

import Link from "next/link";
import NSContainer from "../ui/core/NSContainer";
import TopBar from "./Topbar";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import NSButton from "../ui/core/NSButton";
import Image from "next/image";
import Locations from "../Locations";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/venue", label: "Venue" },
    { href: "/matches", label: "Matches" },
    { href: "/how-it-works", label: "How It Works" },
  ];
  return (
    <>
      <TopBar />
      <div className=" border py-8 w-full">
        <NSContainer>
          <div className=" flex items-center justify-between">
            <div className=" font-bold font-openSans text-3xl">Logo</div>
            <div className=" flex items-center gap-4 font-normal text-lg font-openSans">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "transition-colors duration-200",
                    pathname === href
                      ? " text-ns-primary font-extrabold"
                      : " text-ns-foreground font-normal"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className=" flex items-center justify-between gap-5">
              <NSButton className=" text-ns-primary font-normal bg-transparent">
                Sign In
              </NSButton>
              <NSButton className="font-normal">Join Now</NSButton>
              <div>
                <Locations />
              </div>
            </div>
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default Navbar;
