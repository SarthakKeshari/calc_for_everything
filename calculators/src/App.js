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
import MainDecToHexAndHexToDec from './computer_science/decToHexAndHexToDec/MainDecToHexAndHexToDec';
import MainHexToOctAndOctToHex from './computer_science/hexToOctAndOctToHex/MainHexToOctAndOctToHex';
import MainSavingsCalc from './finance/savings_calc/MainSavingsCalc';
import MainXOROperator from './computer_science/xor_operator/MainXOROperator';
import MainDecToOctAndOctToDec from './computer_science/decToOctAndOctToDec/MainDecToOctAndOctToDec';
import MainExpenseTracker from './finance/expense_tracker/MainExpenseTracker';
import MainAsciiTextToBinAndBinToAsciiText from './computer_science/asciiTextToBinAndBinToAsciiText/MainAsciiTextToBinAndBinToAsciiText';
import MainPHCalc from './chemistry/phCalc/MainPHCalc';
import MainSearchingVisualizer from './computer_science/searching_visualizer/MainSearchingVisualizer';
import MainSortingVisualizer from './computer_science/sorting_visualizer/MainSortingVisualizer';
import MainPregnancyDueDateCalc from './health/pregnancy_due_date_calc/MainPregnancyDueDateCalc';
import MainCurrencyConverter from './finance/currency_converter/MainCurrencyConverter';
import MainWorkAndTimeCalculator from './mathematical/workAndTimeCalc/MainWorkAndTimeCalculator';
import MainCoLinearPointsFinder from './mathematical/coLinearPointsFinder/MainCoLinearPointsFinder';
import MainPointsOnSameSideOfLineFinder from './mathematical/pointsOnSameSideOfLineFinder/MainPointsOnSameSideOfLineFinder';
import MainMLModelPerformanceEvaluationCalculator from './computer_science/mLModelPerformanceEvaluationCalculator/MainMLModelPerformanceEvaluationCalculator';
import MainLCMCalc from './mathematical/lcmCalc/MainLCMCalc';
import MainHCFCalc from './mathematical/hcfCalc/MainHCFCalc';
import MainAngleTypeClassifier from './mathematical/angleTypeClassifier/MainAngleTypeClassifier';
import MainFactorialCalc from './computer_science/factorialCalc/MainFactorialCalc';
import MainTrignometricValueCalc from './mathematical/trignometricValueCalc/MainTrignometricValueCalc';
import MainInfixToPostAndPreCalc from './computer_science/infixToPostAndPreCalc/MainInfixToPostAndPreCalc';
import MainPostAndPreToInfixCalc from './computer_science/postAndPreToInfixCalc/MainPostAndPreToInfixCalc';
import MainChemicalEqBalancer from './chemistry/chemicalEqBalancer/MainChemicalEqBalancer';
import MainChemicalKineticsCalc from './chemistry/chemicalKineticsCalc/MainChemicalKineticsCalc';
import MainNOROperator from './computer_science/norOperator/MainNOROperator';
import MainNANDOperator from './computer_science/nandOperator/MainNANDOperator';
import MainCodeTimeComplexityCalc from './computer_science/codeTimeComplexityCalc/MainCodeTimeComplexityCalc';
import MainPercentileCalc from './mathematical/percentileCalc/MainPercentileCalc';
import MainCoPrimeFinder from './mathematical/coPrimeFinder/MainCoPrimeFinder';
import MainMolecularWeightCalc from './chemistry/molecularWeightCalc/MainMolecularWeightCalc';
import MainProfitMarginCalc from './finance/profitMarginCalc/MainProfitMarginCalc';
import MainSimpleOnScreenCalc from './computer_science/simpleOnScreenCalc/MainSimpleOnScreenCalc';
import MainAdvOnScreenCalc from './computer_science/advOnScreenCalc/MainAdvOnScreenCalc';
import MainPolynomialEqDifferentialCalc from './mathematical/polynomialEqDifferentialCalc/MainPolynomialEqDifferentialCalc';
import MainPolynomialEqIntegralCalc from './mathematical/polynomialEqIntegralCalc/MainPolynomialEqIntegralCalc';
import MainFormBuilder from './computer_science/formBuilder/MainFormBuilder';
import MainQuestionPaperBuilder from './computer_science/questionPaperBuilder/MainQuestionPaperBuilder';
import MainPointsInOnOutOfQuadCurveFinder from './mathematical/pointsInOnOutOfQuadCurveFinder/MainPointsInOnOutOfQuadCurveFinder';
import MainPolyEqRootFinder from './mathematical/polyEqRootFinder/MainPolyEqRootFinder';
import MainCodeEditorWebDev from './computer_science/codeEditorWebDev/MainCodeEditorWebDev';
import MainFracToDecAndDecToFrac from './computer_science/fracToDecAndDecToFrac/MainFracToDecAndDecToFrac';
import MainMetricUnitConverter from './mathematical/metricUnitConverter/MainMetricUnitConverter';
import MainPercentageCalc from './mathematical/percentageCalc/MainPercentageCalc';
import MainDrugDosageCalc from './health/drugDosageCalc/MainDrugDosageCalc';
import MainIPv4ToIPv6Calc from './computer_science/iPv4ToiPv6Calc/MainIPv4ToIPv6Calc';
import MainProfitLossCalc from './mathematical/profitLossCalc/MainProfitLossCalc';
import MainAPGARScoreCalc from './health/aPGARScoreCalc/MainAPGARScoreCalc';
import MainColorCodeFormatConverter from './computer_science/colorCodeFormatConverter/MainColorCodeFormatConverter';
import MainDistanceFormula from './mathematical/distanceFormula/MainDistanceFormula';
import MainWaterIntakeCalculator from './health/waterIntakeCalculator/MainWaterIntakeCalculator';
import MainBayesianProbabilityCalculator from './mathematical/bayesianProbabilityCalc/MainBayesianProbabilityCalculator';
import MainTriangleTypeFinder from './mathematical/triangleTypeFinder/MainTriangleTypeFinder';
import MainFractionSortingCalculator from './mathematical/fractionSortingCalculator/MainFractionSortingCalculator';
import MainPlaceAndFaceValueCalc from './mathematical/placeAndFaceValueCalc/MainPlaceAndFaceValueCalc';
import MainEquatingDenominatorOfFraction from './mathematical/equatingDenominatorOfFraction/MainEquatingDenominatorOfFraction';
import MainTableOfNumber from './mathematical/tableOfNumber/MainTableOfNumber';
import MainFactorsOfNumber from './mathematical/factorsOfNumber/MainFactorsOfNumber';
import MainPythagorasTheorem from './mathematical/pythagorasTheorem/MainPythagorasTheorem';
import MainMixedToImproperAndImproperToMixedFraction from './mathematical/mixedToImproperAndImproperToMixedFraction/MainMixedToImproperAndImproperToMixedFraction'
import MainCubeRootAndSquareRootCalc from './mathematical/cubeRootAndSquareRootCalc/MainCubeRootAndSquareRootCalc';
import MainAreaOf2DShapes from './mathematical/areaOf2DShapes/MainAreaOf2DShapes';
import MainSurfaceAreaOf3DShapes from './mathematical/surfaceAreaOf3DShapes/MainSurfaceAreaOf3DShapes';
import MainSquareAndCubeCalc from './mathematical/squareAndCubeCalc/MainSquareAndCubeCalc';
import MainPressureCalc from './physics/pressureCalc/MainPressureCalc';
import MainDec2421CodeConverter from './computer_science/dec2421CodeConverter/MainDec2421CodeConverter';
import MainRomanNumeralConverter from './mathematical/romanNumeralConverter/MainRomanNumeralConverter';
import MainExcess3CodeConverter from './computer_science/excess3CodeConverter/MainExcess3CodeConverter';
import MainDataStorageConverter from './computer_science/dataStorageConverter/MainDataStorageConverter';
import MainOperationsOnFractions from './mathematical/operationsOnFractions/MainOperationsOnFractions';
import MainHammingDistance from './computer_science/hammingDistance/MainHammingDistance';
import MainTipCalc from './finance/tipCalc/MainTipCalc';
import MainStatisticalGraphCreator from './mathematical/statisticalGraphCreator/MainStatisticalGraphCreator';
import MainVolume3DShapes from './mathematical/volume3DShapes/MainVolume3DShapes';
import MainCosmoMassConverter from './physics/cosmoMassConverter/MainCosmoMassConverter';
import MainNoveltyAgeCalculator from './health/noveltyAgeCalculator/MainNoveltyAgeCalculator';
import MainReceiptGenerator from './finance/receiptGenerator/MainReceiptGenerator';
import MainCongruencyOfTriangleCalc from './mathematical/congruencyOfTriangleCalc/MainCongruencyOfTriangleCalc';
import MainNumeralsToWords from './mathematical/numeralsToWords/MainNumeralsToWords';
import MainChemicalFormulaValidator from './chemistry/chemicalFormulaValidator/MainChemicalFormulaValidator';
import MainPermutationAndCombinationCalc from './mathematical/permutationAndCombinationCalc/MainPermutationAndCombinationCalc';
import MainHammingCode from './computer_science/hammingCode/MainHammingCode';
import MainDayScheduler from './health/dayScheduler/MainDayScheduler';
import MainSimilarityOfTriangleCalc from './mathematical/similarityOfTriangleCalc/MainSimilarityOfTriangleCalc';
import MainFileDataComparator from './computer_science/fileDataComparator/MainFileDataComparator';
import MainDrawingCanvas from './art/drawingCanvas/MainDrawingCanvas';
import MainFlowChartMaker from './computer_science/flowChartMaker/MainFlowChartMaker';
import MainTaskPlanner from './health/taskPlanner/MainTaskPlanner';
import MainAmplitudeCalc from './physics/amplitudeCalc/MainAmplitudeCalc';
import MainDataCleaner from './computer_science/dataCleaner/MainDataCleaner';
import MainGDPCalc from './finance/gDPCalc/MainGDPCalc';
import MainMandalaCreater from './art/mandalaCreater/MainMandalaCreater';
import MainRandomNumberGenerator from './computer_science/randomNumberGenerator/MainRandomNumberGenerator';
import MainIPAddressCalc from './computer_science/iPAddressCalc/MainIPAddressCalc';
import MainSumAPGPHPCalc from './mathematical/sumAPGPHPCalc/MainSumAPGPHPCalc';
import MainChecksumCalc from './computer_science/checksumCalc/MainChecksumCalc';
import MainParaSummarizer from './computer_science/paraSummarizer/MainParaSummarizer';
import MainImageTextReader from './computer_science/imageTextReader/MainImageTextReader';
import MainVibrationalResponseCalc from './physics/vibrationalResponseCalc/MainVibrationalResponseCalc';
import MainIEEE754Converter from './computer_science/iEEE754Converter/MainIEEE754Converter';
import MainSatelliteLocationUsingTLE from './space/satelliteLocationUsingTLE/MainSatelliteLocationUsingTLE';
import MainDensityCalc from './physics/densityCalc/MainDensityCalc';
import MainProjectileCalc from './physics/projectileCalc/MainProjectileCalc';
import MainOhmsLawCalc from './physics/ohmsLawCalc/MainOhmsLawCalc';
import MainDifferentialCalc from './mathematical/differentialCalc/MainDifferentialCalc';
import MainEmpiricalFormulaCalc from './chemistry/empiricalFormulaCalc/MainEmpiricalFormulaCalc';
import MainImagesToPDFConsolidator from './computer_science/imagesToPDFConsolidator/MainImagesToPDFConsolidator';
import MainMKSCGSFPSCalc from './physics/mKSCGSFPSCalc/MainMKSCGSFPSCalc';
import MainCombinedGasLawsCalc from './physics/combinedGasLawsCalc/MainCombinedGasLawsCalc';
import MainMultiCurrencyChangeCalc from './finance/multiCurrencyChangeCalc/MainMultiCurrencyChangeCalc';
import MainLaplaceCalc from './mathematical/laplaceCalc/MainLaplaceCalc';
import MainComputerAlgebraSystemCASCalc from './computer_science/computerAlgebraSystemCASCalc/MainComputerAlgebraSystemCASCalc';
import MainBaseChangeCalculator from './computer_science/baseChangeCalculator/MainBaseChangeCalculator';
import MainPipesAndCisternsCalc from './mathematical/pipesAndCisternsCalc/MainPipesAndCisternsCalc';
import MainFactorialCalc_Gamma from './mathematical/factorialCalc_Gamma/MainFactorialCalc_Gamma';
import MainAnalyticalFuncCalc from './mathematical/analyticalFuncCalc/MainAnalyticalFuncCalc';
import MainPOSSOPConverter from './computer_science/pOSSOPConverter/MainPOSSOPConverter';
import MainGrayCodeCalc from './computer_science/grayCodeCalc/MainGrayCodeCalc';
import MainComplementCalc from './computer_science/complementCalc/MainComplementCalc';
import MainKineticEnergyCalc from './physics/kineticEnergyCalc/MainKineticEnergyCalc';
import MainTimeDilationCalc from './physics/timeDilationCalc/MainTimeDilationCalc';
import MainTransmissionDelayCalc from './computer_science/transmissionDelayCalc/MainTransmissionDelayCalc';
import MainPicEditor from './art/picEditor/MainPicEditor';
import MainAvatarCreater from './art/avatarCreater/MainAvatarCreater';
import MainCarrollsCaveOfKnowledge from './computer_science/carrollsCaveOfKnowledge/MainCarrollsCaveOfKnowledge';
import MainZScoreCalc from './mathematical/zScoreCalc/MainZScoreCalc';
import MainHookesLawCalc from './physics/hookesLawCalc/MainHookesLawCalc';
import MainWorkCalc from './physics/workCalc/MainWorkCalc';
import MainMUXCalc from './computer_science/mUXCalc/MainMUXCalc';
import MainPropagationDelayCalc from './computer_science/propagationDelayCalc/MainPropagationDelayCalc';
import MainPotentialEnergyCalc from './physics/potentialEnergyCalc/MainPotentialEnergyCalc';
import MainDeMUXCalc from './computer_science/deMUXCalc/MainDeMUXCalc';
import MainZTransformCalc from './mathematical/zTransformCalc/MainZTransformCalc';
import MainQRCodeGenerator from './computer_science/qRCodeGenerator/MainQRCodeGenerator';
import MainGravitationalForceCalc from './physics/gravitationalForceCalc/MainGravitationalForceCalc';
import MainHomogeneousInterpreter from './mathematical/homogeneousInterpreter/MainHomogeneousInterpreter';
import MainSetupDelayCalc from './computer_science/setupDelayCalc/MainSetupDelayCalc';
import MainVarianceStandardDeviationConverter from './mathematical/varianceStandardDeviationConverter/MainVarianceStandardDeviationConverter';
import MainStatisticsMeanCalc from './mathematical/statisticsMeanCalc/MainStatisticsMeanCalc';
import MainStatisticsMedianCalc from './mathematical/statisticsMedianCalc/MainStatisticsMedianCalc';
import MainDNARNAConverter from './biology/dNARNAConverter/MainDNARNAConverter';
import MainRMSValueCalc from './mathematical/rMSValueCalc/MainRMSValueCalc';
import MainPacketsOrderCalc from './computer_science/packetsOrderCalc/MainPacketsOrderCalc';
import MainBase64EncoderDecoder from './computer_science/base64EncoderDecoder/MainBase64EncoderDecoder';
import MainMeanDeviationAboutMedianCalc from './mathematical/meanDeviationAboutMedianCalc/MainMeanDeviationAboutMedianCalc';
import MainSleepCalc from './health/sleepCalc/MainSleepCalc';
import MainCoefOfMeanDeviationCalc from './mathematical/coefOfMeanDeviationCalc/MainCoefOfMeanDeviationCalc';
import MainModeCalc from './mathematical/modeCalc/MainModeCalc';
import MainSetOperationsExtended from './mathematical/setOperationsExtended/MainSetOperationsExtended';
import MainUniversityGPACalc from './mathematical/universityGPACalc/MainUniversityGPACalc';
import MainTorqueCalc from './physics/torqueCalc/MainTorqueCalc';
import MainAveragesCalculator from './mathematical/averagesCalculator/MainAveragesCalculator';
import MainMMMCalc from './mathematical/mMMCalc/MainMMMCalc';
import MainDrugHalfLifeClearanceCalc from './biology/drugHalfLifeClearanceCalc/MainDrugHalfLifeClearanceCalc';
import MainMacronutrientRatioCalc from './health/macronutrientRatioCalc/MainMacronutrientRatioCalc';
import MainPartialFractionsCalc from './mathematical/partialFractionsCalc/MainPartialFractionsCalc';
import MainBinaryStringWeightCalc from './computer_science/binaryStringWeightCalc/MainBinaryStringWeightCalc';
import MainPointsWithMinimumHammingDistanceCalc from './computer_science/pointsWithMinimumHammingDistanceCalc/MainPointsWithMinimumHammingDistanceCalc';
import MainPOSETCalc from './mathematical/pOSETCalc/MainPOSETCalc';
import MainMolesCalc from './chemistry/molesCalc/MainMolesCalc';
import MainMolarityCalc from './chemistry/molarityCalc/MainMolarityCalc';
import MainFuelCostCalc from './finance/fuelCostCalc/MainFuelCostCalc';
import MainEquivalentMassCalc from './chemistry/equivalentMassCalc/MainEquivalentMassCalc';
import MainFrictionCalc from './physics/frictionCalc/MainFrictionCalc';
import MainProjectileRangeCalc from './physics/projectileRangeCalc/MainProjectileRangeCalc';
import MainBinaryTreeVisualizer from './computer_science/binaryTreeVisualizer/MainBinaryTreeVisualizer';
import MainMomentumCalc from './physics/momentumCalc/MainMomentumCalc';
import MainCRCCalc from './computer_science/cRCCalc/MainCRCCalc';
import MainMolalityCalc from './chemistry/molalityCalc/MainMolalityCalc';
import MainQuartilesCalc from './mathematical/quartilesCalc/MainQuartilesCalc';
import MainNotCalc from './computer_science/notCalc/MainNotCalc';
import MainTATCalc from './computer_science/tATCalc/MainTATCalc';
import MainLowerBoundUpperBoundCalc from './mathematical/lowerBoundUpperBoundCalc/MainLowerBoundUpperBoundCalc';
import MainMolarMassCalc from './chemistry/molarMassCalc/MainMolarMassCalc';
import MainPlanetaryGravitationalCalc from './physics/planetaryGravitationalCalc/MainPlanetaryGravitationalCalc';
import MainGravityAccelerationCalc from './physics/gravityAccelerationCalc/MainGravityAccelerationCalc';
import MainStopwatch from './computer_science/stopwatch/MainStopwatch';
import MainGoldenRatioCalc from './mathematical/goldenRatioCalc/MainGoldenRatioCalc';
import MainDiamondProblemSolver from './mathematical/diamondProblemSolver/MainDiamondProblemSolver';
import MainPPICalc from './computer_science/pPICalc/MainPPICalc';
import MainIdealGasLawCalc from './physics/idealGasLawCalc/MainIdealGasLawCalc';
import MainInternalAnglesOfAPolygon from './mathematical/internalAnglesOfAPolygon/MainInternalAnglesOfAPolygon';
import MainNthRootCalc from './mathematical/nthRootCalc/MainNthRootCalc';
import MainWordCounter from './computer_science/wordCounter/MainWordCounter';
import MainCrossProductCalc from './physics/crossProductCalc/MainCrossProductCalc';
import MainDotProductCalc from './physics/dotProductCalc/MainDotProductCalc';
import MainElasticPotentialCalc from './physics/elasticPotentialCalc/MainElasticPotentialCalc';
import MainCoinFlipper from './sports_games/coinFlipper/MainCoinFlipper';
import MainExternalAnglesOfAPolygonCalc from './mathematical/externalAnglesOfAPolygonCalc/MainExternalAnglesOfAPolygonCalc';
import MainCoInteriorPairs from './mathematical/coInteriorPairs/MainCoInteriorPairs';
import MainIrrationalRationalConverter from './mathematical/irrationalRationalConverter/MainIrrationalRationalConverter';
import MainCharacterCounter from './computer_science/characterCounter/MainCharacterCounter';
import MainRomanNumeralOperationCalc from './computer_science/romanNumeralOperationCalc/MainRomanNumeralOperationCalc';
import MainVietaTheoremCalc from './mathematical/vietaTheoremCalc/MainVietaTheoremCalc';
import MainMolarConcentrationCalc from './chemistry/molarConcentrationCalc/MainMolarConcentrationCalc';
import MainBingoNumberGenerator from './sports_games/bingoNumberGenerator/MainBingoNumberGenerator';
import MainMarginCalc from './mathematical/marginCalc/MainMarginCalc';
import MainExponentsSolver from './mathematical/exponentsSolver/MainExponentsSolver';
import MainRoofingCalc from './finance/roofingCalc/MainRoofingCalc';
import MainDiceRoller from './sports_games/diceRoller/MainDiceRoller';

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
            <Route path="dechexandhexdec" element={<MainDecToHexAndHexToDec />} />
            <Route path="hexoctandocthex" element={<MainHexToOctAndOctToHex />} />
            <Route path="decoctandoctdec" element={<MainDecToOctAndOctToDec />} />
            <Route path="fracdecandDecfrac" element={<MainFracToDecAndDecToFrac />} />
            <Route path="asciitextbinAndbinasciitext" element={<MainAsciiTextToBinAndBinToAsciiText />} />
            <Route path="binaryadder" element={<MainBinaryAdder />} />
            <Route path="binarysubtractor" element={<MainBinarySubtractor />} />
            <Route path="octaladder" element={<MainOctalAdder />} />
            <Route path="hexadecimaladder" element={<MainHexadecimalAdder />} />
            <Route path="numbertypefinder" element={<MainNumberTypeFinder />} />
            <Route path="andoperator" element={<MainANDOperator />} />
            <Route path="oroperator" element={<MainOROperator />} />
            <Route path="xoroperator" element={<MainXOROperator />} />
            <Route path="noroperator" element={<MainNOROperator />} />
            <Route path="nandoperator" element={<MainNANDOperator />} />
            <Route path="searchingvisualizer" element={<MainSearchingVisualizer />} />
            <Route path="sortingvisualizer" element={<MainSortingVisualizer />} />
            <Route path="mlmodelperformanceevaluationcalculator" element={<MainMLModelPerformanceEvaluationCalculator />} />
            <Route path="factorialcalc" element={<MainFactorialCalc />} />
            <Route path="infixtopostandprecalc" element={<MainInfixToPostAndPreCalc />} />
            <Route path="postandpretoinfixcalc" element={<MainPostAndPreToInfixCalc />} />
            <Route path="codetimecomplexitycalc" element={<MainCodeTimeComplexityCalc />} />
            <Route path="simpleonscreencalc" element={<MainSimpleOnScreenCalc />} />
            <Route path="advonscreencalc" element={<MainAdvOnScreenCalc />} />
            <Route path="formbuilder" element={<MainFormBuilder />} />
            <Route path="quespaperbuilder" element={<MainQuestionPaperBuilder />} />
            <Route path="codeeditorforwebdev" element={<MainCodeEditorWebDev />} />
            <Route path="ipv4toipv6calc" element={<MainIPv4ToIPv6Calc />} />
            <Route path="colorcodeformatconverter" element={<MainColorCodeFormatConverter />} />
            <Route path="dec2421codeconverter" element={<MainDec2421CodeConverter />} />
            <Route path="excess3codeconverter" element={<MainExcess3CodeConverter />} />
            <Route path="datastorageconverter" element={<MainDataStorageConverter />} />
            <Route path="hammingdistancecalc" element={<MainHammingDistance />} />
            <Route path="hammingcodecalc" element={<MainHammingCode />} />
            <Route path="filedatacomparator" element={<MainFileDataComparator />} />
            <Route path="flowchartmaker" element={<MainFlowChartMaker />} />
            <Route path="datacleaner" element={<MainDataCleaner />} />
            <Route path="randomnumbergenerator" element={<MainRandomNumberGenerator />} />
            <Route path="ipaddresscalc" element={<MainIPAddressCalc />} />
            <Route path="checksumcalc" element={<MainChecksumCalc />} />
            <Route path="parasummarizer" element={<MainParaSummarizer />} />
            <Route path="imagetextreader" element={<MainImageTextReader />} />
            <Route path="ieee754converter" element={<MainIEEE754Converter />} />
            <Route path="imagestopdfconsolidator" element={<MainImagesToPDFConsolidator />} />
            <Route path="computeralgebrasystemcascalc" element={<MainComputerAlgebraSystemCASCalc />} />
            <Route path="basechangecalc" element={<MainBaseChangeCalculator />} />
            <Route path="possopconverter" element={<MainPOSSOPConverter />} />
            <Route path="graycodecalc" element={<MainGrayCodeCalc />} />
            <Route path="complementcalc" element={<MainComplementCalc />} />
            <Route path="transmissiondelaycalc" element={<MainTransmissionDelayCalc />} />
            <Route path="carrollscaveofknowledgecalc" element={<MainCarrollsCaveOfKnowledge />} />
            <Route path="muxcalc" element={<MainMUXCalc />} />
            <Route path="propagationdelaycalc" element={<MainPropagationDelayCalc />} />
            <Route path="demuxcalc" element={<MainDeMUXCalc />} />
            <Route path="qrcodegenerator" element={<MainQRCodeGenerator />} />
            <Route path="setupdelaycalc" element={<MainSetupDelayCalc />} />
            <Route path="packetsordercalc" element={<MainPacketsOrderCalc />} />
            <Route path="base64encoderdecoder" element={<MainBase64EncoderDecoder />} />
            <Route path="binarystringweightcalc" element={<MainBinaryStringWeightCalc />} />
            <Route path="pointswithminimumhammingdistancecalc" element={<MainPointsWithMinimumHammingDistanceCalc />} />
            <Route path="binarytreevisualizer" element={<MainBinaryTreeVisualizer />} />
            <Route path="crccalc" element={<MainCRCCalc />} />
            <Route path="notcalc" element={<MainNotCalc />} />
            <Route path="tatcalc" element={<MainTATCalc />} />
            <Route path="stopwatch" element={<MainStopwatch />} />
            <Route path="ppicalc" element={<MainPPICalc />} />
            <Route path="wordcounter" element={<MainWordCounter />} />
            <Route path="charactercounter" element={<MainCharacterCounter />} />
            {/* Mathematical */}
            <Route path="simpleinterest" element={<MainSI />} />
            <Route path="compoundinterest" element={<MainCI />} />
            <Route path="statistics" element={<MainStatistics />} />
            <Route path="primefactors" element={<MainPrimeFactors />} />
            <Route path="logantilog" element={<MainLogAntilog />} />
            <Route path="bodmassolver" element={<MainBodmasSolver />} />
            <Route path="quadraticequationsolver" element={<MainQuadraticEquationSolver />} />
            <Route path="polyeqrootfinder" element={<MainPolyEqRootFinder />} />
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
            <Route path="workandtimecalculator" element={<MainWorkAndTimeCalculator />} />
            <Route path="colinearpointsfinder" element={<MainCoLinearPointsFinder />} />
            <Route path="groupingpointsonsamesideofline" element={<MainPointsOnSameSideOfLineFinder />} />
            <Route path="groupingpointsoninsideoutsidequadraticcurve" element={<MainPointsInOnOutOfQuadCurveFinder />} />
            <Route path="polynomialeqdifferentialcalc" element={<MainPolynomialEqDifferentialCalc />} />
            <Route path="polynomialeqintegralcalc" element={<MainPolynomialEqIntegralCalc />} />
            <Route path="lcmcalc" element={<MainLCMCalc />} />
            <Route path="hcfcalc" element={<MainHCFCalc />} />
            <Route path="angletypeclassifier" element={<MainAngleTypeClassifier />} />
            <Route path="trignometricvaluecalc" element={<MainTrignometricValueCalc />} />
            <Route path="percentagecalc" element={<MainPercentageCalc />} />
            <Route path="percentilecalc" element={<MainPercentileCalc />} />
            <Route path="coprimefinder" element={<MainCoPrimeFinder />} />
            <Route path="metricunitconverter" element={<MainMetricUnitConverter />} />
            <Route path="profitlosscalc" element={<MainProfitLossCalc />} />
            <Route path="distancecalc" element={<MainDistanceFormula />} />
            <Route path="bayesianprobabilitycalculator" element={<MainBayesianProbabilityCalculator />} />
            <Route path="triangletypefinder" element={<MainTriangleTypeFinder />} />
            <Route path="fractionsortingcalculator" element={<MainFractionSortingCalculator />} />
            <Route path="placeandfacevaluecalc" element={<MainPlaceAndFaceValueCalc/> } />
            <Route path="equatingdenominatoroffraction" element={<MainEquatingDenominatorOfFraction/> } />
            <Route path="tableofnumber" element={<MainTableOfNumber/> } />
            <Route path="factorsofnumber" element={<MainFactorsOfNumber/> } />
            <Route path="pythagorastheorem" element={<MainPythagorasTheorem/> } />
            <Route path="mixedtoimproperanimpropertomixedfractioncalc" element={<MainMixedToImproperAndImproperToMixedFraction /> } />
            <Route path="cuberootandsquarerootcalc" element={<MainCubeRootAndSquareRootCalc /> } />
            <Route path="areaof2dshapes" element={<MainAreaOf2DShapes /> } />
            <Route path="surfaceareaof3dshapes" element={<MainSurfaceAreaOf3DShapes /> } />
            <Route path="squareandcubecalc" element={<MainSquareAndCubeCalc /> } />
            <Route path="romannumeralconverter" element={<MainRomanNumeralConverter /> } />
            <Route path="operationsonfractionscalc" element={<MainOperationsOnFractions /> } />
            <Route path="statisticalgraphcreator" element={<MainStatisticalGraphCreator /> } />
            <Route path="volume3dshapescalc" element={<MainVolume3DShapes /> } />
            <Route path="congruencyoftrianglecalc" element={<MainCongruencyOfTriangleCalc /> } />
            <Route path="numeralstowordsconverter" element={<MainNumeralsToWords /> } />
            <Route path="permutationandcombinationcalc" element={<MainPermutationAndCombinationCalc /> } />
            <Route path="similarityoftrianglecalc" element={<MainSimilarityOfTriangleCalc /> } />
            <Route path="sumofapgphpcalc" element={<MainSumAPGPHPCalc /> } />
            <Route path="differentialcalc" element={<MainDifferentialCalc /> } />
            <Route path="laplacecalc" element={<MainLaplaceCalc /> } />
            <Route path="pipesandcisternscalc" element={<MainPipesAndCisternsCalc /> } />
            <Route path="factorialcalcgamma" element={<MainFactorialCalc_Gamma /> } />
            <Route path="analyticalFuncCalc" element={<MainAnalyticalFuncCalc /> } />
            <Route path="zscorecalc" element={<MainZScoreCalc />} />
            <Route path="ztransformcalc" element={<MainZTransformCalc />} />
            <Route path="homogeneousinterpreter" element={<MainHomogeneousInterpreter />} />
            <Route path="variancestandarddeviationconverter" element={<MainVarianceStandardDeviationConverter />} />
            <Route path="statisticsmeancalc" element={<MainStatisticsMeanCalc />} />
            <Route path="statisticsmediancalc" element={<MainStatisticsMedianCalc />} />
            <Route path="rmsvaluecalc" element={<MainRMSValueCalc />} />
            <Route path="meandeviationaboutmediancalc" element={<MainMeanDeviationAboutMedianCalc />} />
            <Route path="coefofmeandeviationcalc" element={<MainCoefOfMeanDeviationCalc />} />
            <Route path="modecalc" element={<MainModeCalc />} />
            <Route path="setoperationsextendedcalc" element={<MainSetOperationsExtended />} />
            <Route path="universitygpacalc" element={<MainUniversityGPACalc />} />
            <Route path="averagescalc" element={<MainAveragesCalculator />} />
            <Route path="mmmcalc" element={<MainMMMCalc />} />
            <Route path="partialfractionscalc" element={<MainPartialFractionsCalc />} />
            <Route path="posetcalc" element={<MainPOSETCalc />} />
            <Route path="quartilescalc" element={<MainQuartilesCalc />} />
            <Route path="lowerboundupperboundcalc" element={<MainLowerBoundUpperBoundCalc />} />
            <Route path="goldenratiocalc" element={<MainGoldenRatioCalc />} />
            <Route path="diamondproblemsolver" element={<MainDiamondProblemSolver />} />
            <Route path="internalanglesofapolygoncalc" element={<MainInternalAnglesOfAPolygon />} />
            <Route path="nthrootcalc" element={<MainNthRootCalc />} />
            <Route path="externalanglesofapolygoncalc" element={<MainExternalAnglesOfAPolygonCalc />} />
            <Route path="cointeriorpairscalc" element={<MainCoInteriorPairs />} />
            <Route path="irrationaltorationalconverter" element={<MainIrrationalRationalConverter />} />
            <Route path="romannumeraloperationcalc" element={<MainRomanNumeralOperationCalc />} />
            <Route path="vietatheoremcalc" element={<MainVietaTheoremCalc />} />
            <Route path="margincalc" element={<MainMarginCalc />} />
            <Route path="exponentssolver" element={<MainExponentsSolver />} />
            {/* Chemistry */}
            <Route path="phcalc" element={<MainPHCalc />} />
            <Route path="chemicaleqbalancer" element={<MainChemicalEqBalancer />} />
            <Route path="chemicalkineticscalc" element={<MainChemicalKineticsCalc />} />
            <Route path="molecularweightcalc" element={<MainMolecularWeightCalc />} />
            <Route path="chemicalformulavalidator" element={<MainChemicalFormulaValidator />} />
            <Route path="empiricalformulacalc" element={<MainEmpiricalFormulaCalc />} />
            <Route path="molescalc" element={<MainMolesCalc />} />
            <Route path="molaritycalc" element={<MainMolarityCalc />} />
            <Route path="equivalentmasscalc" element={<MainEquivalentMassCalc />} />
            <Route path="molalitycalc" element={<MainMolalityCalc />} />
            <Route path="molarmasscalc" element={<MainMolarMassCalc />} />
            <Route path="molarconcentrationcalc" element={<MainMolarConcentrationCalc />} />
            {/* Physics */}
            <Route path="pressurecalc" element={<MainPressureCalc />} />
            <Route path="cosmomassconverter" element={<MainCosmoMassConverter />} />
            <Route path="amplitudecalculator" element={<MainAmplitudeCalc />} />
            <Route path="vibrationalresponsecalc" element={<MainVibrationalResponseCalc />} />
            <Route path="densitycalc" element={<MainDensityCalc />} />
            <Route path="projectilecalc" element={<MainProjectileCalc />} />
            <Route path="ohmslawcalc" element={<MainOhmsLawCalc />} />
            <Route path="mkscgsfpscalc" element={<MainMKSCGSFPSCalc />} />
            <Route path="combinedgaslawscalc" element={<MainCombinedGasLawsCalc />} />
            <Route path="kineticenergycalc" element={<MainKineticEnergyCalc />} />
            <Route path="timedilationcalc" element={<MainTimeDilationCalc />} />
            <Route path="hookeslawcalc" element={<MainHookesLawCalc />} />
            <Route path="workcalc" element={<MainWorkCalc />} />
            <Route path="potentialenergycalc" element={<MainPotentialEnergyCalc />} />
            <Route path="gravitationalforcecalc" element={<MainGravitationalForceCalc />} />
            <Route path="torquecalc" element={<MainTorqueCalc />} />
            <Route path="frictioncalc" element={<MainFrictionCalc />} />
            <Route path="projectilerangecalc" element={<MainProjectileRangeCalc />} />
            <Route path="momentumcalc" element={<MainMomentumCalc />} />
            <Route path="planetarygravitationalcalc" element={<MainPlanetaryGravitationalCalc />} />
            <Route path="gravityaccelerationcalc" element={<MainGravityAccelerationCalc />} />
            <Route path="idealgaslawcalc" element={<MainIdealGasLawCalc />} />
            <Route path="crossproductcalc" element={<MainCrossProductCalc />} />
            <Route path="dotproductcalc" element={<MainDotProductCalc />} />
            <Route path="elasticpotentialcalc" element={<MainElasticPotentialCalc />} />
            {/* Biology */}
            <Route path="dnarnaconverter" element={<MainDNARNAConverter />} />
            <Route path="drughalflifeclearancecalc" element={<MainDrugHalfLifeClearanceCalc />} />
            {/* Finance */}
            <Route path="fdmaturitycalc" element={<MainFDMaturityCalc />} />
            <Route path="rdmaturitycalc" element={<MainRDMaturityCalc />} />
            <Route path="loanrepaymentcalc" element={<MainLoanRepaymentCalc />} />
            <Route path="savingscalc" element={<MainSavingsCalc />} />
            <Route path="expensetracker" element={<MainExpenseTracker />} />
            <Route path="currencyconverter" element={<MainCurrencyConverter />} />
            <Route path="profitmargincalc" element={<MainProfitMarginCalc />} />
            <Route path="tipcalc" element={<MainTipCalc />} />
            <Route path="receiptgenerator" element={<MainReceiptGenerator />} />
            <Route path="gdpcalc" element={<MainGDPCalc />} />
            <Route path="multicurrencychangecalc" element={<MainMultiCurrencyChangeCalc />} />
            <Route path="fuelcostcalc" element={<MainFuelCostCalc />} />
            <Route path="roofingcalc" element={<MainRoofingCalc />} />
            {/* Health */}
            <Route path="bmi" element={<MainBMI />} />
            <Route path="bmr" element={<MainBMR />} />
            <Route path="bodyfat" element={<MainBodyFat />} />
            <Route path="agecalculator" element={<MainAgeCalculator />} />
            <Route path="pregnancyduedatecalc" element={<MainPregnancyDueDateCalc />} />
            <Route path="drugdosagecalc" element={<MainDrugDosageCalc />} />
            <Route path="apgarscorecalc" element={<MainAPGARScoreCalc />} />
            <Route path="waterintakecalc" element={<MainWaterIntakeCalculator />} />
            <Route path="noveltyagecalc" element={<MainNoveltyAgeCalculator />} />
            <Route path="dayscheduler" element={<MainDayScheduler />} />
            <Route path="taskplanner" element={<MainTaskPlanner />} />
            <Route path="sleepcalc" element={<MainSleepCalc />} />
            <Route path="macronutrientratiocalc" element={<MainMacronutrientRatioCalc />} />
            {/* Art */}
            <Route path="drawingcanvas" element={<MainDrawingCanvas />} />
            <Route path="mandalacreater" element={<MainMandalaCreater />} />
            <Route path="piceditor" element={<MainPicEditor />} />
            <Route path="avatarcreater" element={<MainAvatarCreater />} />
            {/* Games/Sports */}
            <Route path="coinflipper" element={<MainCoinFlipper />} />
            <Route path="bingonumbergenerator" element={<MainBingoNumberGenerator />} />
            <Route path="diceroller" element={<MainDiceRoller />} />
            {/* Space */}
            <Route path="satellitelocationusingtle" element={<MainSatelliteLocationUsingTLE />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
