import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React,{useState} from 'react';


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null);
 
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type 
    })
  }

  
  const toggleMode = () =>{
    if(mode === 'light')
    {
     setmode("dark")
     document.body.style.backgroundColor = '#333333';
     showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setmode("light") 
      document.body.style.backgroundColor = 'White';
      showAlert("Light Mode has been Enabled","success");
    }
  }

  const toggleRedMode = () =>{
    if(mode === 'light')
    {
     setmode("danger")
     document.body.style.backgroundColor = '#ce3b50';
     showAlert("Red Mode has been Enabled","success");
    }
    else{
      setmode("light") 
      document.body.style.backgroundColor = 'White';
      showAlert("Light Mode has been Enabled","success");
    }
  }


  return ( 
    <>
     <Navbar title="textUtils" mode = {mode} toggleMode = {toggleMode} toggleRedMode = {toggleRedMode}/>
     <Alert alert= {alert}/>
     <div className="container my-3">
     
            <TextForm heading = "Enter the Text to Analyse" mode = {mode} />
        
     </div>
    
     </>
  );
}

export default App;
