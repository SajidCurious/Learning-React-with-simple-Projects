import React, { useState } from "react";

export default function TextForm(props) {
  const convertToUppercase = () => {
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Converted to Uppercase!", "Success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const convertToLowercase = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to Lowercase!", "Success");
  };
  const clearAll = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "Success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h2>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#002b38" : "white",
            color: "white",
          }}
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
        <button type="button" className="btn btn-primary" onClick={clearAll}>
          Clear Text
        </button>
      </div>
      <div
        className="container1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.length} Characters and {text.split(" ").length} Words
        </p>
        <p>{0.08 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something above to Preview here"}
        </p>
      </div>
    </>
  );
}
