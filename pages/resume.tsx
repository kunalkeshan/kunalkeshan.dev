/**
 * Resume Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import Resume from "../components/about/Resume";

const ResumePage = () => {
  return (
    <>
      <Head>
        <title>Resume | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <Resume className="pt-36" />
      </PublicLayout>
    </>
  );
};

export default ResumePage;
