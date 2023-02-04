/**
 * Contact Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import { motion } from "framer-motion";
import Contact from "../components/contact/Contact";
import FrequentlyAskedQuestions from "../components/contact/FrequentlyAskedQuestions";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-5"
        >
          <Contact />
          <FrequentlyAskedQuestions />
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default ContactPage;
