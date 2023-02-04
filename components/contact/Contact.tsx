import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import SOCIALS from "../../data/socials";

const Contact = () => {
  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-4">
      <div className="flex w-full flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left">
        <h2 className="text-5xl font-semibold">
          <span className="bg-portfolio-accent px-1 leading-tight">
            Contact
          </span>{" "}
          me
        </h2>
        <p className="mt-4 font-[Montserrat] font-semibold">
          Feel free to connect with me through email, my socials or simply drop
          me a message and I&apos;ll get back to you soon.
        </p>
        <div className="mt-8 w-fit rounded-xl border-2 border-black bg-white py-6 px-12">
          <Link
            href="mailto:hey@kunalkeshan.dev"
            className="group flex items-center gap-2 font-[Montserrat] text-lg font-semibold transition-all duration-300 hover:text-portfolio-main"
          >
            <span className="rounded-full bg-white py-2 pr-2 text-xl text-black transition-all duration-300 group-hover:text-portfolio-main">
              <FaEnvelope />
            </span>{" "}
            hey@kunalkeshan.dev
          </Link>
        </div>
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
          {SOCIALS.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              title={social.name}
              className="flex items-center justify-center rounded-full bg-themes-txt_secondary p-2 text-xl text-themes-bg_primary shadow-3d-small transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-portfolio-accent hover:shadow-3d"
            >
              <social.Icon />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center font-[Montserrat]">
        <form className="flex w-full max-w-lg flex-col gap-8 rounded-xl border-2 border-black p-8 font-semibold shadow-3d">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className=" font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 w-full rounded-xl border-2  border-black p-4 outline-none transition-all duration-300 hover:shadow-3d focus:shadow-3d"
                placeholder="Jonathan Joestar"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 w-full rounded-xl border-2 border-black p-4 outline-none transition-all duration-300 hover:shadow-3d focus:shadow-3d"
                placeholder="j.joestar@gmail.com"
                required
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="Phone" className="font-bold">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+91 9876543210"
                className="mt-2 w-full rounded-xl border-2  border-black p-4 outline-none transition-all duration-300 hover:shadow-3d focus:shadow-3d"
              />
            </div>
            <div>
              <label htmlFor="subject" className="font-bold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Select"
                className="mt-2 w-full rounded-xl border-2 border-black p-4 outline-none transition-all duration-300 hover:shadow-3d focus:shadow-3d"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="message"
              className="font-bold text-themes-txt_secondary"
            >
              Message
            </label>
            <textarea
              id="message"
              className="mt-2 w-full rounded-xl border-2 border-black p-4 outline-none transition-all duration-300 hover:shadow-3d focus:shadow-3d"
              required
              placeholder="Got any message for me?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-xl bg-themes-txt_primary px-8 py-4 text-lg text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent md:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
