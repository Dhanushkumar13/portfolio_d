import React from "react";
import "./index.css";
import { Header } from "./Components/Header/Header";
import { Landing } from "./Components/Home/Landing";

function App() {
  return (
    <>
    <Header />

    <main className="main">
    <Landing/>
    </main>
    </>
  );
}

export default App;
