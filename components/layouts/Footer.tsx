/**
 * Public Footer Component
 */

// Dependencies
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-4 w-full bg-themes-txt_primary py-9 px-3 text-themes-bg_primary">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      ></motion.div>
    </footer>
  );
};

export default Footer;
