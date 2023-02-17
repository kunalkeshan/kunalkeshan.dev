/**
 * Public Navbar Component
 */

// Dependencies
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IMAGE_SOURCE } from "../../config";
import { FaCaretDown } from "react-icons/fa";

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
    url: "/projects",
  },
  {
    name: "Services",
    url: "/#services",
  },
];

const moreNavOptions = [
  {
    name: "Blog",
    url: "https://blog.kunalkeshan.dev",
  },
  {
    name: "Tributes",
    url: "/tributes",
  },
  {
    name: "Resume",
    url: "/resume",
  },
  {
    name: "FAQs",
    url: "/contact#faqs",
  },
  {
    name: "Feed",
    url: "/feed",
  },
  {
    name: "Links",
    url: "/links",
  },
  {
    name: "School",
    url: "/school",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreIsOpen, setMoreIsOpen] = useState(false);

  return (
    <motion.nav
      className="z-50 w-full py-6 px-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
    >
      <div className="z-50 mx-auto flex w-full max-w-3xl items-center justify-between rounded-xl border-2 border-black bg-white py-3 px-4 shadow-3d">
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
        <ul className="z-50 hidden gap-6 text-[18px] font-semibold md:flex">
          {navOptions.map((option, index) => (
            <li
              key={index}
              className="transition-all duration-300 hover:text-portfolio-accent"
            >
              <Link href={option.url} onClick={() => setIsOpen(false)}>
                {option.name}
              </Link>
            </li>
          ))}
          <li className="relative hidden md:block">
            <div
              onClick={() => setMoreIsOpen(!moreIsOpen)}
              className="flex cursor-pointer items-center gap-2 transition-all duration-300 hover:scale-95 hover:text-portfolio-accent active:scale-105"
            >
              More{" "}
              <FaCaretDown
                className={`${
                  moreIsOpen ? "rotate-0" : ""
                }-rotate-90 transition-all`}
              />
            </div>
            <ul
              className={`${
                moreIsOpen ? "h-fit border-2 border-black p-4" : "h-0"
              } absolute top-10 grid w-60 grid-cols-2 items-center justify-center gap-2 overflow-hidden rounded-xl bg-white transition-all duration-500`}
            >
              {moreNavOptions.map((option, index) => (
                <li
                  key={index}
                  className="transition-all duration-300 hover:text-portfolio-accent"
                >
                  <Link href={option.url} onClick={() => setMoreIsOpen(false)}>
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <span className="flex items-center justify-center gap-2">
          <Link
            href="/contact"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-main"
          >
            <HiOutlineEnvelope />
          </Link>
          <button
            className="flex h-12 w-12 items-center justify-center text-xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
        </span>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, translateX: "-50%" }}
          animate={{
            opacity: 1,
            y: 0,
            translateX: "-50%",
          }}
          transition={{
            delay: 0.2,
            type: "spring",
          }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-36 left-1/2 w-full max-w-sm rounded-xl border-2 border-black bg-white py-4 px-5 text-base font-semibold sm:max-w-lg md:hidden"
        >
          <ul className="flex w-full flex-col gap-4">
            {navOptions.map((option, index) => (
              <li key={index}>
                <Link href={option.url} onClick={() => setIsOpen(false)}>
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
          <li className="mt-4 block md:hidden">
            <div
              onClick={() => setMoreIsOpen(!moreIsOpen)}
              className="flex cursor-pointer items-center gap-2 transition-all duration-300 hover:scale-95 hover:text-portfolio-accent active:scale-105"
            >
              More{" "}
              <FaCaretDown
                className={`${
                  moreIsOpen ? "rotate-0" : ""
                }-rotate-90 transition-all`}
              />
            </div>
            <ul
              className={`${
                moreIsOpen ? "h-fit pt-4 pl-8" : "h-0"
              } grid grid-cols-2 gap-2 overflow-hidden bg-white transition-all duration-500`}
            >
              {moreNavOptions.map((option, index) => (
                <li
                  key={index}
                  className="transition-all duration-300 hover:text-portfolio-accent"
                >
                  <Link href={option.url} onClick={() => setMoreIsOpen(false)}>
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
