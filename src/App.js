import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0D1117";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils" about="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter text below to analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
