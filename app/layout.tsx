import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "./NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pals",
  description: "an app for your pals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid grid-rows-[auto,1fr] min-h-screen`}
      >
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
