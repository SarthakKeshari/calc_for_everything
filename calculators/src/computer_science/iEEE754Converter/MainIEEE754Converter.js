import React, { useState } from 'react';
import CopyValue from '../../components/CopyValue';
import { Container, Typography, TextField } from '@mui/material';

function MainIEEE754Converter() {
    const [decimalInput, setDecimalInput] = useState('');
    const [ieee754Representation32, setIEEE754Representation32] = useState('');
    const [ieee754Representation64, setIEEE754Representation64] = useState('');

    const handleDecimalInputChange = (event) => {
        setDecimalInput(event.target.value);
    };

    const binaryToHex = (binaryString) => {
        
        while (binaryString.length % 4 !== 0) {
            binaryString = '0' + binaryString;
        }

        let hexString = '';

        for (let i = 0; i < binaryString.length; i += 4) {
            const binaryChunk = binaryString.substr(i, 4);
            const decimalValue = parseInt(binaryChunk, 2);
            const hexDigit = decimalValue.toString(16).toUpperCase();
            hexString += hexDigit;
        }

        return hexString;
    }

    const convertToIEEE754 = () => {
        const decimalValue = parseFloat(decimalInput);
        if (!isNaN(decimalValue)) {

            const signBit = decimalValue >= 0 ? 0 : 1;

  
            let absoluteValue = Math.abs(decimalValue);

            let binaryRepresentation32 = '';
            let binaryRepresentation64 = '';

            if (absoluteValue === 0) {
                binaryRepresentation32 = '0'.repeat(32);
                binaryRepresentation64 = '0'.repeat(64);
            } else {
                let exponent32 = 0;
                let exponent64 = 0;

                while (absoluteValue >= 2) {
                    absoluteValue /= 2;
                    exponent32++;
                    exponent64++;
                }

                while (absoluteValue < 1) {
                    absoluteValue *= 2;
                    exponent32--;
                    exponent64--;
                }

                exponent32 += 127; // Add bias for 32-bit IEEE 754
                exponent64 += 1023; // Add bias for 64-bit IEEE 754

                let mantissa32 = '';
                let mantissa64 = '';
                absoluteValue -= 1;
                let absoluteValue64 = absoluteValue;

                // Calculate the mantissa for 32-bit (23 bits)
                for (let i = 0; i < 23; i++) {
                    absoluteValue *= 2;
                    mantissa32 += Math.floor(absoluteValue);
                    absoluteValue -= Math.floor(absoluteValue);
                }

                // Calculate the mantissa for 64-bit (52 bits)
                for (let i = 0; i < 52; i++) {
                    absoluteValue64 *= 2;
                    mantissa64 += Math.floor(absoluteValue64);
                    absoluteValue64 -= Math.floor(absoluteValue64);
                }

                // Convert the exponent to binary (8 bits for 32-bit and 11 bits for 64-bit)
                const exponentBinary32 = (exponent32 >>> 0).toString(2).padStart(8, '0');
                const exponentBinary64 = (exponent64 >>> 0).toString(2).padStart(11, '0');

   
                binaryRepresentation32 = `${signBit} ${exponentBinary32} ${mantissa32}`;
                binaryRepresentation64 = `${signBit} ${exponentBinary64} ${mantissa64}`;
            }

            setIEEE754Representation32(binaryRepresentation32);
            setIEEE754Representation64(binaryRepresentation64);
        } else {
            setIEEE754Representation32('Invalid input');
            setIEEE754Representation64('Invalid input');
        }
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
            <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
                IEEE754 Converter
            </Typography>
            <hr />
            <br />
            <input
                type='number'
                label="Enter a decimal number"
                variant="outlined"
                fullWidth
                value={decimalInput}
                onChange={handleDecimalInputChange}
            />
            <br />
            <br />
            <center><button onClick={convertToIEEE754}>Convert to IEEE754</button></center>
            <br />
            <br />
            {ieee754Representation32 && ieee754Representation64 && (
                <div className='output'>
                    <div>
                        <Typography variant="h6" mt={2} pt={1}>32-bit IEEE754 Representation:</Typography>
                        <Typography mt={2} pt={1}><span style={{ color: 'black' }}>Binary:</span> {ieee754Representation32}</Typography>
                        <CopyValue value={ieee754Representation32} />
                        <Typography mt={2} pt={1}><span style={{ color: 'black' }}>Hex:</span> {binaryToHex(ieee754Representation32)}</Typography>
                        <CopyValue value={binaryToHex(ieee754Representation32)} />

                    </div>

                    <div>
                        <Typography variant="h6" mt={2} pt={1}>64-bit IEEE754 Representation:</Typography>
                        <Typography mt={2} pt={1}><span style={{ color: 'black' }}>Binary:</span> {ieee754Representation64}</Typography>
                        <CopyValue value={ieee754Representation64} />

                        <Typography mt={2} pt={1}><span style={{ color: 'black' }}>Hex:</span> {binaryToHex(ieee754Representation64)}</Typography>
                        <CopyValue value={binaryToHex(ieee754Representation64)} />

                    </div>

                </div>
            )}
        </Container>
    );
}

export default MainIEEE754Converter;