import React from 'react';
import { Container, Typography } from '@mui/material';
import InfoPolyEqRootFinder from './InfoPolyEqRootFinder';

function MainPolyEqRootFinder(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Polynomial Equation Root Finder <InfoPolyEqRootFinder/></Typography>
            <hr/>
            <br/>
        </Container>
    )
}

export default MainPolyEqRootFinder;