/**
 * Projects Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../layouts/PublicLayout";
import WorkInProgress from "../../components/reusable/WorkInProgress";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <WorkInProgress />
      </PublicLayout>
    </>
  );
};

export default ProjectsPage;
