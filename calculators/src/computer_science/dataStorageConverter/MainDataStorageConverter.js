import React from 'react';
import { Container, Typography } from '@mui/material';

function MainDataStorageConverter(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Data Storage Converter</Typography>
            <hr/>
            <br/>
        </Container>
    )
}

export default MainDataStorageConverter;