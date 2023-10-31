import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField } from '@mui/material';

function MainPPICalc(){

    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [diagonalSize, setDiagonalSize] = useState(null);
    const [screenResolution, setScreenResolution] = useState(null);
    const [pixelDensity, setPixelDensity] = useState(null);
  
    const handleWidthChange = (e) => {
      setWidth(parseFloat(e.target.value));
    };
  
    const handleHeightChange = (e) => {
      setHeight(parseFloat(e.target.value));
    };

    const handleDiagonalSizeChange = (e) => {
        setDiagonalSize(parseFloat(e.target.value));
      };
  
   
  
    useEffect(() => {
      if (width !== null && height !== null && diagonalSize !== null) {
        setScreenResolution(width * height);
        setPixelDensity(Math.sqrt((width ** 2 + height ** 2) / (diagonalSize ** 2)));
      } else if (width !== null && height !== null) {
        setScreenResolution(width * height);
        setPixelDensity(NaN);
      }
    }, [width, height, diagonalSize]);

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>PPI Calculator</Typography>
            <hr/>
            <br/>
            {/* Write your code here */}

            <div>
                <p style={{ color: 'black', fontSize: '18px' }}>width:</p>
                <TextField
                label="px"
                type="number"
                value={width || ''}
                onChange={handleWidthChange}
                />
            </div>
            <div>
                <p style={{ color: 'black', fontSize: '18px' }}>height:</p>
                <TextField
                label="px"
                type="number"
                value={height || ''}
                onChange={handleHeightChange}
                />
            </div>
            <div>
                <p style={{ color: 'black', fontSize: '18px' }}>diagonalSize:</p>
                <TextField
                label="inche"
                type="number"
                value={diagonalSize || ''}
                onChange={handleDiagonalSizeChange}
                />
            </div>
        
            <p style={{ color: 'black', marginRight: '10px' }}>result:</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
       
            <p style={{ marginRight: '40px' }}>width: {width !== null ? width : 0} px</p>
            <p style={{ marginRight: '40px' }}>height: {height !== null ? height : 0} px</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: '40px' }}>screen resolution: {screenResolution !== null ? screenResolution : 0} pixels</p>
            <p>pixel density: {pixelDensity !== null ? pixelDensity : 0} PPI</p>
            </div>


            {/* End your code here */}
        </Container>
    )
}

export default MainPPICalc;