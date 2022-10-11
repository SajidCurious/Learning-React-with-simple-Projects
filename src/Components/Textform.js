import React from "react";

export default function Textform(props) {
  return (
    <form>
      <div class="mb-3">
        <h1>{props.heading}</h1>
        <textarea type="email" class="form-control" id="mybox" rows="8" />
        <button className="primary-btn my-3 mx-8">Convert to Uppercase</button>
        <button className="secondary-btn my-3 mx-5">
          Convert to Lowercase
        </button>
      </div>
    </form>
  );
}
