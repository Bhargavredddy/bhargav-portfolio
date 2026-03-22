import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Training from "./pages/Training";
import Certificates from "./pages/Certificates";
import Resume from "./pages/Resume";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NeuralBackground />
      <Navbar />

      <div className="pt-20">

        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="training"><Training /></section>
        <section id="certificates"><Certificates /></section>
        <section id="resume"><Resume /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>

      </div>
    </>
  );
}

export default App;