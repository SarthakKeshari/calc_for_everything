import React from 'react';
import { Container, Typography } from '@mui/material';

function MainIPv4ToIPv6Calc(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>IPv4 To IPv6 Calculator</Typography>
            <hr/>
            <br/>
        </Container>
    )
}

export default MainIPv4ToIPv6Calc;