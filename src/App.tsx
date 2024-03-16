import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apple from './Components/Pages/AppleComponent';
import Cisco from './Components/Pages/CiscoComponent';
import Rivian from './Components/Pages/RivianComponent';
import Google from './Components/Pages/GoogleComponent';
import Netflix from './Components/Pages/NetflixComponent';
import NavBarComponent from './Components/NavBarComponent';
import HomePageComponent from './Components/Pages/HomePageComponent';

function App() {
  return (
    <BrowserRouter>

      <NavBarComponent />

      <Routes>
        <Route path='/' element={<HomePageComponent />} />
        <Route path='/Apple' element={<Apple />} />
        <Route path='/Cisco' element={<Cisco />} />
        <Route path='/Rivian' element={<Rivian />} />
        <Route path='/Google' element={<Google />} />
        <Route path='/Netflix' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
