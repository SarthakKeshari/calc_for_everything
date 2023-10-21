import React, { useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import InfoPercentageCalc from './InfoPercentageCalc';

function MainPercentageCalc() {
    const [number, setNumber] = useState('');
    const [percentage, setPercentage] = useState('');
    const [result, setResult] = useState(null);

    const calculatePercentage = () => {
        const parsedNumber = parseFloat(number);
        const parsedPercentage = parseFloat(percentage);

        if (!isNaN(parsedNumber) && !isNaN(parsedPercentage)) {
            const calculatedPercentage = (parsedPercentage / 100) * parsedNumber;
            setResult(calculatedPercentage);
        } else {
            setResult(null);
        }
    };
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Percentage Calculator <InfoPercentageCalc /> </Typography>
            <hr />
            <br />
            <div>
                <TextField
                    label="Enter a number"
                    variant="outlined"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <TextField
                    label="Enter a percentage"
                    variant="outlined"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={calculatePercentage}>
                    Calculate
                </Button>
                {result !== null && (
                    <div>
                        <p>Result: {result.toFixed(2)}</p>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default MainPercentageCalc;