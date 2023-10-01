import React, { useState } from 'react';
import { Container, Typography, Input, Divider } from '@mui/material';

function MainHexToBinAndBinToHex() {
    const [hex, setHex] = useState('');
    const [binary, setBinary] = useState('');

    const handleHexChange = (e) => {
        const hexValue = e.target.value.toUpperCase();
        setHex(hexValue);

        if (hexValue) {
            let binValue = parseInt(hexValue, 16).toString(2);
            setBinary(binValue);
        } else {
            setBinary('');
        }
    };

    const handleBinaryChange = (e) => {
        const binValue = e.target.value;
        setBinary(binValue);

        if (binValue) {
            let hexValue = parseInt(binValue, 2).toString(16).toUpperCase();
            setHex(hexValue);
        } else {
            setHex('');
        }
    };

    return (
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
