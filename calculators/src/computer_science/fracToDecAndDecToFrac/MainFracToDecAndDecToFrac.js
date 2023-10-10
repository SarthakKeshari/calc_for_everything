import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';

function MainFracToDecAndDecToFrac() {
    const [fractionInput, setFractionInput] = useState('');
    const [decimalInput, setDecimalInput] = useState('');
    const [result, setResult] = useState('');

    const handleFractionToDecimal = () => {
        const fractionParts = fractionInput.split('/');

        if (fractionParts.length !== 2) {
            setResult('Invalid fraction format');
            return;
        }

        const numerator = parseFloat(fractionParts[0]);
        const denominator = parseFloat(fractionParts[1]);

        if (denominator === 0) {
            setResult('Division by zero is not allowed');
            return;
        }

        const decimalValue = numerator / denominator;
        setDecimalInput(decimalValue.toString());
        setResult(`Decimal: ${decimalValue}`);
    };

    const handleDecimalToFraction = () => {
        const decimalValue = parseFloat(decimalInput);

        if (isNaN(decimalValue)) {
            setResult('Invalid decimal format');
            return;
        }

        const tolerance = 1.0E-6;
        let numerator = Math.round(decimalValue);
        let denominator = 1;
        let x = decimalValue - numerator;

        while (Math.abs(x) > tolerance) {
            numerator = Math.round(1 / x);
            x = 1 / x - numerator;
            const temp = numerator;
            numerator = denominator;
            denominator = temp;
        }

        setResult(`Fraction: ${numerator}/${denominator}`);
        setFractionInput(`${numerator}/${denominator}`);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Fraction To Decimal And Decimal to Fraction Calculator</Typography>
            <hr />
            <br />
            <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Fraction to Decimal and Decimal to Fraction Converter</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Enter Fraction (e.g., 1/2)"
            variant="outlined"
            fullWidth
            value={fractionInput}
            onChange={(e) => setFractionInput(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleFractionToDecimal}>
            Convert to Decimal
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Enter Decimal (e.g., 0.5)"
            variant="outlined"
            fullWidth
            value={decimalInput}
            onChange={(e) => setDecimalInput(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleDecimalToFraction}>
            Convert to Fraction
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{result}</Typography>
        </Grid>
      </Grid>
        </Container>
    )


}

export default MainFracToDecAndDecToFrac;