"use client";

import Link from "next/link";
import Image from "next/image";

import { github, linkedin, twitterx } from "@/assets/icons";

const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Harsh6575",
  },
  {
    name: "Twitter",
    iconUrl: twitterx,
    link: "https://x.com/HarshVansjaliya",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/harsh-vansjaliya-904825226/",
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 w-full">
      <hr className="border-slate-200" />

      <div className="flex flex-wrap gap-4 items-center justify-between">
        <p>
          © 2024 - {new Date().getFullYear()} <strong>Harsh Vansjaliya</strong>.
          All rights reserved.
        </p>

        <div className="flex gap-5 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.link} target="_blank">
              <Image
                src={link.iconUrl}
                alt={link.name}
                className="w-8 h-8 object-contain bg-foreground rounded-lg p-1"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
