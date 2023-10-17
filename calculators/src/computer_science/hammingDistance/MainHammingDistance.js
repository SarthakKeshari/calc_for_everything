import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

function MainHammingDistance() {
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [distance, setDistance] = useState('');

    const calculateHammingDistance = () => {
        if (string1.length !== string2.length) {
            setDistance('Strings must have the same length');
            return;
        }

        let hammingDistance = 0;
        for (let i = 0; i < string1.length; i++) {
            if (string1[i] !== string2[i]) {
                hammingDistance++;
            }
        }

        setDistance(`Hamming Distance: ${hammingDistance}`);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Hamming Distance Calculator</Typography>
            <hr />

            <br />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="String 1"
                        variant="outlined"
                        fullWidth
                        value={string1}
                        onChange={(e) => setString1(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="String 2"
                        variant="outlined"
                        fullWidth
                        value={string2}
                        onChange={(e) => setString2(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={calculateHammingDistance}>
                        Calculate
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        {distance}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MainHammingDistance;