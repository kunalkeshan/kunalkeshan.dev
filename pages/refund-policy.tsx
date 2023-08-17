/**
 * Refund Policy Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import { motion } from "framer-motion";
import { REFUND_POLICY } from "../data/legal";
import Link from "next/link";

const RefundPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Refund Policy | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-10 font-montserrat lg:px-5 pt-36"
        >
          <h2 className="text-5xl font-semibold">
            Refund{" "}
            <span className="bg-portfolio-main px-1 leading-tight">Policy</span>
          </h2>
          <h3 className="font-semibold text-xl mt-4">
            Thank you for choosing our services at kunalkeshan.dev. We strive to
            provide the best support and digital products to our valued
            customers. Please read our refund policy for technical support and
            digital products below:
          </h3>
          <ul className="mt-12 flex list-[square] flex-col gap-4">
            {REFUND_POLICY.map((policy, index) => (
              <li key={index}>
                <h4 className="text-xl font-semibold">{policy.title}</h4>
                <p className="text-lg">{policy.description}</p>
              </li>
            ))}
            <li>
              <h4 className="text-xl font-semibold">Contact Us</h4>
              <p className="text-lg">
                If you have any questions or need further assistance regarding
                our Returns and Refunds Policy, please don&apos;t hesitate to
                reach out to us. You can contact us via email at{" "}
                <Link
                  href="mailto:hey@kunalkeshan.dev"
                  target="_blank"
                  className="font-semibold hover:underline"
                >
                  hey@kunalkeshan.dev
                </Link>{" "}
                or through WhatsApp at{" "}
                <Link
                  href="https://wa.me/+918939881702"
                  target="_blank"
                  className="font-semibold hover:underline"
                >
                  8939881702
                </Link>
                .
              </p>
            </li>
          </ul>
          <p className="text-lg mt-4">
            We value your satisfaction and strive to provide exceptional
            customer support. Thank you for your understanding and cooperation.
          </p>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default RefundPolicyPage;
