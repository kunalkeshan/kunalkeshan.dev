/**
 * Projects Data
 */

interface Project {
  type:
    | "web development"
    | "ui/ux"
    | "video"
    | "photoshop"
    | "template"
    | "no-code";
  title: string;
  description: string;
  github?: string;
  website?: string;
  logo?: string;
  coverImage: string;
  color: string;
  // images: string[];
}

// Projects Container
const PROJECTS: Project[] = [
  {
    type: "web development",
    title: "Shiryoku (Resources)",
    description:
      "Shiryoku (Resources) is an initiative to reduce the resistance between students and the resources that they require to up-skill themselves.",
    github: "https://github.com/kunalkeshan/Shiryoku",
    website: "https://resources.kunalkeshan.dev",
    logo: "https://raw.githubusercontent.com/kunalkeshan/Shiryoku/main/public/android-chrome-512x512.png",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675360105/Portfolio/projects/operating_system_re_iqsc_knzx8u.svg",
    color: "#1976D2",
  },
  {
    type: "web development",
    title: "ECE Notes Initiative",
    description:
      "Collection of all notes of SRMIST B.Tech Electronics and Communications Dept. for the academic year: 2020-24. Visit the Repository or Drive to access all notes, additional resources for studying and how to study each subject.",
    github: "https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24",
    website: "https://notes.kunalkeshan.dev",
    logo: "https://raw.githubusercontent.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/client/public/logo1080.png",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675360107/Portfolio/projects/bookshelves_re_lxoy_f0ds3d.svg",
    color: "#FDCA40",
  },
];

export default PROJECTS;
