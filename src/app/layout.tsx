import "../styles/globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cybertron' 24",
  description: "Official Website of Cybertron FIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={audiowide.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
