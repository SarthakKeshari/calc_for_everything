import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TextField,
  Button,
} from "@mui/material";

function MainModeCalc() {
  const [data, setData] = useState("");
  const [mode, setMode] = useState(null);

  const handleCalculateMode = () => {
    // Parse the data and calculate the mode
    if (data === "") {
      return alert(
        "Please enter the grouped data and their respective frequencies in the format: Interval | Frequency"
      );
    }

    const rows = data
      .split("\n")
      .map((row) => row.split("|").map((entry) => entry.trim()));
    const frequencies = rows.map((row) => parseInt(row[1]));

    // Find the mode
    let maxValue = 0;
    let modeValue = 0;
    for (let i = 0; i < frequencies.length; i++) {
      if (frequencies[i] > maxValue) {
        maxValue = frequencies[i];
        modeValue = rows[i][0];
      }
    }

    setMode(modeValue);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Mode Calculator
      </Typography>
      <hr />
      <br />

      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        To enter data, use the format: Interval | Frequency. Separate each entry
        with a new line.
      </Typography>

      <TextField
        label="Enter data"
        variant="outlined"
        fullWidth
        value={data}
        onChange={(e) => setData(e.target.value)}
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        style={{ marginBottom: "1rem" }}
        multiline
        rows={6}
      />

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "1rem", marginBottom: "1rem" }}
        onClick={handleCalculateMode}
      >
        Calculate Mode
      </Button>

      {mode !== null && (
        <div>
          <Typography variant="h6">Calculated Mode:</Typography>
          <Typography variant="body1">{mode}</Typography>
        </div>
      )}
    </Container>
  );
}

export default MainModeCalc;
