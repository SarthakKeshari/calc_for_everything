import React, { useState } from 'react';
import { Container, Typography, Button, Grid, TextField } from '@mui/material';

function MainSquareAndCubeCalc() {
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(10);
    const [result, setResult] = useState([]);

    const handleCalculate = () => {
        const squaresAndCubes = [];
        for (let i = start; i <= end; i++) {
            squaresAndCubes.push({
                number: i,
                square: i * i,
                cube: i * i * i,
            });
        }
        setResult(squaresAndCubes);
    }
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Square And Cube Calculator</Typography>
            <hr />
            <br />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Find Squares and Cubes in a Range
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            label="Start"
                            type="number"
                            variant="outlined"
                            value={start}
                            onChange={(e) => setStart(Number(e.target.value))}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="End"
                            type="number"
                            variant="outlined"
                            value={end}
                            onChange={(e) => setEnd(Number(e.target.value))}
                        />
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCalculate}
                    style={{ marginTop: '10px' }}
                >
                    Calculate
                </Button>
                <Typography variant="h5" style={{ marginTop: '20px' }}>
                    Result:
                </Typography>
                <ul>
                    {result.map((item) => (
                        <li key={item.number}>
                            {item.number}: Square: {item.square}, Cube: {item.cube}
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

export default MainSquareAndCubeCalc;