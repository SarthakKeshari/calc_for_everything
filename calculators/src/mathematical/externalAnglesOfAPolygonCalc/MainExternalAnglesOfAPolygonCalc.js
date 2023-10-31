import React, {useState} from 'react';
import { Container, Typography,TextField,Button,Box } from '@mui/material';

function MainExternalAnglesOfAPolygonCalc(){
    const [numberOfSides, setNumberOfSides] = useState('');
    const [angleOfEachExternalSide, setExternalAngle] = useState(null);
  
    const handleCalculate = () => {

        const externalAngle = (360/numberOfSides);
        setExternalAngle(externalAngle.toFixed(2));     
    };
  
    return (
      <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
        <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
          External Angles of a Polygon Calculator
        </Typography>
        <hr />
        <br />
  
        <TextField
          label="Number of Sides"
          fullWidth
          value={numberOfSides}
          onChange={(e) => setNumberOfSides(e.target.value)}
          type="number"
          inputProps={{ step: 'any' }}
        />
  
        <Button variant="contained" color="primary" onClick={handleCalculate}>
          Calculate
        </Button>
  
        {angleOfEachExternalSide!== null && (
          <Box mt={2}>
            <Typography>Measure of Each Exterior Angle: {angleOfEachExternalSide}°</Typography>
          </Box>
        )}
      </Container>
    )
}

export default MainExternalAnglesOfAPolygonCalc;