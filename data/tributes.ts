/**
 * Tributes Data
 */

export interface Tribute {
  name: string;
  website: string;
  image: string;
  company: {
    name: string;
    description: string;
    position: string;
    website: string;
    logo: string;
  };
  testimonial?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
  };
  feature?: boolean;
  slug?: string;
  intro?: string;
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
      twitter: "https://twitter.com/kumarrohan9724",
      instagram: "https://www.instagram.com/kumarrohan9724/",
      youtube: "",
    },
    company: {
      name: "Rentyaar",
      description: "",
      position: "Founder",
      website: "https://rentyaar.com",
      logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675447141/Portfolio/experience/RENT_YAAR_4_mbi5ek.png",
    },
    feature: true,
    slug: "rohan-kumar",
    intro:
      "Rohan Kumar, a natural leader, charming person, and visionary entrepreneur. Founder of Rentyaar and The Starterseed, changing students' lives for the better.",
  },
  {
    name: "GS Thina",
    website: "https://gsthina.me",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675464441/Portfolio/tributes/gs_thina_n80sqg.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/gsthina/",
      twitter: "https://twitter.com/gsthina_me",
      instagram: "https://www.instagram.com/gsthina.mentor/",
      youtube: "https://www.youtube.com/@gsthina",
    },
    company: {
      name: "Think-Digital",
      description: "",
      position: "Founder",
      website: "https://think-digital.com",
      logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675428847/Portfolio/experience/think_digital_logo_txo2sk.png",
    },
    feature: true,
    slug: "gsthina",
    intro:
      "GS Thina, the mentor who empowers college students with skills and industry exposure to reach their full potential 🚀",
  },
  {
    name: "Raman Shekhawat",
    website: "https://www.linkedin.com/in/raman-shekhawat-1013381ba/",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1675741966/Portfolio/tributes/Raman_Shekhawat_yzqbis.jpg",
    testimonial:
      "Having started college life with a friend like Kunal Keshan makes me the perfect person to help you understand him. He is one of the most valuable assets in the developer community. With a dash of hard work and creativity, this fellow has crossed all limits of productivity. Not only will he help you develop your product with perfection, but also with efforts beyond your expectations. Talking about his teamwork, Kunal has an ear for every voice. He is a good listener and believes in empathy. All in all, he is a perfect package you would not want to miss out on while building your team.",
    company: {
      name: "Think-Digital",
      description: "",
      position: "Web Developer",
      website: "https://think-digital.com",
      logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675428847/Portfolio/experience/think_digital_logo_txo2sk.png",
    },
    slug: "raman-shekhawat",
  },
];

export default TRIBUTES;
