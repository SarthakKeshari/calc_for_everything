import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function MainCoefOfMeanDeviationCalc() {
    const [data, setData] = useState('');
    const [mean, setMean] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const dataArr = data.split(',').map(Number);
        const n = dataArr.length;
        const sum = dataArr.reduce((acc, val) => acc + val, 0);
        const meanValue = sum / n;
        setMean(meanValue.toFixed(2));

        const deviationSum = dataArr.reduce((acc, val) => acc + Math.abs(val - meanValue), 0);
        const MainCoefOfMeanDeviationCalc = (deviationSum / (n * meanValue)).toFixed(2);
        setResult(MainCoefOfMeanDeviationCalc);
    };
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Coefficient Of Mean Deviation Calculator</Typography>
            <hr />
            <br />
            <TextField
                label="Data (comma-separated)"
                fullWidth
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleCalculate}>
                Calculate
            </Button>
            {result !== null && (
                <Box mt={2}>
                    <Typography>Mean: {mean}</Typography>
                    <Typography>Coefficient of Mean Deviation: {result}</Typography>
                </Box>
            )}

        </Container>
    )
}

export default MainCoefOfMeanDeviationCalc;