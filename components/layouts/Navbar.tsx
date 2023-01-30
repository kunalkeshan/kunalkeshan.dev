/**
 * Public Navbar
 */

// Dependencies
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IMAGE_SOURCE } from "../../config";

const navOptions = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Projects",
    url: "/#projects",
  },
  {
    name: "Services",
    url: "/services",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed w-full py-9">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between rounded-xl border-2 border-black bg-white py-3 px-4 shadow-3d">
        <Link
          href="/"
          className="h-12 w-12 overflow-hidden rounded-full transition-all duration-300 hover:scale-95"
        >
          <Image
            src={IMAGE_SOURCE.ART_IMAGE}
            alt="¬_¬"
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </Link>
        <Link
          href="/contact"
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-main"
        >
          <HiOutlineEnvelope />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
