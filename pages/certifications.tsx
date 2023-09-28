/**
 * Certifications Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import { motion } from "framer-motion";
import CertificateCard from "../components/cards/CertificateCard";
import CERTIFICATIONS from "../data/certifications";

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
        >
          <h2 className="group relative mx-auto max-w-[26ch] text-center text-3xl font-semibold leading-tight md:text-5xl">
            My{" "}
            <span className="mt-1 whitespace-nowrap bg-portfolio-main px-1 leading-tight">
              certifications
            </span>
          </h2>
          <ul className="mx-auto max-w-7xl scroll-mt-20 px-5 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {CERTIFICATIONS.map((cert) => (
              <CertificateCard key={cert.credentialId} certificate={cert} />
            ))}
          </ul>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default CertificationsPage;
