import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { IMAGE_SOURCE } from "../../config";

const AboutIntro = () => {
  return (
    <div className="relative mx-auto max-w-7xl scroll-mt-20 px-5 md:min-h-[60vh]">
      <h1 className="mx-auto max-w-[13ch] text-center text-3xl font-bold md:text-5xl">
        Hello there! I&apos;m{" "}
        <span className="bg-portfolio-main px-1 leading-tight">
          Kunal Keshan
        </span>
      </h1>
      <p className="mx-auto mt-4 max-w-xs text-center font-[Montserrat] text-base font-semibold text-themes-txt_secondary md:text-lg">
        A tiny look into my story, my work and what my values are.
      </p>
      <div className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-4 md:max-w-sm md:flex-row">
        <Link
          href="/"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-themes-txt_primary px-8 py-4 font-semibold text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent"
        >
          <FaEnvelope /> Get in touch
        </Link>
        <Link
          href="/about#story"
          className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-themes-txt_primary  px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-themes-txt_primary hover:text-themes-bg_primary"
        >
          <FaUser /> My story
        </Link>
      </div>
      <div className="mx-auto mt-8 flex items-center justify-center gap-8">
        <div className="h-full max-h-[160px] w-full max-w-[160px] overflow-hidden rounded-full border-2 border-black shadow-3d-small-reverse transition-all duration-300 hover:shadow-3d-reverse md:absolute md:top-1/3 md:-left-12 md:max-h-[200px] md:max-w-[200px] md:-translate-y-1/2 lg:left-4 lg:top-[44%]">
          <Image
            src={IMAGE_SOURCE.ART_IMAGE}
            alt="(～￣▽￣)～"
            height={100}
            width={100}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="h-full max-h-[160px] w-full max-w-[160px] overflow-hidden rounded-full border-2 border-black shadow-3d-small transition-all duration-300 hover:shadow-3d md:absolute md:top-1/4 md:-right-12 md:max-h-[200px] md:max-w-[200px] md:-translate-y-1/2 lg:right-4 lg:top-[33%]">
          <Image
            src={IMAGE_SOURCE.PROFILE_IMAGE}
            alt="(～￣▽￣)～"
            height={100}
            width={100}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
