/**
 * About Page - Resume Section
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import EXPERIENCE, { Experience } from "../../data/experience";

interface ResumePageProps extends React.ComponentProps<"div"> {}

const ResumeCard: React.FC<Experience> = ({
  logo,
  company,
  date,
  description,
  position,
  website,
}) => {
  const presentlyWorking = date.end.includes("Present");

  return (
    <li
      className={`${
        presentlyWorking ? "shadow-3d hover:shadow-3d-hover" : ""
      } w-full max-w-xs overflow-hidden rounded-xl border-3 border-black transition-all duration-300 md:flex md:max-w-2xl md:flex-row-reverse md:justify-between lg:max-w-4xl`}
    >
      <div className="items-center justify-between w-full px-5 py-10 bg-white md:flex md:flex-row-reverse">
        <Link
          href={website}
          target="_blank"
          className="flex items-center justify-center w-16 h-16 overflow-hidden transition-all duration-300 border-2 border-black rounded-full shadow-3d-small hover:-translate-y-1 hover:shadow-3d lg:h-20 lg:w-20"
        >
          <Image
            src={logo}
            alt={company}
            width={100}
            height={100}
            className="object-contain w-full h-auto"
          />
        </Link>
        <div className="md:max-w-sm lg:max-w-lg">
          <h3 className="mt-4 text-xl font-bold lg:text-2xl">{position},</h3>
          <Link
            href={website}
            className="text-lg font-semibold transition-all duration-300 underline-offset-2 hover:text-portfolio-accent hover:underline"
          >
            {company}
          </Link>
          <p className="mt-4 text-sm font-semibold font-montserrat text-themes-txt_secondary lg:text-base">
            {description}
          </p>
        </div>
      </div>
      <div
        className={`${
          presentlyWorking ? "bg-orange-400" : ""
        } border-t-3 border-black px-5 py-10 md:max-w-[160px] md:border-t-0 md:border-r-3`}
      >
        <p className="text-lg font-bold">
          {date.start} - {date.end}
        </p>
      </div>
    </li>
  );
};

const Resume: React.FC<ResumePageProps> = (props) => {
  return (
    <div className="px-5 mx-auto my-20 max-w-7xl" {...props}>
      <h2 className="text-3xl font-bold text-center">
        Take a look at my{" "}
        <span className="px-1 leading-ti bg-portfolio-main">resume</span>
      </h2>
      <ul className="flex flex-col items-center justify-center w-full gap-8 mx-auto mt-8 mb-16">
        {EXPERIENCE.map((experience, index) => (
          <ResumeCard key={index} {...experience} />
        ))}
      </ul>
    </div>
  );
};

export default Resume;
