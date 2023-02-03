/**
 * Feed Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import WorkInProgress from "../components/reusable/WorkInProgress";

const FeedPage = () => {
  return (
    <>
      <Head>
        <title>Feed | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <WorkInProgress />
      </PublicLayout>
    </>
  );
};

export default FeedPage;
