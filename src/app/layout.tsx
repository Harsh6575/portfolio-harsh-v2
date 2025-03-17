import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const APP_URL = `https://harsh-vansjaliya.vercel.app`;

export const metadata: Metadata = {
  title: "Harsh Vansjaliya | Software Developer",
  description: "Explore Harsh Vansjaliya's portfolio, featuring projects, skills, and experience in web development.",
  openGraph: {
    title: "Harsh Vansjaliya | Software Developer",
    description: "Check out my portfolio showcasing my work in Next.js, React, and more.",
    url: `${APP_URL}/`,
    type: "website",
    images: [
      {
        url: `${APP_URL}/preview.png`, // image URL
        width: 1200,
        height: 630,
        alt: "Harsh Vansjaliya Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Vansjaliya | Software Developer",
    description: "Explore my portfolio showcasing projects and skills.",
    images: [`${APP_URL}/preview.png`], // Same as Open Graph
  },
  keywords: ["Harsh Vansjaliya", "Portfolio", "Developer", "Harsh", "Vansjaliya", "Harsh Vansjaliya's portfolio"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
