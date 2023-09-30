import * as React from 'react';
import { Container, Typography } from '@mui/material';

function MainSI(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Simple Interest Calculator</Typography>
            <hr/>
        </Container>
    )
}

export default MainSI;