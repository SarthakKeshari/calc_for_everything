import * as React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import HomeGridItem from './components/HomeGridItem';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
        <Typography pt={1} variant='h5'>Computer Science</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="Decimal to Binary and Binary to Decimal" path="/decbinandbindec"/>
            <HomeGridItem calcName="Hexadecimal to Binary and Binary to Hexadecimal" path="/hexbinandbinhex"/>
            <HomeGridItem calcName="Octal to Binary and Binary to Octal" path="/octbinandbinoct"/>
            <HomeGridItem calcName="Decimal to Hexadecimal and Hexadecimal to Decimal" path="/dechexandhexdec"/>
            <HomeGridItem calcName="Hexadecimal to Octal and Octal to Hexadecimal" path="/hexoctandocthex"/>
            <HomeGridItem calcName="Decimal to Octal and Octal to Decimal" path="/decoctandoctdec"/>
            <HomeGridItem calcName="Fraction to Decimal and Decimal to Fraction" path="/fracdecandDecfrac"/>
            <HomeGridItem calcName="ASCII Text to Binary and Binary to ASCII Text" path="/asciitextbinAndbinasciitext"/>
            <HomeGridItem calcName="Binary Adder" path="/binaryadder"/>
            <HomeGridItem calcName="Binary Subtractor" path="/binarysubtractor"/>
            <HomeGridItem calcName="Octal Adder" path="/octaladder"/>
            <HomeGridItem calcName="Hexadecimal Adder" path="/hexadecimaladder"/>
            <HomeGridItem calcName="Number Type Finder" path="/numbertypefinder"/>
            <HomeGridItem calcName="AND Operator" path="/andoperator"/>
            <HomeGridItem calcName="OR Operator" path="/oroperator"/>
            <HomeGridItem calcName="XOR Operator" path="/xoroperator"/>
            <HomeGridItem calcName="NOR Operator" path="/noroperator"/>
            <HomeGridItem calcName="NAND Operator" path="/nandoperator"/>
            <HomeGridItem calcName="Searching Visualizer" path="/searchingvisualizer"/>
            <HomeGridItem calcName="Sorting Visualizer" path="/sortingvisualizer"/>
            <HomeGridItem calcName="ML Model Performance Evaluation Calculator" path="/mlmodelperformanceevaluationcalculator"/>
            <HomeGridItem calcName="Factorial Calculator" path="/factorialcalc"/>
            <HomeGridItem calcName="Infix To Postfix And Prefix Calculator" path="/infixtopostandprecalc"/>
            <HomeGridItem calcName="Postfix And Prefix To Infix Calculator" path="/postandpretoinfixcalc"/>
            <HomeGridItem calcName="Code Time Complexity Calculator" path="/codetimecomplexitycalc"/>
            <HomeGridItem calcName="Simple On-Screen Calculator" path="/simpleonscreencalc"/>
            <HomeGridItem calcName="Advance On-Screen Calculator" path="/advonscreencalc"/>
            <HomeGridItem calcName="Form Buider" path="/formbuilder"/>
            <HomeGridItem calcName="Question Paper Buider" path="/quespaperbuilder"/>
            <HomeGridItem calcName="Code Editor for Web Dev" path="/codeeditorforwebdev"/>
            <HomeGridItem calcName="IPv4 To IPv6 Calculator" path="/ipv4toipv6calc"/>
            <HomeGridItem calcName="Color Code Format Converter" path="/colorcodeformatconverter"/>
            <HomeGridItem calcName="Decimal/2421 Code Converter" path="/dec2421codeconverter"/>
            <HomeGridItem calcName="Excess-3 Code Converter" path="/excess3codeconverter"/>
            <HomeGridItem calcName="Data Storage Converter" path="/datastorageconverter"/>
            <HomeGridItem calcName="Hamming Distance Calculator" path="/hammingdistancecalc"/>
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Mathematical</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="Simple Interest" path="/simpleinterest"/>
            <HomeGridItem calcName="Compound Interest" path="/compoundinterest"/>
            <HomeGridItem calcName="Statistics" path="/statistics"/>
            <HomeGridItem calcName="Prime Factors" path="/primefactors"/>
            <HomeGridItem calcName="Log and Antilog" path="/logantilog"/>
            <HomeGridItem calcName="BODMAS Solver" path="/bodmassolver"/>
            <HomeGridItem calcName="Quadratic Equation Solver" path="/quadraticequationsolver"/>
            <HomeGridItem calcName="Polynomial Equation Root Finder" path="/polyeqrootfinder"/>
            <HomeGridItem calcName="Set Operations" path="/setoperations"/>
            <HomeGridItem calcName="Graph Maker" path="/graphmaker"/>
            <HomeGridItem calcName="Quadratic Equation Intersection" path="/quadraticequationintersection"/>
            <HomeGridItem calcName="Linear Equation Intersection" path="/linearequationintersection"/>
            <HomeGridItem calcName="Matrix Addition" path="/matrixaddition"/>
            <HomeGridItem calcName="Matrix Substraction" path="/matrixsubstraction"/>
            <HomeGridItem calcName="Matrix Multiplication" path="/matrixmultiplication"/>
            <HomeGridItem calcName="Matrix Transpose" path="/matrixtranspose"/>
            <HomeGridItem calcName="Matrix Inverse" path="/matrixinverse"/>
            <HomeGridItem calcName="Matrix Adjoint" path="/matrixadjoint"/>
            <HomeGridItem calcName="Matrix Determinant" path="/matrixdeterminant"/>
            <HomeGridItem calcName="First Order Differential Equation Solver" path="/firstorderdifferentialeqsolver"/>
            <HomeGridItem calcName="Work and Time Calculator" path="/workandtimecalculator"/>
            <HomeGridItem calcName="Co-Linear Points Finder" path="/colinearpointsfinder"/>
            <HomeGridItem calcName="Grouping Points On Same Side Of Line" path="/groupingpointsonsamesideofline"/>
            <HomeGridItem calcName="Grouping Points On/Inside/Outside of Quadratic Curve" path="/groupingpointsoninsideoutsidequadraticcurve"/>
            <HomeGridItem calcName="Polynomial Equation Differential Calculator" path="/polynomialeqdifferentialcalc"/>
            <HomeGridItem calcName="Polynomial Equation Integral Calculator" path="/polynomialeqintegralcalc"/>
            <HomeGridItem calcName="LCM Calculator" path="/lcmcalc"/>
            <HomeGridItem calcName="HCF Calculator" path="/hcfcalc"/>
            <HomeGridItem calcName="Angle Type Classifier" path="/angletypeclassifier"/>
            <HomeGridItem calcName="Trignometric Value Calculator" path="/trignometricvaluecalc"/>
            <HomeGridItem calcName="Percentage Calculator" path="/percentagecalc"/>
            <HomeGridItem calcName="Percentile Calculator" path="/percentilecalc"/>
            <HomeGridItem calcName="Co-Prime Finder" path="/coprimefinder"/>
            <HomeGridItem calcName="Metric Unit Converter" path="/metricunitconverter"/>
            <HomeGridItem calcName="Profit Loss Calculator" path="/profitlosscalc"/>
            <HomeGridItem calcName="Distance Calculator" path="/distancecalc"/>
            <HomeGridItem calcName="Bayesian Probability Calculator" path="/bayesianprobabilitycalculator"/>
            <HomeGridItem calcName="Triangle Type Finder" path="/triangletypefinder"/>
            <HomeGridItem calcName="Fraction Sorting Calculator" path="/fractionsortingcalculator"/>
            <HomeGridItem calcName="Place And Face Value Calculator" path="/placeandfacevaluecalc"/>
            <HomeGridItem calcName="Equating Denominator Of Fraction" path="/equatingdenominatoroffraction"/>
            <HomeGridItem calcName="Table Of A Number" path="/tableofnumber"/>
            <HomeGridItem calcName="Factors Of A Number" path="/factorsofnumber"/>
            <HomeGridItem calcName="Pythagoras Theorem Calculator" path="/pythagorastheorem"/>
            <HomeGridItem calcName="Mixed To Improper And Improper To Mixed Fraction Calculator" path="/mixedtoimproperanimpropertomixedfractioncalc"/>
            <HomeGridItem calcName="Cube Root And Square Root Calculator" path="/cuberootandsquarerootcalc"/>
            <HomeGridItem calcName="Area Of 2D Shapes Calculator" path="/areaof2dshapes"/>
            <HomeGridItem calcName="Surface Area Of 3D Shapes Calculator" path="/surfaceareaof3dshapes"/>
            <HomeGridItem calcName="Square And Cube Calculator" path="/squareandcubecalc"/>
            <HomeGridItem calcName="Roman Numeral Converter" path="/romannumeralconverter"/>
            <HomeGridItem calcName="Operations On Fractions Calculator" path="/operationsonfractionscalc"/>
            <HomeGridItem calcName="Statistical Graph Creator" path="/statisticalgraphcreator"/>
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Chemistry</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="pH Calculator" path="/phcalc"/>
            <HomeGridItem calcName="Chemical Equation Balancer" path="/chemicaleqbalancer"/>
            <HomeGridItem calcName="Chemical Kinetics Calculator" path="/chemicalkineticscalc"/>
            <HomeGridItem calcName="Molecular Weight Calculator" path="/molecularweightcalc"/>
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Physics</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="Pressure Calculator" path="/pressurecalc"/>
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Finance</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="FD Maturity Calculator" path="/fdmaturitycalc"/>
            <HomeGridItem calcName="RD Maturity Calculator" path="/rdmaturitycalc"/>
            <HomeGridItem calcName="Loan Repayment/EMI Calculator" path="/loanrepaymentcalc"/>
            <HomeGridItem calcName="Savings Calculator" path="/savingscalc"/>
            <HomeGridItem calcName="Expense Tracker" path="/expensetracker"/>
            <HomeGridItem calcName="Currency Converter" path="/currencyconverter"/>
            <HomeGridItem calcName="Profit Margin Calculator" path="/profitmargincalc"/>
            <HomeGridItem calcName="Tip Calculator" path="/tipcalc"/>
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Health</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="BMI" path="/bmi"/>
            <HomeGridItem calcName="BMR" path="/bmr"/>
            <HomeGridItem calcName="Body Fat" path="/bodyfat"/>
            <HomeGridItem calcName="Age Calculator" path="/agecalculator"/>
            <HomeGridItem calcName="Pregnancy Due Date Calculator" path="/pregnancyduedatecalc"/>
            <HomeGridItem calcName="Drug Dosage Calculator" path="/drugdosagecalc"/>
            <HomeGridItem calcName="APGAR Score Calculator" path="/apgarscorecalc"/>
            <HomeGridItem calcName="Water Intake Calculator" path="/waterintakecalc"/>
        </Grid>
        <br/>
    </Container>
  );
}