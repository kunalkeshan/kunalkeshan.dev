/**
 * Individual Tributes Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../../layouts/PublicLayout";
import WorkInProgress from "../../../components/reusable/WorkInProgress";
import { motion } from "framer-motion";
import TRIBUTES from "../../../data/tributes";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

const IndividualTributePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ tribute }) => {
  const { name } = tribute;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-5"
        >
          <WorkInProgress />
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default IndividualTributePage;

type Tribute = typeof TRIBUTES[number];

export const getServerSideProps: GetServerSideProps<{
  tribute: Tribute;
}> = async (context) => {
  const { tributeSlug } = context.query;

  const tribute = TRIBUTES.find(
    (trib) => trib.slug === tributeSlug && trib.feature
  );

  if (!tribute) {
    return {
      redirect: {
        destination: "/projects",
        permanent: false,
      },
    };
  }

  return {
    props: { tribute },
  };
};
