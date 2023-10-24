import React, { useState } from 'react';
import {Container, Typography,TextField,Button } from '@mui/material';

function MainVarianceStandardDeviationConverter()
{
    const [varinputValue, varsetInputValue] = useState(0);
    const [sdinputValue, sdsetInputValue] = useState(0);
    const [squareRoot, setSquareRoot] = useState(0);
    const [square, setSquare] = useState(0);

    const calculateSquareRoot = () => {
        setSquareRoot(Math.sqrt(varinputValue));
    };

    const calculateSquare = () => {
        setSquare(Math.pow(sdinputValue,2));
    };

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Variance - Standard Deviation Converter</Typography>
            <hr/>
            <br/>
            {/* Write your code here */}
            <div>
                <TextField
                    type="number"
                    label="Enter Variance"
                    value={varinputValue}
                    onChange={(event) => varsetInputValue(event.target.value)}
                />
                <br />
                <br></br>
                <Button variant="contained" color="primary" onClick={calculateSquareRoot}>Calculate Standard Deviation</Button>
                <br />
                <br></br>
                Standard Deviation: {squareRoot}
            </div>
            <br></br>
            <br></br>
            <div>
                <TextField
                    type="number"
                    label="Enter Standard Deviation"
                    value={sdinputValue}
                    onChange={(event) => sdsetInputValue(event.target.value)}
                />
                <br />
                <br></br>
                <Button variant="contained" color="primary" onClick={calculateSquare}>Calculate Variance</Button>
                <br />
                <br></br>
                Variance: {square}
            </div>

            {/* End your code here */}
        </Container>
    )
}

export default MainVarianceStandardDeviationConverter;