/**
 * Certifications Data
 */

interface Organization {
  name: string;
  image: string;
  link: string;
}

type Organizations =
  | "coursera"
  | "postman"
  | "nptel"
  | "internshala"
  | "pirple"
  | "mongodb"
  | "udemy"
  | "freeCodeCamp";

const organizations: Record<Organizations, Organization> = {
  coursera: {
    name: "Coursera",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695890605/Portfolio/certifications/organizations/coursera.png",
    link: "https://www.coursera.org/",
  },
  postman: {
    name: "Postman",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695890676/Portfolio/certifications/organizations/postman.jpg",
    link: "https://www.postman.com/",
  },
  nptel: {
    name: "NPTEL",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695890743/Portfolio/certifications/organizations/nptel.jpg",
    link: "https://nptel.ac.in/",
  },
  internshala: {
    name: "Internshala",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695890891/Portfolio/certifications/organizations/internshala.png",
    link: "https://internshala.com/",
  },
  pirple: {
    name: "Pirple",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695890769/Portfolio/certifications/organizations/pirple.png",
    link: "https://www.pirple.com/",
  },
  mongodb: {
    name: "MongoDB University",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695890864/Portfolio/certifications/organizations/mongodb.png",
    link: "https://learn.mongodb.com/",
  },
  udemy: {
    name: "Udemy",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695890828/Portfolio/certifications/organizations/udemy.png",
    link: "https://www.udemy.com/",
  },
  freeCodeCamp: {
    name: "FreeCodeCamp",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695890925/Portfolio/certifications/organizations/freecodecamp.png",
    link: "https://www.freecodecamp.org/",
  },
};

export type Certificate = Readonly<{
  credentialId: string;
  title: string;
  image: string;
  link: string;
  dateIssued: Date;
  organization: Organization;
}>;

// Experience Container
const CERTIFICATIONS: ReadonlyArray<Certificate> = [
  {
    credentialId: "T63SX9QPBXEF",
    title: "SQL for Data Science",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695891849/Portfolio/certifications/SQL-for-Data-Science.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/T63SX9QPBXEF",
    dateIssued: new Date(2023, 3, 25),
    organization: organizations["coursera"],
  },
  {
    credentialId: "wiJVPgpnS3mKhagaIoTLgg",
    title: "Postman API Fundamentals Student Expert",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695921328/Portfolio/certifications/Postman_API_Fundamentals_Student_Expert_fi3tea.png",
    link: "https://badgr.com/public/assertions/wiJVPgpnS3mKhagaIoTLgg?identity__email=kunalkeshan12@gmail.com",
    dateIssued: new Date(2022, 11, 4),
    organization: organizations["postman"],
  },
  {
    credentialId: "ULNH4NP25N2G",
    title: "Introduction to Systems Engineering",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695921486/Portfolio/certifications/Introduction_to_Systems_Engineering_yio0vm.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/ULNH4NP25N2G",
    dateIssued: new Date(2022, 10, 8),
    organization: organizations["coursera"],
  },
  {
    credentialId: "1rKRfnKtUQigm6xzV905TcwvdFPjOLmjO",
    title:
      "Programming, Data Structures And Algorithms Using Python - NPTEL Course Certificate",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695921937/Portfolio/certifications/Programming_Data_Structures_And_Algorithms_Using_Python_-_NPTEL_Course_Certificate_vnwhbb.jpg",
    link: "https://drive.google.com/file/d/1rKRfnKtUQigm6xzV905TcwvdFPjOLmjO/view",
    dateIssued: new Date(2022, 8, 10),
    organization: organizations["nptel"],
  },
  {
    credentialId: "85t4mtsq2z",
    title: "The Node.js Master Class",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695922077/Portfolio/certifications/The-Nodejs-Master-Class.jpg",
    link: "https://www.pirple.com/certificates/85t4mtsq2z",
    dateIssued: new Date(2022, 6, 8),
    organization: organizations["pirple"],
  },
  {
    credentialId: "5cawtlqxqz",
    title: "Keeping Up With the Javascripts: ES6",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695922183/Portfolio/certifications/Keeping-Up-With-the-Javascripts-ES6.jpg",
    link: "https://www.pirple.com/certificates/5cawtlqxqz",
    dateIssued: new Date(2022, 0, 21),
    organization: organizations["pirple"],
  },
  {
    credentialId: "9515fca1-5a6f-4243-a8b4-886791073824",
    title: "M001: MongoDB Basics",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695922317/Portfolio/certifications/M001-MongoDB-Basics.jpg",
    link: "https://university.mongodb.com/course_completion/9515fca1-5a6f-4243-a8b4-886791073824",
    dateIssued: new Date(2022, 0, 15),
    organization: organizations["mongodb"],
  },
  {
    credentialId: "256B9490-14E1-3BE4-1F0A-62C1BD4E4BD8",
    title: "Web Development",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695922470/Portfolio/certifications/Web_Development_xdszan.png",
    link: "https://trainings.internshala.com/verify-certificate/?certificate_number=256B9490-14E1-3BE4-1F0A-62C1BD4E4BD8",
    dateIssued: new Date(2021, 9, 11),
    organization: organizations["internshala"],
  },
  {
    credentialId: "kunalkeshan/responsive-web-design",
    title: "Responsive Web Design",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695922603/Portfolio/certifications/www.freecodecamp.org_certification_kunalkeshan_responsive-web-design_k8kzzs.png",
    link: "https://www.freecodecamp.org/certification/kunalkeshan/responsive-web-design",
    dateIssued: new Date(2021, 7, 1),
    organization: organizations["freeCodeCamp"],
  },
];

export default CERTIFICATIONS;
