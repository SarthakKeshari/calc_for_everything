import React from 'react';
import { Container, Typography } from '@mui/material';

function MainSearchingVisualizer(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Searching Visualizer</Typography>
            <hr/>
            <br/>
        </Container>
    )
}

export default MainSearchingVisualizer;