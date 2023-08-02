import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Textform from './Components/Textform';

function App() {
  return (
    
    <div className="App">
       <Navbar title = "TextUtils" about = "About"/>
       <Textform />
    </div>
  
  );
}

export default App;
