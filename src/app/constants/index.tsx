// import Link from "next/link";
import { TProject } from "../types";

export const skillGroups = {
  Frontend: ["Next.js", "React.js", "TypeScript", "JavaScript", "Shadcn UI", "Material-UI", "Tailwind CSS", "Framer Motion", "React-Query"],
  Backend: ["Node.js", "Express.js", "Python", "Django", "Java"],
  Database: ["PostgreSQL", "MongoDB", "MySQL"],
  APIs: ["GraphQL", "RESTApi"],
  DevOps: ["Docker", "Git", "GitHub", "Bitbucket"],
  Tools: ["Prisma ORM", "Drizzle ORM"]
};

export const projects: TProject[] = [
  {
    // index: 1,
    name: "Hotel Reservation Site",
    description:
      "Hotel Reservation Site is a fully functional Next.js application that replicates core Airbnb features. It includes user authentication with NextAuth.js, seamless data handling using Prisma, and an interactive UI with libraries like React-Leaflet, React-Select, and React-Date-Range. Built with TypeScript and Tailwind CSS, the project supports listing exploration, booking functionalities, and image management via Cloudinary. Optimized for performance and maintainability, it employs Next.js scripts, Axios for API communication, and bcrypt for secure authentication.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Axios",
      "bcrypt",
      "NextAuth.js",
      "Prisma",
      "TypeScript",
      "Cloudinary",
      "React-Leaflet",
    ],
    url: "https://hotel-reservation-harsh6575.vercel.app/",
  },
  {
    // index: 3,
    name: "Library Management System",
    description: (
      <>
        A JavaFX-based Library Management System that allows users to add, view,
        borrow, and return books. It features an intuitive UI and uses a modular
        approach for handling library operations efficiently.
      </>
    ),
    technologies: ["Java", "JavaFX", "FXML", "SQLite (working on it)", "Docker"],

    githubUrl: "https://github.com/Harsh6575/LibraryManagementSystemJava"
  }
];
