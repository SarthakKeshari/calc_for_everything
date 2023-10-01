import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import MainSI from './mathematical/simple_interest/MainSI';
import MainCI from './mathematical/compound_interest/MainCI';
import MainDecToBinAndBinToDec from './computer_science/DecToBinAndBinToDec/MainDecToBinAndBinToDec';
import MainHexToBinAndBinToHex from './computer_science/HexToBinAndBinToHex/MainHexToBinAndBinToHex';
import MainOctToBinAndBinToOct from './computer_science/OctToBinAndBinToOct/MainOctToBinAndBinToOct';
import MainBinaryAdder from './computer_science/BinaryAdder/MainBinaryAdder';
import MainOctalAdder from './computer_science/OctalAdder/MainOctalAdder';
import MainHexadecimalAdder from './computer_science/HexadecimalAdder/MainHexadecimalAdder';
import MainStatistics from './mathematical/statistics/MainStatistics';
import MainBMI from './health/BMI/MainBMI';
import MainBMR from './health/BMR/MainBMR';
import MainBodyFat from './health/BodyFat/MainBodyFat';
import MainPrimeFactors from './mathematical/prime_factors/MainPrimeFactors';
import MainLogAntilog from './mathematical/log_antilog/MainLogAntilog';
import MainBodmasSolver from './mathematical/bodmas_solver/MainBodmasSolver';
import MainQuadraticEquationSolver from './mathematical/quadratic_equation_solver/MainQuadraticEquationSolver';
import MainSetOperations from './mathematical/set_operations/MainSetOperations';
import MainGraphMaker from './mathematical/graph_maker/MainGraphMaker';
import MainQuadraticEquationIntersection from './mathematical/quadratic_eq_intersection/MainQuadraticEquationIntersection';
import MainLinearEquationIntersection from './mathematical/linear_eq_intersection/MainLinearEquationIntersection';

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
            <Route path="bodmassolver" element={<MainBodmasSolver />} />
            <Route path="quadraticequationsolver" element={<MainQuadraticEquationSolver />} />
            <Route path="setoperations" element={<MainSetOperations />} />
            <Route path="graphmaker" element={<MainGraphMaker />} />
            <Route path="quadraticequationintersection" element={<MainQuadraticEquationIntersection />} />
            <Route path="linearequationintersection" element={<MainLinearEquationIntersection />} />
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