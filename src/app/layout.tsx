import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
        inter.variable
      )}
    >
      <body
        suppressHydrationWarning={true}
        className="min-h-screen bg-[#537CD4] scroll-smooth antialiased"
      >
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
