/**
 * About Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import { motion } from "framer-motion";
import AboutIntro from "../components/about/Intro";
import AboutStory from "../components/about/Story";
import Resume from "../components/about/Resume";
import SkillsInText from "../components/about/SkillsInText";
import Values from "../components/about/Values";

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
          transition={{ delay: 0.2, type: "spring" }}
          className="mt-10 mb-20 overflow-hidden pt-36"
        >
          <AboutIntro />
          <AboutStory />
          <Resume />
          <SkillsInText />
          <Values />
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default AboutPage;
