import React from "react";
import Home from "./components/Home/Home";
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from './components/Navbar/Navbar';
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Resume from "./components/Resume/Resume";

function App() {


  return (
    <BrowserRouter>
       <div className="App">
        <Navbar1/>

        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/project" element={<Project />} />
          <Route path="/Portfolio/resume" element={<Resume />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
