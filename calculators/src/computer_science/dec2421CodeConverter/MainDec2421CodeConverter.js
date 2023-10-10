import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container } from '@mui/material';
const decimalToBase2421 = (decimal) => {
    if (isNaN(decimal) || decimal < 0) {
        return 'Invalid Input';
    }

    let base2421 = '';
    while (decimal > 0) {
        let remainder = decimal % 2421;
        base2421 = String.fromCharCode(remainder + 33) + base2421;
        decimal = Math.floor(decimal / 2421);
    }

    return base2421 || '0';
};

const base2421ToDecimal = (base2421) => {
    let decimal = 0;
    for (let i = 0; i < base2421.length; i++) {
        const charCode = base2421.charCodeAt(i) - 33;
        if (charCode < 0 || charCode >= 2421) {
            return 'Invalid Input';
        }
        decimal = decimal * 2421 + charCode;
    }
    return decimal.toString();
};

function MainDec2421CodeConverter() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [isDecimalToBase, setIsDecimalToBase] = useState(true);

    const handleConvertClick = () => {
        if (isDecimalToBase) {
            setOutputValue(decimalToBase2421(parseInt(inputValue, 10)));
        } else {
            setOutputValue(base2421ToDecimal(inputValue));
        }
    };

    const toggleConversion = () => {
        setIsDecimalToBase(!isDecimalToBase);
        setInputValue('');
        setOutputValue('');
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Decimal/2421 Code Converter</Typography>
            <hr />
            <br />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label={isDecimalToBase ? 'Decimal Number' : 'Base-2421 Number'}
                        variant="outlined"
                        fullWidth
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleConvertClick}>
                        Convert
                    </Button>
                    <Button variant="outlined" onClick={toggleConversion}>
                        Toggle Conversion
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        {isDecimalToBase ? 'Base-2421 Representation' : 'Decimal Number'}
                    </Typography>
                    <Typography variant="body1">{outputValue}</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MainDec2421CodeConverter;