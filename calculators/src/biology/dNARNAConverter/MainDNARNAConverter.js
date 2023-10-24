import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

function MainDNARNAConverter() {
  const [sequence, setSequence] = useState("");
  const [convertedSequence, setConvertedSequence] = useState("");
  const [mode, setMode] = useState("dnaToRna");

  const convertSequence = () => {
    let converted = "";
    const inputSequence = sequence.toUpperCase();

    if (mode === "dnaToRna") {
      for (let i = 0; i < inputSequence.length; i++) {
        const nucleotide = inputSequence[i];
        switch (nucleotide) {
          case "A":
            converted += "U";
            break;
          case "T":
            converted += "A";
            break;
          case "G":
            converted += "C";
            break;
          case "C":
            converted += "G";
            break;
          default:
            converted += nucleotide;
        }
      }
    } else if (mode === "rnaToDna") {
      for (let i = 0; i < inputSequence.length; i++) {
        const nucleotide = inputSequence[i];
        switch (nucleotide) {
          case "A":
            converted += "T";
            break;
          case "U":
            converted += "A";
            break;
          case "G":
            converted += "C";
            break;
          case "C":
            converted += "G";
            break;
          default:
            converted += nucleotide;
        }
      }
    }

    setConvertedSequence(converted);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        DNA - RNA Converter
      </Typography>
      <hr />
      <br />

      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={(event, newMode) => setMode(newMode)}
        aria-label="conversion mode"
      >
        <ToggleButton value="dnaToRna">DNA to RNA</ToggleButton>
        <ToggleButton value="rnaToDna">RNA to DNA</ToggleButton>
      </ToggleButtonGroup>

      <TextField
        label={`Enter ${mode === "dnaToRna" ? "DNA" : "RNA"} Sequence`}
        variant="outlined"
        fullWidth
        value={sequence}
        onChange={(e) => setSequence(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={convertSequence}>
        Convert
      </Button>
      <br />

      <TextField
        label={`Resulting ${mode === "dnaToRna" ? "RNA" : "DNA"} Sequence`}
        variant="outlined"
        fullWidth
        value={convertedSequence}
        disabled
        sx={{ fontWeight: convertedSequence ? "bold" : "normal" }}
      />
    </Container>
  );
}

export default MainDNARNAConverter;
