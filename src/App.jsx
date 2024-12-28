import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Sundial from "./pages/Sundial";
import Easytimepro from "./pages/Easytimepro"; // Ensure this points to the correct file
import Ralvie from "./pages/Ralvie";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects">
          <Route path="easytimepro" element={<Easytimepro />} /> 
          <Route path="sundial" element={<Sundial />} /> 
          <Route path="ralvie" element={<Ralvie />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
