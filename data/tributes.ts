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
    name: "Mohammad Muazam",
    website: "https://muazam.me",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676408694/Portfolio/tributes/muazam_sspfhc.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohammad-muazam-129838190//",
      twitter: "https://twitter.com/mmuazam98",
      instagram: "https://www.instagram.com/m.muazam.98/",
      github: "https://github.com/mmuazam98",
    },
    company: {
      name: "Think-Digital",
      description: "",
      position: "Mentor",
      website: "https://think-digital.com",
      logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675428847/Portfolio/experience/think_digital_logo_txo2sk.png",
    },
    feature: true,
    slug: "mohammad-muzam",
    intro:
      "Muazam bhaiya's support helped me excel in web development. His critical feedback and logical approach towards work help improve and prioritize things. A great mentor who inspires to achieve what he sets his mind to",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676408595/Portfolio/tributes/mohammad-muzam/muazam_plnpv0.svg",
    connected: 1610217000000,
    tributes: [
      "Without Muazam bhaiyas support I wouldn't be in the position I am today. He's one of the sole reasons why I was able to excel in web development and learn a lot at a faster pace.",
      "His ability to give critical feedback, and able to point out how you can improve your work is really helpful. He's the most logical person I've met who has his priorities clear and always achieves whatever he sets his mind towards. ",
      "I can say that it would have take me a lot more time to learn web development by myself, and with Muazam bhaiyas help, I was able to do it much faster.",
    ],
    lessonsLearnt: [
      "View what you learn and see from more than one perspective, you never know what you might come about and get inspired from.",
      "You build trust only when you deliver what you promise.",
      'Taking the idealogy forward, "Be the senior you need the most as a junior".',
    ],
  },
  {
    name: "Kaushik Kumaran",
    website: "https://www.linkedin.com/in/kaushikkums/",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676406815/Portfolio/tributes/kaushik_kumaran_lwzuj2.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/kaushikkums/",
    },
    company: {
      name: "IEEE SRM SB",
      description: "",
      position: "Webmaster",
      website: "https://ieeesrmist.edu.in",
      logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675429201/Portfolio/experience/IEEElogo_fa3bhb.png",
    },
    feature: true,
    slug: "kaushik-kumaran",
    intro:
      "Kaushik Kumaran, the ultimate mentor, with a pure-hearted and enthusiastic approach, is a natural leader who motivates juniors to learn, take initiatives, and progress. His mentorship and support are unparalleled!",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676406965/Portfolio/tributes/kaushik-kumaran/undraw_surveillance_re_8tkl_sosmhn.svg",
    connected: 1634754600000,
    tributes: [
      "Kaushik bhaiya is the elder brother we all need but don't deserve. That's because he's just that pure-hearted. When I started working with him at IEEE, his guidance and mentorship towards me and all the juniors were unparalleled.",
      "His kind and enthusiastic approach motivated us to learn more on our own and take initiatives outside of development. He's a natural leader, who cares for your progress, will give you challenges to work out and learn on your own and will support you whenever needed.",
      "His public speaking skills and ability to engage with a large crowd always amazes me and inspires me to be like him one day.",
    ],
    lessonsLearnt: [
      "Work is important, but never at the expense of your well being. Learn to prioritize what's important and take time off to avoid burn out.",
      "Learn to have a proactive approach, sometimes you'll have to do the work even if it's not your responsibility.",
      "Give your 100% in whatever you do.",
    ],
  },
  {
    name: "Snehil",
    website: "https://snehil.dev/",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676407876/Portfolio/tributes/snehil_mvrfbl.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/snehilcodes/",
      instagram: "https://www.instagram.com/sneakysensei/",
      youtube: "https://www.youtube.com/channel/UC2S8KvlxBnkwgWZyWDzFggA",
      twitter: "https://twitter.com/snehilcodes",
      github: "https://github.com/sneakysensei",
    },
    company: {
      name: "IEEE SRM SB",
      description: "",
      position: "Secretary (WAD)",
      website: "https://ieeesrmist.edu.in",
      logo: "https://res.cloudinary.com/kunalkeshan/image/upload/v1675429201/Portfolio/experience/IEEElogo_fa3bhb.png",
    },
    feature: true,
    slug: "snehil",
    intro:
      "Snehil bhaiya is the coolest! In every conversation, he imparts something new for you to use in projects. With clear and concise explanations, he makes learning easier for everyone. His peer-interaction and bonding skills set him apart. A true gem!",
    coverImage:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676407838/Portfolio/tributes/snehil/snehil_hnrrr1.svg",
    connected: 1634754600000,
    tributes: [
      "There's no one cooler than Snehil bhaiya. In every conversation with him, you'll learn something new that you never knew and you can't wait to see how you can use that in your projects.",
      "Snehil bhaiya has the clearest and most concise explanation for what he's skilled in and will put in the effort to learn something himself and make it easier for others to learn as well. His ability to interact with his peers and get bonded with them is what sets him apart from others.",
      "His dedication to perfect pixel delivery and the way he implements it with ease is really cool to spectate and learn from.",
    ],
    lessonsLearnt: [
      "There's no shame in admitting that you don't know something. In fact, admitting it is the first step to pique your curiosity to learn more about it.",
      "Go the extra mile in whatever you do and do what feels right to you.",
      "When you learn something, try to teach to others as much as you can.",
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
