import Navbar from "@/components/navbar/Navbar";
import About from "@/components/section/About";
import Events from "@/components/section/Events";
import Hero from "@/components/section/Hero";
import Team from "@/components/section/Team";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Events />
        <Team />
      </main>
    </>
  );
};

export default Home;
