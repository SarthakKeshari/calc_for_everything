import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import InfoFactorsOfNumber from './InfoFactorsOfNumber';

function MainFactorsOfNumber() {
    const [number, setNumber] = useState('');
    const [factors, setFactors] = useState([]);

    const findFactors = () => {
        const num = parseInt(number);

        if (isNaN(num)) {
            alert('Please enter a valid number.');
            return;
        }

        const factorsArray = [];

        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                factorsArray.push(i);
            }
        }

        setFactors(factorsArray);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Factors Of A Number <InfoFactorsOfNumber/></Typography>
            <hr />
            <br />
            <div>
                <Typography variant="h4">Factors Finder</Typography>
                <TextField
                    label="Enter a number"
                    variant="outlined"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    style={{ margin: '16px 0' }}
                />
                <Button variant="contained" color="primary" onClick={findFactors}>
                    Find Factors
                </Button>
                {factors.length > 0 && (
                    <div>
                        <Typography variant="h5">Factors:</Typography>
                        <ul>
                            {factors.map((factor) => (
                                <li key={factor}>{factor}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

        </Container>
    )
}

export default MainFactorsOfNumber;