/**
 * Tributes Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../layouts/PublicLayout";
import { motion } from "framer-motion";
import TRIBUTES from "../../data/tributes";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const TributeIndividuals = TRIBUTES.filter((tribute) => tribute.feature);

type TributeDataType = typeof TRIBUTES[number];

const TributeCard: React.FC<TributeDataType> = ({
  slug,
  name,
  company,
  image,
  intro,
  socials,
  website,
}) => {
  const socialsInfo = [
    {
      name: "Website",
      Icon: FaGlobe,
      url: website,
    },
    {
      name: "LinkedIn",
      Icon: FaLinkedin,
      url: socials!.linkedin,
    },
    {
      name: "Instagram",
      Icon: FaInstagram,
      url: socials!.instagram,
    },
    {
      name: "Twitter",
      Icon: FaTwitter,
      url: socials!.twitter,
    },
    {
      name: "YouTube",
      Icon: FaYoutube,
      url: socials!.youtube,
    },
  ];

  return (
    <li className="z-10 flex w-full flex-col gap-4 rounded-xl border-3 border-black bg-white px-10 py-5 shadow-3d">
      <div className="relative z-20 mx-auto flex w-full items-center justify-center">
        <Link
          href={`/tributes/${slug}`}
          className="flex h-full max-h-[200px] max-w-[200px] items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white shadow-3d-small-reverse transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-reverse"
        >
          <Image
            src={image}
            width={100}
            height={100}
            alt={name}
            className="h-auto w-full object-contain"
          ></Image>
        </Link>
        <Link
          href={`/tributes/${slug}`}
          className="absolute bottom-0 right-[40px] -z-10 flex h-full max-h-[80px] max-w-[80px] items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white shadow-3d-small transition-all duration-300 hover:z-0 hover:-translate-y-1 hover:shadow-3d"
        >
          <Image
            src={company.logo}
            width={100}
            height={100}
            alt={company.name}
            className="h-auto w-full object-contain"
          ></Image>
        </Link>
      </div>
      <h2 className="text-center text-lg font-bold md:text-xl">
        {name}{" "}
        <div className="text-base md:text-lg">
          {company.position} @{company.name}
        </div>
      </h2>
      <p className="my-4 text-justify font-[Montserrat] text-sm font-semibold md:text-base">
        {intro}
      </p>
      <Link
        href={`/tributes/${slug}`}
        className="mt-auto block w-full rounded-lg bg-themes-txt_primary px-8 py-4 text-center font-bold text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent"
      >
        Learn more
      </Link>
      <div className="mt-4 flex flex-wrap gap-4">
        {socialsInfo.map(
          (social, index) =>
            social.url && (
              <Link
                href={social.url}
                key={index}
                target="_blank"
                className="rounded-full border-2 border-portfolio-accent bg-portfolio-accent bg-opacity-80 p-2 text-xl text-white shadow-3d-small transition-all duration-300 hover:-translate-y-1 hover:bg-opacity-100 hover:shadow-3d"
              >
                <social.Icon />
              </Link>
            )
        )}
      </div>
    </li>
  );
};

const TributesPage = () => {
  return (
    <>
      <Head>
        <title>Tributes | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="mx-auto mt-10 mb-20 max-w-7xl px-5"
        >
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            My Tribute to those{" "}
            <span className="bg-portfolio-main px-1 leading-tight">
              who shaped
            </span>{" "}
            who I am today
          </h1>
          <p className="mt-4 text-center font-[Montserrat] text-base font-semibold text-themes-txt_secondary md:text-lg">
            I&apos;ve been fortunate to have had many amazing individuals cross
            paths with me and play a crucial role in my growth and shaping me
            into who I am today. This page is my tribute to those who have made
            a lasting impact on my life and inspired me to keep pushing forward.
            Join me as I take a walk down memory lane and share my story.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TributeIndividuals.map((tribute, index) => (
              <TributeCard key={index} {...tribute} />
            ))}
          </ul>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default TributesPage;
