import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homepage from './pages/Homepage';
import AOS from 'aos'
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Homepage/>
  
    </div>
  )
}

export default App
