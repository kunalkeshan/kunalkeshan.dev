/**
 * Landing Page - Services Section
 */

import React from "react";
import { motion } from "framer-motion";
import SERVICES from "../../data/services";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="mx-auto mt-20 min-h-screen max-w-7xl lg:mt-0"
      id="services"
    >
      <h2 className="text-center text-5xl font-semibold">
        My varied{" "}
        <span className="bg-portfolio-main px-1">selection of services</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center font-[Montserrat] font-semibold text-themes-txt_secondary md:text-lg">
        Offering versatile solutions in web development, design, no-code, video
        and photo editing, to bring your ideas to life
      </p>
      <div className="mx-auto mt-8 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <Link
            href="/#"
            key={index}
            className="group min-h-[460px] w-full overflow-hidden rounded-xl border-2 border-black transition-all duration-300 hover:-translate-y-2 hover:shadow-3d"
          >
            <div className="flex min-h-[240px] w-full items-center justify-center bg-themes-bg_secondary">
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
                className="h-auto w-full max-w-[140px] object-contain drop-shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:drop-shadow-2xl"
              />
            </div>
            <div className="p-8 font-[Montserrat]">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-justify text-sm">{service.description}</p>
            </div>
          </Link>
        ))}
        <div className="flex min-h-[460px] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border-2 border-black bg-portfolio-accent p-8 font-[Montserrat] shadow-3d">
          <Image
            src={
              "https://res.cloudinary.com/kunalkeshan/image/upload/v1675323035/Portfolio/services/mailbox_fa5ver.svg"
            }
            alt={"Contact"}
            width={100}
            height={100}
            className="h-auto w-full max-w-[140px] object-contain drop-shadow-lg"
          />
          <p className="text-2xl font-semibold">Get in touch</p>
          <p className="font-semibold text-themes-txt_secondary">
            Looking for another service? Get in touch with me, there is a high
            chance that I will be able to help!
          </p>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-themes-txt_primary py-6 text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-main">
            <FaEnvelope /> Get in touch
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
