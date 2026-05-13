import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Header from "./components/Header";


export default function Home() {
  return (
    <>
      <Header />
  
      <section id="Home">
        <Hero />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section id="About">
        <About />
       </section>
      <Footer />
    </>
  );
}
