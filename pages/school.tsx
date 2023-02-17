/**
 * School Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import Line from "../components/reusable/Line";
import { SCHOOL_INFO } from "../data/personal";
import PersonalInfoCard from "../components/reusable/PersonalInfoCard";

const SchoolPage = () => {
  return (
    <>
      <Head>
        <title>School | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <h1 className="mt-4 text-center text-3xl font-semibold md:text-5xl">
          Journey through my{" "}
          <span className="bg-portfolio-accent px-1 leading-tight">
            schooling
          </span>
        </h1>
        <section className="relative min-h-screen w-full overflow-clip px-5 pb-10">
          <Line />
          <ul className="mx-auto mb-20 grid w-fit grid-cols-1 gap-10 md:grid-cols-2 md:gap-24">
            {SCHOOL_INFO.map((info, index) => (
              <PersonalInfoCard key={index} {...info} index={index} />
            ))}
          </ul>
        </section>
      </PublicLayout>
    </>
  );
};

export default SchoolPage;
