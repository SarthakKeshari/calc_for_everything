import React, { useState } from 'react';
import {
    Button,
    TextField,
    Typography,
    Grid,
    Container,
    Card,
    CardContent,
    CardActions,
} from '@mui/material';

function MainHammingCode() {
    const [inputData, setInputData] = useState("");
    const [encodedData, setEncodedData] = useState("");
    const [error, setError] = useState("");

    const encodeHammingCode = () => {
        setError(""); // Clear any previous error messages

        if (inputData.length !== 4) {
            setError("Input data must be 4 bits long.");
            setEncodedData("");
            return;
        }
        // Calculate parity bits
        const p1 = (Number(inputData[0]) + Number(inputData[1]) + Number(inputData[3])) % 2;
        const p2 = (Number(inputData[0]) + Number(inputData[2]) + Number(inputData[3])) % 2;
        const p4 = (Number(inputData[1]) + Number(inputData[2]) + Number(inputData[3])) % 2;

        const encoded = inputData + p1 + p2 + p4;

        setEncodedData(encoded);
    };
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Hamming Code Calculator</Typography>
            <hr />
            <br />
            <TextField
                label="Enter 4-bit data"
                variant="outlined"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                size="small"
                error={error !== ""}
                helperText={error}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={encodeHammingCode}
                style={{ marginTop: "16px" }}
            >
                Encode
            </Button>
            <Typography variant="h6" style={{ marginTop: "16px" }}>
                Encoded Hamming Code:
            </Typography>
            <TextField
                variant="outlined"
                value={encodedData}
                size="small"
                disabled
            />
        </Container>
    )
}

export default MainHammingCode;