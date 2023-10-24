import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";

function DrugAbsorptionTimeCalculator() {
  const [halfLifeInHours, setHalfLifeInHours] = useState("");
  const [dosageInMg, setDosageInMg] = useState("");
  const [absorptionTimeInMinutes, setAbsorptionTimeInMinutes] = useState(null);

  const handleHalfLifeChange = (event) => {
    setHalfLifeInHours(event.target.value);
  };

  const handleDosageChange = (event) => {
    setDosageInMg(event.target.value);
  };

  const calculateAbsorptionTime = () => {
    const halfLifeValue = parseFloat(halfLifeInHours);
    const dosageValue = parseFloat(dosageInMg);

    if (
      isNaN(halfLifeValue) ||
      isNaN(dosageValue) ||
      halfLifeValue <= 0 ||
      dosageValue <= 0
    ) {
      setAbsorptionTimeInMinutes("Invalid input values");
    } else {
      const absorptionTimeValue =
        -halfLifeValue * Math.log(0.5 * (dosageValue / 1000)); // Convert dosage from mg to g
      const absorptionTimeMinutes = absorptionTimeValue * 60; // Convert hours to minutes
      setAbsorptionTimeInMinutes(
        `Time to absorb ${dosageValue} mg: ${absorptionTimeMinutes.toFixed(
          2
        )} minutes`
      );
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h5" align="center">
                Drug Absorption Time Calculator
              </Typography>
              <TextField
                label="Half-Life (hours)"
                variant="outlined"
                fullWidth
                value={halfLifeInHours}
                onChange={handleHalfLifeChange}
                placeholder="Enter Half-Life in hours"
              />
              <TextField
                label="Dosage (mg)"
                variant="outlined"
                fullWidth
                value={dosageInMg}
                onChange={handleDosageChange}
                placeholder="Enter Dosage in mg"
              />
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={calculateAbsorptionTime}
                >
                  Calculate
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6">
                <strong>Result:</strong>
              </Typography>
              <Typography>{absorptionTimeInMinutes}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DrugAbsorptionTimeCalculator;
