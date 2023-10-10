import React from 'react';
import { Container, Typography } from '@mui/material';

function MainSurfaceAreaOf3DShapes(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Surface Area Of 3D Shapes Calculator</Typography>
            <hr/>
            <br/>
        </Container>
    )
}

export default MainSurfaceAreaOf3DShapes;