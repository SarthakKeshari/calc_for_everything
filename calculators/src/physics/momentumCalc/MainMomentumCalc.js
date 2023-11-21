import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, MenuItem, Select, InputLabel } from '@mui/material';
import InfoMomentumCalculator from './InfoMomentumCalc';

function MainMomentumCalc() {
    const [momentum, setMomentum] = useState('');
    const [velocity, setVelocity] = useState('');
    const [mass, setMass] = useState('');
    const [massUnit, setMassUnit] = useState('kg');
    const [velocityUnit, setVelocityUnit] = useState('m/s');

    const handleCalculateMomentum = () => {
        const velocityValue = convertVelocity(parseFloat(velocity), velocityUnit);
        const massValue = convertMass(parseFloat(mass), massUnit);

        if (!isNaN(velocityValue) && !isNaN(massValue) && massValue > 0) {
            setMomentum((massValue * velocityValue).toString());
        } else if (massValue < 0) {
            setMass("Must be a positive number");
        } else if (isNaN(massValue)) {
            setMass("Please fill this field with a number");
        } else if (isNaN(velocityValue)) {
            setVelocity("Please fill this field with a number");
        }
    };

    const convertMass = (mass, unit) => {
        switch (unit) {
            case 'kg':
                return mass;
            case 'g':
                return mass / 1000;
            case 'oz':
                return mass * 0.0283495; // 1 ounce is approximately 0.0283495 kilograms
            case 'lb':
                    return mass * 0.453592; // 1 pound is approximately 0.453592 kilograms
            default:
                return mass;
        }
    };

    const convertVelocity = (velocity, unit) => {
        switch (unit) {
            case 'm/s':
                return velocity;
            case 'in/s':
                return velocity * 0.0254; // 1 inch is approximately 0.0254 meters
            case 'cm/s':
                return velocity / 100;
            case 'km/h':
                return velocity * 0.277778; // 1 kilometer per hour is approximately 0.277778 meters per second
            default:
                return velocity;
        }
    };

    const handleMassUnitChange = (event) => {
        setMassUnit(event.target.value);
    };

    const handleVelocityUnitChange = (event) => {
        setVelocityUnit(event.target.value);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Momentum Calculator<InfoMomentumCalculator /></Typography>
            <hr/>
            <br/>
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField label="Mass"
                            fullWidth variant="outlined"
                            value={mass} onChange={(e) => setMass(e.target.value)} />
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{ position: 'relative' }}>
                            <InputLabel style={{ position: 'absolute', top: -20 }}>Unit</InputLabel>
                            <Select
                                label="Mass Unit"
                                value={massUnit}
                                onChange={handleMassUnitChange}
                                fullWidth
                            >
                                <MenuItem value="kg">Kilograms</MenuItem>
                                <MenuItem value="g">Grams</MenuItem>
                                <MenuItem value="oz">Ounces</MenuItem>
                                <MenuItem value="lb">Pounds</MenuItem>
                            </Select>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Velocity"
                            fullWidth variant="outlined"
                            value={velocity} onChange={(e) => setVelocity(e.target.value)} />
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{ position: 'relative' }}>
                            <InputLabel style={{ position: 'absolute', top: -20 }}>Unit</InputLabel>
                            <Select
                                label="Velocity Unit"
                                value={velocityUnit}
                                onChange={handleVelocityUnitChange}
                                fullWidth
                            >
                                <MenuItem value="m/s">m/s</MenuItem>
                                <MenuItem value="in/s">in/s</MenuItem>
                                <MenuItem value="cm/s">cm/s</MenuItem>
                                <MenuItem value="km/h">km/h</MenuItem>
                            </Select>
                        </div>
                    </Grid>
                </Grid>

                <Button variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: "20px" }}
                    onClick={handleCalculateMomentum}>
                    Calculate Momentum (p)
                </Button>

                <Typography variant="h6" align="center" style={{marginTop: "20px"}}>
                    Momentum : {momentum !== '' ? momentum + " kg m/s" : ''}
                </Typography>
            </Container>
        </Container>
    )
}

export default MainMomentumCalc;
