// import React from "react";
// import { Container, Typography } from "@mui/material";
// import InfoPolyEqRootFinder from "./InfoPolyEqRootFinder";

// function MainPolyEqRootFinder() {
//   return (
//     <Container
//       maxWidth="lg"
//       sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
//     >
//       <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
//         Polynomial Equation Root Finder <InfoPolyEqRootFinder />
//       </Typography>
//       <hr />
//       <br />
//     </Container>
//   );
// }

// export default MainPolyEqRootFinder;

import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import InfoPolyEqRootFinder from "./InfoPolyEqRootFinder";

const nerdamer = require("nerdamer/all.min");

function PolyEqRootFinder() {
  const [expression, setExpression] = useState("");
  const [variable, setVariable] = useState("");
  const [coefficients, setCoefficients] = useState("");

  const findCoefficients = () => {
    try {
      const result = nerdamer(`roots(${expression})`);
      setCoefficients(result.toString());
    } catch (error) {
      console.error("Error while finding coefficients:", error);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Polynomial Equation Root Finder <InfoPolyEqRootFinder />
      </Typography>
      <hr />
      <br />
      <TextField
        label="Polynomial Expression"
        variant="outlined"
        fullWidth
        margin="normal"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={findCoefficients}>
        Find Coefficients
      </Button>
      <Typography variant="h6" Wrap sx={{ marginTop: 2 }}>
        Roots : {coefficients}
      </Typography>
    </Container>
  );
}

export default PolyEqRootFinder;
