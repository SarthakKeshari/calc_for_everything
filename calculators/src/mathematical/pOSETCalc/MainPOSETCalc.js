import React, { useState } from "react";
import { Container, Typography, TextField, Button, Paper } from "@mui/material";

function MainPOSETCalc() {
  const [inputPairs, setInputPairs] = useState("");
  const [inputSet, setInputSet] = useState("");
  const [result, setResult] = useState("");

  const checkPOSET = () => {
    const pairs = inputPairs
      .split("\n")
      .map((pair) => pair.trim().split(","))
      .map((pair) => [pair[0].trim(), pair[1].trim()]);

    const setA = inputSet.split(",").map((element) => element.trim());
    const relations = new Set(pairs.map(([x, y]) => `${x},${y}`)); //this is to ensure that the pairs are unique. We need to convert the constituent pairs(which are essentially arrays) to strings as arrays consisting of the same values aren't considered to be equal/unique.
    let isReflexive = true;
    let isAntisymmetric = true;
    let isTransitive = true;

    for (const element of setA) {
      // Check reflexivity
      if (!relations.has(`${element},${element}`)) {
        isReflexive = false;
        break;
      }
    }

    for (const [x, y] of pairs) {
      if (!setA.includes(x) || !setA.includes(y)) {
        setResult("Some elements in the pairs are not in set A.");
        return;
      }

      // Antisymmetry
      if (x !== y) {
        if (relations.has(`${x},${y}`) && relations.has(`${y},${x}`)) {
          isAntisymmetric = false;
        }
      }

      // Transitivity
      for (const z of setA) {
        if (
          relations.has(`${x},${y}`) &&
          relations.has(`${y},${z}`) &&
          !relations.has(`${x},${z}`)
        ) {
          isTransitive = false;
        }
      }
    }

    if (isReflexive && isAntisymmetric && isTransitive) {
      setResult("It is a POSET.");
      return;
    }

    let resultMessage = "It is not a POSET.";

    if (!isReflexive) {
      resultMessage += " It is not reflexive.";
    }
    if (!isAntisymmetric) {
      resultMessage += " It is not antisymmetric.";
    }
    if (!isTransitive) {
      resultMessage += " It is not transitive.";
    }

    setResult(resultMessage);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 2 }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        POSET Calculator
      </Typography>
      <hr />
      <br />

      <TextField
        label="Enter set A (comma-separated)"
        variant="outlined"
        fullWidth
        value={inputSet}
        onChange={(e) => setInputSet(e.target.value)}
      />

      <br />
      <br />

      <TextField
        multiline
        label="Enter pairs"
        variant="outlined"
        fullWidth
        value={inputPairs}
        onChange={(e) => setInputPairs(e.target.value)}
      />

      <br />
      <br />

      <Button variant="contained" color="primary" onClick={checkPOSET}>
        Calculate
      </Button>

      <Paper sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6">Result:</Typography>
        {result && <Typography>{result}</Typography>}
      </Paper>
    </Container>
  );
}

export default MainPOSETCalc;
