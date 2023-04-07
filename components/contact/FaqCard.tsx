/**
 * Individual FAQ Card
 */

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FaqCard: React.FC<Faq> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenAnimation = {
    height: "fit-content",
    opacity: 1,
  };

  const CloseAnimation = {
    height: 0,
    opacity: 0,
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="mx-auto h-fit w-full max-w-3xl cursor-pointer rounded-xl border-2 border-black px-12 py-6 font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-3d focus:shadow-3d active:shadow-3d"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-xl font-bold">{question}</p>
        <button
          className={`${
            isOpen ? "bg-black text-white" : "text-black"
          } rounded-lg border-2 border-black p-3 transition-all duration-300 hover:scale-95`}
        >
          <FaPlus
            className={`${
              isOpen ? "rotate-45" : "rotate-0"
            } transition-all duration-300`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.p
            initial={CloseAnimation}
            animate={OpenAnimation}
            exit={CloseAnimation}
            transition={{ type: "tween" }}
            className="max-w-[90%] text-lg font-semibold text-themes-txt_secondary"
          >
            {answer}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default FaqCard;
