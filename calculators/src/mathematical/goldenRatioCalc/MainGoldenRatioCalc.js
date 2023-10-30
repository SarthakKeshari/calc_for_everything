import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MainGoldenRatioCalc() {

    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [ratioType, setRatioType] = useState('');
    const [missingRatio, setMissingRatio] = useState('');

    const calculateGoldenRatio = (a, b) => {
        if (a === 0 || b === 0) {
            return null;
        }
        const ratio = (a + b) / a;
        return ratio;
    };

    const calculateMissingRatio = () => {
        const parsedA = parseFloat(a);
        const parsedB = parseFloat(b);

        if (isNaN(parsedA) || isNaN(parsedB)) {
            setMissingRatio('Invalid input');
            return;
        }

        if (ratioType === 'AB') {
            const missingRatio = parsedB * (1 + calculateGoldenRatio(parsedA, parsedB));
            setMissingRatio(missingRatio.toFixed(2));
           
        } else if (ratioType === 'BA') {
            const missingRatio = parsedA * calculateGoldenRatio(parsedA, parsedB) - parsedB;
            setMissingRatio(missingRatio.toFixed(2));
        } else {
            setMissingRatio('Invalid ratio type');
        }
    };

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Golden Ratio Calculator</Typography>
            <hr/>
            <br/>
            {/* Write your code here */}
            
            
            <TextField
                label="Value of A"
                variant="outlined"
                value={a}
                onChange={(e) => setA(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Value of B"
                variant="outlined"
                value={b}
                onChange={(e) => setB(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Ratio Type (AB or BA)"
                variant="outlined"
                value={ratioType}
                onChange={(e) => setRatioType(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" onClick={calculateMissingRatio}>
                Calculate Missing Golden Ratio
            </Button>
            {missingRatio && (
                <Typography variant="h6" sx={{ marginTop: '2rem', textAlign: 'center' }}>
                    Missing Golden Ratio: {missingRatio}
                </Typography>
            )}
            {/* End your code here */}
        </Container>
    )
}

export default MainGoldenRatioCalc;