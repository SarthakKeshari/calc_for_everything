import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Snackbar,
} from '@mui/material';

function MainAPGARScoreCalc() {
  // State for APGAR criteria values and result
  const [appearance, setAppearance] = useState('');
  const [pulse, setPulse] = useState('');
  const [grimace, setGrimace] = useState('');
  const [activity, setActivity] = useState('');
  const [respiration, setRespiration] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Criteria options with values and descriptions
  const criteriaOptions = [
    {
      name: 'Appearance (Skin Color)',
      options: [
        { value: '2', description: 'Normal color all over (hands and feet are pink) - Score: 2' },
        { value: '1', description: 'Normal color (but hands and feet are bluish) - Score: 1' },
        { value: '0', description: 'Bluish-gray or pale all over - Score: 0' },
      ],
    },
    {
      name: 'Pulse (Heart Rate)',
      options: [
        { value: '2', description: 'Normal (above 100 beats per minute) - Score: 2' },
        { value: '1', description: 'Below 100 beats per minute - Score: 1' },
        { value: '0', description: 'Absent (no pulse) - Score: 0' },
      ],
    },
    {
      name: 'Grimace ("Reflex Irritability")',
      options: [
        { value: '2', description: 'Pulls away, sneezes, coughs, or cries with stimulation - Score: 2' },
        { value: '1', description: 'Facial movement only (grimace) with stimulation - Score: 1' },
        { value: '0', description: 'Absent (no response to stimulation) - Score: 0' },
      ],
    },
    {
      name: 'Activity (Muscle Tone)',
      options: [
        { value: '2', description: 'Active, spontaneous movement - Score: 2' },
        { value: '1', description: 'Arms and legs flexed with little movement - Score: 1' },
        { value: '0', description: 'No movement, "floppy" tone - Score: 0' },
      ],
    },
    {
      name: 'Respiration (Breathing Rate and Effort)',
      options: [
        { value: '2', description: 'Normal rate and effort, good cry - Score: 2' },
        { value: '1', description: 'Slow or irregular breathing, weak cry - Score: 1' },
        { value: '0', description: 'Absent (no breathing) - Score: 0' },
      ],
    },
  ];

  // Function to calculate APGAR score
  const calculateAPGAR = () => {
    // Convert input values to numbers
    const ap = parseInt(appearance);
    const p = parseInt(pulse);
    const g = parseInt(grimace);
    const ac = parseInt(activity);
    const r = parseInt(respiration);

    // Validate input values
    if (isNaN(ap) || isNaN(p) || isNaN(g) || isNaN(ac) || isNaN(r)) {
      setError('All values must be numeric.');
      return;
    }

    if (ap < 0 || ap > 2 || p < 0 || p > 2 || g < 0 || g > 2 || ac < 0 || ac > 2 || r < 0 || r > 2) {
      setError('Values must be in the range of 0 to 2.');
      return;
    }

    // Calculate APGAR score
    const apgarScore = ap + p + g + ac + r;
    setResult(apgarScore);
    setError(null);
  };

  return (
    <Container maxWidth="md" sx={{ bgcolor: '#f0f0f0', minHeight: '90vh', py: 5 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
        APGAR Score Calculator
      </Typography>
      <Grid container spacing={2}>
        {/* Input fields for APGAR criteria */}
        {criteriaOptions.map((criteria, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>{criteria.name}</InputLabel>
              <Select
                value={index === 0 ? appearance : index === 1 ? pulse : index === 2 ? grimace : index === 3 ? activity : respiration}
                onChange={(e) => {
                  if (index === 0) setAppearance(e.target.value);
                  else if (index === 1) setPulse(e.target.value);
                  else if (index === 2) setGrimace(e.target.value);
                  else if (index === 3) setActivity(e.target.value);
                  else setRespiration(e.target.value);
                }}
                label={criteria.name}
              >
                {criteria.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      {/* Calculate button */}
      <Box mt={3} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={calculateAPGAR}>
          Calculate APGAR Score
        </Button>
      </Box>

      {/* Display result */}
      {result !== null && (
        <Typography variant="h6" sx={{ textAlign: 'center', mt: 3 }}>
          APGAR Score: {result}
        </Typography>
      )}

      {/* Display error */}
      <Snackbar
        open={error !== null}
        autoHideDuration={4000}
        onClose={() => setError(null)}
        message={error}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Container>
  );
}

export default MainAPGARScoreCalc;
