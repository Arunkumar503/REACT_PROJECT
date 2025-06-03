import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import About from './About';
import Login from './Login';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <body>
      <div class="a1">
        <ol>
        <li><a><Link to='/'>Home</Link></a></li>
        <li><a><Link to='/veg'>Veg</Link></a></li>
        <li><a><Link to='/nonveg'>Nonveg</Link></a></li>
        <li><a><Link to='/about'>About</Link></a></li>
        <li><a><Link to='/login'>Login</Link></a></li>
       </ol>
      </div>
      </body>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/veg' element={<Veg />} />
        <Route path='/nonveg' element={<NonVeg />} />
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
