import React, { useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';

function MainRomanNumeralConverter() {
    const [number, setNumber] = useState('');
    const [romanNumeral, setRomanNumeral] = useState('');

    const convertToRoman = () => {
        let num  = parseInt(number, 10);

        if (!isNaN(num) && num > 0 && num < 4000) {
            const romanNumerals = [
                'M',
                'CM',
                'D',
                'CD',
                'C',
                'XC',
                'L',
                'XL',
                'X',
                'IX',
                'V',
                'IV',
                'I',
            ];
            const values = [
                1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
            ];

            let result = '';
            let index = 0;

            while (num > 0) {
                if (num >= values[index]) {
                    result += romanNumerals[index];
                    num -= values[index];
                } else {
                    index++;
                }
            }

            setRomanNumeral(result);
        } else {
            setRomanNumeral('Invalid input');
        }
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Roman Numeral Converter</Typography>
            <hr />
            <br />
            <div>
                <TextField
                    label="Enter a number"
                    variant="outlined"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={convertToRoman}>
                    Convert to Roman Numeral
                </Button>

                <div style={{ marginTop: '20px' }}>
                    <strong>Roman Numeral:</strong> {romanNumeral}
                </div>
            </div>
        </Container>
    )
}

export default MainRomanNumeralConverter;