/**
 * Index Page - Services Section
 */

import React from "react";
import { motion } from "framer-motion";
import SERVICES, { Services } from "../../data/services";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import MemeTooltip from "../reusable/MemeTooltip";

const ServiceCard: React.FC<Services> = ({ image, title, description }) => {
  return (
    <div className="group min-h-[460px] w-full overflow-hidden rounded-xl border-3 border-black transition-all duration-300 hover:-translate-y-2 hover:shadow-3d">
      <div className="flex min-h-[240px] w-full items-center justify-center bg-themes-bg_secondary">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="h-auto w-full max-w-[140px] object-contain drop-shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:drop-shadow-2xl"
        />
      </div>
      <div className="p-8 font-montserrat">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-4 text-justify text-sm">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
      viewport={{ once: true }}
      className="mx-auto mt-20 min-h-screen max-w-7xl scroll-mt-20 px-5 lg:mt-0"
      id="services"
    >
      <h2 className="group relative min-h-fit text-center text-5xl font-semibold">
        Modern problems, require{" "}
        <span className="bg-portfolio-main px-1 leading-tight">
          modern services
        </span>
        <MemeTooltip
          image={
            "https://res.cloudinary.com/kunalkeshan/image/upload/v1675358191/Portfolio/memes/Modern_Problems_Require_Modern_Solutions_oxftic.jpg"
          }
        />
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center font-montserrat font-semibold text-themes-txt_secondary md:text-lg">
        Offering versatile solutions in web development, design, no-code, video
        and photo editing, to bring your ideas to life
      </p>
      <div className="mx-auto mt-8 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
        <div className="flex min-h-[460px] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border-3 border-black bg-portfolio-accent p-8 font-montserrat shadow-3d">
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
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-themes-txt_primary py-6 text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-main"
          >
            <FaEnvelope /> Get in touch
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
