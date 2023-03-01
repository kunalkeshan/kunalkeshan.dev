/**
 * About Page - My Values Section
 */

import React from "react";
import VALUES, { Values } from "../../data/values";
import Image from "next/image";

const ValueCard: React.FC<Values> = ({ image, title, description }) => {
  return (
    <li className="flex w-full flex-col overflow-hidden rounded-xl border-3 border-black md:max-w-xl md:flex-row lg:min-h-full">
      <div className="flex w-full items-center justify-center bg-themes-bg_secondary p-10 md:max-w-[200px]">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="h-auto w-full max-w-[200px] md:min-h-[120px] md:max-w-[120px]"
        />
      </div>
      <div className="py-8 px-6">
        <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        <p className="md:font-base mt-2 font-montserrat text-sm font-semibold text-themes-txt_secondary md:mt-4">
          {description}
        </p>
      </div>
    </li>
  );
};

const ValuesSection = () => {
  return (
    <div className="mx-auto mt-20 max-w-7xl px-5 lg:mt-40">
      <h2 className="text-center text-2xl font-bold">
        My core values, personally and professionally
      </h2>
      <p className="text-montserrat mt-4 text-center font-bold text-themes-txt_secondary">
        Guiding principles that shape both my personal and professional life.
        From the importance of continuous learning to treating others with
        respect and fairness, here&apos;s what drives me to be my best self and
        achieve success.
      </p>
      <ul className="mx-auto mt-8 grid grid-cols-1 place-items-center gap-4 md:gap-8 lg:grid-cols-2">
        {VALUES.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </ul>
    </div>
  );
};

export default ValuesSection;
