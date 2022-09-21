import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
// import Github from "./components/Github";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <About />
      <Skills />
      {/* <Github/> */}
      <Project />
      <Contact />
    </div>
  );
}

export default App;
