import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import InfoStemVolumeCalc from './InfoStemVolumeCalc';

function MainStemVolumeCalc() {
  const [dbh, setDbh] = useState('');
  const [height, setHeight] = useState('');
  const [volume, setVolume] = useState(null);
  const [area, setArea] = useState(null);

  const calculateVolumeAndArea = () => {
    if (!dbh || !height || isNaN(dbh) || isNaN(height)) {
      alert('Please enter valid values for DBH and height.');
      return;
    }

    const radius = dbh / 2;
    const areaValue = Math.pow(radius, 2) * Math.PI;
    const calculatedVolume = areaValue * height;

    setArea(areaValue.toFixed(2));
    setVolume(calculatedVolume.toFixed(2));
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Stem Volume Calculator <InfoStemVolumeCalc />
      </Typography>
      <hr />
      <br />

      <TextField
        label="DBH (Diameter at Breast Height)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={dbh}
        onChange={(e) => setDbh(e.target.value)}
      />

      <TextField
        label="Tree Height"
        variant="outlined"
        fullWidth
        margin="normal"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={calculateVolumeAndArea}>
        Calculate Volume and Area
      </Button>

      {volume !== null && area !== null && (
        <>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Calculated Volume: {volume} cubic units
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Calculated Area: {area} square units
          </Typography>
        </>
      )}
    </Container>
  );
}

export default MainStemVolumeCalc;
