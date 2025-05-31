"use client";
import NSContainer from "../ui/core/NSContainer";
import fb from "@/assets/icons/fb.png";
import ig from "@/assets/icons/ig.png";
import x from "@/assets/icons/x.png";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import NSButton from "../ui/core/NSButton";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <>
      <div className="bg-[#111827] py-14 lg:px-20 text-white font-openSans">
        <NSContainer className=" mt-2">
          <footer className=" grid grid-cols-1 lg:grid-cols-4 gap-11">
            <div>
              <h2 className="text-2xl font-extrabold leading-6">NobleSport</h2>
              <p className="mt-6 font-normal leading-6">
                Find and book the best sports venues near you. Join our
                community of sports enthusiasts.
              </p>
              <div className="mt-5 flex items-center gap-4">
                <a href="#">
                  <Image
                    src={fb}
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </a>
                <a href="">
                  <Image
                    src={x}
                    alt="X"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </a>
                <a href="">
                  <Image
                    src={ig}
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-extrabold leading-5">Quick Links</h2>
              <div className=" mt-[18px] space-y-[15px] flex flex-col">
                <Link
                  className=" font-normal leading-4 text-[16px] hover:text-ns-secondary"
                  href="#"
                >
                  Home
                </Link>
                <Link
                  className=" font-normal leading-4 text-[16px] hover:text-ns-secondary"
                  href="#"
                >
                  Find Venues
                </Link>
                <Link
                  className=" font-normal leading-4 text-[16px] hover:text-ns-secondary"
                  href="#"
                >
                  Join Matches
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-extrabold leading-5">Support</h2>
              <div className=" mt-[18px] space-y-[15px] flex flex-col">
                <Link
                  className=" font-normal leading-4 text-[16px] hover:text-ns-secondary"
                  href="#"
                >
                  Terms of Service
                </Link>
                <Link
                  className=" font-normal leading-4 text-[16px] hover:text-ns-secondary"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-extrabold leading-5">Newsletter</h2>
              <p className="mt-4 font-normal leading-6">
                Subscribe to get updates on new venues and exclusive offers
              </p>
              <div className=" space-y-4 mt-4">
                <Input
                  className="w-full bg-ns-foreground px-4 rounded-[8px] py-2 border-none"
                  placeholder="Your email address"
                />
                <NSButton className=" text-white bg-ns-secondary w-full rounded-[8px] px-[96px] py-2">
                  Subscribe
                </NSButton>
              </div>
            </div>
          </footer>
          <div className=" my-16">
            <Separator className=" block bg-white" />
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default Footer;
