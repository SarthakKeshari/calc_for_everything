import React, { useState } from 'react';
import { Container, Typography, Input, Divider } from '@mui/material';

function MainHexToBinAndBinToHex() {
    // State variables to store the Hex and Binary values.
    const [hex, setHex] = useState('');
    const [binary, setBinary] = useState('');
// Function to handle changes in the Hexadecimal input.
    const handleHexChange = (e) => {
        const hexValue = e.target.value.toUpperCase();
        setHex(hexValue);

        // Convert Hexadecimal to Binary.
        if (hexValue) {
            let binValue = parseInt(hexValue, 16).toString(2);
            setBinary(binValue);
        } else {
            setBinary('');
        }
    };

    // Function to handle changes in the Binary input.
    const handleBinaryChange = (e) => {
        const binValue = e.target.value;
        setBinary(binValue);

        // Convert Binary to Hexadecimal.
        if (binValue) {
            let hexValue = parseInt(binValue, 2).toString(16).toUpperCase();
            setHex(hexValue);
        } else {
            setHex('');
        }
    };

    return (
        // Main container for the converter UI.
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Hexadecimal to Binary and Binary to Hexadecimal Calculator</Typography>
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" mt={3}>Enter Hexadecimal:</Typography>
            <Input
                placeholder="Hexadecimal"
                variant="outlined"
                type='text'
                onChange={handleHexChange}
                value={hex}
                fullWidth
                sx={{ marginBottom: 3 }}
            />

           
            <Typography variant="h6">Enter Binary:</Typography>
            <Input
                placeholder="Binary"
                variant="outlined"
                type='text'
                onChange={handleBinaryChange}
                value={binary}
                fullWidth
                sx={{ marginBottom: 3 }}
            />

            <Typography variant='h6' mt={2}>Converted Hexadecimal:</Typography>
            <Typography variant='body1' sx={{ color: "blue", marginBottom: 3 }}>{hex}</Typography>

            <Typography variant='h6'>Converted Binary:</Typography>
            <Typography variant='body1' sx={{ color: "blue" }}>{binary}</Typography>
        </Container>
    )
}

export default MainHexToBinAndBinToHex;
