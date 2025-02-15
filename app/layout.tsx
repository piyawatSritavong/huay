import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/shared/navbar";
import LeftBar from "@/components/shared/leftbar";
import RightBar from "@/components/shared/rightbar";
import Footer from "@/components/shared/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto lg:w-3/4 sm:w-full`}
      >
        <NavBar />
        <div className="flex flex-row gap-5">
          <LeftBar />
          {children}
          <RightBar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
