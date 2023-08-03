import React,{useState} from 'react';
import Navbar from './Components/Navbar';
// import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert'


function App() {

  const [mode,setMode]  = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (msg,type)=>{
    setAlert({
      msg: msg,
      type:type
    })
  }
  const togglebg = ()=>{
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(33, 37, 41)"
      showAlert("Dark Mode is enabled", "success");

      setTimeout(()=>{
        setAlert(null);
      },1500)

    }else{

      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is enabled", "success");

      setTimeout(()=>{
        setAlert(null);
      },1500)

    }
  }
  return (
    
    <div>
       <Navbar title = "TextUtils" about = "About" mode = {togglebg} bg={mode}/>
       <Alert Alert={alert} />
      <About bg={mode}/>
    </div>
  
  );
}

export default App;
