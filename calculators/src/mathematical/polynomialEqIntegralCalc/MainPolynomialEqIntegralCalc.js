import React from 'react';
import { Container, Typography } from '@mui/material';

function MainPolynomialEqIntegralCalc(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Polynomial Equation Integral Calculator</Typography>
            <hr/>
            <br/>
        </Container>
    )
}

export default MainPolynomialEqIntegralCalc;