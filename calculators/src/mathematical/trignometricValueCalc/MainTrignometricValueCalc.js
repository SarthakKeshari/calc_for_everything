import React, { useState } from 'react';

import { Container, Typography, Button, TextField } from '@mui/material';

function MainTrignometricValueCalc() {
    const [angle, setAngle] = useState('');
    const [result, setResult] = useState({});

    const handleCalculate = () => {
        const radians = (angle * Math.PI) / 180;
        setResult({
            sin: Math.sin(radians).toFixed(4),
            cos: Math.cos(radians).toFixed(4),
            tan: Math.tan(radians).toFixed(4),
            cot: (1 / Math.tan(radians)).toFixed(4),
            sec: (1 / Math.cos(radians)).toFixed(4),
            cosec: (1 / Math.sin(radians)).toFixed(4),
        });
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Trignometric Value Calculator</Typography>
            <hr />
            <br />
            <div>
                <TextField
                    label="Enter angle (in degrees)"
                    variant="outlined"
                    value={angle}
                    onChange={(e) => setAngle(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleCalculate}>
                    Calculate
                </Button>
                <div>
                    <h2>Trigonometric Values:</h2>
                    <p>Sin: {result.sin}</p>
                    <p>Cos: {result.cos}</p>
                    <p>Tan: {result.tan}</p>
                    <p>Cot: {result.cot}</p>
                    <p>Sec: {result.sec}</p>
                    <p>Cosec: {result.cosec}</p>
                </div>
            </div>
        </Container>
    )
}

export default MainTrignometricValueCalc;