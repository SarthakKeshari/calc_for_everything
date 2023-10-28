import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import InfoMomentumCalculator from './InfoMomentumCalc';

function MainMomentumCalc(){

    const [momentum, setMomentum] = useState('');
    const [velocity, setVelocity] = useState('');
    const [mass, setMass] = useState('');

    const handleCalculateMomentum = () => {
        const velocityValue = parseFloat(velocity);
        const massValue = parseFloat(mass);

        if(!isNaN(velocityValue) && !isNaN(massValue) && massValue > 0){
            setMomentum((massValue * velocityValue).toString());
        } else if (massValue < 0){
            setMass("Must be a positive number");
        } else if (isNaN(massValue)){
            setMass("Must be a number");
        } else if (isNaN(velocityValue)){
            setVelocity("Must be a number");
        }
    }

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Momentum Calculator<InfoMomentumCalculator/></Typography>
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
                            <TextField label="Velocity (m/s)"
                            fullWidth variant="outlined"
                            value={velocity} onChange={(e) => setVelocity(e.target.value)}/>
                        </Grid>
                    </Grid>

                    <Button variant="contained"
                        color="primary"
                        fullWidth
                        style={{marginTop: "20px"}}
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