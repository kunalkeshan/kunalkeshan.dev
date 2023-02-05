/**
 * Portfolio Socials
 */

import { ReactComponentElement } from "react";

// Dependencies
import { IconType } from "react-icons/lib";
import {
  FaGithub,
  FaBlog,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

interface Social {
  name: string;
  url: string;
  Icon: IconType;
}

// Social Container
const SOCIALS: Social[] = [
  { name: "blog", url: "https://blog.kunalkeshan.dev", Icon: FaBlog },
  {
    name: "instagram",
    url: "https://instagram.com/kunalkeshan",
    Icon: FaInstagram,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/kunalkeshan",
    Icon: FaLinkedin,
  },
  { name: "github", url: "https://github.com/kunalkeshan", Icon: FaGithub },
  {
    name: "twitter",
    url: "https://twitter.com/_kunalkeshan_",
    Icon: FaTwitter,
  },
  { name: "youtube", url: "https://youtube.com/@kunalkeshan", Icon: FaYoutube },
  { name: "email", url: "hey@kunalkeshan.dev", Icon: FaEnvelope },
];

export default SOCIALS;
