import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function PlanetGravityCalculator() {
  const [mass1, setMass1] = useState("");
  const [mass2, setMass2] = useState("");
  const [distance, setDistance] = useState("");
  const [gravity, setGravity] = useState("");

  const calculateGravity = () => {
    if (mass1 && mass2 && distance) {
      const gravitationalForce =
        (6.67430 * Math.pow(10, -11) * mass1 * mass2) / Math.pow(distance, 2);
      setGravity(`Gravity: ${gravitationalForce} N`);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Planet Gravity Calculator
      </Typography>

      <hr />
      <div>
        <h2>Gravity Calculator</h2> is a tool to calculate the gravitational
        force between two objects. It uses the formula for Newton's Law of
        Universal Gravitation:
        <br />
        <br />
        <h4>F = G * (m1 * m2) / r^2</h4>
      </div>
      <br />
      <TextField
        label="Mass 1 (kg)"
        type="number"
        value={mass1}
        onChange={(e) => setMass1(e.target.value)}
        sx={{ margin: 2 }}
      />
      <TextField
        label="Mass 2 (kg)"
        type="number"
        value={mass2}
        onChange={(e) => setMass2(e.target.value)}
        sx={{ margin: 2 }}
      />
      <TextField
        label="Distance (m)"
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        sx={{ margin: 2 }}
      />
      {gravity && <Typography sx={{ margin: 2 }}>{gravity}</Typography>}

      <br />
      <Button variant="contained" color="primary" onClick={calculateGravity}>
        Calculate
      </Button>
    </Container>
  );
}

export default PlanetGravityCalculator;


