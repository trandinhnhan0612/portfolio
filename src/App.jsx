import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import Project from "./components/main/Project";
import Contact from "./components/main/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
