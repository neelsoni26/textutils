import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils" about="About TextUtils" /> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter text below to analyze" />
      </div>
    </>
  );
}

export default App;
