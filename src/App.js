import React,{useState} from 'react';
import Navbar from './Components/Navbar';
// import Textform from './Components/Textform';
import About from './Components/About';


function App() {

  const [mode,setMode]  = useState('light');

  const togglebg = ()=>{
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(33, 37, 41)"

    }else{

      setMode('light');
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    
    <div>
       <Navbar title = "TextUtils" about = "About" mode = {togglebg} bg={mode}/>
      <About />
    </div>
  
  );
}

export default App;
