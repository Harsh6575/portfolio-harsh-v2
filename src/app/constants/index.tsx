// import Link from "next/link";
import { TProject } from "../types";

export const skills: { name: string }[] = [
  { name: "TypeScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Express.js" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "Django" },
  { name: "Java" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "GraphQL" },
  { name: "RESTApi" },
  { name: "Prisma ORM" },
  // { name: "Jupyter Notebooks" },
  // { name: "pandas" },
  // { name: "NumPy" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Bitbucket" },
  { name: "Docker" },
];

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
  // {
  //   // index: 2,
  //   name: "India's Got Latent Application clone",
  //   description: (
  //     <>
  //       I Inspired by a{" "}
  //       <Link
  //         href="https://www.youtube.com/watch?v=nQ0M2dYCXxg"
  //         className="text-foreground underline underline-offset-4"
  //       >
  //         YouTube tutorial by Harkirat Singh
  //       </Link>
  //       , I&apos;m building a Turborepo monorepo that includes multiple
  //       frontends admin-web, user-web, mobile, worker, and an HTTP backend—along
  //       with a main backend server in Rust. This project is helping me learn
  //       Turborepo best practices and build familiarity with Rust.
  //     </>
  //   ),
  //   technologies: [
  //     "Turborepo",
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Rust (1st application)",
  //     "Node.js",
  //     "Axios",
  //     "Framer Motion",
  //     "Redis",
  //   ],
  // },
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
