import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function MainPropagationDelayCalc() {
  const [distance, setDistance] = useState(""); // Distance between sender and receiver (in meters)
  const [speed, setSpeed] = useState(""); // Speed of propagation (in meters per second)
  const [delay, setDelay] = useState(""); // Propagation delay (in seconds)
  const [resultType, setResultType] = useState("Propagation Delay (seconds)");
  const [error, setError] = useState("");

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
    setError("");
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
    setError("");
  };

  const handleDelayChange = (event) => {
    setDelay(event.target.value);
    setError("");
  };

  const calculateDelay = () => {
    if (speed && distance && delay) {
      setError("Please enter any 2 values.");
      return;
    }

    if (
      (distance.trim() && isNaN(parseFloat(distance))) ||
      (speed.trim() && isNaN(parseFloat(speed))) ||
      (delay.trim() && isNaN(parseFloat(delay)))
    ) {
      setError("Please enter numeric values for all fields.");
      return;
    }

    if (distance && speed) {
      const calculatedDelay = (
        parseFloat(distance) / parseFloat(speed)
      ).toFixed(2);
      setDelay(calculatedDelay);
      setResultType("Propagation Delay (seconds)");
    } else if (delay) {
      if (speed) {
        const calculatedDistance = (
          parseFloat(speed) * parseFloat(delay)
        ).toFixed(2);
        setDistance(calculatedDistance);
        setResultType("Distance (meters)");
      } else {
        const calculatedSpeed = (
          parseFloat(distance) / parseFloat(delay)
        ).toFixed(2);
        setSpeed(calculatedSpeed);
        setResultType("Speed of Propagation (m/s)");
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
        Calculate
      </Button>
      <br />
      <br />
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {error ? (
          <Typography color="error" sx={{ textAlign: "center" }}>
            {error}
          </Typography>
        ) : (
          `${resultType}: ${
            resultType === "Propagation Delay (seconds)"
              ? delay
              : resultType === "Distance (meters)"
              ? distance
              : speed
          }`
        )}
      </Typography>
    </Container>
  );
}

export default MainPropagationDelayCalc;
