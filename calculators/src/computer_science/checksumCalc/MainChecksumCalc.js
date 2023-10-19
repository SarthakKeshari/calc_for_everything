import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import sha256 from 'crypto-js/sha256';
    
function MainChecksumCalc() {
    const [inputText, setInputText] = useState('');
    const [checksum, setChecksum] = useState('');
    

    const calculateChecksum = () => {
        if (inputText) {
            const hashDigest = sha256(inputText);
            const privateKey = "calc"
            const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, privateKey));
            setChecksum(hmacDigest);
            console.log(hmacDigest)

          
        }
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Checksum Calculator</Typography>
            <hr />
            <br />
            <TextField

                label="Enter text for checksum calculation"
                variant="outlined"
                multiline
                rows={4}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={calculateChecksum}>
                Calculate Checksum
            </Button>
            <br/>
            <Typography mt={4}>
                
                {
                    checksum &&
                    `SHA-256 : ${checksum}`

                }
            </Typography>
           
        </Container>
    );
};

export default MainChecksumCalc;