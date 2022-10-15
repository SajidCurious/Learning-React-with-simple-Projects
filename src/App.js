import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import Textform from "./Components/Textform";
import { useState } from "react";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212164";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Textform heading="Enter the Text to Analyze" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
