import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Removed extra spaces", "success");
  };

  const handleCopy = () => {
    var textArea = document.getElementById("myBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Text copied", "success");
  };

  const handleOnChanged = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === 'dark' ? '#374c73' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            className="form-control"
            value={text}
            onChange={handleOnChanged}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <h2>Your text summary</h2>
          <p>{text.trim().split(/\s+/).filter(word => word !== "").length} words, {text.length} characters</p>
          <p>{0.008 * text.trim().split(/\s+/).filter(word => word !== "").length} Minutes to read it</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter some text"}</p>
        </div>
      </div>
    </>
  );
}
