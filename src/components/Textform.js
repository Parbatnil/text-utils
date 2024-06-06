import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let upper = text.toUpperCase();
    setText(upper);
    props.showAlert("Converted to Uppercase","success");
  };
  const handlelowClick = () => {
    let lower = text.toLowerCase();
    setText(lower);
    props.showAlert("Converted to Lowercase","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };
  const clearText = () => {
    let ctext = "";
    setText(ctext);
    props.showAlert("Cleared text","success");
    
  };
  const captitalize1stword = () => {
    let ctext = text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
      
    );
    setText(ctext);
    props.showAlert("Capitalized 1st word","success");
  };
  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied text","success");
  };
  const clearExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("cleared","success");
  };

  const [text, setText] = useState("Enter Text here");
  return (
    <>
      <div
        className="container"
        style={{color: props.mode === "dark" ? "white" : "#3d387d" }}
      >
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            {" "}
            <h1>{props.heading} -</h1>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",color:props.mode === "dark" ? "white" : "#3d387d"
            }}
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-info mx-3" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-info mx-3" onClick={handlelowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-info mx-3" onClick={clearText}>
          clear text
        </button>
        <button className="btn btn-info mx-3" onClick={captitalize1stword}>
          capitalize 1st Charecter of each word
        </button>
        <button className="btn btn-info mx-3" onClick={copyText}>
          Copy text
        </button>
        <button className="btn btn-info mx-3" onClick={clearExtraSpace}>
          Remove Extra spaces
        </button>
      </div>
      <div
        className="container "
          style={{color: props.mode === "dark" ? "white" : "#3d387d" }}
          
      >
        <h1>Your Text Summery</h1>
        <p>
          {text.split(" ").length} words,{text.length} Charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview "}</p>
      </div>
    </>
  );
}
