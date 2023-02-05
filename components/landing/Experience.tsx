/**
 * Landing Page - Experience Section
 */

import React from "react";
import { motion } from "framer-motion";
import MemeTooltip from "../reusable/MemeTooltip";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import EXPERIENCE from "../../data/experience";
import Image from "next/image";

type ExperienceDataType = typeof EXPERIENCE[number];

const ExperienceCard: React.FC<ExperienceDataType> = ({
  date,
  website,
  logo,
  position,
  description,
  company,
}) => {
  return (
    <div className="w-full rounded-xl bg-themes-bg_primary font-[Montserrat] text-themes-txt_primary">
      <div className="flex w-full items-center justify-between px-10 py-5">
        <p className="text-xl font-semibold">
          {date.start} - {date.end}
        </p>
        <Link
          href={website}
          className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-black shadow-3d-small transition-all duration-300 hover:-translate-y-1 hover:shadow-3d"
        >
          <Image
            src={logo}
            alt={company}
            width={100}
            height={100}
            className="h-auto w-full object-contain"
          />
        </Link>
      </div>
      <hr className="border-2 border-b-black" />
      <div className="px-10 py-5">
        <h3 className="text-2xl font-semibold">{position}</h3>
        <p className="mt-4 font-semibold text-themes-txt_secondary">
          {description}
        </p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="mx-auto mt-20 min-h-screen w-full bg-themes-txt_primary p-5 pb-40"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 pt-10 text-themes-bg_primary md:grid-cols-2 md:pt-20">
        <div className="w-full">
          <div className="w-full md:sticky md:top-28">
            <h2 className="group text-5xl font-semibold">
              Take a look at my{" "}
              <span className="bg-portfolio-main px-1 leading-tight">
                past experience
              </span>
              <MemeTooltip
                image={
                  "https://res.cloudinary.com/kunalkeshan/image/upload/v1675425993/Portfolio/memes/trump_meme_uacrw3.jpg"
                }
              />
            </h2>
            <p className="mt-4 font-[Montserrat] font-semibold text-themes-bg_secondary">
              Working with others is really fun when you know that your members
              are also working on improving themselves and putting in their 100%
            </p>
            <Link
              href="/resume"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-themes-bg_primary px-8 py-4 font-[Montserrat] text-lg font-semibold text-themes-txt_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent md:w-fit"
            >
              <FaUser /> See full resume
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col gap-8">
          {EXPERIENCE.slice(0, 4).map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
