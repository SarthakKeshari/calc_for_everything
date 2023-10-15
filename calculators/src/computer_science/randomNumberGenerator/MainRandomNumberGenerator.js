import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Box } from '@mui/material';
import InfoRandomNumberGenerator from './InfoRandomNumberGenerator';

function MainRandomNumberGenerator() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const minNum = parseInt(min);
        const maxNum = parseInt(max);

        if (minNum < maxNum) {
            const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
            setRandomNumber(randomNum);
        }
    };
        return (
            <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
                <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Random Number Generator<InfoRandomNumberGenerator/></Typography>
                <hr />
                <br />
                {/* Write your code here */}
                <div>
                    <Typography variant="h5" gutterBottom>
                        Random Number Generator
                    </Typography>

                    <TextField
                        label="Min"
                        type="number"
                        variant="outlined"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        label="Max"
                        type="number"
                        variant="outlined"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                        fullWidth
                    />

                    <Button variant="contained" color="primary" onClick={generateRandomNumber}>
                        Generate Random Number
                    </Button>

                    {randomNumber !== null && (
                        <Box mt={2}>
                            <Typography variant="h6">Random Number:</Typography>
                            <Typography variant="h4">{randomNumber}</Typography>
                        </Box>
                    )}
                </div>


                {/* End your code here */}
            </Container>
        );
    };

    export default MainRandomNumberGenerator;