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
  coverImage?: string;
  connected?: number; // When you met the person (in milliseconds UTC)
  testimonial?: string; // What testimonial that person has given to you
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
  };
  feature?: boolean; // Whether that person will have their own page or not
  slug?: string;
  intro?: string;
  tributes?: string[];
  lessonsLearnt?: string[];
}

type Tributes = Tribute[];

/**
 * If you want to feature a person whom you want to tribute to
 * as their own page, them make sure the following properties are set
    coverImage?: string;
    connected?: number;
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
    tributes?: string[];
    lessonsLearnt?: string[];
 */

// Tributes Container
const TRIBUTES: Tributes = [
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
    connected: 1610217000000,
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676203370/Portfolio/tributes/rohan-kumar/rohan-kumar_ve7ywe.svg",
    tributes: [
      "Rohan is one of the most unparalleled individuals I've ever met. He communicates well and is open about his views and beliefs. His insights are extremely beneficial since they nearly always provide quick outcomes.",
      "He's a great leader, a charming person, and a natural entrepreneur. Rohan is a good buddy who is a fantastic listener and can always assist you when you are in need.",
      "Rohan and I have been friends from 1st Year of college, we've been part of Think-Digital learning together and conducting events as well. What made us bond over the years was our mutual interest to learn and grow and build out our ideas.",
      "He's an amazing cheerleader and everything he says, he says for your best. (Even if it might hurt). I'm happy to have Rohan as a friend.",
    ],
    lessonsLearnt: [
      "Don't limit yourself to just one solution. Always think of alternate approaches you can take.",
      "If you can't do it alone, don't hesitate to ask someone who can do it better than you.",
      "Even if you don't have the advantage, use what you have to the fullest extent.",
    ],
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
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676201267/Portfolio/tributes/gsthina/gsthina_tghqea.svg",
    connected: 1610217000000,
    tributes: [
      "Thina bhaiya is a fantastic mentor and a wonderful friend. His advice and mentoring have been invaluable not just as a Think-Digital member but also as an individual. His clear vision and passion for assisting others and guiding students by giving mentoring and opportunities are very inspiring.",
      "He mentored me when I began attending college and continues to do so in by helping me learn more about who I am, how I can build on my talents and work on my shortcomings, and navigating what my vision and values in life are.",
      "Without his initiatives at Think-Digital, I can openly tell than I would have taken 10X times more to learn and excel than at the stage in which I am today. And for this I'll always be grateful to Thina bhaiya.",
    ],
    lessonsLearnt: [
      "Even if it feels scary just do it. Don't overthink it, and just get started.",
      "Whatever it might be, communicating it is the best solution to solve what you might be going through.",
      "Leadership is truly appreciated when you're able to turn those who you work with as leaders themselves.",
      "When the going get's rough, it's your ability to hold on that will determine how successful you will be.",
    ],
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
  {
    name: "Yakub Mathew",
    website: "https://www.linkedin.com/in/yakub-mathew-7169621b6/",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676359192/Portfolio/tributes/yakub-mathew_undfqz.jpg",
    testimonial:
      "Despite being somewhat lazy and ignoring many people, my friend has a unique passion for web development that consumes him. He devotes long hours to coding, designing websites, and creating unique user interfaces. It's fascinating to see how his love for this field motivates him to overcome his laziness and concentrate on producing something truly remarkable. Despite his tendency to distance himself from others, his dedication to web development is genuinely inspiring.",
    company: {
      name: "SRMIST",
      description: "",
      position: "Student",
      website: "https://srmist.edu.in",
      logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1676359360/Portfolio/experience/srmist_n5dnqj.png",
    },
    slug: "yakub-mathew",
  },
];

export default TRIBUTES;
