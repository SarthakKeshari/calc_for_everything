import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import MainSI from './mathematical/simple_interest/MainSI';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* Mathematical */}
            <Route path="simpleinterest" element={<MainSI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
