/**
 * Contact Page - FAQ Section
 */

import React from "react";
import FAQ from "../../data/faqs";
import FaqCard from "./FaqCard";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="mt-20 scroll-mt-20" id="faqs">
      <h2 className="text-center text-5xl font-semibold">
        Frequently asked{" "}
        <span className="bg-portfolio-main px-1 leading-tight">questions</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center font-[Montserrat] text-lg font-semibold text-themes-txt_secondary">
        Some common question people ask me, check them out below to see if I can
        answer any of your questions.
      </p>
      <div className="mt-8 flex flex-col gap-8">
        {FAQ.map((faq, index) => (
          <FaqCard key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
