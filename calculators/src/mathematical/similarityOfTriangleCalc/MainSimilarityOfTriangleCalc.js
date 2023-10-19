import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
// import TrianglePic from './.png';
function MainSimilarityOfTriangleCalc() {
    const [side1A, setSide1A] = useState('');
    const [side1B, setSide1B] = useState('');
    const [side2A, setSide2A] = useState('');
    const [side2B, setSide2B] = useState('');
    const [side3A, setSide3A] = useState('');
    const [side3B, setSide3B] = useState('');
    const [result, setResult] = useState('');
    const [angle1A, setAngle1A] = useState('');
    const [angle1B, setAngle1B] = useState('');
    const [angle2A, setAngle2A] = useState('');
    const [angle2B, setAngle2B] = useState('');
    const [angle3A, setAngle3A] = useState('');
    const [angle3B, setAngle3B] = useState('');

    const handleCalculate = () => {
        const ratio1 = side1A / side1B;
        const ratio2 = side2A / side2B;
        const ratio3 = side3A / side3B;
        if (side1A<=0 || side1B<=0 || side2A<=0 || side2A<=0 || side3A<=0 || side3B<=0) {
            setResult("Invalid Inputs");
        } else if (angle1A+angle2A+angle3A!=180 || angle1B+angle2B+angle3B!=180 ) {
            setResult("Invalid Inputs");
        } else if (ratio1 === ratio2 && ratio2 === ratio3) {
            setResult("Triangles are similar by SSS (Side-Side-Side) axiom.");
        } else if (ratio1 === ratio2 && angle3A===angle3B) {
            setResult("Triangles are similar by SAS (Side-Angle-Side) axiom.");
        } else if (ratio3 === ratio2 && angle1A===angle1B) {
            setResult("Triangles are similar by SAS (Side-Angle-Side) axiom.");
        } else if (ratio1 === ratio3 && angle2A===angle2B) {
            setResult("Triangles are similar by SAS (Side-Angle-Side) axiom.");
        } else if (angle1A===angle1B && angle2A===angle2B) {
            setResult("Triangles are similar by AA (Angle-Angle) axiom.");
        } else if (angle1A===angle1B && angle3A===angle3B) {
            setResult("Triangles are similar by AA (Angle-Angle) axiom.");
        } else if (angle3A===angle3B && angle2A===angle2B) {
            setResult("Triangles are similar by AA (Angle-Angle) axiom.");
        } else {
            setResult("Triangles are not similar.");
        }

    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '150vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Similarity Of Triangle Calculator</Typography>
            <hr />
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJtjVYszrSo2efwxAy6rcbhCtiYKM0pV1DqzDHtSL3KGPFiFe-F7kMRaOeMD71L8GxL0&usqp=CAU"
                style={{ display: 'block', margin: 'auto', marginBottom: '12px' }}
            />            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Side A of Triangle A"
                        value={side1A}
                        onChange={(e) => setSide1A(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Side A of Triangle B"
                        value={side1B}
                        onChange={(e) => setSide1B(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Side B of Triangle A"
                        value={side2A}
                        onChange={(e) => setSide2A(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Side B of Triangle B"
                        value={side2B}
                        onChange={(e) => setSide2B(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Side C of Triangle A"
                        value={side3A}
                        onChange={(e) => setSide3A(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Side C of Triangle B"
                        value={side3B}
                        onChange={(e) => setSide3B(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Angle A of Triangle A"
                        value={angle1A}
                        onChange={(e) => setAngle1A(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Angle A of Triangle B"
                        value={angle1B}
                        onChange={(e) => setAngle1B(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Angle B of Triangle A"
                        value={angle2A}
                        onChange={(e) => setAngle2A(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Angle B of Triangle B"
                        value={angle2B}
                        onChange={(e) => setAngle2B(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Angle C of Triangle A"
                        value={angle3A}
                        onChange={(e) => setAngle3A(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Angle C of Triangle B"
                        value={angle3B}
                        onChange={(e) => setAngle3B(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleCalculate}>Calculate</Button>
                </Grid>
                {result && (
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ textAlign: "center", marginTop: 2 }}><b>{result}</b></Typography>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default MainSimilarityOfTriangleCalc;
