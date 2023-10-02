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
import MainMatrixInverse from './mathematical/matrix_inverse/MainMatrixInverse';
import MainMatrixAdjoint from './mathematical/matrix_adjoint/MainMatrixAdjoint';
import MainMatrixAddition from './mathematical/matrix_addition/MainMatrixAddition';
import MainMatrixSubstraction from './mathematical/matrix_substraction/MainMatrixSubstraction';
import MainMatrixMultiplication from './mathematical/matrix_multiplication/MainMatrixMultiplication';
import MainMatrixDeterminant from './mathematical/matrix_determinant/MainMatrixDeterminant';
import MainMatrixTranspose from './mathematical/matrix_transpose/MainMatrixTranspose';
import MainFirstOrderDifferentialEqSolver from './mathematical/first_order_differential_eq_solver/MainFirstOrderDifferentialEqSolver';
import MainAgeCalculator from './health/age_calculator/MainAgeCalculator';
import MainBinarySubtractor from './computer_science/BinarySubtractor/MainBinarySubtractor';
import MainNumberTypeFinder from './computer_science/number_type_finder/MainNumberTypeFinder';
import MainFDMaturityCalc from './finance/fd_maturity_calculator/MainFDMaturityCalc';
import MainRDMaturityCalc from './finance/rd_maturity_calculator/MainRDMaturityCalc';
import MainANDOperator from './computer_science/and_operator/MainANDOperator';
import MainOROperator from './computer_science/or_operator/MainOROperator';
import MainLoanRepaymentCalc from './finance/loan_repayment_calc/MainLoanRepaymentCalc';

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
            <Route path="binarysubtractor" element={<MainBinarySubtractor />} />
            <Route path="octaladder" element={<MainOctalAdder />} />
            <Route path="hexadecimaladder" element={<MainHexadecimalAdder />} />
            <Route path="numbertypefinder" element={<MainNumberTypeFinder />} />
            <Route path="andoperator" element={<MainANDOperator />} />
            <Route path="oroperator" element={<MainOROperator />} />
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
            <Route path="matrixaddition" element={<MainMatrixAddition />} />
            <Route path="matrixsubstraction" element={<MainMatrixSubstraction />} />
            <Route path="matrixmultiplication" element={<MainMatrixMultiplication />} />
            <Route path="matrixtranspose" element={<MainMatrixTranspose />} />
            <Route path="matrixinverse" element={<MainMatrixInverse />} />
            <Route path="matrixadjoint" element={<MainMatrixAdjoint />} />
            <Route path="matrixdeterminant" element={<MainMatrixDeterminant />} />
            <Route path="firstorderdifferentialeqsolver" element={<MainFirstOrderDifferentialEqSolver />} />
            {/* Finance */}
            <Route path="fdmaturitycalc" element={<MainFDMaturityCalc />} />
            <Route path="rdmaturitycalc" element={<MainRDMaturityCalc />} />
            <Route path="loanrepaymentcalc" element={<MainLoanRepaymentCalc />} />
            {/* Health */}
            <Route path="bmi" element={<MainBMI />} />
            <Route path="bmr" element={<MainBMR />} />
            <Route path="bodyfat" element={<MainBodyFat />} />
            <Route path="agecalculator" element={<MainAgeCalculator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;