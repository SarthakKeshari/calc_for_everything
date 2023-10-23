import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

function MainHookesLawCalc() {
  const [springDisplacement, setSpringDisplacement] = useState("");
  const [springForceConstant, setSpringForceConstant] = useState("");
  const [force, setForce] = useState("");
  const [unit, setUnit] = useState("newton");

  //function to calculate force
  const handleCalculateForce = () => {
    //checks for valid input
    if (!isNaN(springDisplacement) && !isNaN(springForceConstant)) {
      let answer = 0;
      switch (unit) {
        case "newton":
          answer = -1 * springDisplacement * springForceConstant;
          break;
        case "dyne":
          answer = -1 * springDisplacement * springForceConstant * 100000;
          break;
        case "gram-force":
          answer = (-1 * springDisplacement * springForceConstant) / 0.00980665;
          break;
        case "poundal":
          answer = (-1 * springDisplacement * springForceConstant) / 0.138255;
          break;
        case "pound-force":
          answer = (-1 * springDisplacement * springForceConstant) / 4.44822;
          break;
        case "kilogram-force":
          answer = (-1 * springDisplacement * springForceConstant) / 9.80665;
          break;
      }
      setForce(answer.toString());
    } else {
      setSpringDisplacement("Must be a number");
      setSpringForceConstant("Must be a number");
      setForce("");
    }
  };

  useEffect(() => {
    handleCalculateForce();
  }, [unit]);

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Hooke's Law Calculator
      </Typography>
      <hr />
      <br />
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* input textfield for spring displacement*/}
            <TextField
              label="Spring Displacement (m)"
              fullWidth
              variant="outlined"
              value={springDisplacement}
              onChange={(e) => setSpringDisplacement(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            {/* input textfield for spring force constant*/}
            <TextField
              label="Spring Force Constant (N/m)"
              fullWidth
              variant="outlined"
              value={springForceConstant}
              onChange={(e) => setSpringForceConstant(e.target.value)}
            />
          </Grid>
        </Grid>
        {/* button to execute handleCalculateForce function */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px", marginBottom: "20px" }}
          onClick={handleCalculateForce}
        >
          Calculate Force
        </Button>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              variant="h6"
              align="center"
              style={{ marginTop: "20px" }}
            >
              Force : {force !== "" ? force + " " : ""}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={unit}
              label="Unit"
              onChange={(e) => {
                setUnit(e.target.value);
              }}
            >
              <MenuItem value={"newton"}>newton</MenuItem>
              <MenuItem value={"dyne"}>dyne</MenuItem>
              <MenuItem value={"gram-force"}>gram-force</MenuItem>
              <MenuItem value={"poundal"}>poundal</MenuItem>
              <MenuItem value={"pound-force"}>pound-force</MenuItem>
              <MenuItem value={"kilogram-force"}>kilogram-force</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default MainHookesLawCalc;
