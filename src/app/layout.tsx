import "~/styles/globals.css";

import { Kablammo, Share_Tech_Mono } from "next/font/google";
import { type Metadata } from "next";

import config from "public/config.json";

export const metadata: Metadata = config.meta;

const heading = Share_Tech_Mono({
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
      <body className={`${heading.variable} ${body.variable} bg-s3`}>
        {children}
      </body>
    </html>
  );
}
