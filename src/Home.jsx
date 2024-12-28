import NavBar from "./pages/NavBar";
import Introduction from "./pages/Introduction";
import MySkills from "./pages/MySkills";
// import Project from './pages/Project'
import Experience from "./pages/Experience";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Introduction />
      <MySkills />
      <Experience />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Home;
