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
  feature?: boolean; // Whether the project will have it's own page or not
  slug?: string;
  technologies?: string[];
  motivation?: string;
  images?: string[];
}

/**
 * If you want to feature a project in it's own page
 * then it's mandatory to put data for the following fields
    github?: string;
    website?: string;
    feature?: boolean;
    slug?: string;
    technologies?: string[];
    motivation?: string;
    images?: string[];
 */

type Projects = Project[];

// Projects Container
const PROJECTS: Projects = [
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
    title: "Social Sphere",
    description:
      "Web app that allows users to create their own personal page to share their social media links and other personalized links. Built using MERN Stack.",
    github: "https://github.com/kunalkeshan/Social-Sphere",
    website: "https://social-sphere-jet.vercel.app/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1697082697/Portfolio/art-pic-kunal-keshan_square.jpg",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1697083915/Portfolio/projects/undraw_social_growth_re_tjy9_pt1wib.svg",
    color: "#80808040",
    feature: false,
    slug: "social-sphere",
  },
  {
    type: "web development",
    title: "Token Tribe",
    description:
      'Token Tribe is a cutting-edge web3-based communities app designed for social media communities. With this app, community heads can create their own communities on our website and users can make decisions about the content and activities within these communities by voting using a token called "CommuniCoin."',
    github: "https://github.com/kunalkeshan/Token-Tribe",
    website: "https://tokentribe.vercel.app/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1697082697/Portfolio/art-pic-kunal-keshan_square.jpg",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1697083062/Portfolio/projects/undraw_community_re_cyrm_fhvobz.svg",
    color: "#80808040",
    feature: false,
    slug: "token-tribe",
  },
  {
    type: "web development",
    title: "Altruize",
    description:
      "A web3-based NGO donations app has several advantages over a web2-based app. Web3 technology, which is built on blockchain, enables secure and transparent transactions, with no need for intermediaries like banks or payment processors. This means that donors can have complete control over their donations, without worrying about fraud or misuse of funds.",
    github: "https://github.com/kunalkeshan/Altruize",
    website: "https://altruize.vercel.app/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1697082697/Portfolio/art-pic-kunal-keshan_square.jpg",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1697082596/Portfolio/projects/undraw_showing_support_re_5f2v_pibzp7.svg",
    color: "#536DFE40",
    feature: false,
    slug: "altruize",
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
    color: "#1A688580",
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
    color: "#FF39FF40",
    feature: false,
    slug: "bcd-web-ui",
  },
  {
    type: "video",
    title: "Keeping it - Sou",
    description:
      "Created captivating lyric video using DaVinci Resolve and After Effects, adding visual depth to music through seamless transitions and animated text.",
    website: "https://youtu.be/WAHlfYMGgFo?si=W7Pl9GOk9yLOrzlP",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1697082243/Portfolio/projects/sou-logo.jpg",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1697082143/Portfolio/projects/undraw_music_re_a2jk_tvqbt4.svg",
    color: "#00B0FF40",
    feature: false,
    slug: "keeping-it-sou",
  },
  {
    type: "web development",
    title: "Spotify Vanilla Clone",
    description:
      "Designed and built a Spotify Vanilla Clone in HTML, CSS, and JavaScript, instructing workshop attendees in web development, audio streaming, and UI/UX principles.",
    github: "https://github.com/kunalkeshan/spotify-vanilla-clone",
    website: "https://spotify-vanilla-clone.netlify.app/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1697082697/Portfolio/art-pic-kunal-keshan_square.jpg",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1697083224/Portfolio/projects/undraw_mello_otq1_nf7vay.svg",
    color: "#1DB95440",
    feature: false,
    slug: "spotify-vanilla-clone",
  },
];

export default PROJECTS;
