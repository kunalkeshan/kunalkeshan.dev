/**
 * Landing Page - About Section
 */

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGE_SOURCE } from "../../config";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="mx-auto mt-20 grid min-h-screen max-w-7xl scroll-mt-44 grid-cols-1 gap-16 lg:mt-0 lg:grid-cols-2"
    >
      <div className="flex w-full items-center justify-center">
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
        <h2 className="text-5xl font-semibold">
          Who&apos;s the driving force{" "}
          <span className="mt-1 inline-block w-fit bg-portfolio-accent px-1">
            behind the scenes
          </span>
          ?
        </h2>
        <p className="mt-4 font-[Montserrat] font-semibold text-themes-txt_secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          blanditiis, adipisci exercitationem animi consequatur nobis deserunt
          quas error, perspiciatis id quos quis porro nam cum eos velit itaque
          earum! Recusandae?
        </p>
      </div>
    </motion.section>
  );
};

export default About;
