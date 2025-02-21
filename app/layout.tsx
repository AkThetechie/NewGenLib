// /app/layout.tsx (Server Component)
import type { Metadata } from "next";
import RootLayout from "./RootLayout"; // Import the actual UI component

export const metadata: Metadata = {
  //title: "VIT Chennai Library",
  description: "Explore books, track resources, and stay updated.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
