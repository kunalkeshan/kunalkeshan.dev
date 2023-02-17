/**
 * School Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import Line from "../components/reusable/Line";
import { SCHOOL_INFO } from "../data/personal";
import PersonalInfoCard from "../components/reusable/PersonalInfoCard";
import { motion } from "framer-motion";

const SchoolPage = () => {
  return (
    <>
      <Head>
        <title>School | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto mb-20 w-full px-5"
        >
          <h1 className="mt-4 text-center text-3xl font-semibold md:text-5xl">
            Journey through my{" "}
            <span className="bg-portfolio-accent px-1 leading-tight">
              schooling
            </span>
          </h1>
          <div className="relative min-h-screen w-full overflow-clip pb-10">
            <Line />
            <ul className="mx-auto grid w-fit grid-cols-1 gap-10 md:grid-cols-2 md:gap-24">
              {SCHOOL_INFO.map((info, index) => (
                <PersonalInfoCard key={index} {...info} index={index} />
              ))}
            </ul>
          </div>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default SchoolPage;
