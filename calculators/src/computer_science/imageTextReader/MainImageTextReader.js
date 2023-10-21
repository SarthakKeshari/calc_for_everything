import React from 'react';
import { Container, Typography } from '@mui/material';
import ImageTextReader from './ImageTextReader';

function MainImageTextReader(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Image Text Reader</Typography>
            <hr/>
            <br/>
            {/* Write your code here */}
            <ImageTextReader />


            {/* End your code here */}
        </Container>
    )
}

export default MainImageTextReader;