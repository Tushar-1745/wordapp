import React, {useState} from 'react'

export default function TextForm(props) {
  
    const[text, setText] = useState("write text");
    const handleUpperCase=()=>{
        setText(text.toUpperCase());
        props.showalert("Converted to uppercase", "success")
    }
    const handleLowerCase=()=>{
      setText(text.toLowerCase());
      props.showalert("Converted to lowercase", "success");
    }
    const handlechange=(event)=>{
      setText(event.target.value)
    }
    const handleclear=()=>{
      setText("");
      props.showalert("Text cleared", "success")
    } 
  return (
    <>
      <div className="contain" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1 className='mb-3'>WordApp - Word Counter, Character Counter</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handlechange} style={{backgroundColor: 
            props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}}  id="justtext" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={handleUpperCase}>Convert to UpperCase</button>
        <button className="btn btn-primary my-3" disabled={text.length===0} onClick={handleLowerCase}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" disabled={text.length===0} onClick={handleclear}>Clear All</button>
      </div>  
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>your text is: {text}</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and character {text.length}</p>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} minutes to read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"nothing to preview"}</p>
      </div>
    </>
  )
}
