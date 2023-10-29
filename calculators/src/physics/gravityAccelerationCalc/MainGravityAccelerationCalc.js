import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function GravityAccelerationCalculator() {
  const [latitude, setLatitude] = useState("");
  const [gravity, setGravity] = useState("");
  const [result, setResult] = useState("");

  const calculateGravityAcceleration = () => {
    if (latitude) {
      const phi = parseFloat(latitude);
      const sinPhi = Math.sin((phi * Math.PI) / 180);
      const calculatedGravity = 9.780327 * (1 + 0.0053024 * sinPhi ** 2 - 0.0000058 * Math.sin(2 * phi * Math.PI / 180) ** 2);
      const formattedGravity = calculatedGravity.toFixed(7);
      setGravity(formattedGravity);
      setResult(`Gravity Acceleration: ${formattedGravity} m/s²`);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Gravity Acceleration Calculator
      </Typography>

      <hr />
      <div>
        <h2>Gravity Acceleration Calculation</h2>
        This calculator uses the international gravity formula to calculate
        gravity acceleration (g) based on latitude (φ).
        <br />
        <br />
        <h4>Formula: g = 9.780327(1 + 0.0053024sin²φ - 0.0000058sin²(2φ))</h4>
      </div>
      <br />
      <TextField
        label="Latitude (°)"
        type="number"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        sx={{ margin: 2 }}
      />
      {result && <Typography sx={{ margin: 2 }}>{result}</Typography>}

      <br />
      <Button variant="contained" color="primary" onClick={calculateGravityAcceleration}>
        Calculate
      </Button>
    </Container>
  );
}

export default GravityAccelerationCalculator;
