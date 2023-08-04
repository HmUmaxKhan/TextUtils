import React , {useState} from "react";

export default function Textform(props) {
  const height = {
    height: "12rem",
    width: "70rem",
    backgroundColor:  props.bg==='light' ? 'white': 'rgb(33, 37, 41)'
  };

  const splitF = ()=>{
    text.trim();
    const arr = text.split(/\s+/);

    if (arr.length <= 1) {
        return 0;
    }

        const count = arr.filter(word=>{return word!==" "});
        return count.length-1

  }
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
    <div className="my-5">
     <div className={`container text-${props.bg==='light' ? 'dark' : 'light'}`}>
      <h3 className="my-4">
        <b>Text Area</b>
      </h3>
      </div>
      <div className="form-floating">
      <div className={`container my-2`}>
        <textarea
          className={`form-control  text-${props.bg==='light' ? 'dark' : 'light'}`}
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
      <div className={`container my-4 text-${props.bg==='light' ? 'dark' : 'light'}`}><h2>Preview</h2>
      <p>Number of characters <b>{text.length}</b></p>
      <p>Number of words <b>{splitF()}</b> </p>
      <p>{text}</p>
      </div>
    </div>
  );
}
