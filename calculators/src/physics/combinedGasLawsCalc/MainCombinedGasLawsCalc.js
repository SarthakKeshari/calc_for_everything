import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Container, Typography } from '@mui/material';


const MainCombinedGasLawsCalc = () => {
    const [pressure, setPressure] = useState('');
    const [volume, setVolume] = useState('');
    const [temperature, setTemperature] = useState('');
    const [gasConstant, setGasConstant] = useState('');

    const calculateGasConstant = () => {
        if (pressure && volume && temperature) {
            const kB = (pressure * volume) / (temperature);
            setGasConstant(kB);
        };
    }
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Combined Gas Laws Calculator</Typography>
            <hr />
            <br />
            {/* Write your code here */}
            <div>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                            < TextField
                                type="number"
                                label="Pressure (P) in Pa"
                                fullWidth
                                variant="outlined"
                                value={pressure}
                                onChange={(e) => setPressure(e.target.value)}
                            />
                            <TextField
                                type="number"
                                label="Volume (V) in m³"
                                fullWidth
                                variant="outlined"
                                value={volume}
                                onChange={(e) => setVolume(e.target.value)}
                            />
                            <TextField
                                type="number"
                                label="Temperature (T) in K"
                                fullWidth
                                variant="outlined"
                                value={temperature}
                                onChange={(e) => setTemperature(e.target.value)}
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ marginTop: '10px' }}
                                onClick={calculateGasConstant}
                            >
                                Calculate Gas Constant (kB)
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
                {gasConstant && (
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                                <p>Gas Constant (kB): {gasConstant}</p>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
            </div>
            {/* End your code here */}
        </Container>
    );
}

export default MainCombinedGasLawsCalc;