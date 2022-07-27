import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import WeatherApp from './weather/WeatherApp';
import PlatinumPlayable from './platinum_playable/PlatinumPlayable';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/weather" element={<WeatherApp />}></Route>
          <Route path="/platinum_playable" element={<PlatinumPlayable />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
