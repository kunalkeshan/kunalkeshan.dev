/**
 * Experience Data
 */

export interface Experience {
  company: string;
  position: string;
  description: string;
  logo: string;
  website: string;
  date: {
    start: string;
    end: string;
  };
}

/**
 * Note: Using the Keyword - "Present" in the date.end
 * will show the experience in your landing page
 */

type Experiences = Experience[];

// Experience Container
const EXPERIENCE: Experiences = [
  {
    company: "Codelance Devs",
    position: "Co-founder",
    description:
      "Transforming businesses through the power of the web. Leading a team of passionate developers and creators to help other businesses and individuals sustain in the digital world.",
    website: "https://codelancedevs.com",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675427501/Portfolio/experience/codelance_devs_logo_katy7w.png",
    date: {
      start: "Jan 2022",
      end: "Present",
    },
  },
  {
    company: "IEEE SRM SB",
    position: "Chairperson, Computer Society",
    description:
      "Conducted events, trained members in various aspects of computer science (basics, Web and App development, AI/ML, & blockchain). Managed in-house and external projects.",
    website: "https://www.ieeesrmist.in/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675429201/Portfolio/experience/IEEElogo_fa3bhb.png",
    date: {
      start: "Oct 2021",
      end: "Sept 2023",
    },
  },
  {
    company: "Think-Digital",
    position: "Team Lead",
    description:
      "Created an X'perience beyond learning. Was responsible for managing leads of other domains and helping reduce the gap between students and the industry skills needed.",
    website: "https://think-digital.in/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675428847/Portfolio/experience/think_digital_logo_txo2sk.png",
    date: {
      start: "Feb 2021",
      end: "March 2023",
    },
  },
  {
    company: "Blackwins Tech Solutions",
    position: "Frontend Developer, Intern",
    description:
      "Developed a SaaS product from scratch with React.js, Material UI, and optimized the web application to save server resources and reduce bandwidth usage on concurrent logins.",
    website: "https://blackwinstech.com/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675427835/Portfolio/experience/blackwins_tech_solutions_o9ysff.ico",
    date: {
      start: "May 2022",
      end: "July 2022",
    },
  },
  {
    company: "SRM Institute of Science & Technology",
    position: "B.Tech Electronics & Communications Engineering",
    description:
      "Gained comprehensive knowledge of electronic devices and circuits, digital signal processing, communication systems, and electromagnetic theory.",
    website: "https://srmist.edu.in/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1676359360/Portfolio/experience/srmist_n5dnqj.png",
    date: {
      start: "September 2020",
      end: "July 2024 (Tentative)",
    },
  },
];

export default EXPERIENCE;
