import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function SetupDelayCalculator() {
  const [distance, setDistance] = useState("");
  const [speed, setSpeed] = useState("");
  const [messageLength, setMessageLength] = useState("");
  const [transmissionRate, setTransmissionRate] = useState("");
  const [setupDelay, setSetupDelay] = useState(null);

  const calculateSetupDelay = () => {
    if (distance && speed && messageLength && transmissionRate) {
      const propagationDelay = distance / speed;
      const transmissionDelay = messageLength / transmissionRate;
      const calculatedSetupDelay = propagationDelay + transmissionDelay;
      setSetupDelay(`Setup Delay: ${calculatedSetupDelay} seconds`);
    } else {
      setSetupDelay("Please provide all the required values.");
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Setup Delay Calculator
      </Typography>
      <hr />
      <div>
        <h4>
          <b>Setup Delay</b>
        </h4>
        refers to the total time delay that occurs from the moment a sender
        initiates the transmission of a message packet to the time when the
        receiver successfully receives and processes the complete message
        packet. This delay is a sum of two key components: Propagation Delay and
        Transmission Delay.
        <br />
        <h4>Propagation Delay:</h4> This is the time it takes for the signal to
        travel from the sender to the receiver. It depends on the distance
        between the sender and the receiver and the speed of signal propagation
        through the transmission medium.
        <br />
        <h4>Transmission Delay:</h4> This is the time it takes to transmit the
        message packet from the sender to the receiver. It depends on the length
        of the message packet and the transmission rate.
      </div>
      <br />
      <TextField
        label="Distance (meters)"
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        sx={{ margin: 2 }}
      />
      <TextField
        label="Speed of Propagation (m/s)"
        type="number"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        sx={{ margin: 2 }}
      />
      <TextField
        label="Message Length (bits)"
        type="number"
        value={messageLength}
        onChange={(e) => setMessageLength(e.target.value)}
        sx={{ margin: 2 }}
      />
      <TextField
        label="Transmission Rate (bps)"
        type="number"
        value={transmissionRate}
        onChange={(e) => setTransmissionRate(e.target.value)}
        sx={{ margin: 2 }}
      />
      {setupDelay !== null && (
        <Typography sx={{ margin: 2 }}>{setupDelay}</Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={calculateSetupDelay}
        sx={{ margin: 2 }}
      >
        Calculate Setup Delay
      </Button>
    </Container>
  );
}

export default SetupDelayCalculator;
