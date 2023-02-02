/**
 * Landing Page - Portfolio Section
 */

import React from "react";
import { motion } from "framer-motion";
import MemeTooltip from "../reusable/MemeTooltip";

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="mx-auto min-h-screen max-w-7xl"
    >
      <h2 className="group relative mx-auto max-w-[26ch] text-center text-5xl font-semibold">
        Some fine additions to my{" "}
        <span className="mt-1 inline-block bg-portfolio-main px-1">
          development portfolio
        </span>
        <MemeTooltip
          image={
            "https://res.cloudinary.com/kunalkeshan/image/upload/v1675358192/Portfolio/memes/fine_addition_to_my_collection_yanhog.jpg"
          }
        />
      </h2>
      <div></div>
    </motion.section>
  );
};

export default Portfolio;
