/**
 * Landing Page - Blog Section
 */

import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
      className="mx-auto mb-20 min-h-screen max-w-7xl scroll-mt-20 px-5 text-center"
    ></motion.section>
  );
};

export default Blog;
