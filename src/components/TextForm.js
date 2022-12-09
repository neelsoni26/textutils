import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
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
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          placeholder="Enter Text Here..."
          autoFocus
          rows={8}
          value={text}
          onChange={handleOnClick}
        />
      </div>

      <button className="btn btn-primary me-2 my-2" onClick={handleUpperClick}>
        Convert to UPPERCASE
      </button>
      <button className="btn btn-primary me-2 my-2" onClick={handleLowerClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-danger me-2 my-2" onClick={handleClearClick}>
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
          />
          to
          <input
            type="text"
            className="form-control  mx-2 my-2"
            placeholder="Replace with..."
            value={rWord}
            onChange={handleReplaceChange}
          />
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleReplaceClick}
          >
            Replace Text
          </button>
          <button className="btn btn-danger" onClick={handleResetClick}>
            Reset
          </button>
        </div>
      </div>

      <div className="my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{text.split(" ").length * 0.008} Minutes of read</p>
      </div>
      <div className="my-3">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
