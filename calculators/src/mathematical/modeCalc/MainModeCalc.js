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
  IconButton,
} from "@mui/material";

function MainModeCalc() {
  const [rows, setRows] = useState([
    { interval: "", frequency: "", cumulativeFrequency: "" },
  ]);
  const [mode, setMode] = useState(null);

  const handleCalculateMode = () => {
    if (rows.some((row) => row.interval === "" || row.frequency === "")) {
      return alert("Please fill in all rows with valid data.");
    }

    const data = rows
      .map(
        (row) =>
          `${row.interval} | ${row.frequency} | ${row.cumulativeFrequency}`
      )
      .join("\n");

    const parsedData = data
      .split("\n")
      .map((row) => row.split("|").map((entry) => entry.trim()));

    if (parsedData.some((row) => row.length < 2)) {
      return alert(
        "Data should be entered in the correct format: Interval | Frequency | Cumulative Frequency (optional)."
      );
    }

    const frequencies = parsedData.map((row) => parseInt(row[1]));

    let maxValue = 0;
    let modeValue = "No mode";
    for (let i = 0; i < frequencies.length; i++) {
      if (frequencies[i] > maxValue) {
        maxValue = frequencies[i];
        modeValue = parsedData[i][0];
      }
    }

    setMode(modeValue);
  };

  const addRow = () => {
    setRows([
      ...rows,
      { interval: "", frequency: "", cumulativeFrequency: "" },
    ]);
  };

  const deleteRow = () => {
    if (rows.length > 1) {
      const updatedRows = [...rows];
      updatedRows.pop();
      setRows(updatedRows);
    }
  };

  const handleRowChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    // If the field being changed is 'frequency', update cumulative frequency
    if (field === "frequency") {
      let cumulativeFrequency = 0;
      for (let i = 0; i <= index; i++) {
        if (updatedRows[i].frequency !== "") {
          cumulativeFrequency += parseInt(updatedRows[i].frequency);
        }
        updatedRows[i].cumulativeFrequency = cumulativeFrequency;
      }
    }

    setRows(updatedRows);
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
        To enter data, fill in the table. You can add more rows as needed.
      </Typography>

      <TableContainer component={Paper} style={{ marginBottom: "1rem" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Interval</TableCell>
              <TableCell>Frequency</TableCell>
              <TableCell>Cumulative Frequency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={index % 2 === 0 ? { bgcolor: "#f2f2f2" } : {}}
              >
                <TableCell>
                  <TextField
                    value={row.interval}
                    onChange={(e) =>
                      handleRowChange(index, "interval", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.frequency}
                    onChange={(e) =>
                      handleRowChange(index, "frequency", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.cumulativeFrequency}
                    onChange={(e) =>
                      handleRowChange(
                        index,
                        "cumulativeFrequency",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <IconButton color="primary" size="small" onClick={addRow}>
        Add Row
      </IconButton>

      <IconButton
        color="danger"
        size="small"
        style={{ marginLeft: "1rem" }}
        onClick={deleteRow}
      >
        Delete Last Row
      </IconButton>

      <br />
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
