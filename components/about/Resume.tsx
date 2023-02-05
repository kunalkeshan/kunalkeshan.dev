import React from "react";
import Image from "next/image";
import Link from "next/link";
import EXPERIENCE from "../../data/experience";

type ResumeCardDataType = typeof EXPERIENCE[number];

const ResumeCard: React.FC<ResumeCardDataType> = ({
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
      <div className="w-full items-center justify-between bg-white px-5 py-10 md:flex md:flex-row-reverse">
        <Link
          href={website}
          target="_blank"
          className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-black shadow-3d-small transition-all duration-300 hover:shadow-3d lg:h-20 lg:w-20"
        >
          <Image
            src={logo}
            alt={company}
            width={100}
            height={100}
            className="h-auto w-full object-contain"
          />
        </Link>
        <div className="md:max-w-sm lg:max-w-lg">
          <h3 className="mt-4 text-xl font-bold lg:text-2xl">{position}</h3>
          <p className="mt-4 font-[Montserrat] text-sm font-semibold text-themes-txt_secondary lg:text-base">
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

const Resume = () => {
  return (
    <div className="mx-auto mt-20 max-w-7xl px-5">
      <h2 className="text-center text-3xl font-bold">
        Take a look at my{" "}
        <span className="leading-ti bg-portfolio-main px-1">resume</span>
      </h2>
      <ul className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-8">
        {EXPERIENCE.map((experience, index) => (
          <ResumeCard key={index} {...experience} />
        ))}
      </ul>
    </div>
  );
};

export default Resume;
