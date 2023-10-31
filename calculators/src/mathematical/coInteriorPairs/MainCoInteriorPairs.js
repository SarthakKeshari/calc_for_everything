import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
} from "@mui/material";

const MainCoInteriorPairs = () => {
  // to store the value of first angle
  const [angle1, setAngle1] = useState();

  // to store the value of second angle
  const [angle2, setAngle2] = useState(null);
  const handleAngle1Change = (event) => {
    setAngle1(event.target.value);
    if (event.target.value) {
      // Assuming the sum of co-interior angles is 180 degrees
      const angle1Value = parseFloat(event.target.value);
      const angle2Value = 180 - angle1Value;
      setAngle2(angle2Value.toFixed(2));
    } else setAngle2(null);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "30vh",
      }}
    >
      <Container>
        <Grid container spacing={1} style={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h5" align="center">
                  Co-interior Pairs
                </Typography>
                <TextField
                  label="Angle 1"
                  variant="outlined"
                  fullWidth
                  value={angle1}
                  onChange={handleAngle1Change}
                  placeholder="Enter First Angle in Degree"
                />
                <Box mt={2}>
                  <Typography variant="h6">
                    <strong>Angle 2:</strong>{" "}
                    {angle2 && <span> {angle2}°</span>}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainCoInteriorPairs;
