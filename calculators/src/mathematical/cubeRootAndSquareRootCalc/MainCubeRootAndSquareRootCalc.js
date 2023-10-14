import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function MainCubeRootAndSquareRootCalc() {
    const [startValue, setStartValue] = useState('');
    const [endValue, setEndValue] = useState('');
    const [result, setResult] = useState([]);

    const calculateRoots = () => {
        const start = parseInt(startValue);
        const end = parseInt(endValue);
        const roots = [];

        if (!isNaN(start) && !isNaN(end) && start <= end && end <= 100000) {
            for (let i = start; i <= end; i++) {
                roots.push({
                    number: i,
                    squareRoot: Math.sqrt(i).toFixed(2),
                    cubeRoot: Math.cbrt(i).toFixed(2),
                });
            }
            setResult(roots);
        } else {
            setResult([]);
        }
    };

    const handleStartChange = (event) => {
        setStartValue(event.target.value);
    };

    const handleEndChange = (event) => {
        setEndValue(event.target.value);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Cube Root And Square Root Calculator</Typography>
            <hr />
            <br />
            <div>
                <TextField
                    label="Start Value"
                    variant="outlined"
                    value={startValue}
                    onChange={handleStartChange}
                    type="number"
                />
                <TextField
                    label="End Value"
                    variant="outlined"
                    value={endValue}
                    onChange={handleEndChange}
                    type="number"
                    style={{ marginLeft: '10px' }}
                />
                <br />
                <br />
                <Button variant="contained" onClick={calculateRoots}>
                    Calculate Roots
                </Button>
                <br />
                <br />
                {result.length > 0 && (
                    <div>
                        <strong>Results:</strong>
                        <ul>
                            {result.map((item) => (
                                <li key={item.number}>
                                    {`Number: ${item.number}, Square Root: ${item.squareRoot}, Cube Root: ${item.cubeRoot}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

        </Container>
    )
}

export default MainCubeRootAndSquareRootCalc;