import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "./NavMenu";
import AuthProvider from "./AuthProvider";

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
    <AuthProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen`}>
          <NavMenu />
          <div className="w-4/6 mx-auto">
            <div className="mt-3">{children}</div>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
