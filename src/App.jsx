import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/main/Hero";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
