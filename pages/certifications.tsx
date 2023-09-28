/**
 * Certifications Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import { motion } from "framer-motion";

const CertificationsPage = () => {
  return (
    <>
      <Head>
        <title>Certifications | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="mt-10 mb-20 overflow-hidden pt-36"
        ></motion.section>
        ;
      </PublicLayout>
    </>
  );
};

export default CertificationsPage;
