import React from "react";
import { Container, Typography } from "@mui/material";

function MainPropagationDelayCalc() {
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
