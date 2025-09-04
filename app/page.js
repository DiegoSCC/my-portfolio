import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
  <>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </>
  );
}
