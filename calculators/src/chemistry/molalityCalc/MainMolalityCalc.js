import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function MainMolalityCalc() {
  const [moles, setMoles] = useState("");
  const [massOfSolvent, setMassOfSolvent] = useState("");
  const [molality, setMolality] = useState("");
  //   const [outputMessage, setOutputMessage] = useState("Molality: ");
  const [result, setResult] = useState("Molality: ");

  const calculateMolality = () => {
    if (moles !== "" && massOfSolvent !== "") {
      const molesValue = parseFloat(moles);
      const massOfSolventValue = parseFloat(massOfSolvent);

      if (
        !isNaN(molesValue) &&
        !isNaN(massOfSolventValue) &&
        massOfSolventValue > 0
      ) {
        const molalityValue = molesValue / massOfSolventValue;
        setResult("Molality: ");
        setMolality(molalityValue.toFixed(2));
      } else {
        setMolality("Invalid input");
        setResult("Invalid input");
      }
    } else if (moles !== "" && molality !== "") {
      const molesValue = parseFloat(moles);
      const molalityValue = parseFloat(molality);

      if (!isNaN(molesValue) && !isNaN(molalityValue) && molalityValue >= 0) {
        const massOfSolventValue = (molesValue / molalityValue) * 1000; // Convert mass to kgs
        setMassOfSolvent(massOfSolventValue.toFixed(2));
        setResult("Mass of solvent(in kgs): ");
      } else {
        setMassOfSolvent("Invalid input");
        setResult("Invalid input");
      }
    } else if (massOfSolvent !== "" && molality !== "") {
      const massOfSolventValue = parseFloat(massOfSolvent);
      const molalityValue = parseFloat(molality);

      if (
        !isNaN(massOfSolventValue) &&
        !isNaN(molalityValue) &&
        massOfSolventValue > 0 &&
        molalityValue >= 0
      ) {
        const molesValue = (massOfSolventValue / 1000) * molalityValue;
        setMoles(molesValue.toFixed(2));
        setResult("No. of moles: ");
      } else {
        setMoles("Invalid input");
        setResult("Invalid input");
      }
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 2 }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Molality Calculator
      </Typography>
      <hr />
      <br />

      <TextField
        label="Number of moles"
        variant="outlined"
        fullWidth
        value={moles}
        onChange={(e) => setMoles(e.target.value)}
      />

      <Box sx={{ marginY: 2 }}>
        <TextField
          label="Mass of solvent (in kgs or multiples/sub-multiples)"
          variant="outlined"
          fullWidth
          value={massOfSolvent}
          onChange={(e) => setMassOfSolvent(e.target.value)}
        />
      </Box>

      <TextField
        label="Molality"
        variant="outlined"
        fullWidth
        value={molality}
        onChange={(e) => setMolality(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={calculateMolality}
        sx={{ marginTop: 2 }}
      >
        Calculate
      </Button>

      <Paper sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6">{result}</Typography>
        <Typography>{molality}</Typography>
      </Paper>

      <Link component={RouterLink} to="/molescalc" sx={{ marginTop: 2 }}>
        Go to Moles calculator
      </Link>
    </Container>
  );
}

export default MainMolalityCalc;
