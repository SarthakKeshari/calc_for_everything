import React, { useState } from 'react';
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

function Volume3DShapesCalculator() {
  const [shape, setShape] = useState('prism');
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);

  const handleShapeChange = (event) => {
    setShape(event.target.value);
    setValues({});
    setResult(null);
  };

  const calculateVolume = () => {
    // Define functions to calculate volume for each shape
    const volumeCalculators = {
      prism: () => {
        // Implement prism volume calculation
        return values.prismBaseArea * values.prismHeight;
      },
      torus: () => {
        // Implement torus volume calculation
        return (
          (Math.PI * values.torusMinorRadius ** 2) *
          (2 * Math.PI * values.torusMajorRadius)
        );
      },
      ellipsoid: () => {
        // Implement ellipsoid volume calculation
        return (
          (4 / 3) * Math.PI * values.ellipsoidA * values.ellipsoidB * values.ellipsoidC
        );
      },
      cuboid: () => {
        // Implement cuboid volume calculation
        return values.cuboidLength * values.cuboidWidth * values.cuboidHeight;
      },
      sphere: () => {
        // Implement sphere volume calculation
        return (4 / 3) * Math.PI * values.sphereRadius ** 3;
      },
      cylinder: () => {
        // Implement cylinder volume calculation
        return Math.PI * values.cylinderRadius ** 2 * values.cylinderHeight;
      },
      cube: () => {
        // Implement cube volume calculation
        return values.cubeSideLength ** 3;
      },
      cone: () => {
        // Implement cone volume calculation
        return (1 / 3) * Math.PI * values.coneRadius ** 2 * values.coneHeight;
      },
      pyramid: () => {
        // Implement pyramid volume calculation
        return (1 / 3) * values.pyramidBaseArea * values.pyramidHeight;
      },
    };

    if (volumeCalculators[shape]) {
      const volume = volumeCalculators[shape]();
      setResult(volume);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Volume 3D Shapes Calculator
      </Typography>
      <hr />
      <br />
      <Box mt={2}>
        <FormControl fullWidth>
          <InputLabel>Select 3D Shape</InputLabel>
          <Select value={shape} onChange={handleShapeChange}>
            <MenuItem value="prism">Prism</MenuItem>
            <MenuItem value="torus">Torus</MenuItem>
            <MenuItem value="ellipsoid">Ellipsoid</MenuItem>
            <MenuItem value="cuboid">Cuboid</MenuItem>
            <MenuItem value="sphere">Sphere</MenuItem>
            <MenuItem value="cylinder">Cylinder</MenuItem>
            <MenuItem value="cube">Cube</MenuItem>
            <MenuItem value="cone">Cone</MenuItem>
            <MenuItem value="pyramid">Pyramid</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box p={2}>
        {shape === 'prism' && (
          <>
            <TextField
              label="Base Area"
              type="number"
              fullWidth
              onChange={(e) => setValues({ ...values, prismBaseArea: e.target.value })}
            />
            <TextField
              label="Height"
              type="number"
              fullWidth
              onChange={(e) => setValues({ ...values, prismHeight: e.target.value })}
            />
          </>
        )}
        {shape === 'torus' && (
          <>
            <TextField
              label="Major Radius"
              type="number"
              fullWidth
              onChange={(e) => setValues({ ...values, torusMajorRadius: e.target.value })}
            />
            <TextField
              label="Minor Radius"
              type="number"
              fullWidth
              onChange={(e) => setValues({ ...values, torusMinorRadius: e.target.value })}
            />
          </>
        )}
        {shape === 'ellipsoid' && (
          <>
            <TextField
              label="A Axis"
              type="number"
              fullWidth
              onChange={(e) => setValues({ ...values, ellipsoidA: e.target.value })}
            />
            <TextField
              label="B Axis"
              type="number"
              fullWidth
              onChange={(e) => setValues({ ...values, ellipsoidB: e.target.value })}
            />
            <TextField
              label="C Axis"
              type="number"
              fullWidth
              onChange={(e) => setValues({ ...values, ellipsoidC: e.target.value })}
            />
          </>
        )}
        {shape === 'cuboid' && (
          <>
            <TextField
              label="Length"
              type="number"
              fullWidth
              onChange={(e) => setValues({ ...values, cuboidLength: e.target.value })}
            />
            <TextField
              label="Width"
              type="number"
              fullWidth
              onChange={(e) => setValues({ ...values, cuboidWidth: e.target.value })}
            />
            <TextField
              label="Height"
              type="number"
              fullWidth
              onChange={(e) => setValues({ ...values, cuboidHeight: e.target.value })}
            />
          </>
        )}
        {shape === 'sphere' && (
          <TextField
            label="Radius"
            type="number"
            fullWidth
            onChange={(e) => setValues({ sphereRadius: e.target.value })}
          />
        )}
        {shape === 'cylinder' && (
          <>
            <TextField
              label="Radius"
              type="number"
              fullWidth
              onChange={(e) => setValues({ cylinderRadius: e.target.value })}
            />
            <TextField
              label="Height"
              type="number"
              fullWidth
              onChange={(e) => setValues({ cylinderHeight: e.target.value })}
            />
          </>
        )}
        {shape === 'cube' && (
          <TextField
            label="Side Length"
            type="number"
            fullWidth
            onChange={(e) => setValues({ cubeSideLength: e.target.value })}
          />
        )}
        {shape === 'cone' && (
          <>
            <TextField
              label="Radius"
              type="number"
              fullWidth
              onChange={(e) => setValues({ coneRadius: e.target.value })}
            />
            <TextField
              label="Height"
              type="number"
              fullWidth
              onChange={(e) => setValues({ coneHeight: e.target.value })}
            />
          </>
        )}
        {shape === 'pyramid' && (
          <>
            <TextField
              label="Base Area"
              type="number"
              fullWidth
              onChange={(e) => setValues({ pyramidBaseArea: e.target.value })}
            />
            <TextField
              label="Height"
              type="number"
              fullWidth
              onChange={(e) => setValues({ pyramidHeight: e.target.value })}
            />
          </>
        )}
        <Button variant="contained" color="primary" onClick={calculateVolume}>
          Calculate Volume
        </Button>
        {result !== null && (
          <Box mt={2}>
            <Typography variant="h6">Result: {result}</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Volume3DShapesCalculator;
