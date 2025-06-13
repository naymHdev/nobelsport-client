"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "./TopBar";
import logo from "@/assets/images/logo.png";
import LanguageSelector from "../Locations";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/venue", label: "Venue" },
    { href: "/matches", label: "Matches" },
    { href: "/how-it-works", label: "How It Works" },
  ];

  return (
    <>
      <TopBar />
      <header
        className={`fixed  left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2 top-0" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Link href="/" className="flex items-center">
                <div className="w-14 h-14 relative">
                  <Image
                    src={logo}
                    alt="NOBLESPORT"
                    width={80}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className={`relative font-medium text-base hover:text-green-600 transition-colors ${
                      pathname === link.href
                        ? "text-ns-primary font-extrabold"
                        : "text-gray-700"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        className="absolute -bottom-1  left-0 right-0 h-0.5 bg-green-600 font-extrabold"
                        layoutId="navbar-underline"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link
                  href="/sign-in"
                  className=" text-ns-primary hover:text-green-600 transition-colors"
                >
                  Sign In
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                  Join Now
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center"
              >
                <LanguageSelector />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="md:hidden relative z-10 p-2 text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Slides from left to right */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />

              {/* Slide-in menu */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 bottom-0 w-4/5 max-w-xs bg-white z-50 md:hidden shadow-xl"
              >
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 relative">
                        <Image
                          src={logo}
                          alt="NOBLESPORT"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="flex items-center"
                      >
                        <LanguageSelector />
                      </motion.div>
                    </div>
                  </div>

                  <nav className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-4">
                      {navLinks.map((link, index) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.1 + index * 0.1,
                            duration: 0.3,
                          }}
                        >
                          <Link
                            href={link.href}
                            className={`block py-2 px-3 rounded-md transition-colors ${
                              pathname === link.href
                                ? "bg-green-50 text-green-600 font-medium"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  <div className="p-4 border-t space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <Link
                        href="/sign-in"
                        className="block w-full py-2 px-4 text-center text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                    >
                      <Link
                        href="/join-now"
                        className="block w-full py-2 px-4 text-center bg-green-600 text-white rounded-md hover:bg-green-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Join Now
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
