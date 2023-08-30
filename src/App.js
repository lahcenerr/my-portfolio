import Navbar from "./components/navBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Blog from "./components/Blog/blog";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
