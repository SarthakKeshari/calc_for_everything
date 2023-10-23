import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";

function MainDNARNAConverter() {
  const [dnaSequence, setDnaSequence] = useState("");
  const [rnaSequence, setRnaSequence] = useState("");

  const convertDnaToRna = () => {
    const dna = dnaSequence.toUpperCase();
    let rna = "";

    for (let i = 0; i < dna.length; i++) {
      const nucleotide = dna[i];
      switch (nucleotide) {
        case "A":
          rna += "U";
          break;
        case "T":
          rna += "A";
          break;
        case "G":
          rna += "C";
          break;
        case "C":
          rna += "G";
          break;
        default:
          rna += nucleotide;
      }
    }

    setRnaSequence(rna);
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
      {/* Write your code here */}

      <TextField
        label="Enter DNA Sequence"
        variant="outlined"
        fullWidth
        value={dnaSequence}
        onChange={(e) => setDnaSequence(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={convertDnaToRna}>
        Convert
      </Button>
      <TextField
        label="Resulting RNA Sequence"
        variant="outlined"
        fullWidth
        value={rnaSequence}
        disabled
      />

      {/* End your code here */}
    </Container>
  );
}

export default MainDNARNAConverter;
