import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import * as math from "mathjs"

function MainPolynomialEqDifferentialCalc() {
    const [poly, setPoly] = useState("x");
    const [solution, setSolution] = useState("");
    const [error, setError] = useState({
        flag: false,
        msg: ""
    })

    /* PostOrder traversal of the tree returned from math.derivate  */
    const postOrder = (node) => {
        if (node.isSymbolNode) { return "x" }
        else if (node.isConstantNode) {
            // console.log("CONSTANT: ", node.value);
            return node.value;
        }
        else {
            // OperatorNode
            let left = node.args[0]
            let right = node.args[1]
            // console.log(`OPERATOR: ${left} ${node.op} ${right}`);
            return `${left} ${node.op} ${right}`;
        }
    }

    const calcDifferential = () => {
        if (error.flag === false) {
            let soln = math.derivative(poly, 'x')

            let result = postOrder(soln);
            setSolution(result)
        }
    }

    useEffect(() => {
        const validPattern = /^[0-9x\+\^\s.\-\*]+$/;
        if (!validPattern.test(poly)) {
            setError({ flag: true, msg: "Incorrect Format" })
        }
        else {
            setError({ flag: false, msg: "" })
        }
    }, [poly])

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Polynomial Equation Differential Calculator</Typography>
            <hr />
            <br />

            <Container maxWidth="md">
                <Typography variant="h6"><strong>Enter your Polynomial</strong></Typography>
                <TextField fullWidth sx={{ marginTop: "1.2em", marginBottom: "1.7em" }} value={poly} label="Polynomial"
                    onChange={(e) => setPoly(e.target.value)} helperText={error.msg} error={error.flag} />

                <Box sx={{ textAlign: "center" }}>
                    <Button variant='contained' onClick={calcDifferential}>Differentiate</Button>
                </Box>

                <Typography variant='h6' sx={{ marginY: "30px" }}>
                    <strong>Solution:</strong> {solution}
                </Typography>
            </Container>
        </Container>
    )
}

export default MainPolynomialEqDifferentialCalc;