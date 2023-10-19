import React, { useState } from 'react';
import { Container, Typography, Button, Grid, TextField } from '@mui/material';
import InfoHCFCalc from './InfoHCFCalc';
function calculateHCF(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function MainHCFCalc() {
    const [numbers, setNumbers] = useState('');
    const [hcf, setHCF] = useState('');

    const handleCalculateHCF = () => {
        const numArray = numbers
            .split(',')
            .map((num) => parseInt(num.trim()))
            .filter((num) => !isNaN(num) && num > 0);

        if (numArray.length >= 2) {
            let result = numArray[0];
            for (let i = 1; i < numArray.length; i++) {
                result = calculateHCF(result, numArray[i]);
            }
            setHCF(result.toString());
        } else {
            setHCF('Invalid Input');
        }

    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>HCF Calculator <InfoHCFCalc/> </Typography>
            <hr />
            <br />
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    HCF Calculator
                </Typography>
                <TextField
                    label="Enter Numbers (comma-separated)"
                    fullWidth
                    variant="outlined"
                    value={numbers}
                    onChange={(e) => setNumbers(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleCalculateHCF}
                    style={{ marginTop: '20px' }}
                >
                    Calculate HCF
                </Button>
                <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                    HCF: {hcf}
                </Typography>
            </Container>
        </Container>
    );

};

export default MainHCFCalc;