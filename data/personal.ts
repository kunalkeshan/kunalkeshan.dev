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
];

export const COLLEGE_INFO: PersonalInfos = [];
