import React, { useState } from 'react';
import { Container, Input, Typography, FormControl, InputLabel, Select, MenuItem, Button, Grid, Alert } from '@mui/material';

function MainFirstOrderDifferentialEqSolver() {

    const [equation, setEquation] = useState("(x-y)/(x+y)");
    const [x0, setX0] = useState(0.00);
    const [y0, setY0] = useState(1.00);
    const [height, setHieght] = useState(0.5);
    const [n, setN] = useState(2.00);
    const [results, setResults] = useState("");

    const toggleData = () => {
        setResults("");
        setAlert(false);
        setAlert2(false);

    }

    const [selectedMethod, setSelectedMethod] = useState("");

    const solveImprovedEuler = () => {
        const myFunction = equation;
        const x0Value = parseFloat(x0);
        const y0Value = parseFloat(y0);
        const hValue = parseFloat(height);
        const nValue = parseFloat(n);

        const derivative = (x, y) => {
            if (myFunction.includes("sqrt")) {
                return Math.sqrt(y);
            } else if (myFunction.includes("log")) {
                return Math.log(y);
            } else {
                try {
                    const equationFunction = new Function("x", "y", `return (${myFunction});`);
                    return equationFunction(x, y);
                } catch (error) {
                    console.error("Error in the provided equation:", error);
                    setAlert(true);
                    return 0;
                }
            }
        };

        const xTarget = nValue;
        let x = x0Value;
        let y = y0Value;
        let h = hValue;
        let results = "";

        while (x <= xTarget) {
            const slope = derivative(x, y);
            results += `x = ${x.toFixed(4)}, y = ${y.toFixed(4)}<br>`;
            const predictor = y + h * slope;
            const correctedSlope = derivative(x + h, predictor);
            y += (h / 2) * (slope + correctedSlope);
            x += h;
            x = parseFloat(x.toFixed(100));
        }

        setResults(results);
    };

    const solveEuler = () => {
        const myFunction = equation;
        const x0Value = parseFloat(x0);
        const y0Value = parseFloat(y0);
        const hValue = parseFloat(height);
        const nValue = parseFloat(n);

        const derivative = (x, y) => {
            if (myFunction.includes("sqrt")) {
                return Math.sqrt(y);
            } else if (myFunction.includes("log")) {
                return Math.log(y);
            } else {
                try {
                    const equationFunction = new Function("x", "y", `return (${myFunction});`);
                    return equationFunction(x, y);
                } catch (error) {
                    console.error("Error in the provided equation:", error);
                    setAlert(true);

                    return 0;
                }
            }
        };

        const xTarget = nValue;
        let x = x0Value;
        let y = y0Value;
        let h = hValue;
        let results = "";

        while (x <= xTarget) {
            const slope = derivative(x, y);
            results += `x = ${x.toFixed(4)}, y = ${y.toFixed(4)}<br>`;
            y += h * slope;
            x += h;
            x = parseFloat(x.toFixed(10));
        }

        setResults(results);
    };


    const solveRK = () => {
        const myFunction = equation;
        const x0Value = parseFloat(x0);
        const y0Value = parseFloat(y0);
        const hValue = parseFloat(height);
        const nValue = parseFloat(n);

        const derivative = (x, y) => {
            if (myFunction.includes("sqrt")) {
                return Math.sqrt(y);
            } else if (myFunction.includes("log")) {
                return Math.log(y);
            } else {
                try {
                    const equationFunction = new Function("x", "y", `return (${myFunction});`);
                    return equationFunction(x, y);
                } catch (error) {
                    console.error("Error in the provided equation:", error);
                    setAlert(true);
                    return 0;
                }
            }
        };

        const rkMethod = (h, x0, y0, xTarget) => {
            let x = x0Value;
            let y = y0Value;

            let results = "";

            while (x <= xTarget) {
                const k1 = hValue * derivative(x, y);
                const k2 = hValue * derivative(x + hValue / 2, y + k1 / 2);
                const k3 = hValue * derivative(x + hValue / 2, y + k2 / 2);
                const k4 = hValue * derivative(x + hValue, y + k3);

                const k = (k1 + 2 * k2 + 2 * k3 + k4) / 6;

                results += `x = ${x.toFixed(4)}, y = ${y.toFixed(4)}<br>`;
                y += k;
                x += hValue;
                x = parseFloat(x.toFixed(10));
            }

            setResults(results);
        };

        const xTarget = nValue;
        rkMethod(hValue, x0Value, y0Value, xTarget);
    };

    const solveEquation = () => {
        
        setAlert2(false);
        if (selectedMethod == "eMethod") {
            solveEuler();
        }
        else if (selectedMethod == "ieMethod") {
            solveImprovedEuler();
        }
        else if (selectedMethod == "rkMethod") {
            solveRK();
        }
        else {
            setAlert2(true);
        }
    }

    const clearData = () => {
        setEquation("");
        setX0("");
        setY0("");
        setN("");
        setResults("");
        setHieght("");
    }

    const [ alert , setAlert] = useState(false) ;
    const [ alert2 , setAlert2] = useState(false) ;
    const closeAlert= ()=>{
        setAlert(false);
    }

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
           
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>First Order Differential Equation Solver</Typography>
            <hr />
            <br />
            <Container sx={{ display: "flex", flexDirection: "column" }}>
            {alert && <Alert severity="error">
                Given Equiation format is wrong— <strong>check it out!</strong>
            </Alert> } 
            {alert2 && <Alert severity="warning">
                Please Select a method
            </Alert> } 
                <Typography pt={1} variant='h6' mt={2}>Enter the Equation (dy/dx) </Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Ex. (x-y)/(x+y)"
                    size="lg"
                    variant="outlined"
                    type='text'
                    value={equation}
                    onChange={(event) => {
                        toggleData();
                        setEquation(event.target.value);
                    }}
            />
                <Typography pt={1} variant='h6' mt={2}>value of x0</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Ex. 0"
                    size="lg"
                    variant="outlined"
                    type='number'
                    value={x0}
                    onChange={(event) => {
                        toggleData();
                        setX0(event.target.value);
                    }}

                />
                <Typography pt={1} variant='h6' mt={2}>value of y0 at x0</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Ex. 1"
                    size="lg"
                    variant="outlined"
                    type='number'
                    value={y0}
                    onChange={(event) => {
                        toggleData();
                        setY0(event.target.value);
                    }}
                />
                <Typography pt={1} variant='h6' mt={2}>Step Height</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Ex. 0.1"
                    size="lg"
                    variant="outlined"
                    type='number'
                    value={height}
                    onChange={(event) => {
                        toggleData();
                        setHieght(event.target.value);
                    }}

                />
                <Typography pt={1} variant='h6' mt={2}>n to find yn at xn</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Ex. 10"
                    size="lg"
                    variant="outlined"
                    type='number'
                    value={n}
                    onChange={(event) => {
                        toggleData();
                        setN(event.target.value);
                    }}
                />

                <FormControl fullWidth variant="outlined" sx={{ mt: 3 }}>
                    <InputLabel id="methodInputLabel">Select Method</InputLabel>
                    <Select
                        labelId="methodInputLabel"
                        label="Select Method"
                        value={selectedMethod}
                        onChange={(event) => {
                            // toggleData();
                            if (results != "") solveEquation();
                            setSelectedMethod(event.target.value);
                        }}
                    >
                        <MenuItem value="eMethod">Euler's Method</MenuItem>
                        <MenuItem value="ieMethod">Improved Euler's Method</MenuItem>
                        <MenuItem value="rkMethod">Runge-Kutta's Method</MenuItem>
                    </Select>
                </FormControl>


                <Grid container spacing={2} mt={2}>
                    <Grid item>
                        <Button variant="contained" color="primary" sx={{ width: '100px' }} onClick={solveEquation}>
                            Solve
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" sx={{ width: '100px' }} onClick={clearData}>
                            Reset
                        </Button>
                    </Grid>
                </Grid>
                {results && (
                    <div >
                        <Typography variant="h5" mt={4}>Results:</Typography>
                        <Typography variant="h6" mt={1} mb={6}><div dangerouslySetInnerHTML={{ __html: results }} /></Typography>

                        
                    </div>
                )}
            </Container>
        </Container>
    )
}

export default MainFirstOrderDifferentialEqSolver;