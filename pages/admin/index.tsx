/**
 * Admin Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../layouts/PublicLayout";
import WorkInProgress from "../../components/reusable/WorkInProgress";

const AdminPage = () => {
  return (
    <>
      <Head>
        <title>Admin | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <WorkInProgress />
      </PublicLayout>
    </>
  );
};

export default AdminPage;
