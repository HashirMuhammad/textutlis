import './App.css';
import About from './components/About';
import Alret from './components/Alret';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, SetAlert] = useState(null);



  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      //to cahnge site title
      document.title = "TextUtils - Dark";
    }
    else {
      setMode('light');

      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light";
    }
  }
  return (
    <>

      {/* <NavBar title="Text Utils " about="About US" /> */}
      <NavBar title="Text Utils " mode={mode} toggleMode={toggleMode} />

      <Alret alert={alert} />
      <div className="container my-3" >
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}

      </div>
    </>
  );
}

export default App;



