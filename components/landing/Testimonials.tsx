/**
 * Landing Page - Testimonials Section
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import MemeTooltip from "../reusable/MemeTooltip";
import TRIBUTES from "../../data/tributes";
import Image from "next/image";

type TributeDataType = typeof TRIBUTES[number];

const TestimonialCard: React.FC<TributeDataType> = ({
  testimonial,
  name,
  company,
  image,
}) => {
  return (
    <div className="relative mx-auto mt-12 flex max-w-4xl flex-col rounded-xl border-3 border-black p-10 font-[Montserrat] lg:pr-72">
      <div className="absolute -top-10 rounded-full bg-black p-5 text-3xl text-white">
        <FaQuoteLeft />
      </div>
      <div>
        <p className="text-sm font-semibold text-themes-txt_secondary">
          {testimonial}
        </p>
        <div className="mt-4 flex w-full items-center justify-between lg:max-w-md">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">{name}</p>
            <p>
              {company.position} at {company.name}
            </p>
          </div>
          <Image
            src={company.logo}
            alt={company.name}
            width={100}
            height={100}
            className="h-auto w-full max-w-[120px]"
          />
        </div>
      </div>
      <div
        className="mx-auto max-h-[20rem] w-full max-w-xs overflow-hidden rounded-full border-3 border-black lg:absolute lg:top-1/2 lg:-right-20 lg:-translate-y-1/2
      "
      >
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<TributeDataType>(
    TRIBUTES[0]
  );

  type IncDec = -1 | 1;

  const handleChangeTestimonial = (change: IncDec) => () => {
    let currentIndex = TRIBUTES.findIndex(
      (tribute) => tribute.name === currentTestimonial.name
    );
    const length = TRIBUTES.length - 1;
    if (change > 0) {
      if (currentIndex + 1 <= length) {
        currentIndex++;
        setCurrentTestimonial(TRIBUTES[currentIndex]);
      } else {
        setCurrentTestimonial(TRIBUTES[0]);
      }
    } else {
      if (currentIndex - 1 >= 0) {
        currentIndex--;
        setCurrentTestimonial(TRIBUTES[currentIndex]);
      } else {
        setCurrentTestimonial(TRIBUTES[length]);
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-5 pt-20"
    >
      <h2 className="group relative h-fit w-fit text-center text-5xl font-semibold">
        What do my friends and clients say{" "}
        <span className="bg-portfolio-accent px-1 font-semibold leading-tight">
          about me
        </span>
        <MemeTooltip
          image={
            "https://res.cloudinary.com/kunalkeshan/image/upload/v1675460065/Portfolio/memes/we_have_a_hulk_meme_higm94.jpg"
          }
        />
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center font-[Montserrat] font-semibold text-themes-txt_secondary">
        Close friends and clients describe me as dedicated, hardworking, and
        always striving for excellence. I bring a fresh perspective and creative
        approach to every project and prioritize communication for successful
        outcomes.
      </p>
      <TestimonialCard {...currentTestimonial} />
      <div className="mt-8 flex gap-8">
        <button
          onClick={handleChangeTestimonial(1)}
          className="rounded-lg bg-themes-bg_secondary p-5 text-3xl text-themes-txt_primary transition-all duration-300 hover:scale-95 hover:rounded-xl hover:bg-themes-txt_primary hover:text-themes-bg_primary"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleChangeTestimonial(-1)}
          className="rounded-lg bg-themes-bg_secondary p-5 text-3xl text-themes-txt_primary transition-all duration-300 hover:scale-95 hover:rounded-xl hover:bg-themes-txt_primary hover:text-themes-bg_primary"
        >
          <FaArrowRight />
        </button>
      </div>
    </motion.section>
  );
};

export default Testimonials;
