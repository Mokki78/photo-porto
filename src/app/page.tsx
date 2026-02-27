import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="Home">
        <Hero />
      </section>
      <section id="Gallery">
        <Gallery />
      </section>
      <section id="About">
        <About />
      </section>
      <Footer />
    </>
  );
}
