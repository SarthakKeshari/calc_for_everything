import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";

const nerdamer = require("nerdamer/all.min");

function CrossProductCalculator() {
  const [vector1, setVector1] = useState("");
  const [vector2, setVector2] = useState("");
  const [result, setResult] = useState(null);

  const calculateCrossProduct = () => {
    const v1 = vector1.split(",").map(Number);
    const v2 = vector2.split(",").map(Number);

    if (v1.length !== v2.length) {
      alert("Vectors must have the same number of components");
    } else {
      const crossProduct = nerdamer(
        `cross([${vector1}], [${vector2}])`
      ).evaluate();
      setResult(crossProduct.toString());
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
          onClick={calculateCrossProduct}
        >
          Calculate Cross Product
        </Button>
      </Grid>
      {result !== null && (
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6">Cross Product Result:</Typography>
            <Typography variant="body1">{result}</Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

function MainCrossProductCalc() {
  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Cross Product Calculator
      </Typography>
      <hr />
      <br />
      <div>
        The vector product or cross product of two vectors A and B is denoted by
        A × B, and its resultant vector is perpendicular to the vectors A and B.
        The cross product is mostly used to determine the vector, which is
        perpendicular to the plane surface spanned by two vectors, whereas the
        dot product is used to find the angle between two vectors or the length
        of the vector. The cross product of two vectors, say A × B, is equal to
        another vector at right angles to both, and it happens in the three
        dimensions.
        <br />
        The result will be an array and will corespond to values : [i,j,k]. If
        answer is `1,2,3` then result == 1i 2j 3k
      </div>
      <br />
      <div>
        <div>
          Example:{" "}
          {"{a, b, c} & {x, y, z} = (bz – cy)i + (cx – az)j + (ay – bx)k"}
        </div>
      </div>

      <CrossProductCalculator />
    </Container>
  );
}

export default MainCrossProductCalc;
