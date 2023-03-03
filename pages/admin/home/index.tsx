/**
 * Admin Home
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../../layouts/PublicLayout";
import WorkInProgress from "../../../components/reusable/WorkInProgress";
import { withSessionSsr } from "../../../utils/withSession";

const AdminHomePage = () => {
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

export default AdminHomePage;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    if (!user?.admin) {
      return {
        redirect: {
          destination: "/admin",
          permanent: true,
        },
      };
    }

    return {
      props: {
        user,
      },
    };
  }
);
