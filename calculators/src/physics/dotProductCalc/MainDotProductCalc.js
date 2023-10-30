import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";

function DotProductCalculator() {
  const [vector1, setVector1] = useState("");
  const [vector2, setVector2] = useState("");
  const [result, setResult] = useState(null);

  const calculateDotProduct = () => {
    const v1 = vector1.split(",").map(Number);
    const v2 = vector2.split(",").map(Number);

    if (v1.length !== v2.length) {
      alert("Vectors must have the same number of components");
    } else {
      const dotProduct = v1.reduce((sum, val, i) => sum + val * v2[i], 0);
      setResult(dotProduct);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Vector 1 (comma-separated values)"
          variant="outlined"
          margin="normal"
          fullWidth
          value={vector1}
          onChange={(e) => setVector1(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Vector 2 (comma-separated values)"
          variant="outlined"
          margin="normal"
          fullWidth
          value={vector2}
          onChange={(e) => setVector2(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={calculateDotProduct}
        >
          Calculate Dot Product
        </Button>
      </Grid>
      {result !== null && (
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6">Dot Product Result:</Typography>
            <Typography variant="body1">{result}</Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

function MainDotProductCalc() {
  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Dot Product Calculator
      </Typography>
      <hr />
      <br />
      <div>
        The definition of dot product can be given in two ways, i.e.
        algebraically and geometrically. Algebraically, the dot product is
        defined as the sum of the products of the corresponding entries of the
        two sequences of numbers. Geometrically, it is the product of the two
        vectors’ Euclidean magnitudes and the cosine of the angle between them.
        Both the definitions are equivalent when working with Cartesian
        coordinates.
      </div>
      <br />
      <div>
        <div>Example: {"{a, b, c} & {x, y, z} = a.x + b.y + c.z"}</div>
      </div>

      <DotProductCalculator />
    </Container>
  );
}

export default MainDotProductCalc;
