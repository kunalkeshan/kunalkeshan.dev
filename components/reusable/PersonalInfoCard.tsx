import { motion } from "framer-motion";
import React from "react";
import { PersonalInfo } from "../../data/personal";
import Image from "next/image";

const PersonalInfoCard: React.FC<PersonalInfo & { index: number }> = ({
  title,
  date,
  description,
  index,
  images,
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
      className={`${
        index % 2 ? "top-40 row-span-2" : ""
      } static z-10 mt-10 h-fit w-full max-w-2xl rounded-xl border-3 border-black bg-white px-8 py-4 pb-8 font-[Montserrat] shadow-3d md:relative md:mt-24`}
    >
      <h2 className="flex w-full items-center justify-between font-bold">
        <span className="text-2xl">{title}</span>
        <span className="text-sm">{date}</span>
      </h2>
      <hr className="my-4 w-full border-b border-black" />
      {description.map((desc, index) => (
        <p className="mt-1" key={index}>
          {desc}
        </p>
      ))}
      {images && images.length > 0 && (
        <ul className="mx-auto mt-2 grid w-full grid-cols-2 md:grid-cols-3 md:gap-2">
          {images.map((img, idx) => (
            <li
              key={idx}
              className="m-2 block h-full max-h-[120px] w-full max-w-[120px] overflow-hidden rounded-xl border-2 border-black transition-all duration-300 hover:shadow-3d-small md:max-h-[160px] md:max-w-[160px]"
            >
              <Image
                src={img}
                width={100}
                height={100}
                alt={title}
                className="h-full w-full object-cover"
                unoptimized={true}
              />
            </li>
          ))}
        </ul>
      )}
    </motion.li>
  );
};

export default PersonalInfoCard;
