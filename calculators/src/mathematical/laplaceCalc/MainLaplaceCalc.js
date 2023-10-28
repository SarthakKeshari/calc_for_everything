import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent } from '@mui/material';

const nerdamer = require("nerdamer/all.min")

function MainLaplaceCalc() {
    const [equation, setEquation] = useState('');
    const [result, setResult] = useState('');
    const [timeVar, setTimeVar] = useState('');
    const [transformVar, setTransformVar] = useState('');

    const calculateIntegral = () => {
        try {
            const integral = nerdamer(`laplace(${equation}, ${timeVar}, {${transformVar}})`);
            setResult(integral.toString());
        } catch (error) {
            setResult('Invalid equation');
        }
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Laplace Calculator</Typography>
            <hr />
            <br />
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">Instructions</Typography>
                    <Typography variant="body1">
                        1. For trigonometric functions like sine and cosine, please use the following format:
                        <strong> Correct Input:</strong> sin(2t)^2
                        <strong> Invalid Input:</strong> sin^2(2t)
                    </Typography>
                    <Typography variant="body1">
                        2. You can use mathematical operations such as addition, subtraction, multiplication, and division with standard symbols (+, -, *, /).
                    </Typography>
                    <Typography variant="body1">
                        3. For expressions with exponentiation, use the caret (^) symbol with parentheses around the base:
                        <strong> Example:</strong> (3t^(n+1)-2)^2
                    </Typography>
                    <Typography variant="body1">
                        4. You can use parentheses to group terms or expressions together, such as (3t^(n+1)-2).
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ padding: '10px', marginBottom: '10px', minHeight: '300px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '60px'  }}>
                    <TextField
                        label="Enter the equation"
                        value={equation}
                        onChange={(e) => setEquation(e.target.value)}
                    />
                    <TextField
                        label="Time variable"
                        value={timeVar}
                        onChange={(e) => setTimeVar(e.target.value)}
                    />
                    <TextField
                        label="Transform variable"
                        value={transformVar}
                        onChange={(e) => setTransformVar(e.target.value)}
                    />
                    <Button style={{ maxWidth: '150px' }} variant="contained" color="primary" onClick={calculateIntegral}>
                        Laplace Transformation
                    </Button>
                </div>
                <br />
                {result && (
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Typography variant='h6'>Laplace Transformation : </Typography>
                        <Typography variant='body1'>{result}</Typography>
                    </div>
                )}
            </Card>
        </Container>
    )
}

export default MainLaplaceCalc;
