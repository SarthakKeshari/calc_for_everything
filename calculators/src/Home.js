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
            <HomeGridItem calcName="Polynomial Equation Differential Calculator" path="/polynomialeqdifferentialcalc"/>
            <HomeGridItem calcName="Polynomial Equation Integral Calculator" path="/polynomialeqintegralcalc"/>
            <HomeGridItem calcName="LCM Calculator" path="/lcmcalc"/>
            <HomeGridItem calcName="HCF Calculator" path="/hcfcalc"/>
            <HomeGridItem calcName="Angle Type Classifier" path="/angletypeclassifier"/>
            <HomeGridItem calcName="Trignometric Value Calculator" path="/trignometricvaluecalc"/>
            <HomeGridItem calcName="Percentile Calculator" path="/percentilecalc"/>
            <HomeGridItem calcName="Co-Prime Finder" path="/coprimefinder"/>
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
        <Typography pt={1} variant='h5'>Finance</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="FD Maturity Calculator" path="/fdmaturitycalc"/>
            <HomeGridItem calcName="RD Maturity Calculator" path="/rdmaturitycalc"/>
            <HomeGridItem calcName="Loan Repayment Calculator" path="/loanrepaymentcalc"/>
            <HomeGridItem calcName="Savings Calculator" path="/savingscalc"/>
            <HomeGridItem calcName="Expense Tracker" path="/expensetracker"/>
            <HomeGridItem calcName="Currency Converter" path="/currencyconverter"/>
            <HomeGridItem calcName="Profit Margin Calculator" path="/profitmargincalc"/>
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
        </Grid>
        <br/>
    </Container>
  );
}