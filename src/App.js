import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils" about="About TextUtils" /> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter text below to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
