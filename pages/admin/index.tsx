/**
 * Admin Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../layouts/PublicLayout";
import WorkInProgress from "../../components/reusable/WorkInProgress";
import { motion } from "framer-motion";

const AdminPage = () => {
  return (
    <>
      <Head>
        <title>Admin | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-5"
        >
          <WorkInProgress />
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default AdminPage;
