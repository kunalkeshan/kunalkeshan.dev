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
import client from "../client";
import { InferGetStaticPropsType, NextPage, GetStaticProps } from "next";

const ContactPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  faqs,
}) => {
  return (
    <>
      <Head>
        <title>Contact | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-5 pt-36"
        >
          <Contact />
          <FrequentlyAskedQuestions faqs={faqs} />
        </motion.section>
      </PublicLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ faqs: Faq[] }> = async () => {
  const faqs = await client.fetch(`*[_type == "faqs"]`);
  return {
    props: {
      faqs,
    },
    revalidate: 60,
  };
};

export default ContactPage;
