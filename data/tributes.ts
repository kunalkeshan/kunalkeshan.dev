/**
 * Tributes Data
 */

interface Tribute {
  name: string;
  website: string;
  image: string;
  testimonial?: string;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
  company: {
    name: string;
    description: string;
    position: string;
    website: string;
    logo: string;
  };
}

// Tributes Container
const TRIBUTES: Tribute[] = [
  {
    name: "Rohan Kumar",
    website: "https://www.linkedin.com/in/kumarrohan9724/",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675461702/Portfolio/tributes/rohan_kumar_mt6s50.jpg",
    testimonial:
      "Kunal is an innovative and strategic thinker, constantly seeking new and creative solutions to the challenges faced. He has a keen understanding of the market and a strong sense of what it takes to build a successful product. He was able to build a strong and effective team, and his leadership skills inspired and motivated everyone to perform at their best.\n Kunal is a hard worker and always goes the extra mile to ensure that his work is of the highest quality. His commitment to excellence was evident in every project he tackled, and he was always eager to share his knowledge and expertise with others.",
    socials: {
      linkedin: "https://www.linkedin.com/in/kumarrohan9724/",
      twitter: "",
      instagram: "",
      youtube: "",
    },
    company: {
      name: "Rentyaar",
      description: "",
      position: "Founder",
      website: "https://rentyaar.com",
      logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675447141/Portfolio/experience/RENT_YAAR_4_mbi5ek.png",
    },
  },
  {
    name: "GS Thina",
    website: "https://www.linkedin.com/in/gsthina/",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675464441/Portfolio/tributes/gs_thina_n80sqg.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/gsthina/",
      twitter: "",
      instagram: "",
      youtube: "",
    },
    company: {
      name: "Think-Digital",
      description: "",
      position: "Founder",
      website: "https://think-digital.com",
      logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675428847/Portfolio/experience/think_digital_logo_txo2sk.png",
    },
  },
];

export default TRIBUTES;
