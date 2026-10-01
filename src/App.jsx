import Navbar from "./Components/Navbar";
import EditorBar from "./Components/EditorBar";
import StatusBar from "./Components/StatusBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <Navbar />
      <EditorBar />

      <div className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>

      <StatusBar />
    </main>
  );
}

export default App;