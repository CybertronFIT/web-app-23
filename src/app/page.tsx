import About from "@/section/About";
import Events from "@/section/Events";
import Hero from "@/section/Hero";
import Team from "@/section/Team";

export default function Home() {
  return (
    <main className="min-h-[400vh]">
      <Hero />
      <About />
      <Events />
      <Team />
    </main>
  );
}
