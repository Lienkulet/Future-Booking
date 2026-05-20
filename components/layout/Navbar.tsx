"use client";

import { useState } from "react";
import LogoMark from "../icons/LogoMark";
import ChevronDown from "../icons/ChevronDown";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#", hasDropdown: true },
  { label: "Reviews", href: "#" },
  { label: "Contact us", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 lg:px-[120px] py-[16px]">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-manrope font-semibold text-white text-lg tracking-tight">
            Future
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity flex items-center gap-1"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown />}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="font-manrope font-semibold text-[14px] text-[#171717] bg-white border border-[#d4d4d4] rounded-[8px] px-5 py-2.5 hover:bg-gray-50 transition-colors cursor-pointer">
            Sign In
          </button>
          <button className="font-manrope font-semibold text-[14px] text-[#fafafa] bg-[#7b39fc] rounded-[8px] px-5 py-2.5 shadow-sm hover:bg-[#6b29ec] transition-colors cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col px-6 py-[16px]">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-manrope font-semibold text-white text-lg tracking-tight">
                Future
              </span>
            </div>
            <button
              className="text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-manrope font-medium text-2xl text-white hover:opacity-80 transition-opacity flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown />}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4 pb-8">
            <button className="font-manrope font-semibold text-[14px] text-[#171717] bg-white border border-[#d4d4d4] rounded-[8px] px-5 py-3 cursor-pointer">
              Sign In
            </button>
            <button className="font-manrope font-semibold text-[14px] text-[#fafafa] bg-[#7b39fc] rounded-[8px] px-5 py-3 shadow-sm cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}
