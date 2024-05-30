import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Away | A NextJS Project",
  description: "A Next.js project with TypeScript & TailWindCSS",
  keywords: "Next.JS, TypeScript, TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>

        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
