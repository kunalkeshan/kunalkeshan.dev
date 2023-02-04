/**
 * About Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-5"
        >
          <div className="min-h-screen text-center">
            <h1 className="mx-auto max-w-[13ch] text-5xl font-bold">
              Hello there! I&apos;m{" "}
              <span className="bg-portfolio-main px-1 leading-tight">
                Kunal Keshan
              </span>
            </h1>
            <p className="mt-4 font-[Montserrat] text-lg font-semibold text-themes-txt_secondary">
              A tiny look into my story, my work and what my values are.
            </p>
            <div className="flex items-center gap-2">
              <Link href="/">
                <FaEnvelope /> Get in touch
              </Link>
              <Link href="/">
                <FaUser /> My story
              </Link>
            </div>
          </div>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default AboutPage;
