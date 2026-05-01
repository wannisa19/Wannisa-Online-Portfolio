import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wannisa Klomchoho — Full Stack Developer",
  description:
    "Full Stack Developer with ~5 years of experience in web application development. Skilled in Vue.js, React.js, Next.js, ASP.NET Core, and more.",
  keywords: [
    "Full Stack Developer",
    "Wannisa Klomchoho",
    "Vue.js",
    "React.js",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Thailand",
  ],
  authors: [{ name: "Wannisa Klomchoho" }],
  openGraph: {
    title: "Wannisa Klomchoho — Full Stack Developer",
    description:
      "Full Stack Developer with ~5 years of experience building high-quality web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body
        className="min-h-screen antialiased"
        style={{ background: "#050d1a", color: "#e2e8f0" }}
      >
        {children}
      </body>
    </html>
  );
}
