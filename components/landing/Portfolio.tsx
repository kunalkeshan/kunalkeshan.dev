/**
 * Index Page - Portfolio Section
 */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaGithub, FaGlobe, FaSuitcase } from "react-icons/fa";
import MemeTooltip from "../reusable/MemeTooltip";
import PROJECTS from "../../data/projects";

type ProjectDataType = typeof PROJECTS[number];

const ProjectCard: React.FC<ProjectDataType> = ({
  coverImage,
  color,
  title,
  description,
  feature,
  logo,
  type,
  github,
  website,
  slug,
}) => {
  return (
    <div className="group flex min-h-[400px] w-full flex-col overflow-hidden rounded-xl border-3 border-black transition-all duration-300 hover:-translate-y-2 hover:shadow-3d md:flex-row">
      <div className="w-full p-14 md:w-1/2">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10">
            <Image
              src={logo}
              alt={title}
              width={100}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <p className="font-['Ubuntu Mono'] rounded-3xl bg-themes-txt_primary py-2 px-4 text-sm font-semibold uppercase text-themes-bg_primary">
            {type}
          </p>
        </div>
        <h3 className="mt-4 text-4xl font-bold">{title}</h3>
        <p className="mt-8 font-[Montserrat] font-semibold">{description}</p>
        {feature ? (
          <Link
            href={`/projects/${slug}`}
            className="mt-8 flex items-center gap-2 font-[Montserrat] text-sm font-semibold"
          >
            More info{" "}
            <FaArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        ) : (
          <div className="mt-8 flex w-full flex-wrap items-center gap-4 font-[Montserrat] text-sm font-semibold">
            {github && (
              <Link
                className="flex items-center gap-2 rounded-xl py-2 px-8 transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-main"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                Code <FaGithub />
              </Link>
            )}
            {website && (
              <Link
                className="flex items-center gap-2 rounded-xl bg-themes-txt_primary py-2 px-8 text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent"
                href={website}
                target="_blank"
                rel="noreferrer"
              >
                Visit <FaGlobe />
              </Link>
            )}
          </div>
        )}
      </div>
      <div
        className="flex h-[200px] w-full items-center justify-center md:h-auto md:w-1/2"
        style={{ backgroundColor: color }}
      >
        <Image
          src={coverImage}
          alt={title}
          width={100}
          height={100}
          className="h-auto w-full max-w-[160px] object-contain drop-shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl md:max-w-xs"
        />
      </div>
    </div>
  );
};

const Portfolio: React.FC<{ showTill?: number }> = ({ showTill }) => {
  const [isNotProjectsPage, setIsNotProjectPage] = useState(true);

  useEffect(() => {
    setIsNotProjectPage(!window.location.pathname.includes("projects"));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="mx-auto mt-20 min-h-screen max-w-7xl px-5 xl:mt-5"
    >
      <h2 className="group relative mx-auto max-w-[26ch] text-center text-3xl font-semibold leading-tight md:text-5xl">
        Some fine additions to my{" "}
        <span className="mt-1 whitespace-nowrap bg-portfolio-main px-1 leading-tight">
          development portfolio
        </span>
        <MemeTooltip
          image={
            "https://res.cloudinary.com/kunalkeshan/image/upload/v1675358192/Portfolio/memes/fine_addition_to_my_collection_yanhog.jpg"
          }
        />
      </h2>
      <div className="mt-8 flex flex-col items-center justify-center gap-8">
        {PROJECTS.slice(0, showTill).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      {isNotProjectsPage && (
        <Link
          href="/projects"
          className="mx-auto mt-8 flex w-fit gap-2 rounded-xl bg-themes-txt_primary px-8 py-4 font-[Montserrat] text-lg font-semibold text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent"
        >
          <FaSuitcase /> View all projects
        </Link>
      )}
    </motion.section>
  );
};

export default Portfolio;
