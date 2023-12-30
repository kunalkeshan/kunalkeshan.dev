/**
 * Public Footer Component
 */

// Dependencies
import React, { useEffect, useRef, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { IMAGE_SOURCE } from "../../config";
import SOCIALS from "../../data/socials";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const router = useRouter();
  const PAGE_LINKS = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Resume",
      url: "/resume",
    },
    {
      name: "Certifications",
      url: "/certifications",
    },
    {
      name: "Links",
      url: "/links",
    },
    {
      name: "Feed",
      url: "/feed",
    },
    {
      name: "Tributes",
      url: "/tributes",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "FAQs",
      url: "/contact#faqs",
    },
    {
      name: "School",
      url: "/school",
    },
    {
      name: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      url: "/terms-and-conditions",
    },
    // {
    //   name: "Refund Policy",
    //   url: "/refund-policy",
    // },
    // {
    //   name: "Shipping & Deliver",
    //   url: "https://merchant.razorpay.com/policy/M8pulBCJSqi7c4/shipping",
    // },
  ];

  const INTERNAL_UTILITY_LINKS = [
    {
      name: "Admin",
      url: "/admin",
    },
  ];

  const EXTERNAL_UTILITY_LINKS = [
    {
      name: "Open-Source Repo",
      url: "https://github.com/kunalkeshan/kunalkeshan.dev",
    },
    {
      name: "API Repo",
      url: "https://github.com/kunalkeshan/api.kunalkeshan.dev",
    },
    {
      name: "Blog",
      url: "https://blog.kunalkeshan.dev/",
    },
  ];

  const RickRollAudio = useRef(
    typeof window !== "undefined" && typeof Audio !== "undefined"
      ? new Audio(
          "https://res.cloudinary.com/kunalkeshan/video/upload/v1676638777/Portfolio/Audio/Rick_Astley_-_Never_Gonna_Give_You_Up_uyabg0.mp3"
        )
      : null
  );

  const toggleRickRollPlay = useCallback(() => {
    if (RickRollAudio?.current?.paused) {
      RickRollAudio?.current?.play();
    } else {
      RickRollAudio?.current?.pause();
      // @ts-ignore
    }
  }, [RickRollAudio]);

  useEffect(() => {
    const currentAduio = RickRollAudio?.current;
    router.events.on("routeChangeComplete", () => {
      currentAduio!.pause();
      currentAduio!.currentTime = 0;
      setCurrentTime(0);
    });
    RickRollAudio?.current?.addEventListener("timeupdate", (e) =>
      setCurrentTime(Math.round(e.timeStamp / 800))
    );
    return () => {
      router.events.off("routeChangeComplete", () => {});
      currentAduio?.removeEventListener("timeupdate", () => {});
    };
  }, [router.events]);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
      viewport={{ once: true }}
      className="z-20 mt-auto w-full bg-themes-txt_primary py-9 px-5 font-montserrat text-themes-bg_primary"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href={"/"}
            className="flex items-center gap-4 text-2xl font-semibold transition-all duration-300 hover:scale-90"
          >
            <Image
              src={IMAGE_SOURCE.ART_IMAGE}
              alt={"[]~(￣▽￣)~*"}
              width={100}
              height={100}
              className="h-10 w-10 rounded-full border-2 border-black"
            />
            Kunal Keshan
          </Link>
          <p className="mt-2 font-semibold">
            Writer 🖊. Creator 🚀. Developer 💻. On a spree of creative
            exploration.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {SOCIALS.map((social, index) => (
              <Link
                key={index}
                title={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-themes-bg_primary p-2 text-xl text-themes-txt_primary shadow-3d-small-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-portfolio-accent"
              >
                <social.Icon />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold">Pages</p>
          <ul className="mt-8 grid grid-cols-2">
            {PAGE_LINKS.map((link, index) => (
              <li
                key={index}
                className="mt-4 w-fit font-semibold transition-all duration-300 hover:translate-x-1 hover:text-portfolio-accent"
              >
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold">Utility links</p>
          <ul className="mt-8">
            {INTERNAL_UTILITY_LINKS.map((link, index) => (
              <li
                key={index}
                className="mt-4 w-fit font-semibold transition-all duration-300 hover:translate-x-1 hover:text-portfolio-accent"
              >
                <Link href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </Link>
              </li>
            ))}
            <hr className="mt-4 max-w-[120px]" />
            {EXTERNAL_UTILITY_LINKS.map((link, index) => (
              <li
                key={index}
                className="mt-4 w-fit font-semibold transition-all duration-300 hover:translate-x-1 hover:text-portfolio-accent"
              >
                <Link href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </Link>
              </li>
            ))}
            <li
              onClick={toggleRickRollPlay}
              className="mt-4 w-fit cursor-pointer font-semibold transition-all duration-300 hover:translate-x-1 hover:text-portfolio-accent"
              suppressHydrationWarning
            >
              {RickRollAudio.current?.paused
                ? "~(˘▽˘)~"
                : currentTime % 2
                ? "↜(˘▽˘)↦"
                : "↤(˘▽˘)↝"}
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold">Contact me</p>
          <Link
            href="mailto:hey@kunalkeshan.dev"
            className="group mt-8 flex items-center gap-2 text-lg font-semibold transition-all duration-300 hover:text-portfolio-main"
          >
            <span className="rounded-full bg-white p-2 text-xl text-black transition-all duration-300 group-hover:text-portfolio-main">
              <FaEnvelope />
            </span>{" "}
            hey@kunalkeshan.dev
          </Link>
          {/* <Link
            href="https://goo.gl/maps/KuyuYdWZikyja5xv8"
            className="group mt-8 flex gap-2 text-sm font-semibold transition-all duration-300 hover:text-portfolio-main"
          >
            <span className="rounded-full bg-white h-fit p-2 text-xl text-black transition-all duration-300 group-hover:text-portfolio-main">
              <FaMap />
            </span>{" "}
            1195A, Sundar Clinic, Nehru Street, Bangalore, Bengaluru - Chennai
            Hwy, Pappanchathiram, Chennai, Tamil Nadu - 600123.
          </Link> */}
        </div>
      </div>
      <hr className="mx-10 my-10 border border-t-themes-txt_secondary bg-themes-txt_secondary md:mx-40" />
      <p className="mx-auto max-w-7xl text-center font-semibold">
        Copyright &copy; Kunal Keshan - 2023 | Inspired by{" "}
        <Link
          href={"https://paperfolio.webflow.io/"}
          target="_blank"
          className="uppercase underline underline-offset-2 transition-all duration-300 hover:text-portfolio-accent"
        >
          Paperfolio
        </Link>{" "}
        | Open-Source on{" "}
        <Link
          href={"https://github.com/kunalkeshan/kunalkeshan.dev/"}
          target="_blank"
          className="uppercase underline underline-offset-2 transition-all duration-300 hover:text-portfolio-accent"
        >
          GitHub
        </Link>{" "}
        | Powered by{" "}
        <Link
          href={"https://nextjs.org/"}
          target="_blank"
          className="uppercase underline underline-offset-2 transition-all duration-300 hover:text-portfolio-accent"
        >
          Next.js
        </Link>
      </p>
    </motion.footer>
  );
};

export default Footer;
