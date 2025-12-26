/**
 * Individual Tributes Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../../layouts/PublicLayout";
import { motion } from "framer-motion";
import TRIBUTES, { Tribute } from "../../../data/tributes";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const IndividualTributePage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ tribute }) => {
  const {
    name,
    intro,
    coverImage,
    connected,
    company,
    socials,
    website,
    image,
    tributes,
    lessonsLearnt,
  } = tribute;

  const featuredTributes = TRIBUTES.filter((item) => item.feature);
  const currentIndex = featuredTributes.findIndex(
    (item) => item.slug === tribute.slug
  );
  const previousTribute =
    currentIndex > 0 ? featuredTributes[currentIndex - 1] : null;
  const nextTribute =
    currentIndex < featuredTributes.length - 1
      ? featuredTributes[currentIndex + 1]
      : null;

  const connectedDate = new Date(connected!);

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
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="mx-auto mt-10 mb-20 grid max-w-7xl grid-cols-1 gap-4 px-5 md:grid-cols-3 pt-36"
        >
          <div className="w-full md:col-span-2">
            <h1 className="text-3xl font-bold md:text-5xl">{name}</h1>
            <p className="mt-4 font-montserrat text-base font-semibold text-themes-txt_secondary md:text-lg">
              {intro}
            </p>
            <div className="relative mt-8 max-h-96 w-full overflow-hidden rounded-xl border-3 border-black">
              <Image
                src={coverImage!}
                alt={name}
                width={100}
                height={100}
                className="h-auto w-full object-cover"
              />
              <div className="absolute top-8 right-8 w-full max-w-[120px] rotate-12 overflow-hidden rounded-full border-3 border-black shadow-3d transition-all duration-300 md:top-16 md:right-16 md:max-w-[200px]">
                <Image
                  src={image}
                  alt={name}
                  width={100}
                  height={100}
                  className="h-auto w-full object-contain"
                  unoptimized={true}
                  priority
                />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold md:text-3xl">My Tributes</h2>
              {tributes &&
                tributes.length > 0 &&
                tributes.map((trib, index) => (
                  <p
                    key={index}
                    className="mt-4 font-montserrat text-sm md:text-base"
                  >
                    {trib}
                  </p>
                ))}
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold md:text-3xl">Lessons Learnt</h2>
              <ul className="list-[square] pl-4">
                {lessonsLearnt &&
                  lessonsLearnt.length > 0 &&
                  lessonsLearnt.map((lessons, index) => (
                    <li
                      key={index}
                      className="mt-2 font-montserrat text-sm md:text-base"
                    >
                      {lessons}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="">
            <div className="top-20 mx-auto mt-8 w-full rounded-xl border-3 border-black px-4 py-8 font-montserrat shadow-3d lg:sticky lg:h-fit lg:min-w-[420px]">
              <p className="text-2xl font-semibold">Information</p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="gap-4">
                  <p className="text-xl font-bold">‣ Name</p>
                  <p className="ml-2 font-semibold text-themes-txt_secondary">
                    / {name}
                  </p>
                </div>
                <div className="gap-4">
                  <p className="text-xl font-bold">‣ Connected</p>
                  <p className="ml-2 font-semibold text-themes-txt_secondary">
                    / {connectedDate.toDateString()} (
                    {new Date().getFullYear() - connectedDate.getFullYear()}{" "}
                    years to date)
                  </p>
                </div>
                <div className="gap-4">
                  <p className="text-xl font-bold">‣ Company</p>
                  <p className="ml-2 font-semibold text-themes-txt_secondary">
                    / {company.position} at{" "}
                    <Link href={company.website} target="_blank">
                      {company.name}
                    </Link>
                  </p>
                </div>
                <div className="mt-8 flex w-full items-center gap-4 text-sm font-semibold md:flex-wrap">
                  {socialsInfo.map(
                    (social, index) =>
                      social.url && (
                        <Link
                          href={social.url}
                          key={index}
                          target="_blank"
                          aria-label={social.name}
                          className="rounded-full border-2 border-portfolio-accent bg-portfolio-accent bg-opacity-80 p-2 text-xl text-white shadow-3d-small transition-all duration-300 hover:-translate-y-1 hover:bg-opacity-100 hover:shadow-3d"
                        >
                          <social.Icon />
                        </Link>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        {(previousTribute || nextTribute) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="mx-auto mb-20 max-w-7xl px-5"
          >
            <h2 className="text-2xl font-bold md:text-3xl">
              More Tributes to Explore
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {previousTribute && (
                <Link
                  href={`/tributes/${previousTribute.slug}`}
                  className="group flex h-full items-center gap-4 rounded-xl border-3 border-black bg-white p-4 shadow-3d transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-reverse"
                >
                  <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white shadow-3d-small-reverse">
                    <Image
                      src={previousTribute.image}
                      alt={previousTribute.name}
                      width={100}
                      height={100}
                      className="h-auto w-full object-contain"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-themes-txt_secondary">
                      ← Previous Tribute
                    </p>
                    <p className="text-lg font-bold md:text-xl">
                      {previousTribute.name}
                    </p>
                    <p className="text-sm font-semibold text-themes-txt_secondary">
                      {previousTribute.company.position} @{" "}
                      {previousTribute.company.name}
                    </p>
                  </div>
                </Link>
              )}
              {nextTribute && (
                <Link
                  href={`/tributes/${nextTribute.slug}`}
                  className="group flex h-full items-center gap-4 rounded-xl border-3 border-black bg-white p-4 shadow-3d transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-reverse"
                >
                  <div className="flex-1 text-right">
                    <p className="text-sm font-semibold text-themes-txt_secondary">
                      Next Tribute →
                    </p>
                    <p className="text-lg font-bold md:text-xl">
                      {nextTribute.name}
                    </p>
                    <p className="text-sm font-semibold text-themes-txt_secondary">
                      {nextTribute.company.position} @{" "}
                      {nextTribute.company.name}
                    </p>
                  </div>
                  <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white shadow-3d-small-reverse">
                    <Image
                      src={nextTribute.image}
                      alt={nextTribute.name}
                      width={100}
                      height={100}
                      className="h-auto w-full object-contain"
                      unoptimized={true}
                    />
                  </div>
                </Link>
              )}
            </div>
          </motion.section>
        )}
      </PublicLayout>
    </>
  );
};

export default IndividualTributePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = TRIBUTES.filter((tribute) => tribute.feature).map((tribute) => {
    return {
      params: {
        tributeSlug: tribute.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  tribute: Tribute;
}> = async (context) => {
  const { tributeSlug } = context.params!;
  console.log(tributeSlug);

  const tribute = TRIBUTES.find(
    (trib) => trib.slug === tributeSlug && trib.feature
  );

  if (!tribute) {
    return {
      redirect: {
        destination: "/tributes",
        permanent: false,
      },
    };
  }

  return {
    props: { tribute },
  };
};
