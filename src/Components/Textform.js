import React, { useState } from "react";

export default function TextForm(props) {
  const convertToUppercase = () => {
    let upText = text.toUpperCase();
    setText(upText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const convertToLowercase = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
  };
  const clearAll = () => {
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
        />
        <button
          className="btn btn-primary my-3 mx-8"
          onClick={convertToUppercase}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary my-3 mx-5"
          onClick={convertToLowercase}
        >
          Convert to Lowercase
        </button>
        <button type="button" class="btn btn-primary" onClick={clearAll}>
          Clear Text
        </button>
      </div>
      <div className="container1">
        <h2>Your Text Summary</h2>
        <p>
          {text.length} Characters and {text.split(" ").length} Words
        </p>
        <p>{0.08 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
