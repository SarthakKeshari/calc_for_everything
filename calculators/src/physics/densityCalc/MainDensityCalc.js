import React, { useState } from 'react';
import { Button, Container, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import InfoDensityCalculator from './InfoDensityCalc';

function MainDensityCalc(){

    const [mass, setMass] = useState('');
    const [massUnit, setMassUnit] = useState('kg')
    const [volume, setVolume] = useState('');
    const [volumeUnit, setVolumeUnit] = useState('m3');
    const [density, setDensity] = useState('');

    

    const handleCalculateDensity = () => {
        const massValue = convertMass(parseFloat(mass), massUnit);
        const volumeValue = convertVolume(parseFloat(volume), volumeUnit);

        if (!isNaN(massValue) && !isNaN(volumeValue) && massValue >= 0 && volumeValue >= 0){
            setDensity((massValue/volumeValue).toString());
        } else{
            setMass("Must be a positive number");
            setVolume("Must be a positive number");
        }
    };

    // Converted selected mass input back to kg
    const convertMass = (mass, unit) => {
        switch (unit) {
            case 'kg':
                return mass;
                case 'g':
                    return mass / 1000;
                case 'mg':
                    return mass / 1000000;
                case 'oz':
                    return mass * 0.0283495;
                case 'lb':
                    return mass * 0.453592;
                case 't':
                    return mass * 1000;
                default:
                    return mass;
        }
    }

    //Converts selected volume input back to m3
    const convertVolume = (volume, unit) => {
        switch (unit) {
            case 'm3':
                return volume;
            case 'L':
                return volume / 1000;
            case 'mL':
                return volume / 1000000;
            case 'in3':
                return volume * 0.0000163871;
            case 'cm3':
                return volume / 1000000;
            default:
                return volume;
        }
    }

    const handleMassUnitChange = (event) => {
        setMassUnit(event.target.value);
    };

    const handleVolumeUnitChange = (event) => {
        setVolumeUnit(event.target.value);
    };


    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Density Calculator<InfoDensityCalculator/></Typography>
            <hr/>
            <br/>
                <Container maxWidth="sm">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField label="Mass (kg)"
                            fullWidth variant="outlined" 
                            value={mass} onChange={(e) => setMass(e.target.value)}/>
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
                                        <MenuItem value="kg">Kilograms (kg)</MenuItem>
                                        <MenuItem value="g">Grams (g)</MenuItem>
                                        <MenuItem value="mg">Milligram (mg)</MenuItem>
                                        <MenuItem value="oz">Ounces (oz)</MenuItem>
                                        <MenuItem value="lb">Pounds (lb)</MenuItem>
                                        <MenuItem value="t">Metric Tons (t)</MenuItem>
                                    </Select>
                            </div>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField label={<span>Volume (m<sup>3</sup>)</span>} 
                            fullWidth variant="outlined" 
                            value={volume} onChange={(e) => setVolume(e.target.value)}/>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{ position: 'relative' }}>
                                <InputLabel style={{ position: 'absolute', top: -20 }}>Unit</InputLabel>
                                <Select
                                    label="Volume Unit"
                                    value={volumeUnit}
                                    onChange={handleVolumeUnitChange}
                                    fullWidth
                                >
                                    <MenuItem value="m3">Cubic Meters (m<sup>3</sup>)</MenuItem>
                                    <MenuItem value="L">Liters (L)</MenuItem>
                                    <MenuItem value="mL">Milliliters (mL)</MenuItem>
                                    <MenuItem value="in3">Cubic Inches (in<sup>3</sup>)</MenuItem>
                                    <MenuItem value="cm3">Cubic Centimeters (cm<sup>3</sup>)</MenuItem>
                                </Select>
                            </div>
                        </Grid>
                    </Grid>

                    <Button variant="contained"
                        color="primary"
                        fullWidth
                        style={{marginTop: "20px"}}
                        onClick={handleCalculateDensity}>
                        Calculate Density (p)
                    </Button>

                    <Typography variant="h6" align="center" style={{marginTop: "20px"}}>
                        Density : {density !== '' ? density + " kg/m³" : ''}
                    </Typography>
                </Container>
        </Container>
    )
}

export default MainDensityCalc;