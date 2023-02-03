/**
 * Admin Auth Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../layouts/PublicLayout";
import WorkInProgress from "../../components/reusable/WorkInProgress";

const AdminAuthPage = () => {
  return (
    <>
      <Head>
        <title>Admin Auth | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <WorkInProgress />
      </PublicLayout>
    </>
  );
};

export default AdminAuthPage;
