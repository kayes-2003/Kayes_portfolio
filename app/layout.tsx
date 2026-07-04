import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Full Stack Developer`,
  description: siteConfig.bio,
  openGraph: {
    title: `${siteConfig.name} — Full Stack Developer`,
    description: siteConfig.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
