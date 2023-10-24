import React, {useState, useEffect} from 'react';
import { Container, TextField, Typography, InputAdornment, Box, Button } from '@mui/material';

function MainPotentialEnergyCalc(){
    const g = 9.8;
    const [mass, setMass] = useState(0);
    const [height, setHeight] = useState(0);
    let [potentialEnergy, setPotentialEnergy] = useState("0 J");

    const [massError, setMassError] = useState(false);
    const [heightError, setHeightError] = useState(false);
    const [massHelperText, setMassHelperText] = useState("");
    const [heightHelperText, setHeightHelperText] = useState("");


    const handleCalculate = () => {
        const parsedMass = parseFloat(mass);
        const parsedHeight = parseFloat(height);

        if(!massError && !heightError) {
            potentialEnergy = parsedHeight*parsedMass*g;
            setPotentialEnergy(`${potentialEnergy} J`)
        }
        else{
            setPotentialEnergy(`An input error has occurred`)
        }
    }

    useEffect(()=>{
        const parsedMass = parseFloat(mass);
        const parsedHeight = parseFloat(height)

        if( isNaN(parsedMass)) {
            setMassError(true);
            setMassHelperText("Enter a number")
        }
        else {
            setMassError(false);
            setMassHelperText("")
        }

        if (isNaN(parsedHeight)) {
            setHeightError(true);
            setHeightHelperText("Enter a number")
        }
        else {
            setHeightError(false);
            setHeightHelperText("")
        }
    }, [mass,height])

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Potential Energy Calculator</Typography>
            <hr/>
            <br/>
            
            <Container maxWidth="xs" sx={{marginY: "30px"}}>
            
                <TextField fullWidth variant="outlined" label="Mass" margin='normal' value={mass} onChange={(e)=> setMass(e.target.value)}
                    InputProps={{endAdornment:<InputAdornment position="end">kg</InputAdornment>}}
                    error={massError} helperText={massHelperText}/>

                <TextField fullWidth variant='outlined' label="Height" margin='normal' value={height} onChange={(e)=> setHeight(e.target.value)}
                    InputProps={{endAdornment:<InputAdornment position='end'>m</InputAdornment>}}
                    error={heightError} helperText={heightHelperText}/>

                <Box sx={{ textAlign: "center" }}>
                    <Button sx={{ marginTop: "25px" }} variant="contained" onClick={handleCalculate}>Calculate</Button>
                </Box>

                <Typography variant="h6" sx={{ textAlign: "center", marginTop: "1.5rem" }}>
                    Potential Energy:  {potentialEnergy}
                </Typography>
            </Container>
        </Container>
    )
}

export default MainPotentialEnergyCalc;