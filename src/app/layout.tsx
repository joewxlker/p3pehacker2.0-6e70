import "~/styles/globals.css";

import { Kablammo, Share_Tech_Mono, Rubik_Mono_One } from "next/font/google";
import { type Metadata } from "next";

import config from "public/config.json";

export const metadata: Metadata = config.meta;

const heading = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const body = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} bg-gradient-to-b from-s3 to-black`}>
        {children}
      </body>
    </html>
  );
}
