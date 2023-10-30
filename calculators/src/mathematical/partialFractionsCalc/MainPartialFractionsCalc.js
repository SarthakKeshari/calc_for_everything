import React, { useState } from "react";
import { Container, Typography, TextField, Button, Card } from "@mui/material";

const nerdamer = require("nerdamer/all.min");

function MainPartialFractionsCalc() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");
  const [variable, setVariable] = useState("");

  const calculatePartialFraction = () => {
    try {
      const integral = nerdamer(`partfrac(${equation}, ${variable})`);
      setResult(integral.toString());
    } catch (error) {
      setResult("Invalid equation");
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Partial Fractions Calculator
      </Typography>
      <hr />
      <br />

      <Card sx={{ padding: "10px", marginBottom: "10px", minHeight: "300px" }}>
        <div
          style={{
            marginTop: "20px",
            fontSize: "20px",
          }}
        >
          Instructions : <br />
          1. Wrap the numerator and denomenator in brackets. Example:
          (2x+5)/(x^2+6x-12)
          <br />
          2. Use ^ for power expressions with brackets. Example: use 3*(x+9)^2
          for 3*(x+9)**2
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "60px",
          }}
        >
          <TextField
            label="Enter the equation"
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
          />
          <TextField
            label="Variable"
            value={variable}
            onChange={(e) => setVariable(e.target.value)}
          />
          <Button
            style={{ maxWidth: "150px" }}
            variant="contained"
            color="primary"
            onClick={calculatePartialFraction}
          >
            Partial Fraction
          </Button>
        </div>
        <br />
        {result && (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Typography variant="h6">Partial Fraction : </Typography>
            <Typography variant="body1">{result}</Typography>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default MainPartialFractionsCalc;
