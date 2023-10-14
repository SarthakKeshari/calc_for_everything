import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Grid } from '@mui/material';
import InfoPressureCalc from './InfoPressureCalc';

function MainPressureCalc() {
    const [force, setForce] = useState('');
    const [area, setArea] = useState('');
    const [pressure, setPressure] = useState('');

    const handleCalculatePressure = () => {
        const forceValue = parseFloat(force);
        const areaValue = parseFloat(area);

        if (!isNaN(forceValue) && !isNaN(areaValue) && areaValue > 0) {
            const result = forceValue / areaValue;
            setPressure(result.toString());
        } else {
            setPressure('Invalid Input');
        }
    };
        return (
            <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
                <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Pressure Calculator<InfoPressureCalc/></Typography>
                <hr />
                <br />
                <Container maxWidth="sm">
                    <Typography variant="h4" align="center" gutterBottom>
                        Pressure Calculator
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Force (N)"
                                fullWidth
                                variant="outlined"
                                value={force}
                                onChange={(e) => setForce(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Area (m²)"
                                fullWidth
                                variant="outlined"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleCalculatePressure}
                        style={{ marginTop: '20px' }}
                    >
                        Calculate Pressure (Pa)
                    </Button>
                    <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                        Pressure: {pressure}
                    </Typography>
                </Container>

            </Container>
        );
    
};
export default MainPressureCalc;