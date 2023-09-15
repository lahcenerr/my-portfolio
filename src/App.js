import Navbar from "./components/navBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Blog from "./components/Blog/blog";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { createContext, useState } from "react";
import "./App.css"
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null)

function App() {
  const[theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <div className="navbar-switch">
      <Navbar />
      <div className="switch">
        {/* <label >{theme} mode</label> */}
        <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
      </div>
      </div>
      
      <Intro />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
