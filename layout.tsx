import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DubFlow AI",
  description: "Multilingual AI video dubbing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}