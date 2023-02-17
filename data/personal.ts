/**
 * Personal Information - School & College
 */

interface Friend {
  name: string;
  image: string;
  url: string;
}

export interface PersonalInfo {
  title: string;
  date: string;
  description: string[];
  images?: string[];
  friends?: Friend[];
}

type PersonalInfos = PersonalInfo[];

export const SCHOOL_INFO: PersonalInfos = [
  {
    title: "Graduated 12th",
    date: "March 2020",
    description: [
      "Finished schooling at St. Johns International Residential School just as the COVID-19 Pandemic hit. I was lucky enough to finish all my exams before the lock down became official.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668534/Portfolio/Personal/School/finsished_school_ddrbzo.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668535/Portfolio/Personal/School/finshed_school_2_kfksdq.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668535/Portfolio/Personal/School/finshed_school_wrqmjs.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668536/Portfolio/Personal/School/finished_school_p1l7px.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668533/Portfolio/Personal/School/finsihed_school_hxlb0m.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668535/Portfolio/Personal/School/finshed_school_1_ox00na.jpg",
    ],
  },
  {
    title: "Last practical exam of school",
    date: "Feb 2020",
    description: [
      "The last practical in school. Done with it with a blast and completed the practical with loads of fun. Sure there was some pressure, but with my friends there, it was quite fun to do it.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671089/Portfolio/Personal/School/practical_exam_d8aatz.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671087/Portfolio/Personal/School/practical_exam_1_srsooe.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671087/Portfolio/Personal/School/practical_exam_3_nawh8i.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671086/Portfolio/Personal/School/praactical_exam_fcf59u.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671087/Portfolio/Personal/School/practical_exam_2_rgtk7s.jpg",
    ],
  },
  {
    title: "Birthday Bash",
    date: "December 2019",
    description: [
      "Celebrated birthday with friends from school at my home. First time I invited my friends over at home for something other than studies.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671565/Portfolio/Personal/School/birthday_3_pw0aeo.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671565/Portfolio/Personal/School/birthday_2_dn3knz.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671562/Portfolio/Personal/School/birthday_1_ra86jb.jpg",
    ],
  },
  {
    title: "First Pic in School",
    date: "July 2013",
    description: [
      "I don't remember how we got the phone to take the picture here, what's even more odd is our pose in the picture as well XD.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676674762/Portfolio/Personal/School/first_pic_of_school_-_jul_2013_utv9r6.jpg",
    ],
  },
];

export const COLLEGE_INFO: PersonalInfos = [];
