import React, { useState } from "react";
import { Container, Typography, Button, TextField } from "@mui/material";

function MainTriangleTypeFinder() {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [sideC, setSideC] = useState("");
  const [result, setResult] = useState("");
  const handleCalculations = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);
    if (a <= 0 || b <= 0 || c <= 0) {
      setResult("Invalid Triangle");
      return;
    }
    if (a == b && b == c && a == c) {
      setResult("Equilateral Triangle");
    } else if (a == b || b == c || a == c) {
      setResult("Isoceles Triangle");
    } else {
      setResult("Scalene Triangle");
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Triangle Type Finder
      </Typography>
      <hr />
      <br />

      <TextField
        label="Side A"
        type="number"
        style={{ marginTop: "20px" }}
        fullWidth
        value={sideA}
        onChange={(e) => setSideA(e.target.value)}
      />
      <TextField
        label="Side B"
        type="number"
        style={{ marginTop: "20px" }}
        fullWidth
        value={sideB}
        onChange={(e) => setSideB(e.target.value)}
      />
      <TextField
        label="Side C"
        type="number"
        style={{ marginTop: "20px" }}
        fullWidth
        value={sideC}
        onChange={(e) => setSideC(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCalculations}
        style={{ marginTop: "20px" }}
      >
        Calculate
      </Button>
      {result && (
        <Typography variant="h5" style={{ marginTop: "20px" }}>
          Result : {result}
        </Typography>
      )}
    </Container>
  );
}

export default MainTriangleTypeFinder;
