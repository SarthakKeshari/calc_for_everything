import React, { useState } from 'react';
import { Box, Container, TextField, Typography, Button } from '@mui/material';
import * as math from "mathjs"
function MainPolynomialEqIntegralCalc() {
    const [polynomial, setPolynomial] = useState("")
    const [solution, setSolution] = useState("")

    const calcIntegral = () => {
        if (!polynomial) { return }

        const validPattern = /^[0-9x\+\^\s\-\*]+$/;
        if (!validPattern.test(polynomial)) {
            alert("WRONG FORMAT")
            setSolution("Incorrect Polynomial Representation!")
            return;
        }

        const polyNoSpace = polynomial.replace(/\s+/g, "");
        const cleanPoly = polyNoSpace.replace(
            /([0-9]+)\*([0-9]+)/g,
            (match, num1, num2) => {
                return (parseInt(num1) * parseInt(num2)).toString();
            }
        );

        /* Checking for consecutive pluses and minuses etc with no spaces in between */
        const polyTermArray = cleanPoly.split(/(\+|-)/);
        for (let i = 0; i < polyTermArray.length - 2; i++) {
            if (
                ((polyTermArray[i] === "+" && polyTermArray[i + 2] === "+") && polyTermArray[i + 1] === "") ||
                ((polyTermArray[i] === "-" && polyTermArray[i + 2] === "-") && polyTermArray[i + 1] === "") ||
                ((polyTermArray[i] === "-" && polyTermArray[i + 2] === "+") && polyTermArray[i + 1] === "") ||
                ((polyTermArray[i] === "+" && polyTermArray[i + 2] === "-") && polyTermArray[i + 1] === "")
            ) {
                alert("WRONG FORMAT")
                setSolution("Incorrect Polynomial Representation!")
                return;
            }
        }

        /* At this stage polyTermArray contains the parsed version of the input for example 
            x^3 + 25x becomes ['x^3', '+', '25x']
            Now we can go through each term and integrate it according to the simple polynomial integral rule. 
        */

        for (let i = 0; i < polyTermArray.length; i++) {

            if (!polyTermArray[i]) continue;

            if (polyTermArray[i].includes("x^")) {

                let s = polyTermArray[i];
                let index = s.indexOf("^");
                let power = Number(s.slice(index + 1)) + 1;
                let cst; // constant value
                if (s[0] === "x") {
                    cst = 1.0 / power;
                } else cst = Number(s.slice(0, index - 1)) / power;
                polyTermArray[i] = `${cst + "x^" + power}`;
            }

            else if (polyTermArray[i][polyTermArray[i].length - 1] === "x") {

                let s = polyTermArray[i];
                let cst;
                if (s[0] === "x") {
                    cst = 0.5;
                } else {
                    let index = s.indexOf("x");
                    cst = Number(s.slice(0, index)) / 2;
                }
                polyTermArray[i] = `${cst + "x^" + "2"}`;
            }

            else if (Number(polyTermArray[i])) {

                let s = polyTermArray[i];
                polyTermArray[i] = `${s}x`;
            }
        }

        setSolution(polyTermArray.join(""));
    }

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Polynomial Equation Integral Calculator</Typography>
            <hr />
            <br />

            <Container maxWidth="md" sx={{ marginTop: "30px" }} >
                <Typography variant='h6' sx={{ marginY: "1.2em" }}>
                    <strong>Enter your polynomial</strong> (Eg. 3x^2 + 5x)
                </Typography>
                <TextField fullWidth label="Polynomial" value={polynomial} onChange={(e) => setPolynomial(e.target.value)} />

                <Box sx={{ textAlign: "center", marginY: "2em" }}>
                    <Button variant="contained" onClick={calcIntegral}>Integrate</Button>
                </Box>

                <Typography variant="h6" sx={{ marginY: "1em" }}>
                    <strong>Solution: </strong>
                    {solution}
                </Typography>
            </Container>

        </Container>

    )
}

export default MainPolynomialEqIntegralCalc;