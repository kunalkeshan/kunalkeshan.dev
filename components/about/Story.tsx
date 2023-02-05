import React from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";
import CodingAnimationData from "../../assets/lottie/coding.json";
import { FaEnvelope } from "react-icons/fa";

const AboutStory = () => {
  return (
    <div
      className="mx-auto mt-20 max-w-7xl items-center justify-center px-5 md:mt-0 lg:flex lg:gap-8"
      id="story"
    >
      <div>
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:max-w-sm lg:text-left lg:text-6xl lg:font-extrabold xl:max-w-xl">
          My{" "}
          <span className="bg-portfolio-accent px-1 leading-tight">story</span>{" "}
          as a developer
        </h2>
        <div className="mx-auto mt-4 max-w-xs rounded-xl border-2 border-black bg-slate-400 shadow-3d md:max-w-lg lg:mx-0">
          <Lottie
            loop
            play
            animationData={CodingAnimationData}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full flex-col gap-4 font-semibold text-themes-txt_secondary md:max-w-lg md:text-lg">
        <p>
          <span className="text-5xl font-bold text-black">M</span>y journey as a
          developer started during my first year of college, where I was
          studying Electronics and Communications Engineering. Despite having a
          family full of doctors, I felt a strong pull towards web development
          and decided to follow my intuition.
        </p>
        <p>
          From my first line of code, I was hooked. I loved the challenge of
          problem-solving and the satisfaction of seeing my creations come to
          life. I taught myself the basics and then dove headfirst into more
          complex projects, always pushing myself to learn and grow.
        </p>
        <p>
          As I continued to develop my skills, I took on freelance projects and
          worked with clients from various industries. I found joy in using my
          technical abilities to help others achieve their goals and bring their
          ideas to life.
        </p>
        <p>
          I&apos;m now fully committed to my career as a developer and I&apos;m
          excited to continue growing and helping others through my work.
          Whether it&apos;s building a new website, creating a custom software
          solution, or working on a team, I&apos;m always eager to tackle new
          challenges and push the boundaries of what&apos;s possible.
        </p>
        <Link
          href="/"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-themes-txt_primary px-8 py-4 font-semibold text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent md:w-fit"
        >
          <FaEnvelope /> Get in touch
        </Link>
      </div>
    </div>
  );
};

export default AboutStory;
