/**
 * Individual Project Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../../layouts/PublicLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import PROJECTS, { Project } from "../../../data/projects";
import { FaGithub, FaGlobe } from "react-icons/fa";
import {
  InferGetStaticPropsType,
  NextPage,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import Link from "next/link";

const ProjectsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ project }) => {
  const {
    title,
    coverImage,
    color,
    description,
    motivation,
    github,
    website,
    type,
    technologies,
    images,
    logo,
  } = project;
  const featuredProjects = PROJECTS.filter((proj) => proj.feature);
  const currentIndex = featuredProjects.findIndex(
    (proj) => proj.slug === project.slug
  );
  const previousProject =
    currentIndex > 0 ? featuredProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < featuredProjects.length - 1
      ? featuredProjects[currentIndex + 1]
      : null;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={coverImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@_kunalkeshan_" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={coverImage} />
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="mx-auto mt-10 mb-20 max-w-4xl px-5 md:max-w-7xl pt-36"
        >
          <h1 className="text-center text-3xl font-bold lg:text-5xl">
            {title}
          </h1>
          <div className="relative mx-auto mt-8 flex items-center justify-center rounded-xl border-3 border-black p-4">
            <div
              className="flex w-full items-center justify-center rounded-xl border-3 p-10"
              style={{ backgroundColor: color }}
            >
              <Image
                src={coverImage}
                alt={title}
                width={100}
                height={100}
                className="h-auto w-full object-contain"
              />
            </div>
            <Link
              href={website ? website : "#"}
              target="_blank"
              className="absolute overflow-hidden right-12 top-12 max-h-[40px] max-w-[40px] rotate-6 rounded-full border-3 border-black shadow-3d-small transition-all duration-300 hover:shadow-3d hover:-translate-y-1"
            >
              <Image
                src={logo}
                alt={title}
                width={100}
                height={100}
                className="h-auto w-full object-contain"
              />
            </Link>
          </div>
          <div className="relative mt-8 flex w-full flex-col-reverse gap-8 lg:flex-row">
            <div>
              <h2 className="text-2xl font-bold lg:text-4xl">Overview</h2>
              <p className="mt-4 text-themes-txt_secondary md:text-lg lg:text-xl">
                {description}
              </p>
              <h2 className="mt-8 text-2xl font-bold lg:text-4xl">
                Motivation
              </h2>
              <p className="mt-4 text-themes-txt_secondary md:text-lg lg:text-xl">
                {motivation}
              </p>
              {images && (
                <>
                  <h2 className="mt-8 text-2xl font-bold lg:text-4xl">
                    Images
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="w-full overflow-hidden hover:-translate-y-1 rounded-xl border-2 border-black shadow-3d-small transition-all duration-300 hover:shadow-3d"
                      >
                        <Image
                          src={image}
                          alt={title}
                          width={100}
                          height={100}
                          className="h-auto w-full object-contain"
                          unoptimized={true}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="top-40 mx-auto mt-8 w-full rounded-xl border-3 border-black px-4 py-8 font-montserrat shadow-3d lg:sticky lg:h-fit lg:min-w-[420px]">
              <p className="text-2xl font-semibold">Information</p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="gap-4">
                  <p className="text-xl font-bold">‣ Type</p>
                  <p className="ml-2 font-semibold text-themes-txt_secondary">
                    / {type}
                  </p>
                </div>
                {technologies && (
                  <div className="gap-4">
                    <p className="text-xl font-bold">‣ Technologies</p>
                    <p className="ml-2 font-semibold text-themes-txt_secondary">
                      / {technologies.join(", ")}
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-8 flex w-full items-center gap-4 text-sm font-semibold md:flex-wrap">
                {github && (
                  <Link
                    className="flex items-center gap-2 rounded-xl py-2 px-8 transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-main"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <FaGithub />
                  </Link>
                )}
                {website && (
                  <Link
                    className="flex items-center gap-2 rounded-xl bg-themes-txt_primary py-2 px-8 text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent"
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit <FaGlobe />
                  </Link>
                )}
              </div>
            </div>
          </div>
          {(previousProject || nextProject) && (
            <div className="mt-16">
              <h2 className="text-center text-2xl font-bold lg:text-4xl">
                Next Project
              </h2>
              <p className="mt-2 text-center text-themes-txt_secondary">
                Explore more from the portfolio
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {previousProject && (
                  <Link
                    href={`/projects/${previousProject.slug}`}
                    className="group flex w-full items-center gap-4 rounded-xl border-3 border-black p-4 shadow-3d-small transition-all duration-300 hover:-translate-y-1 hover:shadow-3d"
                  >
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-black"
                      style={{ backgroundColor: previousProject.color }}
                    >
                      <Image
                        src={previousProject.coverImage}
                        alt={previousProject.title}
                        width={80}
                        height={80}
                        className="h-auto w-14 object-contain transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-themes-txt_secondary">
                        Previous Project
                      </p>
                      <p className="text-xl font-bold">
                        {previousProject.title}
                      </p>
                    </div>
                  </Link>
                )}
                {nextProject && (
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="group flex w-full items-center gap-4 rounded-xl border-3 border-black p-4 shadow-3d-small transition-all duration-300 hover:-translate-y-1 hover:shadow-3d"
                  >
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-black"
                      style={{ backgroundColor: nextProject.color }}
                    >
                      <Image
                        src={nextProject.coverImage}
                        alt={nextProject.title}
                        width={80}
                        height={80}
                        className="h-auto w-14 object-contain transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-themes-txt_secondary">
                        Next Project
                      </p>
                      <p className="text-xl font-bold">
                        {nextProject.title}
                      </p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          )}
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default ProjectsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PROJECTS.filter((project) => project.feature).map((project) => {
    return {
      params: {
        projectSlug: project.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ project: Project }> = async (
  context
) => {
  const { projectSlug } = context.params!;

  const project = PROJECTS.find(
    (proj) => proj.slug === projectSlug && proj.feature
  );

  if (!project) {
    return {
      redirect: {
        destination: "/projects",
        permanent: false,
      },
    };
  }

  return {
    props: { project },
  };
};
