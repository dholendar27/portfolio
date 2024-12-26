import { useState } from "react";
import "./App.css";
import NavBar from "./pages/NavBar";
import Introduction from "./pages/Introduction";
import MySkills from "./pages/MySkills";
// import Project from './pages/Project'
import Experience from "./pages/Experience";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <MySkills />
      <Experience />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
