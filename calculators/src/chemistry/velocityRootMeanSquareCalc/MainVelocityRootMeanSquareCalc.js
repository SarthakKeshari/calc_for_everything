import React from 'react';
import { Container, Typography } from '@mui/material';
import InfoVelocityRootMeanSquareCalc from './InfoVelocityRootMeanSquareCalc';

function MainVelocityRootMeanSquareCalc(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Velocity Root Mean Square Calculator <InfoVelocityRootMeanSquareCalc/></Typography>
            <hr/>
            <br/>
            {/* Write your code here */}



            {/* End your code here */}
        </Container>
    )
}

export default MainVelocityRootMeanSquareCalc;