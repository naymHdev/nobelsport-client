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
      <div className=" w-full h-[75px]">
        <NSContainer>
          <div className="mt-2 flex items-center justify-between">
            <div className="w-[60px] h-[60px]">
              <Image src={logo} alt="Logo" className="w-[60px] h-[60px]" />
            </div>
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
