import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function MainEquatingDenominatorOfFraction() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const calculateFractions = () => {
        const fractions = input.split(',');
        let denominators = fractions.map((fraction) => {
            const [numerator, denominator] = fraction.split('/').map(Number);
            return denominator;
        });

        // Find the least common denominator (LCD)
        const lcd = lcmArray(denominators);

        // Adjust fractions to have the same denominator
        const adjustedFractions = fractions.map((fraction) => {
            const [numerator, denominator] = fraction.split('/').map(Number);
            const adjustedNumerator = (numerator * (lcd / denominator)).toString();
            return` ${ adjustedNumerator } /${lcd}`;
        });

        setOutput(adjustedFractions.join(','));
    };

    // Function to calculate the least common denominator (LCD)
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    };

    const lcm = (a, b) => {
        return (a * b) / gcd(a, b);
    };

    const lcmArray = (arr) => {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = lcm(result, arr[i]);
        }
        return result;
    };
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Equating Denominator Of Fraction</Typography>
            <hr />
            <br />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>

                <TextField
                    label="Input Fractions (comma-separated)"
                    variant="outlined"
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ marginBottom: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={calculateFractions}>
                    Calculate
                </Button>
                {output && (
                    <div>
                        <h3> Fractions on Equating Denominators:</h3>
                        {output}
                    </div>
                )}
            </div>
        </Container>
    )
}

export default MainEquatingDenominatorOfFraction;