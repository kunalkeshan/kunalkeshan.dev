/**
 * Landing Page - Experience Section
 */

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="mx-auto min-h-screen max-w-7xl"
    >
      Experience
    </motion.section>
  );
};

export default Experience;
