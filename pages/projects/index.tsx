/**
 * Projects Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../layouts/PublicLayout";
import { motion } from "framer-motion";
import Portfolio from "../../components/landing/Portfolio";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-5 pt-36"
        >
          <Portfolio />
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default ProjectsPage;
