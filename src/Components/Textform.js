import React, { useState } from "react";

export default function Textform(props) {
  const convertToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter the text here");
  return (
    <form>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          type="email"
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        />
        <button className="primary-btn my-3 mx-8" onClick={convertToUppercase}>
          Convert to Uppercase
        </button>
        <button className="secondary-btn my-3 mx-5">
          Convert to Lowercase
        </button>
      </div>
    </form>
  );
}
