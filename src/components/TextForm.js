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

  const [text, setText] = useState("");

  return (
    <>
      <div>
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
        <button className="btn btn-primary me-2" onClick={handleUpperClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary me-2" onClick={handleLowerClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-danger me-2" onClick={handleClearClick}>
          Clear Text
        </button>
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
