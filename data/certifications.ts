/**
 * Certifications Data
 */

interface Organization {
  name: string;
  image: string;
  link: string;
}

type Organizations = "coursera";

const organizations: Record<Organizations, Organization> = {
  coursera: {
    name: "Coursera",
    image:
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1695890605/Portfolio/certifications/organizations/coursera.png",
    link: "https://www.coursera.org/",
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
];

export default CERTIFICATIONS;
