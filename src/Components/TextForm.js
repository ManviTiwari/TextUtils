import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperClick = ()=>{
      let newtext = text.toUpperCase();
      setText(newtext)      
    }

    const handleLowerClick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const handleOnChange = (event)=>{
       setText(event.target.value);
    }
    const handleCopy = () =>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

   const handleExtraSpace = () =>
   {
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
   }

    const handleResetClick = ()=>{
      let newtext = '';
      setText(newtext)      
    }

    //setText("Please Enter Text here");
  return (
    <>
    <div className='container'>
    <h3 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h3>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpperClick}>Convert to UpperCase</button>
        <button className="btn btn-success mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-success mx-2" onClick={handleResetClick}>Reset</button>
    </div>
    <div className={`container my-4 text-${props.mode === 'light'?'dark':'light'}`}>
      <h3>Text Summary</h3>
      <p>Number of Words : {text.trim().length === "" ? 0 :text.trim().split(/\s+/).length}  and Number of Character : {text.length}</p>
    </div>
    </>
  )
}
