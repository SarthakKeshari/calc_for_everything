import React, { useState } from 'react';
import { Container, Typography, Button, Grid, TextField } from '@mui/material';
function calculateHCF(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
function MainHCFCalc() {
   

    
        const [number, setNumber] = useState('');
        const [hcf, setHCF] = useState('');

        const handleCalculateHCF = () => {
            const num = parseInt(number);

            if (!isNaN(num) && num > 0) {
                const result = calculateHCF(num, num);
                setHCF(result.toString());
            } else {
                setHCF('Invalid Input');
            }
        };
    

        return (
            <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
                <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>HCF Calculator</Typography>
                <hr />
                <br />
                <Container maxWidth="sm">
                    <Typography variant="h4" align="center" gutterBottom>
                        HCF Calculator
                    </Typography>
                    <TextField
                        label="Enter a Number"
                        fullWidth
                        variant="outlined"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleCalculateHCF}
                        style={{ marginTop: '20px' }}
                    >
                        Calculate HCF
                    </Button>
                    <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                        HCF: {hcf}
                    </Typography>
                </Container>
            </Container>
        );
        
};

export default MainHCFCalc;