import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />
      <div className="container my-3">
        <Textform heading="Enter the Text to Analyze" />
      </div>
    </>
  );
}

export default App;
