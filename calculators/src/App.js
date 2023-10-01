import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import MainBinaryAdder from './computer_science/BinaryAdder/MainBinaryAdder';
import MainDecToBinAndBinToDec from './computer_science/DecToBinAndBinToDec/MainDecToBinAndBinToDec';
import MainHexToBinAndBinToHex from './computer_science/HexToBinAndBinToHex/MainHexToBinAndBinToHex';
import MainHexadecimalAdder from './computer_science/HexadecimalAdder/MainHexadecimalAdder';
import MainOctToBinAndBinToOct from './computer_science/OctToBinAndBinToOct/MainOctToBinAndBinToOct';
import MainOctalAdder from './computer_science/OctalAdder/MainOctalAdder';
import MainBMI from './health/BMI/MainBMI';
import MainBMR from './health/BMR/MainBMR';
import MainBodyFat from './health/BodyFat/MainBodyFat';
import MainCI from './mathematical/compound_interest/MainCI';
import MainLogAntilog from './mathematical/log_antilog/MainLogAntilog';
import MainPrimeFactors from './mathematical/prime_factors/MainPrimeFactors';
import MainSI from './mathematical/simple_interest/MainSI';
import MainStatistics from './mathematical/statistics/MainStatistics';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* Computer Science */}
            <Route path="decbinandbindec" element={<MainDecToBinAndBinToDec />} />
            <Route path="hexbinandbinhex" element={<MainHexToBinAndBinToHex />} />
            <Route path="octbinandbinoct" element={<MainOctToBinAndBinToOct />} />
            <Route path="binaryadder" element={<MainBinaryAdder />} />
            <Route path="octaladder" element={<MainOctalAdder />} />
            <Route path="hexadecimaladder" element={<MainHexadecimalAdder />} />
            {/* Mathematical */}
            <Route path="simpleinterest" element={<MainSI />} />
            <Route path="compoundinterest" element={<MainCI />} />
            <Route path="statistics" element={<MainStatistics />} />
            <Route path="primefactors" element={<MainPrimeFactors />} />
            <Route path="logantilog" element={<MainLogAntilog />} />
            {/* Health */}
            <Route path="bmi" element={<MainBMI />} />
            <Route path="bmr" element={<MainBMR />} />
            <Route path="bodyfat" element={<MainBodyFat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;