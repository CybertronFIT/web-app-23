import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Audiowide } from "next/font/google";

const inter = Audiowide({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberTron' 23",
  description: "Official website of CyberTron FIT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-background text-foreground antialiased dark",
        inter.className
      )}
    >
      <body
        suppressHydrationWarning={true}
        className="min-h-screen bg-black scroll-smooth antialiased"
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
