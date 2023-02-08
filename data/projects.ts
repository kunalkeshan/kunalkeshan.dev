/**
 * Projects Data
 */

export interface Project {
  type:
    | "web development"
    | "ui/ux"
    | "video"
    | "photoshop"
    | "template"
    | "no-code";
  title: string;
  description: string;
  logo: string;
  coverImage: string;
  color: string;
  github?: string;
  website?: string;
  feature?: boolean;
  slug?: string;
  technologies?: string[];
  motivation?: string;
  images?: string[];
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
    feature: true,
    slug: "shiryoku",
    technologies: ["TypeScript", "React.js", "Material UI"],
    motivation:
      'I founded Shiryoku with the goal of reducing the barrier between students and the resources they need to up-skill themselves. During my third year of college, I was inspired by the philosophy "be the senior you needed the most as a junior." With Shiryoku, I aim to provide students with access to the best resources based on their individual needs, and to guide them with a roadmap for a structured approach to maximize the resources. This initiative is my way of giving back and helping the next generation of students achieve their goals.',
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591454/Portfolio/projects/shiryoku/shiryoku1_y0ogso.png",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591452/Portfolio/projects/shiryoku/shiryoku2_iu7dxc.png",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591454/Portfolio/projects/shiryoku/shiryoku3_u5caoj.png",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591455/Portfolio/projects/shiryoku/shiryoku4_sudyel.png",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591455/Portfolio/projects/shiryoku/shiryoku5_nvgx6k.png",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591452/Portfolio/projects/shiryoku/shiryoku6_ccjfav.png",
    ],
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
    feature: true,
    slug: "ece-notes-initiative",
    technologies: ["JavaScript", "React.js", "Material UI"],
    motivation:
      'As a student who took all my classes online, I struggled with finding relevant readings and organizing my time effectively. I felt isolated without the opportunity to interact with upperclassmen and receive guidance on how to effectively use the materials I was given. Inspired by the idea of "being the senior I needed the most as a junior", I created this repository to provide support for anyone who needs access to relevant study materials. This project is my way of making a difference and helping others succeed, just as I wish I had a senior to guide me during my online studies.',
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591606/Portfolio/projects/ece-notes-initiative/notes1_rexety.png",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591607/Portfolio/projects/ece-notes-initiative/notes2_bbwq1e.png",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591607/Portfolio/projects/ece-notes-initiative/notes3_vtznwu.png",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591608/Portfolio/projects/ece-notes-initiative/notes4_lqg2pm.png",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675591607/Portfolio/projects/ece-notes-initiative/notes5_xu0r6v.png",
    ],
  },
  {
    type: "web development",
    title: "Atom",
    description:
      "Atom is a platform enabling the Think-Digital community to share information and resources, keep tabs on happenings, and streamline their processes through automation tools.",
    github: "https://github.com/td-locus/Atom",
    website: "https://atom.think-digital.in/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675428847/Portfolio/experience/think_digital_logo_txo2sk.png",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675499797/Portfolio/projects/group_chat_re_frmo_zazi34.svg",
    color: "#1A6885",
    feature: false,
    slug: "td-atom",
  },
  {
    type: "web development",
    title: "Hardware Web UI",
    description:
      "A graphical user interface (GUI) that is built on the Web and used to communicate with the Breast Cancer Detection Neural Network.",
    github: "https://github.com/kunalkeshan/Hardware-Web-UI",
    website: "https://hardware-webui.netlify.app/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675501377/Portfolio/projects/nexus-logo.29958d16f2b5d7665c64_lvu8ms.png",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675501196/Portfolio/projects/circuit_sdmr_grloza.svg",
    color: "#FF39FF",
    feature: false,
    slug: "bcd-web-ui",
  },
];

export default PROJECTS;
