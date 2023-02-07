/**
 * Resume Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import WorkInProgress from "../components/reusable/WorkInProgress";
import Resume from "../components/about/Resume";

const ResumePage = () => {
  return (
    <>
      <Head>
        <title>Resume | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <Resume />
      </PublicLayout>
    </>
  );
};

export default ResumePage;
