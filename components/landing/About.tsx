/**
 * Landing Page - About Section
 */

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IMAGE_SOURCE } from "../../config";
import { FaUser } from "react-icons/fa";
import MemeTooltip from "../reusable/MemeTooltip";

const CONTENT = [
  {
    title: `${new Date().getFullYear() - 2021}+ years of experience`,
    description:
      "I found my calling in web development. It's a never-ending source of happiness and it never feels like a job.",
  },
  {
    title: `Biology student turned tech freak`,
    description:
      "Chose passion over tradition. Originally aimed for medicine, but engineering called instead. Glad to have followed my heart, not societal expectations.",
  },
];

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="mx-auto mt-20 grid min-h-screen max-w-7xl scroll-mt-20 grid-cols-1 gap-16 px-5 text-center lg:grid-cols-2 lg:text-left xl:mt-5"
    >
      <div className="order-last flex w-full items-center justify-center lg:order-none">
        <div className="h-full max-h-[32rem] w-full max-w-lg overflow-hidden rounded-full shadow-3d transition-all duration-300 hover:shadow-3d-hover">
          <Image
            src={IMAGE_SOURCE.ART_IMAGE}
            alt="(/≧▽≦)/"
            width={100}
            height={100}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-col justify-center">
        <h2 className="group relative text-5xl font-semibold">
          Wait a minute,{" "}
          <span className="mt-1 w-fit bg-portfolio-accent px-1 leading-tight">
            who am i
          </span>
          ?
          <MemeTooltip
            image={
              "https://res.cloudinary.com/kunalkeshan/image/upload/v1675351103/Portfolio/memes/who-are-you-meme_ewfkgn.jpg"
            }
          />
        </h2>
        <p className="mt-4 font-[Montserrat] font-semibold text-themes-txt_secondary">
          I am an Electronics and Communication Engineering Student at SRMIST,
          presently in my third year. I&apos;ve been pursuing full-stack web
          development since my first year and have a big interest in developing
          products, improving services and delivering value. My core ideals are
          of consistency, hard work, discipline, and grit.
        </p>
        <ul className="mt-4">
          {CONTENT.map((content, index) => (
            <li
              key={index}
              className={`mt-4 flex flex-col items-center justify-center gap-2 font-[Montserrat] lg:flex-row lg:items-stretch`}
            >
              <div
                className={`mt-1 h-5 w-full max-w-[1.25rem] rounded-md border ${
                  index % 2
                    ? "border-portfolio-main bg-portfolio-main"
                    : "border-portfolio-accent bg-portfolio-accent"
                } bg-opacity-90`}
              />
              <div className="">
                <h4 className="text-2xl font-bold">{content.title}</h4>
                <p className="mt-2 text-lg font-semibold">
                  {content.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="mx-auto mt-8 flex w-fit items-center justify-center gap-2 rounded-xl bg-themes-txt_primary py-6 px-12 font-[Montserrat] font-semibold text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent lg:mx-0"
        >
          <FaUser /> More about me
        </Link>
      </div>
    </motion.section>
  );
};

export default About;
