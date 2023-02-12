/**
 * Work in Progress Component
 */

import React from "react";
import Lottie from "react-lottie-player";
import WorkInProgressAnimationData from "../../assets/lottie/work-in-progress.json";
import { motion } from "framer-motion";
import { FaSuitcase } from "react-icons/fa";
import Link from "next/link";

const WordInProgress = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
      className="mx-auto mb-20 w-full max-w-md px-5"
    >
      <Lottie loop play animationData={WorkInProgressAnimationData} />
      <p className="mx-auto w-fit text-center font-[Montserrat] text-3xl">
        This page is a work in progress...
      </p>
      <Link
        href="/contact"
        className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-themes-txt_primary py-4 px-8 text-lg text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent"
      >
        <FaSuitcase /> Contact for more info
      </Link>
    </motion.div>
  );
};

export default WordInProgress;
