import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function MainExcess3CodeConverter() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [isBinaryToExcess3, setIsBinaryToExcess3] = useState(true);

    const convertNumber = () => {
        if (isBinaryToExcess3) {
            // Convert binary to excess-3
            const binaryValue = inputValue;
            const excess3Value = parseInt(binaryValue, 2) + 3;
            setOutputValue(excess3Value.toString());
        } else {
            // Convert excess-3 to binary
            const excess3Value = parseInt(inputValue);
            const binaryValue = (excess3Value - 3).toString(2);
            setOutputValue(binaryValue);
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const toggleConversionType = () => {
        setIsBinaryToExcess3(!isBinaryToExcess3);
        setInputValue('');
        setOutputValue('');
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Excess-3 Code Converter</Typography>
            <hr />
            <br />
            <div>
                <TextField
                    label={isBinaryToExcess3 ? 'Binary Number' : 'Excess-3 Code'}
                    variant="outlined"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <Button variant="contained" onClick={convertNumber}>
                    Convert
                </Button>
                <Button variant="outlined" onClick={toggleConversionType} style={{ marginLeft: '10px' }}>
                    Toggle Conversion Type
                </Button>
                <br />
                <br />
                <TextField
                    label={isBinaryToExcess3 ? 'Excess-3 Code' : 'Binary Number'}
                    variant="outlined"
                    value={outputValue}
                    readOnly
                />
            </div>

        </Container>
    )
}

export default MainExcess3CodeConverter;