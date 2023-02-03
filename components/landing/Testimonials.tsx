/**
 * Landing Page - Testimonials Section
 */

import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="mx-auto min-h-screen max-w-7xl px-5"
    >
      Testimonials
    </motion.section>
  );
};

export default Testimonials;
