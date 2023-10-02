import React from 'react';
import { Container, Typography } from '@mui/material';

function MainAsciiTextToBinAndBinToAsciiText(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>ASCII Text To Binary And Binary to ASCII Text Converter</Typography>
            <hr/>
            <br/>
        </Container>
    )
}

export default MainAsciiTextToBinAndBinToAsciiText;