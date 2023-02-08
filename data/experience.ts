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

// Experience Container
const EXPERIENCE: Experience[] = [
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
    company: "Rentyaar",
    position: "Chief Product Officer",
    description:
      "Building Rentyaar with a team of talented web and UI developers with the aim to make an optimized and efficient product that's scalable and easy to use.",
    website: "https://rentyaar.com/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675447141/Portfolio/experience/RENT_YAAR_4_mbi5ek.png",
    date: {
      start: "Jan 2023",
      end: "Present",
    },
  },
  {
    company: "Think-Digital",
    position: "Admin",
    description:
      "Creating an X'perience beyond learning. Responsible for managing leads of other domains and helping reduce the gap between students and the industry skills needed.",
    website: "https://think-digital.in/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675428847/Portfolio/experience/think_digital_logo_txo2sk.png",
    date: {
      start: "Feb 2021",
      end: "Present",
    },
  },
  {
    company: "IEEE SRM SB",
    position: "Chairperson (acting), Computer Society",
    description:
      "Conducting events, training members in various aspects of computer science (basics, Web and App development, AI/Ml, & blockchain). Managing in-house and external projects.",
    website: "https://www.ieeesrmist.in/",
    logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675429201/Portfolio/experience/IEEElogo_fa3bhb.png",
    date: {
      start: "Oct 2021",
      end: "Present",
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
];

export default EXPERIENCE;
