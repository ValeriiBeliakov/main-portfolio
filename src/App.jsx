import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Contacts/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <section
          className="min-h-[100vh]  bg-[url('./assets/background-image/bg.jpg')] bg-cover bg-no-repeat relative"
          id="main"
        >
          <div className="max-w-7xl mx-auto px-5 pc:max-w-[1600px]">
            <NavBar />
            <HeroSection />
          </div>
        </section>
        <section className="min-h-[100vh] bg-gray-900">
          <div className="max-w-7xl mx-auto  overflow-hidden ">
            <Projects />
            <Skills />
            <Contacts />
          </div>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
