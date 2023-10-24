import React, {useState, useEffect} from 'react';
import { Container, Typography, Grid, TextField, Box, Button, InputAdornment } from '@mui/material';

function MainGravitationalForceCalc(){

    const G = 6.6743e-11; // 6.6743 × 10^(-11)
    let [mass1, setMass1] = useState(0);
    let [mass2, setMass2] = useState(0);
    let [distance, setDistance] = useState(0);
    let [gravForce, setGravForce] = useState(0);

    // State variables to manage errors for input fields
    const [mass1Error, setMass1Error] = useState(false);
    const [mass2Error, setMass2Error] = useState(false);
    const [distanceError, setDistanceError] = useState(false);

    const handleCalculate = () => {
        /*  setMass1Error(false);
            setMass2Error(false);
            setDistanceError(false); Older code */
        const parsedMass1 = parseFloat(mass1);
        const parsedMass2 = parseFloat(mass2);
        const parsedDistance = parseFloat(distance);
        
        // If no errors, calculate gravitational force
        if (!mass1Error && !mass2Error && !distanceError) {
            // Calculate gravitational force and update the state
            const calculatedForce = (G * parsedMass1 * parsedMass2) / (parsedDistance * parsedDistance)  /* Perform the gravitational force calculation here */;
            setGravForce(`${calculatedForce} N`); 
        }
        else {
            setGravForce("An input error has occurred")
        }
    }

    useEffect(()=>{
        // Parse input values to floats
        const parsedMass1 = parseFloat(mass1);
        const parsedMass2 = parseFloat(mass2);
        const parsedDistance = parseFloat(distance);

        // Check if the parsed values are valid numbers
        if (isNaN(parsedMass1)) {
            setMass1Error(true);
        }
        else{
            setMass1Error(false)
        }

        if (isNaN(parsedMass2)) {
            setMass2Error(true);
        }
        else{
            setMass2Error(false)
        }

        if (isNaN(parsedDistance)) {
            setDistanceError(true);
        }
        else{
            setDistanceError(false)
        }
    },[mass1,mass2,distance])


    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Gravitational Force Calculator</Typography>
            <hr/>
            <br/>
            
            <Container maxWidth="sm" sx={{ marginTop: "30px" }}>
                <Grid container spacing={2} rowSpacing={4}>
                    <Grid item xs={6}>
                        <TextField label="Mass 1" variant="outlined" error={mass1Error} fullWidth value={mass1}
                            InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }}
                            onChange={(e) => { setMass1(e.target.value) }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField label="Mass 2" variant="outlined" error={mass2Error} fullWidth value={mass2}
                            InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }}
                            onChange={(e) => setMass2(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} lg={12}>
                        <TextField label="Distance" fullWidth error={distanceError} value={distance}
                            InputProps={{ endAdornment: <InputAdornment position="end">m</InputAdornment> }}
                            onChange={(e) => setDistance(e.target.value)}
                        />
                    </Grid>
                </Grid>


                <Box sx={{ textAlign: "center" }}>
                    <Button sx={{ marginTop: "25px" }} variant="contained" onClick={handleCalculate}>Calculate</Button>
                </Box>

                <Typography variant="h6" sx={{ textAlign: "center", marginTop: "1.5rem" }}>
                    Gravitational Force: {gravForce} 
                </Typography>
            </Container>
        </Container>
    )
}

export default MainGravitationalForceCalc;