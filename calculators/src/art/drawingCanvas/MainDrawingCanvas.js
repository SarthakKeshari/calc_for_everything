import React from 'react';
import { Container, Typography } from '@mui/material';
import DrawingCanvas from './DrawingCanvas';

function MainDrawingCanvas() {
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: 'center' }}>Drawing Canvas</Typography>
            <hr />
            <br />
            <DrawingCanvas />
        </Container>
    );
}

export default MainDrawingCanvas;
