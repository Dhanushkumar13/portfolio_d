import React from "react";
import "./index.css";
import { Header } from "./Components/Header/Header";
import { Landing } from "./Components/Home/Landing";
import { About } from "./Components/About/About";
import { Skills } from "./Components/Skills/Skills";
import { Qualification } from "./Components/Qualification/Qualification";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contacts/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollUp } from "./Components/ScrollUp/ScrollUp";


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
    <Contact/>
    </main>

    <Footer/>
    <ScrollUp/>
    </>
  );
}

export default App;
