import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from'./components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './components/Contact';

import {
  BrowserRouter as Router, Routes, Route
  // Link 
} from "react-router-dom";


function App(){
  const[alert, setAlert] = useState(null);
  const showalert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
 
  const[mode, setMode] = useState('light');
  
  const toggleMode=()=>{
    // console.log(cls)
    // document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showalert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title='WordApp' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container">
    <Routes>
          <Route exact path="/" element={<TextForm mode={mode} showalert={showalert}/>}></Route>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>       
          <Route exact path='/contact' element={<Contact/>}></Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}
export default App;