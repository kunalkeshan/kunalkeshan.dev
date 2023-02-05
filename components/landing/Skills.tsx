/**
 * Landing Page - Skills Section
 */

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SKILLS from "../../data/skills";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="my-32 mb-20 w-full overflow-x-clip lg:mb-52"
    >
      <div className="mx-auto block w-[120%] -translate-x-16 -rotate-[8deg] bg-themes-txt_primary px-10 py-16 text-themes-bg_primary">
        <div className="animate-marquee whitespace-nowrap">
          {SKILLS.map((skill, index) => (
            <span
              key={index}
              className="mx-10 inline-block h-[60px] max-w-[60px] lg:mx-16"
              title={skill.name}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
