import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography, Container } from '@mui/material';

    const MainMMMCalc = () => {
        const [mean, setMean] = useState('');
        const [median, setMedian] = useState('');
        const [mode, setMode] = useState('');
        const [result, setResult] = useState('');

        const calculateMean = () => {
            const medianValue = parseFloat(median);
            const modeValue = parseFloat(mode);
            const meanValue = (2 * medianValue + 3 * modeValue) / 5;
            setMean(meanValue.toFixed(2));
            setResult('Mean Calculated');
        };

        const calculateMedian = () => {
            const meanValue = parseFloat(mean);
            const modeValue = parseFloat(mode);
            const medianValue = 5 * meanValue - 3 * modeValue;
            setMedian(medianValue.toFixed(2));
            setResult('Median Calculated');
        };

        const calculateMode = () => {
            const meanValue = parseFloat(mean);
            const medianValue = parseFloat(median);
            const modeValue = (3 * meanValue - 2 * medianValue).toFixed(2);
            setMode(modeValue);
            setResult('Mode Calculated');
        };
    
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>MMM Calculator</Typography>
            <hr />
            <br />
            {/* Write your code here */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Mean, Median, Mode Calculator
                            </Typography>
                            <TextField
                                label="Mean"
                                variant="outlined"
                                value={mean}
                                onChange={(e) => setMean(e.target.value)}
                            />
                            <TextField
                                label="Median"
                                variant="outlined"
                                value={median}
                                onChange={(e) => setMedian(e.target.value)}
                            />
                            <TextField
                                label="Mode"
                                variant="outlined"
                                value={mode}
                                onChange={(e) => setMode(e.target.value)}
                            />
                            <Button variant="contained" onClick={calculateMean}>
                                Calculate Mean
                            </Button>
                            <Button variant="contained" onClick={calculateMedian}>
                                Calculate Median
                            </Button>
                            <Button variant="contained" onClick={calculateMode}>
                                Calculate Mode
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Result:
                    </Typography>
                    {result && (
                        <Typography variant="subtitle1">
                            {result}: Mean = {mean}, Median = {median}, Mode = {mode}
                        </Typography>
                    )}
                </Grid>
            </Grid>


            {/* End your code here */}
        </Container>
    )
}

export default MainMMMCalc;