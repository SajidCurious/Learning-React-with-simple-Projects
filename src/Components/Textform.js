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

  const [text, setText] = useState("Enter the text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
        />
        <button className="primary-btn my-3 mx-8" onClick={convertToUppercase}>
          Convert to Uppercase
        </button>
        <button
          className="secondary-btn my-3 mx-5"
          onClick={convertToLowercase}
        >
          Convert to Lowercase
        </button>
      </div>
      <div className="container1">
        <h1>Your Text Summary</h1>
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
