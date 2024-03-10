import React from "react";
import "./index.css";
import { Header } from "./Components/Header/Header";
import { Landing } from "./Components/Home/Landing";
import { About } from "./Components/About/About";
import { Skills } from "./Components/Skills/Skills";
import { Qualification } from "./Components/Qualification/Qualification";
import { Projects } from "./Components/Projects/Projects";


function App() {
  return (
    <>
    <Header />

    <main className="main">
    <Landing/>
    <About/>
    <Skills/>
    <Qualification/>
    <Projects/>
    </main>
    </>
  );
}

export default App;
