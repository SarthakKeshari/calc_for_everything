import React from 'react';
import { Container, Typography } from '@mui/material';
import SatellitePosition from './SatellitePosition';

function MainSatelliteLocationUsingTLE(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Satellite Location using TLE</Typography>
            <hr/>
            <br/>
            {/* Write your code here */}
            <SatellitePosition/>
            {/* End your code here */}
        </Container>
    )
}

export default MainSatelliteLocationUsingTLE;