import About from "@/section/About";
import Hero from "@/section/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[400vh]">
      <Hero />
      <About />
    </main>
  );
}
