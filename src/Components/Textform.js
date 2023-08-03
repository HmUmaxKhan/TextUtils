import React , {useState} from "react";

export default function Textform() {
  const height = {
    height: "12rem",
    width: "70rem",
  };
  const [text,setText]=useState("");

  const handleClick =() => {
      setText(text.toUpperCase());
  };

  const handleClick1 =() => {
    setText(text.toLowerCase());
};

  const handleClick2 =() => {
    navigator.clipboard.writeText(text);
};


const handleClick3 =() => {
    setText(text.replace(/\s+/g," "));
};


const handleClick4 =() => {
    setText("");
};



  const handleChange = (event)=>{
      setText(event.target.value);
  }
  return (
    <div>
     <div className="container">
      <h3 className="my-4">
        <b>Text Area</b>
      </h3>
      </div>
      <div className="form-floating">
      <div className="container my-4">
        <textarea
          className="form-control"
          placeholder="Enter the text here..."
          id="floatingTextarea2"
          style={height}
          onChange={handleChange}
          value={text}
        ></textarea>
        </div>
      </div>
      <div className="container">
      <button className="btn btn-primary " onClick={handleClick}>Upper Case</button>
      <button className="btn btn-primary mx-1" onClick={handleClick1}>Lower Case</button>
      <button className="btn btn-primary mx-1" onClick={handleClick2}>Copy</button>
      <button className="btn btn-primary mx-1" onClick={handleClick3}>Space Remover</button>
      <button className="btn btn-primary mx-1" onClick={handleClick4}>Clear</button>
      </div>
    </div>
  );
}
