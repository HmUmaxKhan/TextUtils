import React from "react";

export default function Textform() {
  const height = {
    height: "12rem",
    width: "70rem",
  };
  return (
    <div>
      <h3 className="my-4">
        <b>Text Area</b>
      </h3>
      <div className="form-floating">
      <div className="container my-4">
        <textarea
          className="form-control"
          placeholder="Enter the text here..."
          id="floatingTextarea2"
          style={height}
        ></textarea>
        </div>
      </div>
      <button className="btn btn-primary mx-8">Upper Case</button>
    </div>
  );
}
