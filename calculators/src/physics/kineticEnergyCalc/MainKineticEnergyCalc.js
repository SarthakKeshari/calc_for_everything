import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import InfoKineticEnergyCalc from "./InfoKineticEnergyCalc";

function MainKineticEnergyCalc() {
  //all the useState hooks
  const [mass, setMass] = useState("");
  const [velocity, setVelocity] = useState("");
  const [kineticEnergy, setKineticEnergy] = useState("");

  //function to calculate kinetic energy
  const handleCalculateKineticEnergy = () => {
    const massValue = parseFloat(mass);
    const velocityValue = parseFloat(velocity);

    //checks for valid input
    if (!isNaN(massValue) && !isNaN(velocityValue) && massValue >= 0) {
      setKineticEnergy((0.5 * massValue * (velocityValue * velocityValue)).toString());
    } else {
      setMass("Must be a positive number");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Kinetic Energy Calculator
        <InfoKineticEnergyCalc />
      </Typography>
      <hr />
      <br />
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* input textfield for mass */}
            <TextField label="Mass (kg)" fullWidth variant="outlined" value={mass} onChange={(e) => setMass(e.target.value)} />
          </Grid>

          <Grid item xs={6}>
            {/* input textfield for velocity */}
            <TextField label="Velocity(m/s)" fullWidth variant="outlined" value={velocity} onChange={(e) => setVelocity(e.target.value)} />
          </Grid>
        </Grid>
        {/* button to execute handleCalculateKineticEnergy function */}
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }} onClick={handleCalculateKineticEnergy}>
          Calculate Kinetic Energy (K.E.)
        </Button>

        <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
          Kinetic Energy : {kineticEnergy !== "" ? kineticEnergy + " J" : ""}
        </Typography>
      </Container>
    </Container>
  );
}

export default MainKineticEnergyCalc;
