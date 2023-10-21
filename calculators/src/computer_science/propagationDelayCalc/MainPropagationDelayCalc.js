import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function MainPropagationDelayCalc() {
  const [distance, setDistance] = useState(""); // Distance between sender and receiver
  const [speed, setSpeed] = useState(""); // Speed of propagation
  const [delay, setDelay] = useState(""); // Propagation delay

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };

  const handleDelayChange = (event) => {
    setDelay(event.target.value);
  };

  // Calculate propagation delay
  const calculateDelay = () => {
    if (distance && speed) {
      const calculatedDelay = (
        parseFloat(distance) / parseFloat(speed)
      ).toFixed(2);
      setDelay(calculatedDelay);
    } else if (delay) {
      // Calculate missing value if propagation delay is given
      if (speed) {
        // Calculate distance if speed and delay are given
        const calculatedDistance = (
          parseFloat(speed) * parseFloat(delay)
        ).toFixed(2);
        setDistance(calculatedDistance);
      } else {
        // Calculate speed if distance and delay are given
        const calculatedSpeed = (
          parseFloat(distance) / parseFloat(delay)
        ).toFixed(2);
        setSpeed(calculatedSpeed);
      }
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Propagation Delay Calculator
      </Typography>
      <hr />
      <br />
      <TextField
        label="Distance (meters)"
        variant="outlined"
        value={distance}
        onChange={handleDistanceChange}
      />
      <br />
      <br />
      <TextField
        label="Speed of Propagation (m/s)"
        variant="outlined"
        value={speed}
        onChange={handleSpeedChange}
      />
      <br />
      <br />
      <TextField
        label="Propagation Delay (seconds)"
        variant="outlined"
        value={delay}
        onChange={handleDelayChange}
      />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={calculateDelay}>
        Calculate Propagation Delay
      </Button>
      <br />
      <br />
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Propagation Delay: {delay} seconds
      </Typography>
    </Container>
  );
}

export default MainPropagationDelayCalc;
