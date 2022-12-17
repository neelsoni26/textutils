import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text is cleared", "success");
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCopyClick = () => {
    let temptext = document.querySelector("#myBox");
    temptext.select();
    navigator.clipboard.writeText(temptext.value);
    props.showAlert("Text has been copied", "success");
  };

  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };

  const handleFindChange = (event) => {
    fsetWord(event.target.value);
  };
  const handleReplaceChange = (event) => {
    rsetWord(event.target.value);
  };
  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord, rWord);
    setText(newText);
    props.showAlert(`${fWord} is replaced with ${rWord}`, "success");
  };

  const handleResetClick = () => {
    fsetWord("");
    rsetWord("");
  };

  const [text, setText] = useState("");
  const [fWord, fsetWord] = useState("");
  const [rWord, rsetWord] = useState("");

  return (
    <>
      <h1
        style={{
          color: props.mode === "light" ? "#000000E6" : "#C9D1D9",
        }}
      >
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          placeholder="Enter Text Here..."
          autoFocus
          rows={8}
          value={text}
          onChange={handleOnClick}
          style={{
            backgroundColor: props.mode === "light" ? "#FFFFFF" : "#30363D",
            color: props.mode === "light" ? "#000000" : "#C9D1D9",
          }}
        />
      </div>

      <button
        type="button"
        className="btn btn-primary me-2 my-2"
        onClick={handleUpperClick}
      >
        Convert to UPPERCASE
      </button>
      <button
        type="button"
        className="btn btn-primary me-2 my-2"
        onClick={handleLowerClick}
      >
        Convert to lowercase
      </button>
      <button
        type="button"
        className="btn btn-primary me-2 my-2"
        onClick={handleExtraSpaceClick}
      >
        Remove Extra Space
      </button>
      <button
        type="button"
        className="btn btn-success me-2 my-2"
        onClick={handleCopyClick}
      >
        Copy Text
      </button>
      <button
        type="button"
        className="btn btn-danger me-2 my-2"
        onClick={handleClearClick}
      >
        Clear Text
      </button>
      <div className="row my-2">
        <div className="col-12">
          <input
            type="text"
            className="form-control me-2 my-2"
            placeholder="Enter the word..."
            value={fWord}
            onChange={handleFindChange}
            style={{
              backgroundColor: props.mode === "light" ? "#FFFFFF" : "#30363D",
              color: props.mode === "light" ? "#000000" : "#C9D1D9",
            }}
          />
          <span
            style={{
              color: props.mode === "light" ? "#000000E6" : "#C9D1D9",
            }}
          >
            to
          </span>
          <input
            type="text"
            className="form-control  mx-2 my-2"
            placeholder="Replace with..."
            value={rWord}
            onChange={handleReplaceChange}
            style={{
              backgroundColor: props.mode === "light" ? "#FFFFFF" : "#30363D",
              color: props.mode === "light" ? "#000000" : "#C9D1D9",
            }}
          />
          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleReplaceClick}
          >
            Replace Text
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div>
      </div>

      <div
        className="my-3"
        style={{
          color: props.mode === "light" ? "#000000E6" : "#C9D1D9",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{text.split(" ").length * 0.008} Minutes of read</p>
      </div>
      <div
        className="my-3"
        style={{
          color: props.mode === "light" ? "#000000E6" : "#C9D1D9",
        }}
      >
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in big box above to preview it here."}
        </p>
      </div>
    </>
  );
}
