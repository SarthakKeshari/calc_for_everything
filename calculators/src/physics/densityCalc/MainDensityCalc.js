import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import InfoDensityCalculator from './InfoDensityCalc';

function MainDensityCalc(){

    const [mass, setMass] = useState('');
    const [volume, setVolume] = useState('');
    const [density, setDensity] = useState('');
    

    const handleCalculateDensity = () => {
        const massValue = parseFloat(mass);
        const volumeValue = parseFloat(volume);

        if (!isNaN(massValue) && !isNaN(volumeValue) && massValue >= 0 && volumeValue >= 0){
            setDensity((massValue/volumeValue).toString());
        } else{
            setMass("Must be a positive number");
            setVolume("Must be a positive number");
        }
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
                            <TextField label={<span>Volume (m<sup>3</sup>)</span>} 
                            fullWidth variant="outlined" 
                            value={volume} onChange={(e) => setVolume(e.target.value)}/>
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