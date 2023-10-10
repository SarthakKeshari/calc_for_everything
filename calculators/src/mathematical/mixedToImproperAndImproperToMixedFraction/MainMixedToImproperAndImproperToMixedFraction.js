import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function MainMixedToImproperAndImproperToMixedFraction() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [isMixedToImproper, setIsMixedToImproper] = useState(true);

    const convertFraction = () => {
        const fractions = inputValue.split(' ');

        if (fractions.length === 2) {
            // Convert mixed fraction to improper fraction
            const wholeNumber = parseInt(fractions[0]);
            const [numerator, denominator] = fractions[1].split('/').map(Number);
            const improperNumerator = wholeNumber * denominator + numerator;
            setOutputValue(`${improperNumerator}/${denominator}`);
        } else if (fractions.length === 1 && fractions[0].includes('/')) {
            // Convert improper fraction to mixed fraction
            const [numerator, denominator] = fractions[0].split('/').map(Number);
            const wholeNumber = Math.floor(numerator / denominator);
            const remainingNumerator = numerator % denominator;
            setOutputValue(`${wholeNumber} ${remainingNumerator}/${denominator}`);
        } else {
            // Invalid input
            setOutputValue('Invalid input');
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const toggleConversionType = () => {
        setIsMixedToImproper(!isMixedToImproper);
        setInputValue('');
        setOutputValue('');
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Mixed To Improper And Improper To Mixed Fraction Calculator</Typography>
            <hr />
            <br />
            <div>
                <TextField
                    label={isMixedToImproper ? 'Mixed Fraction' : 'Improper Fraction'}
                    variant="outlined"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <Button variant="contained" onClick={convertFraction}>
                    Convert
                </Button>
                <Button variant="outlined" onClick={toggleConversionType} style={{ marginLeft: '10px' }}>
                    Toggle Conversion Type
                </Button>
                <br />
                <br />
                <TextField
                    label={isMixedToImproper ? 'Improper Fraction' : 'Mixed Fraction'}
                    variant="outlined"
                    value={outputValue}
                    readOnly
                />
            </div>

        </Container>
    )
}

export default MainMixedToImproperAndImproperToMixedFraction;