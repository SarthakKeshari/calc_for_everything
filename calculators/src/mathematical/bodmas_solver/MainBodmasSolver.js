import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import CopyValue from "../../components/CopyValue";
import InfoBodmasSolver from './InfoBodmasSolver';

function MainBodmasSolver() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setErr(false);
      setOutput("");
    }
    setInput(e.target.value);
  };
  const estimateValue = () => {
    try {
      setErr(false);
      const a = input.replaceAll("^", "**");
      const x = a.replaceAll(" ", "");
      const y = eval(x);
      if (isNaN(y) || !isFinite(y)) throw new Error("invalid Input");
      setOutput(y);
    } catch (e) {
      setErr(true);
      setOutput("");
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        BODMAS Solver
        <InfoBodmasSolver /> 
      </Typography>
      <br />
      <TextField
        error={err}
        id="outlined-error"
        label="Enter BODMAS equation"
        variant="outlined"
        sx={{ width: "100%" }}
        value={input}
        onChange={handleChange}
        placeholder="use only ()^/*+- and numbers"
        helperText={`${err? "Invalid Input": ""}`}
      />
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="outline"
            label="Output"
            variant="outlined"
            value={output}
            inputProps={{ readOnly: true }}
            sx={{ marginRight: "10px" }}
          />
          <CopyValue value={output} />
        </Box>
        <Button
          variant="contained"
          sx={{ maxWidth: "min-content" }}
          onClick={estimateValue}
        >
          Estimate
        </Button>
      </Box>
    </Container>
  );
}

export default MainBodmasSolver;