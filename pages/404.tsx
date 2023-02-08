/**
 * 404 Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../layouts/PublicLayout";
import WorkInProgress from "../components/reusable/WorkInProgress";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Not Found | 404</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative z-20 flex w-full flex-col items-center justify-center lg:mt-20 lg:flex-row"
          >
            <h1 className="absolute left-1/2 top-1/4 z-10 -translate-x-1/2 gap-10 font-[Montserrat] text-[10rem] font-extrabold text-themes-txt_secondary text-opacity-10 md:text-[15rem] lg:left-1/4 lg:-top-20">
              404
            </h1>
            <div className="z-20 w-full max-w-[200px] md:max-w-xs lg:mr-8 lg:ml-auto">
              <Image
                src="/404.svg"
                alt="404"
                width={100}
                height={100}
                className="object-fit h-auto w-full drop-shadow-2xl"
              />
            </div>
            <div className="mt-8 w-fit text-center font-semibold lg:mr-auto lg:text-left">
              <p className="text-5xl lg:text-7xl">Oops!</p>
              <p className="mt-4 text-4xl lg:text-6xl">Page not found</p>
              <p className="mx-auto mt-2 max-w-md font-[Montserrat] text-themes-txt_secondary md:text-lg lg:mx-0 lg:text-xl">
                A disturbance in the force has caused this page to disappear.
              </p>
              <Link
                href="/"
                className="mt-8 block w-full rounded-xl bg-themes-txt_primary px-8 py-4 text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent lg:w-fit lg:text-lg
              "
              >
                Go to homepage
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default NotFoundPage;
