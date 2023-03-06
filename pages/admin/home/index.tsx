/**
 * Admin Home
 */

// Dependencies
import React from "react";
import Head from "next/head";
import WorkInProgress from "../../../components/reusable/WorkInProgress";
import PrivateLayout from "../../../layouts/PrivateLayout";

const AdminHomePage = () => {
  return (
    <>
      <Head>
        <title>Admin | Kunal Keshan</title>
      </Head>
      <PrivateLayout>
        <WorkInProgress />
      </PrivateLayout>
    </>
  );
};

export default AdminHomePage;
