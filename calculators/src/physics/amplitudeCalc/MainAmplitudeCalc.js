import React from 'react';
import { useState } from 'react';
import { Container, Typography, Button, TextField, Grid } from '@mui/material';

function MainAmplitudeCalc() {
    const [distance, setDistance] = useState('');
    const [frequency, setFrequency] = useState('');
    const [amplitude, setAmplitude] = useState('');

    const handleCalculateAmplitude = () => {
        const distanceValue = parseFloat(distance);
        const frequencyValue = parseFloat(frequency);

        if (!isNaN(distanceValue) && !isNaN(frequencyValue) && frequencyValue > 0) {
            const result = distanceValue / frequencyValue;
            setAmplitude(result.toString());
        } else {
            setAmplitude('Invalid Input');
        }
    };
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Amplitude Calculator</Typography>
            <hr/>
            <br/>

            <Container maxWidth="sm">
                    <Typography variant="h4" align="center" gutterBottom>
                        Amplitude Calculator
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Distance (m)"
                                fullWidth
                                variant="outlined"
                                value={distance}
                                onChange={(e) => setDistance(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Frequency (Hz)"
                                fullWidth
                                variant="outlined"
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleCalculateAmplitude}
                        style={{ marginTop: '20px' }}
                    >
                        Calculate Amplitude (m)
                    </Button>
                    <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                        Amplitude: {Math.round(amplitude*100)/100 +" m "}
                    </Typography>
                </Container>

        </Container>
    )
}

export default MainAmplitudeCalc;
