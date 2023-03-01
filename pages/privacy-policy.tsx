/**
 * Privacy Policy Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import { motion } from "framer-motion";
import { PRIVACY_POLICY } from "../data/legal";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-10 font-montserrat lg:px-5"
        >
          <h2 className="text-5xl font-semibold">
            <span className="bg-portfolio-main px-1 leading-tight">
              Privacy
            </span>{" "}
            policy
          </h2>
          <ul className="mt-12 flex list-[square] flex-col gap-4">
            {PRIVACY_POLICY.map((policy, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold">{policy.title}</h3>
                <p className="text-lg">{policy.description}</p>
              </li>
            ))}
          </ul>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default PrivacyPolicyPage;
