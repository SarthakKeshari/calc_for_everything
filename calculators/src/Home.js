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
            <HomeGridItem calcName="Hamming Code Calculator" path="/hammingcodecalc"/>
            <HomeGridItem calcName="File/Data Comparator" path="/filedatacomparator"/>
            <HomeGridItem calcName="Flow Chart Maker" path="/flowchartmaker"/> 
            <HomeGridItem calcName="Data Cleaner" path="/datacleaner"/> 
            <HomeGridItem calcName="Random Number Generator" path="/randomnumbergenerator"/> 
            <HomeGridItem calcName="IP Address Calculator" path="/ipaddresscalc"/> 
            <HomeGridItem calcName="Checksum Calculator" path="/checksumcalc"/> 
            <HomeGridItem calcName="Paragraph Summarizer" path="/parasummarizer"/> 
            <HomeGridItem calcName="Image Text Reader" path="/imagetextreader"/> 
            <HomeGridItem calcName="IEEE754 Converter" path="/ieee754converter"/> 
            <HomeGridItem calcName="Images To PDF Consolidator" path="/imagestopdfconsolidator"/> 
            <HomeGridItem calcName="Computer Algebra System (CAS) Calculator" path="/computeralgebrasystemcascalc"/> 
            <HomeGridItem calcName="Base Change Calculator" path="/basechangecalc"/> 
            <HomeGridItem calcName="POS - SOP Converter" path="/possopconverter"/> 
            <HomeGridItem calcName="Gray Code Calculator" path="/graycodecalc"/> 
            <HomeGridItem calcName="Complement Calculator" path="/complementcalc"/> 
            <HomeGridItem calcName="Transmission Delay Calculator" path="/transmissiondelaycalc"/> 
            <HomeGridItem calcName="Carroll's Cave Of Knowledge Calculator" path="/carrollscaveofknowledgecalc"/> 
            <HomeGridItem calcName="MUX Calculator" path="/muxcalc"/> 
            <HomeGridItem calcName="Propagation Delay Calculator" path="/propagationdelaycalc"/> 
            <HomeGridItem calcName="DeMUX Calculator" path="/demuxcalc"/> 
            <HomeGridItem calcName="QR Code Generator" path="/qrcodegenerator"/> 
            <HomeGridItem calcName="Setup Delay Calculator" path="/setupdelaycalc"/> 
            <HomeGridItem calcName="Packets Order Calculator" path="/packetsordercalc"/> 
            <HomeGridItem calcName="Base64 Encoder/Decoder" path="/base64encoderdecoder"/> 
            <HomeGridItem calcName="Binary String Weight Calculator" path="/binarystringweightcalc"/> 
            <HomeGridItem calcName="# of Points With Minimum Hamming Distance Calculator" path="/pointswithminimumhammingdistancecalc"/> 
            <HomeGridItem calcName="Binary Tree Visualizer" path="/binarytreevisualizer"/> 
            <HomeGridItem calcName="CRC Calculator" path="/crccalc"/> 
            <HomeGridItem calcName="Not Calculator" path="/notcalc"/> 
            <HomeGridItem calcName="TAT Calculator" path="/tatcalc"/> 
            <HomeGridItem calcName="Stopwatch" path="/stopwatch"/> 
            <HomeGridItem calcName="PPI Calculator" path="/ppicalc"/> 
            <HomeGridItem calcName="Word Counter" path="/wordcounter"/> 
            <HomeGridItem calcName="Character Counter" path="/charactercounter"/> 
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
            <HomeGridItem calcName="Volume 3D Shapes Calculator" path="/volume3dshapescalc"/>
            <HomeGridItem calcName="Congruency Of Triangle Calculator" path="/congruencyoftrianglecalc"/>
            <HomeGridItem calcName="Numerals To Words Converter" path="/numeralstowordsconverter"/>
            <HomeGridItem calcName="Permutation And Combination Calculator" path="/permutationandcombinationcalc"/>
            <HomeGridItem calcName="Similarity Of Triangle Calculator" path="/similarityoftrianglecalc"/>
            <HomeGridItem calcName="Sum of N terms of AP/GP/HP Calculator" path="/sumofapgphpcalc"/>
            <HomeGridItem calcName="Differential Calculator" path="/differentialcalc"/>
            <HomeGridItem calcName="Laplace Calculator" path="/laplacecalc"/>
            <HomeGridItem calcName="Pipes And Cisterns Calculator" path="/pipesandcisternscalc"/>
            <HomeGridItem calcName="Factorial Calculator (Gamma)" path="/factorialcalcgamma"/>
            <HomeGridItem calcName="Analytical Function Calculator" path="/analyticalFuncCalc"/>
            <HomeGridItem calcName="Z-Score Calculator" path="/zscorecalc"/> 
            <HomeGridItem calcName="Z-Transform Calculator" path="/ztransformcalc"/> 
            <HomeGridItem calcName="Homogeneous Interpreter" path="/homogeneousinterpreter"/> 
            <HomeGridItem calcName="Variance - Standard Deviation Converter" path="/variancestandarddeviationconverter"/> 
            <HomeGridItem calcName="Statistics Mean Calculator" path="/statisticsmeancalc"/> 
            <HomeGridItem calcName="Statistics Median Calculator" path="/statisticsmediancalc"/> 
            <HomeGridItem calcName="RMS Value Calculator" path="/rmsvaluecalc"/> 
            <HomeGridItem calcName="Mean Deviation about Median Calculator" path="/meandeviationaboutmediancalc"/> 
            <HomeGridItem calcName="Coefficient Of Mean Deviation Calculator" path="/coefofmeandeviationcalc"/> 
            <HomeGridItem calcName="Mode Calculator" path="/modecalc"/> 
            <HomeGridItem calcName="Set Operations Extended Calculator" path="/setoperationsextendedcalc"/> 
            <HomeGridItem calcName="University GPA Calculator" path="/universitygpacalc"/> 
            <HomeGridItem calcName="Averages Calculator" path="/averagescalc"/> 
            <HomeGridItem calcName="MMM Calculator" path="/mmmcalc"/> 
            <HomeGridItem calcName="Partial Fractions Calculator" path="/partialfractionscalc"/> 
            <HomeGridItem calcName="POSET Calculator" path="/posetcalc"/> 
            <HomeGridItem calcName="Quartiles Calculator" path="/quartilescalc"/> 
            <HomeGridItem calcName="Lower Bound - Upper Bound Calculator" path="/lowerboundupperboundcalc"/> 
            <HomeGridItem calcName="Golden Ratio Calculator" path="/goldenratiocalc"/> 
            <HomeGridItem calcName="Diamond Problem Solver" path="/diamondproblemsolver"/> 
            <HomeGridItem calcName="Internal Angles Of a Polygon Calculator" path="/internalanglesofapolygoncalc"/> 
            <HomeGridItem calcName="Nth Root Calculator" path="/nthrootcalc"/> 
            <HomeGridItem calcName="External Angles Of a Polygon Calculator" path="/externalanglesofapolygoncalc"/> 
            <HomeGridItem calcName="Co-Interior Pairs Calculator" path="/cointeriorpairscalc"/> 
            <HomeGridItem calcName="Irrational to Rational Converter" path="/irrationaltorationalconverter"/> 
            <HomeGridItem calcName="Roman Numeral Operation Calculator" path="/romannumeraloperationcalc"/> 
            <HomeGridItem calcName="Vieta Theorem Calculator" path="/vietatheoremcalc"/> 
            <HomeGridItem calcName="Margin Calculator" path="/margincalc"/> 
            <HomeGridItem calcName="Exponents Solver" path="/exponentssolver"/> 
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Chemistry</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="pH Calculator" path="/phcalc"/>
            <HomeGridItem calcName="Chemical Equation Balancer" path="/chemicaleqbalancer"/>
            <HomeGridItem calcName="Chemical Kinetics Calculator" path="/chemicalkineticscalc"/>
            <HomeGridItem calcName="Molecular Weight Calculator" path="/molecularweightcalc"/>
            <HomeGridItem calcName="Chemical Formula Validator" path="/chemicalformulavalidator"/>
            <HomeGridItem calcName="Empirical Formula Calculator" path="/empiricalformulacalc"/>
            <HomeGridItem calcName="Moles Calculator" path="/molescalc"/>
            <HomeGridItem calcName="Molarity Calculator" path="/molaritycalc"/>
            <HomeGridItem calcName="Equivalent Mass Calculator" path="/equivalentmasscalc"/>
            <HomeGridItem calcName="Molality Calculator" path="/molalitycalc"/>
            <HomeGridItem calcName="Molar Mass Calculator" path="/molarmasscalc"/>
            <HomeGridItem calcName="Molar Concentration Calculator" path="/molarconcentrationcalc"/>
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Physics</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="Pressure Calculator" path="/pressurecalc"/>
            <HomeGridItem calcName="Cosmo Mass Converter" path="/cosmomassconverter"/>
            <HomeGridItem calcName="Amplitude Calculator" path="/amplitudecalculator"/>
            <HomeGridItem calcName="Vibrational Response Calculator" path="/vibrationalresponsecalc"/>
            <HomeGridItem calcName="Density Calculator" path="/densitycalc"/>
            <HomeGridItem calcName="Projectile Calculator" path="/projectilecalc"/>
            <HomeGridItem calcName="Ohm's Law Calculator" path="/ohmslawcalc"/>
            <HomeGridItem calcName="MKS - CGS - FPS Calculator" path="/mkscgsfpscalc"/> 
            <HomeGridItem calcName="Combined Gas Laws Calculator" path="/combinedgaslawscalc"/> 
            <HomeGridItem calcName="Kinetic Energy Calculator" path="/kineticenergycalc"/> 
            <HomeGridItem calcName="Time Dilation Calculator" path="/timedilationcalc"/> 
            <HomeGridItem calcName="Hooke's Law Calculator" path="/hookeslawcalc"/> 
            <HomeGridItem calcName="Work Calculator" path="/workcalc"/> 
            <HomeGridItem calcName="Potential Energy Calculator" path="/potentialenergycalc"/> 
            <HomeGridItem calcName="Gravitational Force Calculator" path="/gravitationalforcecalc"/> 
            <HomeGridItem calcName="Torque Calculator" path="/torquecalc"/> 
            <HomeGridItem calcName="Friction Calculator" path="/frictioncalc"/> 
            <HomeGridItem calcName="Projectile Range Calculator" path="/projectilerangecalc"/> 
            <HomeGridItem calcName="Momentum Calculator" path="/momentumcalc"/> 
            <HomeGridItem calcName="Planetary Gravitational Calculator" path="/planetarygravitationalcalc"/> 
            <HomeGridItem calcName="Gravity Acceleration Calculator" path="/gravityaccelerationcalc"/> 
            <HomeGridItem calcName="Ideal Gas Law Calculator" path="/idealgaslawcalc"/> 
            <HomeGridItem calcName="Cross Product Calculator" path="/crossproductcalc"/> 
            <HomeGridItem calcName="Dot Product Calculator" path="/dotproductcalc"/> 
            <HomeGridItem calcName="Elastic Potential Calculator" path="/elasticpotentialcalc"/> 
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Biology</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="DNA - RNA Converter" path="/dnarnaconverter"/>
            <HomeGridItem calcName="Drug Half-Life/Clearance Calculator" path="/drughalflifeclearancecalc"/>
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
            <HomeGridItem calcName="Receipt Generator" path="/receiptgenerator"/>
            <HomeGridItem calcName="GDP Calculator" path="/gdpcalc"/>
            <HomeGridItem calcName="Multi-Currency Change Calculator" path="/multicurrencychangecalc"/>
            <HomeGridItem calcName="Fuel Cost Calculator" path="/fuelcostcalc"/>
            <HomeGridItem calcName="Roofing Calculator" path="/roofingcalc"/>
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
            <HomeGridItem calcName="Novelty Age Calculator" path="/noveltyagecalc"/>
            <HomeGridItem calcName="Day Scheduler" path="/dayscheduler"/>
            <HomeGridItem calcName="Task Planner" path="/taskplanner"/>
            <HomeGridItem calcName="Sleep Calculator" path="/sleepcalc"/>
            <HomeGridItem calcName="Macronutrient Ratio Calculator" path="/macronutrientratiocalc"/>
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Art</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="Drawing Canvas" path="/drawingcanvas"/>
            <HomeGridItem calcName="Mandala Creater" path="/mandalacreater"/>
            <HomeGridItem calcName="Pic Editor" path="/piceditor"/>
            <HomeGridItem calcName="Avatar Creater" path="/avatarcreater"/>
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Sports/Games</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="Coin Flipper" path="/coinflipper"/> 
            <HomeGridItem calcName="Bingo Number Generator" path="/bingonumbergenerator"/> 
            <HomeGridItem calcName="Dice Rollerr" path="/diceroller"/> 
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Space</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="Satellite Location using TLE" path="/satellitelocationusingtle"/>
        </Grid>
        <br/>
    </Container>
  );
}