import React, { useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import InfoPlaceAndFaceCalc from './InfoPlaceAndFaceValueCalc';

function MainPlaceAndFaceValueCalc() {
    const [number, setNumber] = useState('');
    const [digitPosition, setDigitPosition] = useState('');
    const [placeValue, setPlaceValue] = useState('');
    const [faceValue, setFaceValue] = useState('');

    const calculateValues = () => {
        const num = parseInt(number, 10);
        const position = parseInt(digitPosition, 10);

        if (!isNaN(num) && !isNaN(position)) {
            const digitString = num.toString();
            const digitIndex = digitString.length - position;

            if (digitIndex >= 0 && digitIndex < digitString.length) {
                const digit = parseInt(digitString.charAt(digitIndex), 10);
                setPlaceValue(digit * Math.pow(10, position - 1));
                setFaceValue(digit);
            } else {
                setPlaceValue('Invalid digit position');
                setFaceValue('Invalid digit position');
            }
        } else {
            setPlaceValue('Invalid input');
            setFaceValue('Invalid input');
        }
    };
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Place And Face Value Calculator<InfoPlaceAndFaceCalc/></Typography>
            <hr />
            <div>
                <TextField
                    label="Enter a number"
                    variant="outlined"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <TextField
                    label="Digit position"
                    variant="outlined"
                    value={digitPosition}
                    onChange={(e) => setDigitPosition(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={calculateValues}>
                    Calculate
                </Button>
                <div>
                <sup>
                    *Right most digit corresponds to Digit position 1
                </sup>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <strong>Place Value:</strong> {placeValue}
                </div>
                <div>
                    <strong>Face Value:</strong> {faceValue}
                </div>
            </div>
            <br />
        </Container>
    )
}

export default MainPlaceAndFaceValueCalc;