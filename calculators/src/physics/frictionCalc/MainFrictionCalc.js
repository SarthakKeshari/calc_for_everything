import React, { useState, useEffect } from "react";
import { Button,Container,Grid,TextField,Select, Typography } from '@mui/material';

//function to calculate friction
function MainFrictionCalc(){
    const [frictionCoefficient, setFrictionCoefficient] = useState("");
    const [normalForce, setNormalForce] = useState("");
    const [friction, setFriction] = useState("");

    const handleCalculateFriction = () => {
      const frictionCoefficientValue = parseFloat(frictionCoefficient);
      const normalForceValue = parseFloat(normalForce);

      //checks for valid input
      if (
        !isNaN(frictionCoefficientValue) &&
        !isNaN(normalForceValue) &&
        frictionCoefficientValue >= 0
      ) {
        const result = frictionCoefficientValue * normalForceValue;
        setFriction(result.toString());
      } else {
        setFriction("Invalid Input");
      }
    };
    return (
      <Container
        maxWidth="lg"
        sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
      >
        <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
          Friction Calculator
        </Typography>
        <hr />
        <br />
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/* input textfield for friction coefficient */}
              <TextField
                label="Friction Coefficient"
                fullWidth
                variant="outlined"
                value={frictionCoefficient}
                onChange={(e) => setFrictionCoefficient(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              {/* input textfield for normal force */}
              <TextField
                label="Normal Force (N)"
                fullWidth
                variant="outlined"
                value={normalForce}
                onChange={(e) => setNormalForce(e.target.value)}
              />
            </Grid>
          </Grid>
          {/* button to execute handleCalculateFriction function */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCalculateFriction}
            style={{ marginTop: "20px" }}
          >
            Calculate Friction (N)
          </Button>
          <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
            Friction: {friction}
          </Typography>
        </Container>
      </Container>
    );
}

export default MainFrictionCalc;