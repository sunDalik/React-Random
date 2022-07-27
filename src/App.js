import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import WeatherApp from './weather/WeatherApp';
import PlatinumPlayable from './platinum_playable/PlatinumPlayable';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='content'>
          <Routes >
            <Route path="/" element={<Menu />}></Route>
            <Route path="/weather" element={<WeatherApp />}></Route>
            <Route path="/platinum_playable" element={<PlatinumPlayable />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
