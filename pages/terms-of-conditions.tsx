/**
 * TermsOfConditions Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import { motion } from "framer-motion";
import { TERMS_OF_CONDITIONS } from "../data/legal";

const TermsOfConditionsPage = () => {
  return (
    <>
      <Head>
        <title>TermsOfConditions | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-10 font-[Montserrat] lg:px-5"
        >
          <h2 className="text-5xl font-semibold">
            Terms of{" "}
            <span className="bg-portfolio-main px-1 leading-tight">
              conditions
            </span>
          </h2>
          <ul className="mt-12 flex list-[square] flex-col gap-4">
            {TERMS_OF_CONDITIONS.map((terms, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold">{terms.title}</h3>
                <p className="text-lg">{terms.description}</p>
              </li>
            ))}
          </ul>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default TermsOfConditionsPage;
