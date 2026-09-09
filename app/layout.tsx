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

export const metadata: Metadata = {
  title: "OfficePro - O seu escritório digital",
  description: "Instalação profissional de software e suporte em Angola.",
  verification: {
    "google": "qWuGd9A71lGHUg6I1ugnX7VpUFHG7u-MI1yWxxa6ZRM",
  },

};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode;}>): React.ReactNode {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080C14]">
        {children}
      </body>
    </html>
  );
}


